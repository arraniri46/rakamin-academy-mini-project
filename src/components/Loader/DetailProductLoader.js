const DetailProductLoader = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center p-4 gap-y-2 border shadow-md animate-pulse text-transparent">
        {/* <p>Loading...</p> */}
        <p className="w-56 bg-slate-500 mb-2 rounded">breadcumb</p>
        <p className="w-52 bg-slate-500 mb-2 rounded">title</p>
        <div className="w-full h-60 bg-slate-500 mb-2 rounded">thumbnail</div>
        <p className="w-36 py-2 bg-slate-500 mb-2 rounded">price</p>
        <p className="w-36 bg-slate-500 mb-2 rounded">.</p>
        <p className="w-36 bg-slate-500 mb-2 rounded">.</p>
        <p className="w-72 bg-slate-500 mb-2 rounded">.</p>
        <p className="w-20 bg-slate-500 mb-2 rounded">.</p>
        <p className="w-full h-36 bg-slate-500 mb-2 rounded">.</p>
      </div>
    </>
  );
};

export default DetailProductLoader;
