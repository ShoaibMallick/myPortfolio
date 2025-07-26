import React from "react";
import { useParams } from "react-router-dom";
import  projectData  from "../data/project";

export default function ProjectDetails() {
  const { id } = useParams();

  // Optionally convert id to number, if your projectData ids are numbers
  const projectId = isNaN(id) ? id : Number(id);

  const filteredProjects = projectData.filter((item) => item.id === projectId);

  if (filteredProjects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <p className="text-amber-700 text-xl font-semibold">
          Project not found.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-amber-50 via-white to-amber-100 py-12 px-4 flex items-center justify-center min-h-screen">
      {filteredProjects.map((proj) => (
        <div
          key={proj.id}
          className="grid md:grid-cols-2 gap-10 w-full max-w-5xl bg-white rounded-3xl shadow-xl border border-amber-200 p-8 animate-fadeInUp"
        >
          {/* Left: Project Image */}
          <div className="flex items-center justify-center">
            <img
              src={proj.img || noImg}
              alt={proj.Title}
              className="w-80 h-64 object-cover rounded-2xl shadow-md border-4 border-amber-100 bg-white transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right: Project Info */}
          <div className="flex flex-col justify-between gap-8">
            {/* Main content */}
            <div>
              <h1 className="text-3xl font-extrabold text-amber-900 mb-4 tracking-tight leading-snug">
                {proj.Title}
              </h1>
              <p className="text-amber-800 text-base leading-relaxed mb-6">
                {proj.Description}
              </p>
            </div>
            {/* Tech stack & link */}
            <div>
              <h4 className="text-lg font-bold text-amber-700 mb-1">Tech Stack</h4>
              <p className="text-base text-amber-900 font-medium mb-6">
                {proj.TechStack}
              </p>
              {proj.Link && (
                <a
                  href={proj.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[40%] inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
