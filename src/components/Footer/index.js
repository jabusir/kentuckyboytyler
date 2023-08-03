import Image from "next/image";
import Link from "next/link";

import { useScreenWidth } from "@/hooks/useScreenWidth";

import NewsletterForm from "../NewsletterForm";
import { useRouter } from "next/router";

export default function Footer({ className, ...props }) {
  const year = new Date().getFullYear();
  const screenWidth = useScreenWidth();
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  const InstagramLogo = () => (
    <Link
      href="https://instagram.com/kentuckyboytyler"
      target="_blank"
      className="z-10"
    >
      <Image src="/insta_black.png" alt="instagram" width={25} height={25} />
    </Link>
  );

  const mobileJSX = (
    <footer
      className={`absolute top-full left-0 z-50 flex w-full flex-col items-center
    border-t border-light-gray bg-white pt-7 pb-6 text-xs sm:flex-row ${
      className ?? ""
    }`}
      {...props}
    >
      <div className="flex h-full w-full flex-col items-center text-[13.33px] leading-4 tracking-wider text-gray">
        <InstagramLogo />
        <Link href="/#" className="mt-7">
          Privacy Policy
        </Link>
        <Link href="/#" className="mt-3">
          Terms of Services
        </Link>
        <Link href="/#" className="mt-3">
          Customer Care
        </Link>
        <Link href="/#" replace className="mt-3">
          Contact
        </Link>
      </div>
      <div className="mt-7 flex h-full w-full flex-col items-center justify-evenly border-t border-light-gray">
        <NewsletterForm className="mt-3 w-full px-6 text-center" />
        <div
          className="mt-8 flex w-full justify-center border-t border-light-gray pt-6
         text-[9px] font-extrabold leading-3 tracking-widest text-medium-gray"
        >
          &copy; {year} KENTUCKY BOY TYLER
        </div>
      </div>
    </footer>
  );

  const desktopJSX = (
    <footer
      className={`bottom-0 z-50 flex w-full flex-col items-center border-t
       border-light-gray bg-white px-12 text-xs sm:flex-row sm:pt-4 
       ${className ?? ""}
       ${isHomePage ? "absolute" : "relative"}`}
      {...props}
    >
      <div className="flex w-full flex-col justify-between sm:flex-row">
        <div className="flex space-x-4 text-[12px] leading-4 text-gray">
          <NewsletterForm />
          <Link href="/#" className="h-fit cursor-pointer tracking-[0.08em]">
            Privacy Policy
          </Link>
          <Link href="/#" className="h-fit cursor-pointer tracking-[0.08em]">
            Terms of Service
          </Link>
          <Link href="/#" className="h-fit cursor-pointer tracking-[0.08em]">
            Customer Care
          </Link>
          <Link href="/#" className="h-fit cursor-pointer tracking-[0.08em]">
            Contact
          </Link>
        </div>
        <div className="flex flex-col items-end">
          <InstagramLogo />
          <div className="mt-5 mb-6 flex justify-end text-right font-extrabold tracking-widest text-medium-gray md:w-36">
            &copy; {year} KENTUCKY BOY TYLER
          </div>
        </div>
      </div>
    </footer>
  );

  return screenWidth < 640 ? mobileJSX : desktopJSX;
}
