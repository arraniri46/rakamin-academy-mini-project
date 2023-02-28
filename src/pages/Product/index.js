import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import DetailProductLoader from "../../components/Loader/DetailProductLoader";
import useFetch from "../../hooks/useFetch";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  if (isError)
    return (
      <Layout>
        <p>Ooops...Something went wrong. Try again</p>
      </Layout>
    );

  if (data === null || isLoading)
    return (
      <Layout>
        <DetailProductLoader />
      </Layout>
    );

  return (
    <>
      <Layout title={`${data.title} - Learning React`}>
        <div className="flex flex-col w-full p-4">
          <div className="flex">
            <Link to="/" className="mb-4 text-sm font-semibold underline">
              Home{" "}
            </Link>
            <p className="mb-4 text-sm font-light">
              &nbsp;{">"} Detail Product
            </p>
          </div>
          <p className="mb-2 text-2xl font-bold">{data.title}</p>
          <div className="">
            <img
              src={data.thumbnail}
              className="w-full h-64 mb-3"
              alt="thumbnail"
            />

            <div className="w-full p-3">
              <p className="text-lg font-bold">
                {data.price.toLocaleString("US-us")} USD
              </p>
              <div className="flex gap-x-2">
                <p className="text-sm">Discount: </p>
                <p className="font-semibold text-sm mb-4 text-green-500">
                  {data.discountPercentage}%
                </p>
              </div>
              <p className="font-medium text-sm mb-4">{data.description}</p>
              <p className="font-semibold">Brand:</p>
              <p className="font-light text-sm mb-3">{data.brand}</p>
              <p className="font-semibold">Pictures:</p>
              <div className="flex border p-2 gap-x-2 ">
                <img
                  src={data.images[1]}
                  className="w-1/2 h-32 object-cover shadow-md"
                  alt="image_1"
                />
                <img
                  src={data.images[2]}
                  className="w-1/2 h-32 object-cover shadow-md"
                  alt="image_2"
                />
              </div>
              <div className="flex border p-2 gap-x-2 ">
                <img
                  src={data.images[3]}
                  className="w-1/2 h-32 object-cover shadow-md"
                  alt="image_3"
                />
                <img
                  src={data.images[4]}
                  className="w-1/2 h-32 object-cover shadow-md"
                  alt="image_4"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Product;
