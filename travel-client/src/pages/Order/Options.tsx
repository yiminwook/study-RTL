import ErrorBanner from "@/components/ErrorBanner";
import axios from "axios";
import { useEffect, useState } from "react";

interface OptionType {
  name: string;
}

interface OptionsProps {}

const Options = ({}: OptionsProps) => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [showError, setShowError] = useState(false);
  const loadOption = async () => {
    try {
      const response = await axios.get<OptionType[]>(
        "http://localhost:5000/options"
      );
      setOptions(() => response.data);
    } catch (error) {
      console.error(error);
      setShowError(() => true);
    }
  };

  useEffect(() => {
    loadOption();
  }, []);

  return (
    <section style={{ display: "flex", marginTop: 20 }}>
      <div style={{ width: "50%" }}>
        {!showError ? (
          <ul>
            {options.map((option) => (
              <li key={`${option.name}-list`}>
                <Option {...option} />
              </li>
            ))}
          </ul>
        ) : (
          <ErrorBanner message="에러가 발생했습니다." />
        )}
      </div>
      <div style={{ width: "50%" }}>
        <h2>Total Price:</h2>
        <br />
        <button>주문</button>
      </div>
    </section>
  );
};

export default Options;

interface OptionProps {
  name: string;
}

const Option = ({ name }: OptionProps) => {
  return (
    <form>
      <label htmlFor={`${name}-option`}></label>{" "}
      <input type="checkbox" name={`${name}-option`} />
    </form>
  );
};
