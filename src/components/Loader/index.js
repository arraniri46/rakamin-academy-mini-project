const Loader = () => {
  return (
    <>
      {[1, 2, 3].map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-full justify-center p-4 gap-y-2 border shadow-md animate-pulse text-transparent"
        >
          {/* <p>Loading...</p> */}
          <div className="w-full h-60 bg-slate-500 mb-2 rounded">.</div>
          <p className="w-64 bg-slate-500 mb-2 rounded">.</p>
          <p className="w-36 bg-slate-500 rounded">.</p>
        </div>
      ))}
    </>
  );
};

export default Loader;
