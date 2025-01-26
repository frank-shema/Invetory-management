import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">InventoryApp</a>
        </div>

        {/* Navigation */}
          <Link href="/" passHref>
            <a className="hover:text-gray-400">Dashboard</a>
          </Link>
          <Link href="/products" passHref>
            <a className="hover:text-gray-400">Products</a>
          </Link>
          <Link href="/categories" passHref>
            <a className="hover:text-gray-400">Categories</a>
          </Link>
          <Link href="/reports" passHref>
            <a className="hover:text-gray-400">Reports</a>
          </Link>
          <a href="/reports" className="hover:text-gray-400">Reports</a>
        </nav>

        {/* User Profile */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <span className="text-sm">Hello, User</span>
          </div>
          <div className="relative group">
            <button className="focus:outline-none">
              <img
                src="/path/to/profile-pic.jpg"
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 hidden group-hover:block">
              <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
              <a href="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
              <a href="/logout" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
          <Link href="/" passHref>
            <a className="block px-4 py-2 hover:bg-gray-700">Dashboard</a>
          </Link>
          <Link href="/products" passHref>
            <a className="block px-4 py-2 hover:bg-gray-700">Products</a>
          </Link>
          <Link href="/categories" passHref>
            <a className="block px-4 py-2 hover:bg-gray-700">Categories</a>
          </Link>
          <Link href="/reports" passHref>
            <a className="block px-4 py-2 hover:bg-gray-700">Reports</a>
          </Link>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden">
          <a href="/" className="block px-4 py-2 hover:bg-gray-700">Dashboard</a>
          <a href="/products" className="block px-4 py-2 hover:bg-gray-700">Products</a>
          <a href="/categories" className="block px-4 py-2 hover:bg-gray-700">Categories</a>
          <a href="/reports" className="block px-4 py-2 hover:bg-gray-700">Reports</a>
        </nav>
      )}
    </header>
  );
};

export default Header;