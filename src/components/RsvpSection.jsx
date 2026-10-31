import React, { useState } from 'react';
import { Check, ChevronDown, Send } from 'lucide-react';

function RsvpSection() {
  const [rsvpSent, setRsvpSent] = useState(false);
  const [rsvpError, setRsvpError] = useState(false);

  async function handleRsvp(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('form-name', 'rsvp');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (!response.ok) throw new Error('RSVP could not be sent');
      setRsvpError(false);
      setRsvpSent(true);
      form.reset();
    } catch {
      setRsvpError(true);
    }
  }

  return (
    <section className="rsvp-section" id="rsvp">
      <div className="rsvp-inner section-wrap">
        <div className="rsvp-copy" data-reveal>
          <span className="section-index">०४ / आपली उपस्थिती कळवा</span>
          <p className="eyebrow">तुमच्या उपस्थितीने आनंद द्विगुणित होईल</p>
          <h2>आमच्या आनंदात<br /><em>सहभागी व्हाल ना?</em></h2>
          <p>कृपया १ मे २०२७ पर्यंत आपली उपस्थिती कळवावी. तुमच्यासोबत हा मंगलसोहळा साजरा करण्यासाठी आम्ही उत्सुक आहोत.</p>
          <p className="rsvp-marathi" lang="mr">तुमची उपस्थिती, आमच्यासाठी आशीर्वाद.</p>
        </div>
        <form className="rsvp-form" name="rsvp" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleRsvp} data-reveal>
          <input type="hidden" name="form-name" value="rsvp" />
          <p className="honeypot"><label>हे रिकामे ठेवा: <input name="bot-field" /></label></p>
          <label className="form-field">आपले पूर्ण नाव<input name="full-name" type="text" placeholder="उदा. अनन्या देशमुख" autoComplete="name" required /></label>
          <label className="form-field">ईमेल पत्ता<input name="email" type="email" placeholder="name@example.com" autoComplete="email" required /></label>
          <label className="form-field">आपल्यासोबत किती पाहुणे येणार?
            <span className="select-wrap"><select name="guests" defaultValue="2" aria-label="पाहुण्यांची संख्या"><option value="1">फक्त मी</option><option value="2">२ पाहुणे</option><option value="3">३ पाहुणे</option><option value="4">४ पाहुणे</option><option value="5+">५ किंवा अधिक</option></select><ChevronDown size={15} /></span>
          </label>
          <label className="form-field">आमच्यासाठी एखादा खास निरोप <span className="optional">ऐच्छिक</span><textarea name="note" placeholder="तुमचा शुभेच्छा संदेश येथे लिहा..." rows="2" /></label>
          <button className="submit-button" type="submit" disabled={rsvpSent}>{rsvpSent ? <>आपली नोंद झाली <Check size={17} /></> : <>उपस्थिती कळवा <Send size={16} /></>}</button>
          <p className="form-feedback" role="status">{rsvpSent ? 'मनःपूर्वक धन्यवाद! लवकरच भेटूया.' : rsvpError ? 'नोंद पाठवता आली नाही. कृपया पुन्हा प्रयत्न करा.' : 'आपल्या उत्तरामुळे सोहळ्याचे उत्तम नियोजन करता येईल.'}</p>
        </form>
      </div>
    </section>
  );
}

export default RsvpSection;
