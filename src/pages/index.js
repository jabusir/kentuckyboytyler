import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Image
        src="/kbt.avif"
        alt="KENTUCKY BOY TYLER"
        width={1000}
        height={1000}
        className="w-96 mx-auto"
      />
      <Image
        src="/1.png"
        alt="---"
        width={1000}
        height={1000}
        className="w-96"
      />
      <Image
        src="/2.png"
        alt="---"
        width={1000}
        height={1000}
        className="w-96 ml-96"
      />
    </main>
  );
}
