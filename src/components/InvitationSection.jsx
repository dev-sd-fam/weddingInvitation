import React from 'react';

function InvitationSection() {
  return (
    <section className="intro-section section-wrap" id="celebration">
      <div className="intro-side" data-reveal>
        <span className="section-index">०१ / आमच्या मनोगतातून</span>
        <span className="ornament" aria-hidden="true">❋</span>
      </div>
      <div className="intro-copy" data-reveal>
        <p className="eyebrow eyebrow-red">सस्नेह निमंत्रण</p>
        <h2>दोन कुटुंबांचा स्नेह,<br /><em>नव्या आयुष्याचा आरंभ.</em></h2>
        <p className="intro-body">विश्वासाच्या धाग्यांनी आणि प्रेमाच्या रंगांनी विणलेली आमची गोष्ट आता एका सुंदर वळणावर येऊन ठेपली आहे. मंगलाष्टकांच्या स्वरांत आणि आप्तस्वकीयांच्या आशीर्वादात आम्ही सहजीवनाची नवी वाट सुरू करीत आहोत.</p>
        <p className="intro-body">या आनंदसोहळ्याला आपण सहकुटुंब उपस्थित राहून आमचा आनंद द्विगुणित करावा, ही आग्रहाची विनंती.</p>
        <p className="signature">सुबोध & प्रणाली</p>
      </div>
      <div className="intro-quote" data-reveal>
        <span className="quote-mark">“</span>
        <p lang="mr">दोन जीवांची जुळली नाती,<br />लाभली आप्तांची प्रेमळ साथ;<br />मंगलाष्टकांच्या साक्षीने,<br />सुरू होते सहजीवनाची नवी वाट.</p>
        <span className="quote-rule" />
      </div>
    </section>
  );
}

export default InvitationSection;
