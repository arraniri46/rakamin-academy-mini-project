import Navigation from "../Navigation";

const Header = () => {
  return (
    <>
      <div className="fixed flex text-whte justify-between items-center w-full h-14 border-gray-300 px-2 py-2 bg-amber-600 z-50">
        <div>
          <h2 className="text-lg font-bold text-white">Rakamin Mini Project</h2>
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default Header;
