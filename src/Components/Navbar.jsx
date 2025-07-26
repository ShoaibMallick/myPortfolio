import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Home", to: "/" },
    // { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-[#EAE4D5] text-amber-950 py-4 px-6 flex items-center justify-between shadow-md sticky top-0 z-50">
      {/* Logo / Brand */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-extrabold text-2xl tracking-tight transition-colors duration-300 ${
            isActive ? "text-amber-700" : "hover:text-amber-700"
          }`
        }
      >
        Shoaib Mallick
      </NavLink>

      {/* Menu Items */}
      <div className="flex space-x-6">
        {navItems.map(({ name, to }) => (
          <NavLink
            key={name}
            to={to}
            className={({ isActive }) =>
              `relative text-base font-semibold px-4 py-2 rounded-full transition-colors duration-300 ${
                isActive
                  ? "bg-amber-300 text-amber-900"
                  : "hover:bg-amber-200 hover:text-amber-900"
              }`
            }
            end={to === "/"} // 'end' prop for exact matching on Home
          >
            {name}
            {/* Optional Underline Animation: you can add if you want */}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
