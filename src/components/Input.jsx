"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function Input() {
  const { data: session } = useSession();
  if (!session) return null;
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3 w-full">
      <img
        src={session.user.image}
        alt="image"
        className="w-11 h-11 rounded-full cursor-pointer hover:brightness-125"
      />
      <div className="w-full divide-y divide-gray-200 ">
        <textarea
          className="w-full border-none outline-none tracking-wide min-h-[50px]"
          rows={2}
          placeholder="Whats happening..."
        ></textarea>
        <div className="flex justify-between items-center pt-2.5">
          <HiOutlinePhotograph className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer" />
          <button className="text-white cursor-pointer font-bold disabled:opacity-50 bg-blue-500 rounded-full hover:brightness-125 px-3 py-2">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
