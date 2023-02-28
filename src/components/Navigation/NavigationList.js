import { Link } from "react-router-dom";

const NavigationList = () => {
  return (
    <>
      <div>
        <ul className="flex flex-col gap-y-4">
          <li className="hover:underline hover:text-gray-700 border-b border-amber-600">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="hover:underline hover:text-gray-700 border-b border-amber-600">
            <Link to={`/about`}>About</Link>
          </li>
          <li className="hover:underline hover:text-gray-700 border-b border-amber-600">
            <Link to={`/contact`}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigationList;
