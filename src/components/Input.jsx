"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { app } from "@/app/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function Input() {
  const { data: session } = useSession();
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const imagePickRef = useRef(null);
  const addImageToPost = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (selectedFile) {
      uploadImageToStorage();
    }
  }, [selectedFile]);

  const uploadImageToStorage = () => {
    setImageFileUploading(true);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + "_" + selectedFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setImageFileUploading(false);
        setImageFileUrl(null);
        setSelectedFile(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setImageFileUploading(false);
        });
      }
    );
  };

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
        {selectedFile && (
          <img
            src={imageFileUrl}
            alt="image"
            className="w-full max-h-[250px] object-cover cursor-pointer"
          />
        )}
        <div className="flex justify-between items-center pt-2.5">
          <HiOutlinePhotograph
            onClick={() => imagePickRef.current.click()}
            className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer"
          />
          <input
            type="file"
            hidden
            accept="image/*"
            ref={imagePickRef}
            onChange={addImageToPost}
          />
          <button className="text-white cursor-pointer font-bold disabled:opacity-50 bg-blue-500 rounded-full hover:brightness-125 px-3 py-2">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
