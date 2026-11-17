import React, { useState, useEffect } from 'react';
import {
  Heart,
  Sparkles,
  Star,
  Menu,
  X,
  Gift,
  Mail,
  Camera,
  Smile,
  ArrowUp,
} from 'lucide-react';

import Welcome from './pages/Welcome.jsx';
import Letter from './pages/Letter.jsx';
import Reasons from './pages/Reasons.jsx';
import Mood from './pages/Mood.jsx';
import Memories from './pages/Memories.jsx';
import Surprise from './pages/Surprise.jsx';

const links = [
  ['home', 'Home', Sparkles],
  ['letter', 'A little letter', Mail],
  ['reasons', "Why you're lovely", Heart],
  ['mood', 'Mood corner', Smile],
  ['memories', 'Our memories', Camera],
  ['surprise', 'A surprise', Gift],
];

export default function App() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  const go = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setActive(id);
    setMenuOpen(false);
  };

  // Show back-to-top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update active navigation section while scrolling
  useEffect(() => {
    const sections = links
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      {/* Floating decorative elements */}
      <div className="floating-decor decor-one">✿</div>
      <div className="floating-decor decor-two">✧</div>
      <div className="floating-decor decor-three">♡</div>

      {/* Navigation */}
      <header className="topbar">
        <button
          className="brand"
          onClick={() => go('home')}
          aria-label="Go to homepage"
        >
          <span className="brand-mark">
            <Heart size={15} fill="currentColor" />
          </span>
          mannonn's place
        </button>

        <nav
          className={menuOpen ? 'nav-links open' : 'nav-links'}
          aria-label="Main navigation"
        >
          {links.map(([id, label, Icon]) => (
            <button
              key={id}
              className={
                active === id
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={() => go(id)}
              aria-current={active === id ? 'location' : undefined}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </nav>

        <div className="top-actions">
          <button
            className="icon-button mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Main sections */}
      <main>
        <section id="home" className="section">
          <Welcome onExplore={() => go('letter')} />
        </section>

        <section id="letter" className="section">
          <Letter />
        </section>

        <section id="reasons" className="section">
          <Reasons />
        </section>

        <section id="mood" className="section">
          <Mood />
        </section>

        <section id="memories" className="section">
          <Memories />
        </section>

        <section id="surprise" className="section">
          <Surprise />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-flower">✿</div>

        <p>made with so much love, just for you</p>

        <span>
          mannonn, you deserve all the softest things ♡
        </span>
      </footer>

      {/* Back to top */}
      <button
        className={`back-top ${showBackTop ? 'visible' : ''}`}
        aria-label="Back to top"
        onClick={() => go('home')}
        tabIndex={showBackTop ? 0 : -1}
      >
        <ArrowUp size={17} />
      </button>
    </div>
  );
}