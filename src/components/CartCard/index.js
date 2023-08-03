import Image from 'next/image';
import { setCookie } from 'cookies-next';
import { GetColorName } from 'hex-color-to-color-name';

export default function CartCard({ product, setCart }) {
  const [variantId, productInfo] = product;

  const handleRemoveFromCart = () => {
    setCart(prevCart => {
      const newCart = Object.assign(
        {},
        ...Object.keys(prevCart)
          .filter(key => key !== variantId)
          .map(key => ({ [key]: prevCart[key] })),
      );
      setCookie('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const isColor = value => {
    const hexRegex = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexRegex.test(value);
  };

  const isSize = value => {
    return SIZES.includes(value.toLowerCase());
  };

  return (
    <div className="flex w-full border-y border-light-gray px-3 py-4 sm:p-8">
      <div className="flex h-44 w-full">
        <Image
          className="mr-3 h-full w-44 object-cover sm:mr-8"
          src={productInfo.image.originalSrc}
          alt={productInfo.image.altText}
          height={100}
          width={100}
        />
        <div className="flex h-full w-full flex-col">
          <button
            className="h-fit w-full cursor-pointer text-end text-sm leading-3 tracking-widest text-link"
            onClick={handleRemoveFromCart}
          >
            REMOVE
          </button>
          <div className="mt-4 flex flex-col justify-evenly sm:mt-[50px]">
            <p className="text-[#000]">{productInfo.title}</p>
            <div className="mt-2 flex space-x-2 text-xs text-gray-40 sm:space-x-3">
              {productInfo.selectedOptions.map((option, i) => (
                <>
                  <p key={i}>
                    {isColor(option.value)
                      ? GetColorName(option.value)
                      : isSize(option.value)
                      ? option.value.toUpperCase()
                      : option.value}
                  </p>
                  <Image
                    className={`ml-2 h-3 w-3 ${
                      i === productInfo.selectedOptions.length - 1
                        ? 'hidden'
                        : 'block'
                    }`}
                    src="/stars_no_outline_gray.png"
                    alt="star"
                    width={12}
                    height={12}
                  />
                </>
              ))}
            </div>
          </div>
          <div className="mt-auto flex w-full justify-between text-xs text-[#000]">
            <p>{`QTY: ${productInfo.quantity}`}</p>
            <p>{`${productInfo.price.amount} ${productInfo.price.currencyCode}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const SIZES = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
