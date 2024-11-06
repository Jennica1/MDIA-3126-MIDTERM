"use client";
import { useState } from "react";

export default function Header({fetchPictures, loading}) {

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



