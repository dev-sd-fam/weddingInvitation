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
          <div className="venue-address"><MapPin size={17} /><p><strong>Radha Krishna Mangal Karyalay</strong><br />शिलाटणे, महाराष्ट्र ४१०४०५</p></div>
          <p className="venue-note"><Clock3 size={15} /> विवाहसोहळा ४ जानेवारी रोजी सायंकाळी ६:३५ वाजता</p>
          <a className="text-link" href="https://share.google/WsDR4jYok8Z4rhuZz" target="_blank" rel="noreferrer">विवाहस्थळाचा नकाशा पहा <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="venue-map" data-reveal>
        <iframe
          title="Radha Krishna Mangal Karyalay, Shilatne येथील विवाहस्थळाचा नकाशा"
          src="https://maps.google.com/maps?q=Radha%20Krishna%20Mangal%20Karyalay%2C%20Shilatne%2C%20Maharashtra%20410405&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default VenueSection;
