"use client"; // Add if it loads server side state
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //implementation
  /**- Pick an API
   * - Build button component that has a fetch action/clear acion
   * - build component that displays data (should have empty and fulfilled state)
   * - Build function that will fetch data
   * - format and handle data
   * - error handling (expected on test)
   * - Style app and create breakpoints
   * - component for our button to sit in
   * - https://api.nasa.gov/
   */

  const [pictureContent, setPictureContent] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchPictures() {
    setLoading(true);
    const API_URL =
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";
    const response = await fetch(API_URL);
    const data = await response.json();
    setPictureContent(data);
    // console.log(data);
    setLoading(false);
  }

  
  const Header = () => {
    return (
      <header>
        <h1>My Midterm Project</h1>
        <button
          className="border-2 border-white p-2"
          onClick={fetchPictures}
          disabled={loading}
        >
          Fetch Stuff
        </button>
      </header>
    );
  };

  const PictureDisplay = () => {
    if (loading) {
      return <section>Loading..</section>;
    }

    if (pictureContent) {
      const pictureList = [];
      //index and key -> i is just a way to differentiate
      pictureContent.forEach((picture, i) => {
        //keys are explaination, title, url
        pictureList.push (
          <article key={i}>
            <img src={picture.url} alt={picture.explanation} />
            <h2>{picture.title}</h2>
            <p>{picture.explanation}</p>
          <hr/>
          </article>
        );
      });

      return <section>{pictureList}</section>;
    }

    return <section>no picture displayed</section>;
  };

  return (
    <div className="m-8">
      <Header />
      <PictureDisplay />
    </div>
  );
}
