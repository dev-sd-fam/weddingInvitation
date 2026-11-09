import React, { useEffect, useState } from 'react';

const weddingDate = new Date('2027-01-04T18:35:00+05:30');
const countdownUnits = [
  ['days', 'दिवस'],
  ['hours', 'तास'],
  ['minutes', 'मिनिटे'],
  ['seconds', 'सेकंद'],
];

function getRemaining() {
  const difference = Math.max(0, weddingDate.getTime() - Date.now());
  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownSection() {
  const [remaining, setRemaining] = useState(() => getRemaining());

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="countdown-band" aria-label="विवाहसोहळ्यापर्यंतचा कालावधी">
      <div className="countdown-inner" data-reveal>
        <div className="countdown-heading"><span className="eyebrow">मंगलक्षणाची आतुरतेने प्रतीक्षा</span><span lang="mr">भेटूया लवकरच!</span></div>
        <div className="countdown-units">
          {countdownUnits.map(([unit, label]) => (
            <div className="countdown-unit" key={unit}>
              <span className="countdown-number">{remaining[unit].toLocaleString('mr-IN', { minimumIntegerDigits: 2, useGrouping: false })}</span>
              <span className="countdown-label">{label}</span>
            </div>
          ))}
        </div>
        <span className="countdown-flower" aria-hidden="true">✳</span>
      </div>
    </section>
  );
}

export default CountdownSection;
