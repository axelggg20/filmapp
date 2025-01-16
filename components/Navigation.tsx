import React from "react";
import Logo from "./Logo";

const Navigation: React.FC = () => (
  <nav className="flex items-center justify-between p-4 bg-black text-white">
    <Logo />
    <div className="flex gap-4">
      <a href="#" className="hover:text-gray-300">Movies</a>
      <a href="#" className="hover:text-gray-300">Trailers</a>
      <a href="#" className="hover:text-gray-300">Rankings</a>
      <a href="#" className="hover:text-gray-300">Community</a>
    </div>
  </nav>
);

export default Navigation;
