import React from 'react';

const photographs = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85',
    alt: 'उबदार रोषणाईत सजलेला विवाहसोहळा',
    className: 'gallery-photo gallery-photo-tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1519225421980-888cb4a8f3c1?auto=format&fit=crop&w=1000&q=85',
    alt: 'फुलांच्या साक्षीने साजरा होणारा आनंदाचा क्षण',
    className: 'gallery-photo gallery-photo-short',
  },
  {
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85',
    alt: 'बागेतील प्रेमळ विवाहछायाचित्र',
    className: 'gallery-photo gallery-photo-short',
  },
  {
    src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1100&q=85',
    alt: 'फुलांनी सजलेला उत्साही विवाहसोहळा',
    className: 'gallery-photo gallery-photo-tall',
  },
];

function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading section-wrap" data-reveal>
        <div>
          <span className="section-index">०३ / आनंदाच्या आठवणी</span>
          <p className="eyebrow eyebrow-red">काही सुंदर क्षण</p>
          <h2>आठवणींचा साज,<br /><em>आनंदाचा सहवास.</em></h2>
        </div>
        <p>आमच्या नव्या प्रवासाची ही सुरुवात तुमच्या सहवासात साजरी करण्यासाठी आम्ही उत्सुक आहोत.</p>
      </div>
      <div className="gallery-grid">
        {photographs.map((photo, index) => (
          <figure className={photo.className} data-reveal key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption>प्रेम · आनंद · अविस्मरणीय क्षण <span>{(index + 1).toLocaleString('mr-IN', { useGrouping: false, minimumIntegerDigits: 2 })}</span></figcaption>
          </figure>
        ))}
      </div>
      <p className="gallery-caption" lang="mr">तुमच्या सहवासाने, आठवणी होतील खास.</p>
    </section>
  );
}

export default GallerySection;
