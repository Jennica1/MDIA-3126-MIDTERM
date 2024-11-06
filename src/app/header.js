// Header.js
export default function Header({ fetchPictures, buttonText }) {
  return (
    <header>
      <h1>Cat Image Gallery</h1>
      <button onClick={fetchPictures} disabled={buttonText === "Loading..."}>
        {buttonText}
      </button>
    </header>
  );
}
