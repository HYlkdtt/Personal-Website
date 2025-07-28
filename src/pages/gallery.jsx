import './pages.css';
import { useState } from 'react';

function Gallery() {
  const photos = [
    { id: 1, src: "/photos/photo1.jpg", alt: "Photo 1" },
    { id: 2, src: "/photos/photo2.jpg", alt: "Photo 2" },
    { id: 3, src: "/photos/photo3.jpg", alt: "Photo 3" },
    { id: 4, src: "/photos/photo4.jpg", alt: "Photo 4" },
    { id: 5, src: "/photos/photo5.jpg", alt: "Photo 5" },
    { id: 6, src: "/photos/photo6.jpg", alt: "Photo 6" },
    { id: 7, src: "/photos/photo7.jpg", alt: "Photo 7" },
    { id: 8, src: "/photos/photo8.jpg", alt: "Photo 8" },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="page">
      <div className="container">
        
        {/* Header */}
        <section className="gallery-header-simple">
          <h1 className="gallery-title-simple">Gallery</h1>
          <p className="gallery-subtitle-simple">Moments captured through my "Fuji XT30 + 50mm F1.4" Haven't upload the pictures yet, right now its just lorem ipsum of photos</p>
        </section>

        {/* Photo Grid */}
        <section className="photo-masonry">
          <div className="masonry-grid">
            {photos.map(function(photo) {
              return (
                <div key={photo.id} className="masonry-item" onClick={function() { setSelectedPhoto(photo); }}>
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    onError={function(e) {
                      e.target.src = `https://picsum.photos/300/400?random=${photo.id}`;
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="lightbox" onClick={function() { setSelectedPhoto(null); }}>
            <div className="lightbox-content" onClick={function(e) { e.stopPropagation(); }}>
              <button className="close-btn" onClick={function() { setSelectedPhoto(null); }}>×</button>
              <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Gallery;