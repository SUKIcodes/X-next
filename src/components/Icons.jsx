"use client";

import React, { useEffect, useState } from "react";
import {
  HiOutlineChat,
  HiOutlineHeart,
  HiOutlineTrash,
  HiHeart,
} from "react-icons/hi";
import { signIn, useSession } from "next-auth/react";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { app } from "@/app/firebase";

export default function Icons({ id, uid }) {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const db = getFirestore(app);

  const likePost = async () => {
    if (session) {
      if (isLiked) {
        await deleteDoc(doc(db, "posts", id, "likes", session?.user?.uid));
      } else {
        await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
          username: session.user.username,
          timestamp: serverTimestamp(),
        });
      }
    } else {
      signIn();
    }
  };

  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {
      setLikes(snapshot.docs);
    });
  }, [db]);

  useEffect(() => {
    setIsLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const deletePost = async () => {
    if (window.confirm("Are you sure you want to delete the post?")) {
      if (session?.user?.uid === uid) {
        deleteDoc(doc(db, "posts", id))
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("You are not allowed to delete this post.");
      }
    }
  };

  return (
    <div className="flex justify-between p-3">
      <HiOutlineChat className="h-8 w-8 cursor-pointer rounded-full transition-all duration-200 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100" />
      <div className="flex gap-1 items-center">
        {isLiked ? (
          <HiHeart
            onClick={likePost}
            className="h-8 w-8 cursor-pointer rounded-full transition-all duration-200 ease-in-out p-2 hover:text-red-500 hover:bg-red-100 text-red-600"
          />
        ) : (
          <HiOutlineHeart
            onClick={likePost}
            className="h-8 w-8 cursor-pointer rounded-full transition-all duration-200 ease-in-out p-2 hover:text-red-500 hover:bg-red-100"
          />
        )}
        {likes.length > 0 && (
          <span className="text-sm">{likes.length} likes</span>
        )}
      </div>

      {session?.user?.uid === uid && (
        <HiOutlineTrash
          onClick={deletePost}
          className="h-8 w-8 cursor-pointer rounded-full transition-all duration-200 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100"
        />
      )}
    </div>
  );
}
