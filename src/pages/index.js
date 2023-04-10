import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Slider from "@/Components/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Slider />
      <section>
        <div className="container">
          <div className=" grid grid-cols-2 flex md:relative mb-[200px] ">
            <div className=" sm:col-span-2 md:col-span-1 bg-[#fff] Bshedow w-[700px] mt-[150px] py-[35px] px-[15px]   md:z-[100] ">
              <div className=" grid grid-cols-6 flex ">
                <div className=" col-span-2">
                  <h1 className="text-[#000] text-[32px] font-bold ">
                    About Us
                  </h1>
                  <h2 className="text-[#777] text-[32px] font-bold ">
                    We create unique experiences
                  </h2>
                </div>
                <div className="col-span-4 ">
                  <p className="text-[#777] leading-7 tracking-normal">
                    We create unique experiences Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMak.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2 md:col-span-1 z-[]">
              <img
                src="https://agency.dexignzone.com/react/demo/static/media/pic4.39ce4c00.jpg"
                className="h-auto w-[550px] md:w-[300px] lg:w-[500px] rounded-lg   box-border lg:absolute left-[580px] top-[100px]"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
