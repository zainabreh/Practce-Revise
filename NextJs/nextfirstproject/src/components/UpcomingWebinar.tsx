'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinar = () => {

    const webinarDetails = [
        {
            title: "The Art of Sampling",
            description: "In this webinar, we’ll explore the world of sampling, and show you how to use existing sounds to create something new and original. We’ll cover topics like chopping, slicing, and rearranging, and show you how to use them to create everything from hip hop beats to electronic textures. Whether you’re a fan of old-school sampling or new-school production, this webinar is for you.",
            slug: "art-of-sampling",
            isFeatured: true,
          },
          {
            title: "The Business of Music",
            description: "Join us for an exclusive webinar on the business of music, where we’ll explore the ins and outs of the music industry. We’ll cover topics like royalties, distribution, and marketing, and show you how to turn your passion into a profitable career. Whether you’re a solo artist or part of a band, this webinar is the perfect place to start.",
            slug: "business-of-music",
            isFeatured: true,
          },
          {
            title: "The Power of Synthesis",
            description: "Join us for an in-depth exploration of the world of synthesis, where we’ll show you how to create your own unique sounds from scratch. We’ll cover topics like subtractive synthesis, additive synthesis, and granular synthesis, and show you how to use them to create everything from fat basslines to shimmering pads. Whether you’re a seasoned synth veteran or just starting out, this webinar is not to be missed.",
            slug: "power-of-synthesis",
            isFeatured: true,

          },
          {
            title: "Mixing and Mastering for Beginners",
            description: "In this webinar, we’ll explore the fundamentals of mixing and mastering, and show you how to take your tracks from good to great. We’ll cover topics like EQ, compression, reverb, and limiting, and show you how to use them to create a polished, professional sound. Whether you’re a bedroom producer or a seasoned engineer, this webinar is the perfect place to start.",
            slug: "mixing-mastering-for-beginners",
            isFeatured: true,

          },
          {
            title: "The Art of Music Production",
            description: "Join us for an exclusive webinar on the art of music production, where we’ll dive into the world of sound design, composition, and mixing. Our expert panel will share their insights on how to create captivating melodies, craft infectious beats, and produce high-quality tracks that resonate with audiences. From the basics of music theory to the latest production techniques, we’ll cover it all. Whether you’re a seasoned musician or just starting out, this webinar is not to be missed.",
            slug: "art-of-music-production",
            isFeatured: true,

          }
    ]

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-400 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
        <HoverEffect items={webinarDetails.map(web=>(
            {
                title: web.title,
                description: web.description,
                link: web.slug,
            }
        ))} />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              View all Webinars
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinar;
