import ErrorBanner from "@/components/ErrorBanner";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export interface ItemType {
  name: string;
  imagePath: string;
}

const Items = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [showError, setShowError] = useState(false);

  const loadItems = async () => {
    try {
      const response = await axios.get<ItemType[]>(
        `http://localhost:5000/products`
      );
      setItems(() => response.data);
    } catch (error) {
      console.error(error);
      setShowError(() => true);
    }
  };

  useEffect(() => {
    loadItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {!showError ? (
        items.map((item) => (
          <ProductItem key={`${item.name} product`} {...item} />
        ))
      ) : (
        <ErrorBanner message="에러가 발생했습니다." />
      )}
    </section>
  );
};

export default Items;