import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import productApi from "./api/productApi";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {
          _limit: 10,
        };
        const productList = await productApi.getAll(params);
        console.log(productList);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="App">
      <p>API</p>
    </div>
  );
}

export default App;
