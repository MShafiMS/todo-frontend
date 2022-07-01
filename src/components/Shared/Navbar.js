import React from "react";
import { Link } from "react-router-dom";
import todo from '../../todo.png';

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link to={'/'}>ToDo</Link>
            </li>
            <li>
              <Link to={'/completed'}>Completed Task</Link>
            </li>
            <li>
              <Link to={'/calendar'}>Calendar</Link>
            </li>
            </ul>
          </div>
          <Link to={'/'} class="btn btn-ghost normal-case text-xl"><img src={todo} alt="todo" class="h-10 w-10" /><span className="pl-1 text-secondary font-bold">mTASK</span></Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0 font-semibold">
            <li>
              <Link to={'/'}>ToDo</Link>
            </li>
            <li>
              <Link to={'/completed'}>Completed Task</Link>
            </li>
            <li>
              <Link to={'/calendar'}>Calendar</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
