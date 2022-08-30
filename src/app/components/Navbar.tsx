import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, changeIsOpen] = useState(false);
  const toggleNavbar = () => changeIsOpen(!isOpen);
  const viewWidth: Number = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  const isMobile: Boolean = viewWidth <= 767;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-green-600 to-slate-800 p-6">
      <a href="/" className="flex items-center flex-shrink-0 text-white mr-6">
        Climb Finder
      </a>
      {!isMobile && (
        <>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="/user/login"
                className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
              >
                Login
              </a>
              <a
                href="/user/register"
                className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
              >
                Register
              </a>
              <a
                href="/routes"
                className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
              >
                Routes
              </a>
              <a
                href="/account"
                className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
              >
                Account Info
              </a>
              <a
                href="/account#logout"
                className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
              >
                Log Out
              </a>
              <a
                href="/admin/add/route"
                className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
              >
                Create a Route
              </a>
              <a
                href="/routes"
                className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
              >
                List of Routes
              </a>
              <a
                href="/admin/userlist"
                className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
              >
                List of Users
              </a>
            </div>
            <div>
              <a
                href="user/register"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-600 hover:bg-white mt-4 lg:mt-0"
              >
                Sign Up
              </a>
            </div>
          </div>
        </>
      )}
      {isMobile && (
        <div className="block lg:hidden">
          <button
            onClick={() => toggleNavbar()}
            className="flex items-center px-3 py-2 border rounded text-slate-800 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      )}
      {isMobile && isOpen && (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="/user/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
            >
              Login
            </a>
            <a
              href="/user/register"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
            >
              Register
            </a>
            <a
              href="/routes"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
            >
              Routes
            </a>
            <a
              href="/account"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
            >
              Account Info
            </a>
            <a
              href="/account#logout"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
            >
              Log Out
            </a>
            <a
              href="/admin/add/route"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
            >
              Create a Route
            </a>
            <a
              href="/routes"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
            >
              List of Routes
            </a>
            <a
              href="/admin/userlist"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-white mr-4"
            >
              List of Users
            </a>
          </div>
          <div>
            <a
              href="/user/register"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-600 hover:bg-white mt-4 lg:mt-0"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
