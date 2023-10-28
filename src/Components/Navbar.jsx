import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const { width } = screen;
  const [expand, setExpand] = useState(false);
  console.log(screen.width);
  if (width < 640) {
    if (expand) {
      return (
        <nav className="bg-sky-900 h-max w-full text-white flex flex-col justify-between align-middle ">
          <div className="flex justify-between align-middle py-2">
            <h1 className="text-3xl ml-4">BedLinen</h1>
            <GiHamburgerMenu
              className="mx-4 my-2"
              onClick={() => {
                setExpand(!expand);
              }}
            />
          </div>

          <ul className="flex flex-row  [&>li]:px-2 last:pr-0 text-center [&>li]:leading-[200%] my-2">
            <li className="hover:bg-blue-700">
              <a href="#AboutUs">About Us</a>
            </li>
            <li className="hover:bg-blue-700">
              <a href="#Products">Products</a>
            </li>
            <li className="hover:bg-blue-700">
              <a href="#ContactUs">Contact Us</a>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="bg-sky-900 h-max w-full text-white flex flex-col justify-between align-middle ">
          <div className="flex justify-between align-middle py-2">
            <h1 className="text-3xl ml-4">BedLinen</h1>
            <GiHamburgerMenu
              className="mx-4 my-2"
              onClick={() => {
                setExpand(!expand);
              }}
            />
          </div>
        </nav>
      );
    }
  } else {
    return (
      <nav className="bg-sky-900 h-max w-full text-white flex justify-between align-middle ">
        <div className="max-sm:flex">
          <h1 className="text-3xl ml-4 my-2">BedLinen</h1>
        </div>

        <ul className="flex flex-row  [&>li]:px-2 last:pr-0 text-center [&>li]:leading-[200%] my-2">
          <li className="hover:bg-blue-700">
            <a href="#AboutUs">About Us</a>
          </li>
          <li className="hover:bg-blue-700">
            <a href="#Products">Products</a>
          </li>
          <li className="hover:bg-blue-700">
            <a href="#ContactUs">Contact Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
