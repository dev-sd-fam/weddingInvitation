import React from 'react';
import { ArrowUpRight } from 'lucide-react';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-monogram" href="#home" aria-label="पृष्ठाच्या सुरुवातीला जा">S<span>&</span>P</a>
      <p lang="mr">शुभमंगल सावधान</p>
      <span>सस्नेह · शिलाटणे · २०२७</span>
      <a className="back-to-top" href="#home" aria-label="पृष्ठाच्या सुरुवातीला जा"><ArrowUpRight size={18} /></a>
    </footer>
  );
}

export default SiteFooter;
