"use client";
import { Video } from "@/app/component/Video";
import { Action_bar } from "@/app/component/Action_bar";
import { useState, useEffect } from "react";
import { Music } from "@/app/component/music";

export default function Home() {
  const videoData = [
    {
      urlKey: "https://gifer.com/embed/XOsX",
      likeCount: 947,
      commentCount: 866,
      favoriteCount: 764,
      shareCount: 352,
      Musicname: "Duckkkkk",
      Artist: "DUokDikDuk",
    },
    {
      urlKey: "https://gifer.com/embed/Xrl7",
      likeCount: 69,
      commentCount: 345,
      favoriteCount: 35,
      shareCount: 2523,
      Musicname: "HEHEHEHEHEHEH",
      Artist: "HAHAHAHAHAH",
    },
  ];

  return (
    <div className="snap-y snap-mandatory  h-screen w-screen overflow-scroll overflow-x-hidden  bg-zinc-950">
      {videoData.map((video, index) => (
        <div className="snap-center m-20 flex items-center justify-center relative rounded-xl ">
          <div
            key={index}
            className="snap-center relative items-center justify-center"
          >
            <Video url={video.urlKey} />
            <div className="absolute bottom-0 right-3">
              <Action_bar
                likeCount={video.likeCount}
                shareCount={video.shareCount}
                favoriteCount={video.favoriteCount}
                commentCount={video.commentCount}
              />
            </div>
            <div className="absolute bottom-1 left-5">
              <Music Musicname={video.Musicname} Artist={video.Artist} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
