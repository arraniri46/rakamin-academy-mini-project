import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, description, thumbnail, price } = props.product;

  return (
    <>
      <div className="mb-4 p-4 border shadow-md" key={id}>
        <Link to={`product/${id}`}>
          <div
            style={{ backgroundImage: `url(${thumbnail})` }}
            className="w-full h-64 bg-cover"
          ></div>
          <div className="px-2 my-4">
            <p className="font-bold text-xl">{title}</p>
            <p className="font-semibold mt-2">
              {price.toLocaleString("US-us")} USD
            </p>
            <p className="font-medium text-sm mt-4">{description}</p>
          </div>
          <div className="px-4">
            <button className="w-full bg-amber-600 p-3 text-white">
              View Product
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
