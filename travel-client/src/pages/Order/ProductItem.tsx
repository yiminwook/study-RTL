import { ItemType } from "@/pages/Order/Items";

interface ProductItemProps extends ItemType {}

const ProductItem = ({ name, imagePath }: ProductItemProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
        style={{ width: "75%" }}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "center" }} htmlFor="quantity">
          {name}
        </label>
        <input
          style={{ marginLeft: 7 }}
          type="number"
          min={0}
          name="quantity"
          defaultValue={0}
        />
      </form>
    </div>
  );
};

export default ProductItem;
