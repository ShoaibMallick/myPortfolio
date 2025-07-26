import React from "react";
import BannerImg from "../assets/pexels-moh-adbelghaffar-771742.jpg";
import "../Style/style.css";

export default function Banner() {
  return (
    <>
      <div className="w-full bg-[#EFE7DA] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-10">
          {/* Left Column - Text */}
          <div className="flex-1 flex flex-col justify-center space-y-5 max-w-xl">
            <h2 className="text-amber-700 text-base font-semibold tracking-wide uppercase">
              Software Engineer
            </h2>
            <h1 className="text-5xl font-extrabold text-amber-950 leading-tight">
              Shoaib Mallick
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              I’m a passionate developer specializing in building modern and responsive web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum vero ea incidunt perferendis asperiores ratione! Dolores provident ex vel mollitia sapiente obcaecati dolorum voluptatum id distinctio sed aut odio ducimus magni accusamus, eius reprehenderit!
            </p>
            <div className="w-20 h-1 bg-amber-500 rounded-full"></div> {/* Accent underline */}
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative group w-72 h-96 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <img
                src={BannerImg}
                alt="Banner"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              {/* Optional subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
