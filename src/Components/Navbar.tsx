"use client";

import React, { useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoIosNotifications } from "react-icons/io";
import { MdVideoSettings } from "react-icons/md";
import { RiMenuLine } from "react-icons/ri";
import Link from 'next/link';

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleMoreClick = () => {
    setMoreOpen(!moreOpen);
  };

  return (
    <div>
      <nav>
        <ul className="flex justify-between relative">
          <li>
            <Link href="/" className="flex items-center hover:text-blue-500">
              <IoHomeOutline className="mr-2 size-6" />
              <span className="hidden md:inline">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/messages" className="flex items-center hover:text-blue-500">
              <TiMessages className="mr-2 size-6" />
              <span className="hidden md:inline">Messages</span>
            </Link>
          </li>
          <li>
            <Link href="/notifications" className="flex items-center hover:text-blue-500">
              <IoIosNotifications className="mr-2 size-6" />
              <span className="hidden md:inline">Notifications</span>
            </Link>
          </li>
          <li>
            <Link href="/videos" className="flex items-center hover:text-blue-500">
              <MdVideoSettings className="mr-2 size-6" />
              <span className="hidden md:inline">Videos</span>
            </Link>
          </li>
          <li
            className="flex items-center hover:text-blue-500 cursor-pointer"
            onClick={handleMoreClick}
          >
            <RiMenuLine className="mr-2 size-6" />
            <span className="hidden md:inline">More</span>
          </li>

          {moreOpen && (
            <div className="absolute right-0 top-5 z-50 bg-white shadow-md mt-2 rounded-md">
              <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
              <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">
                Dashboard
              </Link>
              <Link href="/help" className="block px-4 py-2 hover:bg-gray-100">
                Help & Support
              </Link>
              <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">
                Settings
              </Link>
              {
                isLogin ? (
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Logout
                    </Link>
                ) : (
                    <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
                      Login
                    </Link>
                )
              }
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
