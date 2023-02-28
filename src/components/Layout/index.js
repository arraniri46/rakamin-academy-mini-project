import { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <Header title={title} />
        <div className="my-14">{children}</div>
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
