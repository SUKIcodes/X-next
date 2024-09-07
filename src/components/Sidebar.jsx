"use client";

import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="p-3">
      <Link href={"/"}>
        <FaXTwitter className="bg-gray-300 cursor-pointer p-3 w-16 h-16 rounded-full hover:bg-gray-400 transition-all duration-200 mb-[10px]" />
      </Link>
      <Link
        href={"/"}
        className="p-3 flex gap-2 bg-gray-300 hover:bg-gray-400 transition-all duration-200 items-center rounded-full  mb-[10px]"
      >
        <HiHome className="font-bold w-8 h-8 " />
        <span className="hidden lg:inline font-bold ">Home</span>
      </Link>
      {session ? (
        <>
          <button
            className="bg-blue-400 rounded-full p-3 hover:brightness-125 transition-all duration-200 w-full font-bold shadow-lg"
            onClick={signOut}
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <button
            className="bg-blue-400 rounded-full p-3 hover:brightness-125 transition-all duration-200 w-full font-bold shadow-lg"
            onClick={signIn}
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
}
