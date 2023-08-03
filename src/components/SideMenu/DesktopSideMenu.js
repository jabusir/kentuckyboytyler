import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";

function DesktopSideMenu({ showMenu, setShowMenu, items = {} }) {
  const toggleMenu = () => setShowMenu(!showMenu);
  const router = useRouter();
  const isHomePage = router.pathname === "/" || router.pathname === "/contact";

  return (
    <>
      {/* Toggle Button & Desktop Menu Items */}
      <div
        className={`absolute flex items-center justify-between ${
          showMenu ? "left-1/2 z-[999] sm:left-0" : "z-50"
        }`}
      >
        <div
          className={`flex items-center ${
            showMenu
              ? "fixed z-[999] -translate-x-1/2 sm:left-[150px]"
              : "relative left-[34px] z-50"
          }`}
        >
          <Image
            src="/cross.png"
            alt="*"
            className={`z-[999] mt-16 w-4 cursor-pointer ${
              showMenu || !isHomePage ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
            width={24}
            height={24}
          />
        </div>
      </div>
      {/* Menu Items */}
      <div
        className={`fixed top-0 left-0 z-[100] flex h-screen w-full flex-col items-start border-r 
        border-light-gray bg-white px-6 pt-24 text-black transition-all
        duration-300 sm:w-[300px] sm:drop-shadow-xl
        ${
          showMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <hr className="absolute left-0 top-[80px] z-50 h-px w-full bg-light-gray text-transparent" />
        {Object.values(items)?.map((item) =>
          item.title === "Archive" ? (
            <div
              className="mx-auto cursor-not-allowed py-2 sm:mx-0"
              key={item.id}
            >
              <div className="text-[#CCCCCC]">{item.title}</div>
            </div>
          ) : (
            <div className="mx-auto py-2 sm:mx-0" key={item.id}>
              <div className="text-black">{item.title}</div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default DesktopSideMenu;
