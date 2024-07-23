import React, { useState, useEffect } from 'react';
import './header.css';

function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);  // Hide header when scrolling down
      } else {
        setHidden(false); // Show header when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${hidden ? 'hidden' : ''}`}>
      <img
        src="/image/faces-troll.png"
        alt="troll image"
        className="header--image"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--p">Make others laugh</h4>
    </header>
  );
}

export default Header;
