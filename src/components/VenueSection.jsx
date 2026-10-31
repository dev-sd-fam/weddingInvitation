import React from 'react';
import { ArrowUpRight, Clock3, MapPin } from 'lucide-react';

function VenueSection() {
  return (
    <section className="venue-section section-wrap" aria-labelledby="venue-title">
      <div className="venue-block" data-reveal>
        <div className="venue-photo-wrap">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85"
            alt="फुलांनी सजवलेला विवाहसोहळ्याचा सभामंडप"
            loading="lazy"
          />
          <span className="venue-photo-label">आनंदाचा मंगलमय सोहळा</span>
        </div>
        <div className="venue-copy">
          <span className="eyebrow eyebrow-red">आमचा पत्ता</span>
          <h3 id="venue-title">ठाण्यात भेटूया!<br />आपली आतुरतेने वाट पाहत आहोत.</h3>
          <div className="venue-address"><MapPin size={17} /><p><strong>ठाणे, महाराष्ट्र</strong><br />विवाहस्थळाचा अचूक पत्ता लवकरच कळवू.</p></div>
          <p className="venue-note"><Clock3 size={15} /> विवाहसोहळा ४ जानेवारी रोजी सायंकाळी ६ वाजता</p>
          <a className="text-link" href="https://maps.google.com/?q=Thane+Maharashtra" target="_blank" rel="noreferrer">ठाण्याचा नकाशा पहा <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="venue-map" data-reveal>
        <iframe
          title="ठाणे, महाराष्ट्र येथील विवाहस्थळाचा नकाशा"
          src="https://maps.google.com/maps?q=Thane%2C%20Maharashtra&z=12&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default VenueSection;
