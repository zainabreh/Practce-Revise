"use client";
import Link from "next/link";
import React from "react";
import data from "../data/music.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

const CardSection = () => {

    interface Coursetype{
        id: number,
        title: string,
        slug: string,
        description: string,
        price:number,
        instructor:string,
        isFeatured: boolean,
        image: string 
}

  return (
    <>
      <div className="py-12 bg-gray-900">
        <div>
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              Featured Courses
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Learn With the Best
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {data.courses.map((c:Coursetype) => (
              <div key={c.id} className="flex justify-center">
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full overflow-hidden flex flex-col">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {c.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {c.description}
                    </p>

                    <Link
                      href={`/courses/${c.slug}`}
                      className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-sm font-bold dark:bg-zinc-800"
                    >
                      <span>Buy now </span>
                      <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        {c.price}
                      </span>
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/courses`}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              View all courses
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardSection;
