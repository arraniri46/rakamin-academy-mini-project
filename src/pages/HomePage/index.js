import Layout from "../../components/Layout";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";

const HomePage = () => {
  const URL = `https://dummyjson.com/products?limit=10`;

  const { data, isLoading, isError } = useFetch(URL);

  if (isError)
    return (
      <Layout>
        <p>Ooops...Something went wrong. Try again</p>
      </Layout>
    );

  if (data === null || isLoading)
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  else
    return (
      <>
        <Layout title="Homepage - Learning React">
          <div className="px-4 pt-4">
            <p>Showing products...</p>
          </div>
          {data.products && (
            <div>
              {data.products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </Layout>
      </>
    );
};

export default HomePage;
