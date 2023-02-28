import Layout from "../../components/Layout";

const About = () => {
  return (
    <>
      <Layout title="About - Learning React">
        <div className="flex w-full flex-col justify-center items-center p-6">
          <p className="text-xl font-semibold">About</p>
          <p className="text-center">
            This project is mini task from internship program by Rakamin
            Academy.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default About;
