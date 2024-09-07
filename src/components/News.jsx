"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function News() {
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState(3);

  const getNews = async () => {
    const response = await axios.get(
      "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
    );
    setNews(response.data.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="bg-gray-100 rounded-lg mt-4 p-2 space-y-3">
      <h1 className="font-bold text-xl text-gray-400 mt-1 mb-1">
        Whats happening...
      </h1>

      {news.slice(0, article).map((item, index) => (
        <div key={index}>
          <a href={item.url} target="_blank">
            <div className="flex justify-between">
              <div className="flex-1">
                <h6>{item.title}</h6>
                <p>{item.source.name}</p>
              </div>
              <img
                src={item.urlToImage}
                alt="image"
                width={70}
                height={70}
                className="rounded-full"
              />
            </div>
          </a>
        </div>
      ))}
      <p
        className="mt-3 text-blue-500 cursor-pointer"
        onClick={() => setArticle(article + 3)}
      >
        Show more...
      </p>
      {article > 3 && (
        <p
          className="mt-3 text-blue-500 cursor-pointer"
          onClick={() => setArticle(article - 3)}
        >
          Show less...
        </p>
      )}
    </div>
  );
}
