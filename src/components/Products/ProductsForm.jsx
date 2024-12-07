import PropTypes from "prop-types";

function ProductsForm({ onChangeInput, product, onChangeProductsList }) {
  const handleChangeInput = (event) => {
    onChangeInput(event.target.value);
  };

  const handleClickButton = (event) => {
    event.preventDefault();
    onChangeProductsList(product);
  };

  return (
    <>
      <form action="">
        <label>
          <input
            type="text"
            name="products"
            value={product}
            placeholder="plátanos"
            onChange={handleChangeInput}
          />
        </label>
        <button type="submit" onClick={handleClickButton}>
          Añadir
        </button>
      </form>
    </>
  );
}

export default ProductsForm;

ProductsForm.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  product: PropTypes.string.isRequired,
  onChangeProductsList: PropTypes.func.isRequired,
};
