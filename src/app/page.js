// Home.js
"use client";
import { useState } from "react";
import Header from "./header";
import PictureDisplay from "./pictureDisplay";
import "./styles.css";

export default function Home() {
  const [pictureContent, setPictureContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCleared, setIsCleared] = useState(false);

  async function fetchPictures() {
    if (!isCleared) {
      // If images not cleared -> new pictures
      setLoading(true);
      const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";
      const response = await fetch(API_URL);
      const data = await response.json();
      setPictureContent(data);

    } else {
      // Clear the picture content
      setPictureContent([]); 
    }

    setIsCleared(!isCleared);
    setLoading(false);
  }

  
  const buttonText = loading ? "Loading..." : isCleared ? "Clear Cats" : "Show Cats";

  return (
    <div className="m-8">
      <Header fetchPictures={fetchPictures} buttonText={buttonText}/>
      <PictureDisplay pictureContent={pictureContent} loading={loading} />
    </div>
  );
}
