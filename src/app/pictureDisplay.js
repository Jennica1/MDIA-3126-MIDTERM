import './styles.css';

export default function PictureDisplay({ pictureContent, loading }) {
    if (loading) {
      return <section>Loading...</section>;
    }
  
    if (!pictureContent || pictureContent.length === 0) {
      return <section>No pictures displayed</section>;
    }
  
    return (
      <section className='body'>
        {pictureContent.map((picture, i) => {
          return (
            <article key={i}>
              {/* Cat ${i + 1} would be cat 1, cat 2, etc */}
              <img src={picture.url} alt={`Cat ${i + 1}`} />
  
              {/* Check if breed information is available */}
              {(() => {
                if (picture.breeds && picture.breeds.length > 0) {
                  return (
                    <div>
                    {/* mapping through the breeds data */}
                      {picture.breeds.map((breed, index) => (
                        <div key={index}>
                          <h2>{breed.name}</h2>
                          <p>Temperament: {breed.temperament}</p>
                          <p>Origin: {breed.origin}</p>
                        </div>
                      ))}
                    </div>
                  );
                } else {
                  return <p>No breed information available</p>;
                }
              })()}
  
              <p>Width: {picture.width} px</p>
              <p>Height: {picture.height} px</p>
            </article>
          );
        })}
      </section>
    );
  }
  