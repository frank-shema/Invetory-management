import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <ul className="flex space-x-4">
          <li>
          </li>
          <li>
            <a href="/about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
