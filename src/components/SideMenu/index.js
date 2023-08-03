import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import Cart from "../Cart";
import DesktopSideMenu from "./DesktopSideMenu";

export default function SideMenu({
  isSideMenuOpen,
  setIsSideMenuOpen,
  className,
  ...props
}) {
  const [collections, setCollections] = useState([
    { name: "Mules", title: "Mules" },
  ]);
  const router = useRouter();

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, [router.query]);

  const toggleIsOpen = () => setIsSideMenuOpen(!isSideMenuOpen);

  return (
    <>
      <nav
        className={`relative z-[999] flex w-full items-center justify-between ${
          className ?? ""
        }`}
        {...props}
      >
        <DesktopSideMenu
          showMenu={isSideMenuOpen}
          setShowMenu={toggleIsOpen}
          items={collections}
        />
        <Cart />
      </nav>
      <hr className="relative z-50 h-px w-full bg-light-gray text-transparent" />
    </>
  );
}
