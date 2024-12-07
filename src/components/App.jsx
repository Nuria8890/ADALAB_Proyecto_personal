import "../styles/App.scss";
// import callToApi from "../services/api";
// import localStorage from "../services/localStorage";
import { useState } from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import Form from "./Form";
import Landing from "./Landing";

function App() {
  // Estados

  const [product, setProduct] = useState("");
  const [productsList, setProductsList] = useState([]);

  // useEffect

  // useEffect(() => {
  //   callToApi().then((response) => {
  //     setVariable(response);
  //   });
  // }, [variable]);

  // useEffect(() => {
  //   localStorage.set("variable", variable);

  // Este useEffect solo se ejecutará cuando cambie la variable
  //   console.log("Ha cambiado la variable");
  // }, [variable]);

  // Eventos

  const changeInputValue = (value) => {
    setProduct(value);
  };

  return (
    <>
      <Landing onChangeInput={changeInputValue} product={product} />
    </>
  );
}

export default App;
