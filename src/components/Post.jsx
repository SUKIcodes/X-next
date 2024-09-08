import Link from "next/link";
import React from "react";
import Icons from "./Icons";

export default function Post({ post, id }) {
  return (
    <div className="flex p-3 border-b border-gray-200 ">
      <img
        src={post?.profileImg}
        alt="image"
        className="h-11 w-11 rounded-full object-cover mr-4"
      />
      <div className="flex-1 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-sx truncate">{post?.name}</h4>
            <span className="text-xs truncate">@{post?.username}</span>
          </div>
        </div>
        <Link href={`/posts/${id}`}>
          <p>{post?.text}</p>
        </Link>
        <Link href={`/posts/${id}`}>
          <img src={post?.image} className="rounded-2xl mr-2 " />
        </Link>
        <Icons />
      </div>
    </div>
  );
}
