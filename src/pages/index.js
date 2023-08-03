import { useState } from "react";
import Image from "next/image";
import SideMenu from "@/components/SideMenu";
import Footer from "@/components/Footer";
import { useScreenWidth } from "@/hooks/useScreenWidth";

export default function Home() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [patches, setPatches] = useState([
    // { file: "2", position: [96, 12], height: 20, width: 20 },
    // { file: "3", position: [15, 25], height: 120, width: 70 },
    // { file: "4", position: [12, 22], height: 80, width: 60 },
    // { file: "5", position: [18, 28], height: 90, width: 40 },
    // { file: "6", position: [17, 27], height: 110, width: 55 },
    {
      file: "22",
      position: ["top-96 left-12 lg:top-[37rem]", "lg:left-24"],
      width: "w-12",
    },
    {
      file: "3",
      position: ["top-[32rem] left-8 lg:top-[17rem]", "lg:left-[40rem]"],
      width: "w-20 lg:w-32",
    },
    {
      file: "4",
      position: ["top-[35rem] left-80 lg:top-20", "lg:left-[100rem]"],
      width: "w-12 lg:w-16",
    },
    {
      file: "2",
      position: ["top-[37rem] left-40 lg:top-[37rem]", "lg:left-[75rem]"],
      width: "w-12 lg:w-16",
    },
    {
      file: "6",
      position: ["top-[40rem] left-64 lg:top-[25rem]", "lg:left-[90rem]"],
      width: "w-12 lg:w-16",
    },
    {
      file: "9",
      position: ["top-[42rem] left-10 lg:top-[37rem]", "lg:left-[100rem]"],
      width: "w-16 lg:w-24",
    },
    {
      file: "13",
      position: ["top-[47rem] left-36 lg:top-[40rem]", "lg:left-[60rem]"],
      width: "w-16 lg:w-24",
    },
    {
      file: "11",
      position: [
        "top-96 left-12 hidden lg:block lg:top-[20rem] lg:left-96",
        "lg:left-[70rem]",
      ],
      width: "w-12 lg:w-20",
    },
    {
      file: "15",
      position: [
        "top-96 left-12 hidden lg:block lg:top-[30rem]",
        "lg:left-[60rem]",
      ],
      width: "w-12",
    },
    {
      file: "37",
      position: [
        "top-96 left-12 hidden lg:block lg:top-[10rem]",
        "lg:left-[70rem]",
      ],
      width: "w-16 lg:w-32",
    },
    {
      file: "28",
      position: [
        "top-96 left-12 hidden lg:block lg:top-[15rem]",
        "lg:left-[65rem]",
      ],
      width: "w-16 lg:w-32",
    },
    // { file: "8", position: [19, 29], height: 70, width: 30 },
    // { file: "9", position: [16, 26], height: 85, width: 55 },
    // { file: "10", position: [11, 21], height: 120, width: 80 },
    // { file: "11", position: [13, 23], height: 95, width: 65 },
    // { file: "12", position: [14, 24], height: 105, width: 45 },
    // { file: "13", position: [20, 30], height: 110, width: 70 },
    // { file: "14", position: [16, 26], height: 75, width: 55 },
    // { file: "15", position: [17, 27], height: 95, width: 60 },
    // { file: "16", position: [12, 22], height: 80, width: 50 },
    // { file: "17", position: [19, 29], height: 100, width: 75 },
    // { file: "18", position: [15, 25], height: 90, width: 60 },
    // { file: "19", position: [10, 20], height: 70, width: 40 },
    // { file: "20", position: [11, 21], height: 80, width: 45 },
    // { file: "21", position: [13, 23], height: 85, width: 55 },
    // { file: "22", position: [16, 26], height: 90, width: 60 },
    // { file: "23", position: [12, 22], height: 95, width: 65 },
    // { file: "24", position: [18, 28], height: 110, width: 75 },
    // { file: "25", position: [14, 24], height: 100, width: 50 },
    // { file: "26", position: [15, 25], height: 75, width: 40 },
    // { file: "27", position: [19, 29], height: 80, width: 55 },
    // { file: "28", position: [17, 27], height: 120, width: 70 },
    // { file: "29", position: [20, 30], height: 85, width: 45 },
    // { file: "30", position: [13, 23], height: 90, width: 50 },
    // { file: "31", position: [12, 22], height: 100, width: 60 },
    // { file: "32", position: [16, 26], height: 95, width: 65 },
    // { file: "33", position: [11, 21], height: 110, width: 75 },
    // { file: "34", position: [15, 25], height: 120, width: 80 },
    // { file: "35", position: [19, 29], height: 80, width: 55 },
    // { file: "36", position: [14, 24], height: 85, width: 60 },
    // { file: "37", position: [17, 27], height: 100, width: 65 },
    // { file: "38", position: [12, 22], height: 95, width: 70 },
  ]);
  const screenWidth = useScreenWidth();
  return (
    <main className="">
      <Image
        src="/texture.jpg"
        alt="jeans"
        height={1000}
        width={1000}
        className="-z-[1000] fixed h-screen w-screen"
      />
      <SideMenu
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      <div className="absolute top-0 flex justify-center mx-auto w-full bg-white items-center h-24">
        <Image
          src="/kbt.avif"
          alt="KENTUCKY BOY TYLER"
          width={1000}
          height={1000}
          className={`mt-3 ${
            screenWidth < 900 ? "w-60" : "w-96"
          } mx-auto z-10 cursor-pointer`}
          onClick={() => setIsSideMenuOpen(false)}
        />
      </div>

      <div className="pt-28 pb-20 lg:pb-0">
        <Image
          src="/1.png"
          alt="---"
          width={1000}
          height={1000}
          className={` ml-4 ${
            screenWidth < 900 ? "w-64" : "w-96"
          } mx-auto z-10 cursor-pointer`}
          onClick={() => setIsSideMenuOpen(true)}
        />
        <Image
          src="/2.png"
          alt="---"
          width={1000}
          height={1000}
          className={` ${screenWidth < 900 ? "w-52 ml-36" : "w-96 ml-96"} z-10`}
        />
      </div>
      <div>
        {patches.map(({ file, position, width }, i) => {
          const styles = `${screenWidth < 900 ? "absolute" : "fixed"} ${
            position[0]
          } ${position[1]} ${width}`;
          return (
            <Image
              key={i}
              src={`/patches/${file}.png`}
              alt="patch"
              className={styles}
              height={100}
              width={100}
            />
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
