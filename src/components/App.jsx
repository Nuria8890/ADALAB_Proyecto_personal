import "../styles/App.scss";
// import callToApi from "../services/api";
import localStorage from "../services/localStorage";
import { useState } from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import Form from "./Form";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";

function App() {
  // Estados

  const [product, setProduct] = useState("");
  const [productsList, setProductsList] = useState(
    localStorage.get("productsList", [])
  );

  const [supermarket, setSupermarket] = useState("");
  const [supermarketsList, setSupermarketsList] = useState(
    localStorage.get("supermarketsList", [])
  );
  // Funciones
  const filteredProducts = productsList.filter((item) => {
    return item.toLowerCase().includes(product.toLowerCase());
  });

  const filteredSupermarkets = supermarketsList.filter((item) => {
    return item.toLowerCase().includes(supermarket.toLowerCase());
  });

  // Eventos

  const changeInputProductValue = (value) => {
    setProduct(value);
  };

  const changeProductsList = (value) => {
    setProduct("");

    const productFind = productsList.find((item) => {
      return item.toLowerCase() === value.toLowerCase();
    });

    if (value !== "" && !productFind) {
      localStorage.set("productsList", [...productsList, value]);
      setProductsList([...productsList, value]);
    }
  };

  const clickDeleteProducts = (index) => {
    console.log("borro", index);
  };

  const changeInputSupermarketValue = (value) => {
    setSupermarket(value);
  };

  const changeSupermarketsList = (value) => {
    setSupermarket("");

    const supermarketFind = supermarketsList.find((item) => {
      return item.toLowerCase() === value.toLowerCase();
    });

    if (value !== "" && !supermarketFind) {
      localStorage.set("supermarketsList", [...supermarketsList, value]);
      setSupermarketsList([...supermarketsList, value]);
    }
  };

  return (
    <>
      <Header />
      <Landing
        onChangeInputProduct={changeInputProductValue}
        product={product}
        onChangeProductsList={changeProductsList}
        productsList={filteredProducts}
        onClickDeleteProducts={clickDeleteProducts}
        onChangeInputSupermarket={changeInputSupermarketValue}
        supermarket={supermarket}
        onChangeSupermarketsList={changeSupermarketsList}
        supermarketsList={filteredSupermarkets}
      />
      <Footer />
    </>
  );
}

export default App;
