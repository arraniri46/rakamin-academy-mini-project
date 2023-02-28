import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import NavigationList from "./NavigationList";

const Navigation = () => {
  const [isNavOpen, setIsOpenNav] = useState(false);

  const spring = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    reset: true,
    reverse: true,
  });

  return (
    <div>
      <div className="flex">
        <img
          src="./hamburger-menu.svg"
          alt="menu"
          className="w-10"
          onClick={() => setIsOpenNav(!isNavOpen)}
        />
      </div>
      {isNavOpen && (
        <div>
          <animated.nav
            style={spring}
            className="fixed right-0 top-14 w-3/5 h-full bg-gray-100 px-4 py-2"
          >
            <div className="p-6">
              <p className="font-semibold text-xl mb-3">Menu</p>
              <NavigationList />
            </div>
          </animated.nav>
          {/* masking */}
          <div
            className="fixed left-0 top-12 w-1/4 h-full"
            onClick={() => setIsOpenNav(false)}
          ></div>
          {/* end of masking */}
        </div>
      )}
    </div>
  );
};

export default Navigation;
