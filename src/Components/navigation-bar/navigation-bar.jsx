import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import "tailwindcss/tailwind.css";

/* import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap"; */

import { Link } from "react-router-dom";

/* import "./navigation-view.scss"; */

export class NavigationBar extends React.Component {
  onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  };

  render() {
    const username = localStorage.getItem("user");
    const movies = `/`;
    const profile = `#/users/${username}`;
    const logout = `/`;

    return (
      <Disclosure
        as="nav"
        className="bg-white border-gray-300 border-double border-b-4 "
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex items-center justify-between h-24 ">
                <div className="flex-shrink-0 flex items-center">
                  <a as={Link} href={`/`}>
                    <img
                      className="block  h-24 w-30"
                      crossOrigin="https://imgur.com"
                      src="https://i.imgur.com/IOx97Xx.png"
                      alt="Workflow"
                    ></img>
                  </a>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 z-10 ">
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right relative right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              as={Link}
                              key={profile}
                              href={profile}
                              className={
                                (active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:text-gray-400 ")
                              }
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              as={Link}
                              key={movies}
                              href={`/`}
                              className={
                                (active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:text-gray-400")
                              }
                            >
                              Movies
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={"/"}
                              key={logout}
                              onClick={this.onLoggedOut}
                              className={
                                (active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:text-gray-400")
                              }
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    );
  }
}
