import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

function CurtainReveal({ onReveal }) {
  const [phase, setPhase] = useState('closed');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onReveal('immediate');
      setPhase('done');
      return undefined;
    }

    const timer = window.setTimeout(() => {
      onReveal('delayed');
      setPhase('opening');
    }, 1800);
    return () => window.clearTimeout(timer);
  }, [onReveal]);

  useEffect(() => {
    if (phase !== 'opening') return undefined;

    const timer = window.setTimeout(() => setPhase('done'), 1900);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === 'done') return null;

  function openInvitation() {
    onReveal('delayed');
    setPhase('opening');
  }

  function skipInvitation() {
    onReveal('immediate');
    setPhase('done');
  }

  return (
    <div
      className={`curtain-reveal ${phase === 'opening' ? 'is-opening' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="सुबोध आणि प्रणाली यांचे लग्नाचे आमंत्रण"
    >
      <div className="curtain-panel curtain-panel-left" aria-hidden="true" />
      <div className="curtain-panel curtain-panel-right" aria-hidden="true" />
      <div className="curtain-center">
        <span className="curtain-ornament" aria-hidden="true"><Sparkles size={20} strokeWidth={1.2} /></span>
        <p className="curtain-kicker">॥ शुभमंगल ॥</p>
        <p className="curtain-names">सुबोध <span>&</span> प्रणाली</p>
        <span className="curtain-date">४ जानेवारी २०२७ <i /> सायं. ६:३५ <i /> शिलाटणे</span>
        <button className="curtain-open-button" type="button" onClick={openInvitation} disabled={phase === 'opening'}>
          {phase === 'opening' ? 'आपले स्वागत आहे' : 'आमंत्रण उघडा'}
          {phase === 'opening' ? <Sparkles size={15} /> : <ArrowRight size={15} />}
        </button>
        {phase === 'closed' && (
          <button className="curtain-skip-button" type="button" onClick={skipInvitation}>
            थेट आमंत्रण पहा
          </button>
        )}
      </div>
    </div>
  );
}

export default CurtainReveal;
