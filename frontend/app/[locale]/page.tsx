"use client";
import Image from "next/image";
import CardCarousel from "../components/carousel-cards";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FacultyCardParams } from "@/app/interfaces/Card/facultyCardParams.interface";
import VideoCarousel from "../components/carousel-video";

import GridCards from "../components/grid_cards";

import {
  facultyInfo,
  videoInfo,
  cards,
  universityCards,
} from "@/database/homepage";
import CustomAccordion from "../components/accordion";

interface CardCarouselParams {
  facultyInfo: FacultyCardParams[];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Section 1 */}
      <div className="flex justify-center items-center w-75%">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 items-center h-[34.5rem] w-full">
          {/* Left Side, can adjust paddings here*/}
          <div className="">
            <h1 className="font-normal text-[3.75rem] leading-none mb-[7rem]">
              E = MC
              <span className="super ml-2">²</span>
            </h1>
            <div className="bg-[--background-color-blue] mb-7 flex items-center justify-around py-[2.5rem] text-white w-[25rem]">
              <h2 className="text-2xl text-center">УСЛУГИ ЛАБОРАТОРИЙ</h2>
              <div className="w-[2rem] h-full">
                <Image
                  src="/carbon_arrow-right-white.svg"
                  alt="right arrow"
                  className="w-[50px]"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="bg-[--background-color-yellow] font-medium text-[1.25rem]   flex items-center justify-center text-white text-xl w-[25rem] py-2 px-1">
              +7 778 679 67 43 / science@kbtu.kz
            </div>
          </div>

          {/* Right Side */}
          <div>
            <VideoCarousel videoInfo={videoInfo} />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full">
        <div className="flex justify-between items-center gap-5 max-w-72 ml-32 mb-3">
          <h2 className="text-black text-2xl font-normal">О НАУКЕ В КБТУ</h2>
          <div className="relative flex justify-center items-center w-[2.75rem] h-[2.75rem]">
            <Image
              src="/svg/arrow-downward.svg"
              alt="arrow pointing downward"
              fill
            />
          </div>
        </div>

        <div className="flex justify-around items-center bg-[--background-color-blue] w-full h-[11.25rem] px-32 py-5 gap-5">
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            ОТКРЫТИЕ В СЕБЕ УЧЕНОГО!
          </button>
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            PhD ЗАЩИТА
          </button>
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            УЛУЧШЕНИЕ КАЧЕСТВА ЖИЗНИ!
          </button>
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            РЕШЕНИЕ ГЛОБАЛЬНЫХ ПРОБЛЕМ!
          </button>
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            ШАГ ВПЕРЕД!
          </button>
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            ЭТО НЕЧТО НОВОЕ!
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full mb-[5rem] mt-[4rem]">
        <div className="grid grid-cols-1 gap-5 max-w-[82%] mx-auto">
          <h1 className="text-[3rem] col-span-full mb-10 ">
            ВИДЫ ДЕЯТЕЛЬНОСТИ
          </h1>
          <div className="col-span-full">
            <GridCards cards={cards} />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <>
        <div className="bg-[--background-color-blue] flex flex-wrap mb-[2.5rem] items-center w-full h-[12.5rem] gap-[22.1rem] pl-[8rem]">
          <h1 className="text-[2.5rem] font-medium text-[#FFFFFF]">ПРОЕКТЫ</h1>
          <a href="#!">
            <Image
              src="/carbon_arrow-right-white.svg"
              alt="arrow pointing to right"
              width={40}
              height={10}
            />
          </a>
        </div>

        <CardCarousel facultyInfo={facultyInfo} />
      </>

      {/* Section 5 */}
      <div className="grid grid-cols-1 gap-7 mb-[4.375rem] mt-20 w-[83%]">
        <h1 className="font-medium text-[3rem]">ИНСТИТУТЫ</h1>
        <GridCards
          cards={universityCards}
          widthImage={140}
          widthIcon={40}
          padding={7}
        />
      </div>

      {/* Section 6 */}
      <div className="grid grid-cols-1 gap-5 mb-20 w-[83%]">
        <h1 className="font-medium text-[3rem] col-span-full">FAQ</h1>
        {[1, 2, 3, 4, 5].map((elem, ind) => (
          <div key={ind} className="w-full border border-[#DBDBDB]">
            {/* Replace the commented out Accordion with your CustomAccordion */}
            <CustomAccordion
              title="Можно ли вместе в вами в партнерстве разработать проект?"
              content="Да."
            />
          </div>
        ))}
      </div>
    </div>
  );
}
