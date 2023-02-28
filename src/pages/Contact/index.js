import Layout from "../../components/Layout";

const Contact = () => {
  return (
    <>
      <Layout title="Contact - Learning React">
        <div className="flex flex-col items-center justify-center p-6">
          <p className="text-xl font-semibold mb-6">Contact</p>
          <div className="w-full px-12 flex flex-col gap-y-3">
            <input
              type="text"
              placeholder="ex: John Wick"
              className="p-2 border border-amber-600"
            />
            <input
              type="email"
              placeholder="ex: johnwick@gmail.com"
              className="p-2 border border-amber-600"
            />
            <textarea
              rows={8}
              placeholder="messages"
              className="p-2 border border-amber-600"
            ></textarea>
            <button className="w-full bg-amber-800 text-white p-2">Send</button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
