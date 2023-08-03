import { createContext, useState, useEffect, useContext } from "react";
import { getCookie } from "cookies-next";

const CartContext = createContext({
  cart: {},
  setCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    (async () => {
      const cartCookie = getCookie("cart");
      if (cartCookie) {
        const parsedCartCookie = JSON.parse(cartCookie);
        const payload = Object.keys(parsedCartCookie);
        const variantIds = payload.map(
          (id) => `gid://shopify/ProductVariant/${id}`
        );

        const validVariantsPayload = variantIds;
        const { nodes } = validVariantsPayload.body.data;
        const validVariantIds = nodes.map((node) => (node ? node.id : null));

        // Create a new object with only the keys that exist in validVariantIds
        const updatedCartCookie = Object.fromEntries(
          Object.entries(parsedCartCookie).filter(([key]) =>
            validVariantIds.includes(key)
          )
        );

        // Now updatedCartCookie will only contain the keys that exist in validVariantIds
        // Use updatedCartCookie as needed

        setCart(updatedCartCookie);
      }
    })();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export default CartContext;
