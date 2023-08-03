import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import CartCard from "@/components/CartCard";
import CheckoutSection from "@/components/CheckoutSection";
import CartContext from "@/contexts/CartContext";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const [cartString, setCartString] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const isHomePage = router.pathname === "/" || router.pathname === "/contact";
  const cartItemsQuantity = Object.keys(cart).length;
  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const payloadArray = Object.entries(cart).map(
      ([key, { quantity }]) => `${key}:${quantity}`
    );

    setCartString(payloadArray.join(","));
  }, [cart]);

  return (
    <>
      {/* Toggle Button & Desktop Menu Items */}
      <div className="absolute right-0 top-10 z-[99] flex items-center justify-between">
        <button
          className={`relative right-[12px] lg:right-[30px] z-50 flex items-center`}
          onClick={toggleMenu}
        >
          {/* Closed Menu Image */}
          <div className={`${showMenu ? "hidden" : "block"}`}>
            <Image
              src="/bag.png"
              alt="BAG"
              className={`z-50 w-6 cursor-pointer`}
              width={32}
              height={32}
            />
            {cartItemsQuantity ? (
              <div
                className="absolute top-[2px] right-0 -translate-y-1/2 translate-x-1/2
               rounded-sm bg-light-gray px-[2px] text-[9px] leading-3 text-black"
              >
                {cartItemsQuantity}
              </div>
            ) : null}
          </div>
          {/* Open Menu Image */}
          <Image
            src="/cross.png"
            alt="*"
            className={`fixed right-[38px] w-4 cursor-pointer ${
              showMenu ? "block" : "hidden"
            }`}
            width={24}
            height={24}
          />
        </button>
      </div>
      {/* Menu Items */}
      <div
        className={`fixed top-0 right-0 z-50 flex h-screen w-full flex-col items-start border-l
         border-light-gray bg-white pt-[36px] text-black backdrop-blur-xl
          transition-all duration-300 sm:w-[512px] sm:drop-shadow-xl ${
            showMenu
              ? "-translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
      >
        <p className={`mb-4 px-3 text-[28px] leading-8 sm:mb-3 `}>Your Cart</p>
        <div className="w-full overflow-y-auto">
          {cartItemsQuantity ? (
            Object.entries(cart).map((item, i) => (
              <CartCard key={i} product={item} setCart={setCart} />
            ))
          ) : (
            <p className="w-full border-t border-light-gray px-3 py-4 sm:p-8">
              Your cart is empty
            </p>
          )}
        </div>
        <CheckoutSection cartString={`${cartString}`} />
      </div>
    </>
  );
}
