import React from 'react';
import { CalendarDays, Heart, Sparkles, Users } from 'lucide-react';

const events = [
  {
    date: '३ जानेवारी · सायं. ६:००',
    name: 'हळदीचा सोहळा',
    note: 'हळदीच्या रंगात न्हाऊया, हास्याच्या फुलांनी दिवस सजवूया. पिवळ्या रंगात सजून या!',
    icon: Sparkles,
  },
  {
    date: '४ जानेवारी · सायं. ६:००',
    name: 'शुभविवाह',
    note: 'मंगलाष्टकांच्या साक्षीने आमचे विवाहबंधन जुळेल. आपल्या शुभाशीर्वादांनी हा क्षण मंगलमय करा.',
    icon: Heart,
  },
  {
    date: '४ जानेवारी · सायं. ७:००',
    name: 'स्वागत समारंभ',
    note: 'गप्पा, गोडधोड आणि आपल्या सगळ्यांच्या सहवासात साजरा करूया हा आनंदसोहळा.',
    icon: Users,
  },
];

function EventsSection() {
  return (
    <section className="events-section section-wrap" id="details">
      <div className="section-heading" data-reveal>
        <span className="section-index">०२ / विवाहसोहळ्यातील खास क्षण</span>
        <p className="eyebrow eyebrow-red">तारखा नोंदवून ठेवा</p>
        <h2>आनंदाचे तीन सोहळे,<br /><em>तुमच्या साथीने अविस्मरणीय.</em></h2>
        <p className="section-subtitle">प्रत्येक मंगलक्षणात तुमची साथ हवीच!</p>
      </div>
      <div className="event-list">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <article className="event-row" data-reveal key={event.name}>
              <span className="event-index">{(index + 1).toLocaleString('mr-IN', { useGrouping: false, minimumIntegerDigits: 2 })}</span>
              <div className="event-date"><CalendarDays size={15} /><span>{event.date}</span></div>
              <div className="event-name"><h3>{event.name}</h3><span lang="mr">ठाणे, महाराष्ट्र</span></div>
              <p className="event-description">{event.note}</p>
              <span className="event-icon"><Icon size={20} strokeWidth={1.5} /></span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default EventsSection;
