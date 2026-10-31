import React, { useEffect, useState } from 'react';
import CountdownSection from './components/CountdownSection.jsx';
import CurtainReveal from './components/CurtainReveal.jsx';
import EventsSection from './components/EventsSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import HeroSection from './components/HeroSection.jsx';
import InvitationSection from './components/InvitationSection.jsx';
import RsvpSection from './components/RsvpSection.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import VenueSection from './components/VenueSection.jsx';

function App() {
  const [heroRevealMode, setHeroRevealMode] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteHeader />
      <CurtainReveal onReveal={setHeroRevealMode} />
      <main>
        <HeroSection revealMode={heroRevealMode} />
        <InvitationSection />
        <CountdownSection />
        <EventsSection />
        <VenueSection />
        <GallerySection />
        {/* <RsvpSection /> */}
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
