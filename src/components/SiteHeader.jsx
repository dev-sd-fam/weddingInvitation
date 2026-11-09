import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="सुबोध आणि प्रणाली, मुख्यपृष्ठ">
        <span className="wordmark-flower">✿</span>
        S <span className="wordmark-ampersand">&</span> P
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'मेन्यू बंद करा' : 'मेन्यू उघडा'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="मुख्य नेव्हिगेशन">
        <a href="#celebration" onClick={closeMenu}>आमंत्रण</a>
        <a href="#details" onClick={closeMenu}>कार्यक्रम</a>
        <a href="#gallery" onClick={closeMenu}>आठवणी</a>
        {/* <a className="nav-rsvp" href="#rsvp" onClick={closeMenu}>उपस्थिती कळवा <ArrowUpRight size={14} /></a> */}
      </nav>
    </header>
  );
}

export default SiteHeader;
