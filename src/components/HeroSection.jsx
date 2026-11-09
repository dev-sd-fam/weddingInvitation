import React from 'react';
import { ArrowDown } from 'lucide-react';

function HeroSection({ revealMode }) {
  const revealClass = revealMode
    ? `is-revealing${revealMode === 'immediate' ? ' is-immediate' : ''}`
    : '';

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2400&q=90"
        alt="विवाहसोहळ्यात आनंदाने एकमेकांसोबत उभे असलेले वधू-वर"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className={`hero-content ${revealClass}`}>
        <p className="eyebrow hero-eyebrow"><span /> ॥ श्री गणेशाय नमः ॥ <span /></p>
        <p className="hero-intro">आमच्या कुटुंबीयांच्या आशीर्वादाने,</p>
        <h1 id="hero-title">सुबोध <span>❤️</span> प्रणाली</h1>
        <p className="hero-marathi" lang="mr">॥ शुभविवाह ॥</p>
        <div className="hero-date">
          <span>सोमवार</span><i /> <span>४ जानेवारी २०२७</span><i /> <span>सायंकाळी ६:३५</span><i /> <span>शिलाटणे, महाराष्ट्र</span>
        </div>
        <a className="hero-link" href="#celebration">आमच्या आनंदात सहभागी व्हा <ArrowDown size={16} /></a>
      </div>
      <div className="hero-caption"><span>सस्नेह निमंत्रण · आमच्या कुटुंबीयांकडून</span><span>१८°३१′ उ. &nbsp;७३°५१′ पू.</span></div>
    </section>
  );
}

export default HeroSection;
