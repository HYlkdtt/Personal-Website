import './pages.css';
import { useState } from 'react';

function Gallery() {
  const photos = [
    { id: 1, src: "/photos/1.jpg", alt: "Photo 1" },
    { id: 2, src: "/photos/2.jpg", alt: "Photo 2" },
    { id: 3, src: "/photos/3.jpg", alt: "Photo 3" },
    { id: 4, src: "/photos/4.jpg", alt: "Photo 4" },
    { id: 5, src: "/photos/5.jpg", alt: "Photo 5" },
    { id: 6, src: "/photos/6.jpg", alt: "Photo 6" },
    { id: 7, src: "/photos/7.jpg", alt: "Photo 7" },
    { id: 8, src: "/photos/8.jpg", alt: "Photo 8" },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="page">
      <div className="container">
        
        {/* Header */}
        <section className="gallery-header-simple">
          <h1 className="gallery-title-simple">Gallery</h1>
          <p className="gallery-subtitle-simple">Moments captured through my "Fuji XT30 + 50mm F1.4"</p>
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