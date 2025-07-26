import noImg from "../assets/no-image.jpg";

export default function Skills() {
  return (
    <div className="py-12 bg-gradient-to-b from-amber-50 via-white to-orange-50 relative overflow-x-hidden">
      <h1 className="text-4xl text-center font-extrabold mt-6 text-amber-950 mb-10 drop-shadow animate-fadeInUp">
        Skills
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 px-2 max-w-5xl mx-auto">

        {/* Example skills - Repeat for as many as you need */}
        {[1, 2, 3, 4, 5, 6].map((s, idx) => (
          <div
            key={s}
            className="
          flex flex-col items-center bg-white/80 
          rounded-2xl shadow-lg border border-amber-100
          px-6 py-6 w-60 min-h-[270px]
          hover:scale-105 hover:shadow-amber-200 transition-transform duration-300
          group animate-fadeInUp
        "
            style={{ animationDelay: `${idx * 80}ms` }} // Staggered entry if using animate
          >
            <div className="mb-3">
              <img
                src={noImg}
                width={110}
                height={110}
                alt=""
                className="
              rounded-full shadow-md border-4 border-amber-100 group-hover:border-amber-300
              transition-all duration-300
              bg-white object-cover
            "
              />
            </div>
            <div className="text-lg font-semibold text-amber-900 mt-2 tracking-wide drop-shadow-sm">Skill {s}</div>
          </div>
        ))}
      </div>
    </div>

  );
}
