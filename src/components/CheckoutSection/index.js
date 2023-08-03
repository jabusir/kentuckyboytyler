import Link from 'next/link';
import CartContext from '@/contexts/CartContext';
import { useContext } from 'react';

export default function CheckoutSection({ cartString }) {
  const { cart } = useContext(CartContext);

  const totalValue = Object.values(cart).reduce((acc, curr) => {
    const itemValue = curr.price.amount * curr.quantity;
    return acc + itemValue;
  }, 0);

  const roundedTotal = (Math.round(totalValue * 100) / 100).toFixed(2);

  return (
    <div
      className="drop-shadow-top mt-auto w-full border-t border-light-gray
     px-3 pt-4 pb-8 sm:px-8 md:flex md:flex-col md:items-end"
    >
      <div className="z-50 flex w-full flex-col items-end">
        <p className="text-[22px] leading-6">{`Subtotal: ${roundedTotal} USD`}</p>
        <p className="mt-2 text-black">
          Taxes and shipping calculated at checkout
        </p>
      </div>
      <div className="mt-6 flex w-full justify-end text-white">
        <Link
          href={`${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}cart/${cartString}`}
          passHref
          className="flex w-full justify-end md:w-2/3"
        >
          <p className="mx-auto flex h-8 w-full items-center justify-center bg-gray py-6 text-center">
            Checkout
          </p>
        </Link>
      </div>
    </div>
  );
}
