// Home.js
"use client";
import { useState } from "react";
import Header from "./header";
import PictureDisplay from "@/pictureDisplay";

export default function Home() {
  const [pictureContent, setPictureContent] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchPictures() {
    setLoading(true);
    const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";
    const response = await fetch(API_URL);
    const data = await response.json();
    setPictureContent(data);
    setLoading(false);
  }

  return (
    <div className="m-8">
      <Header fetchPictures={fetchPictures} loading={loading} />
      <PictureDisplay pictureContent={pictureContent} loading={loading} />
    </div>
  );
}
