import React from 'react';
import { useState } from 'react';
import {
  Heart,
  Sparkles,
} from 'lucide-react';

export default function Letter() {
  const [open, setOpen] = useState(false);

  const toggleLetter = () => {
    setOpen((previous) => !previous);
  };

  return (
    <section className="content-width section-inner">
      <div className="section-kicker">
        01 — FROM MY HEART
      </div>

      <h2>
        A little letter,
        <br />
        <em>just for you.</em>
      </h2>

      <p className="section-intro">
        Some words for the days when you need a softer place to land.
      </p>

      <div className={`letter-stage ${open ? 'opened' : ''}`}>
        <div className="letter-side-note">
          sealed with
          <br />
          a whole lot of love
        </div>

        <button
          type="button"
          className="envelope"
          onClick={toggleLetter}
          aria-label={open ? 'Close the letter' : 'Open the letter'}
          aria-expanded={open}
        >
          <div className="envelope-back" aria-hidden="true" />

          <div className="letter-paper">
            <div className="letter-paper-inner">
              <span className="letter-date">
                A NOTE FOR MANNONN
              </span>

              <h3>My lovely girl,</h3>

              <p>
                I hope you never forget how much light you bring
                into the lives around you. You don't have to be
                cheerful every day, you don't have to have
                everything figured out, and you certainly don't
                have to pretend you're okay when you're not.
              </p>

              <p>
                Take your time. Rest when you need to. Let the
                little things make you smile again. And whenever
                the world feels a bit too loud, remember there's
                someone cheering for you, always.
              </p>

              <p className="letter-sign">
                Your forever fan
                <Heart size={14} fill="currentColor" aria-hidden="true" />
              </p>
            </div>
          </div>

          <div className="envelope-flap" aria-hidden="true" />
          <div className="envelope-front" aria-hidden="true" />

          <div className="wax-seal" aria-hidden="true">
            <Heart size={23} fill="currentColor" />
          </div>
        </button>

        <div className="letter-instruction" aria-live="polite">
          {open
            ? 'your letter is open ♡'
            : 'tap the envelope to open your letter'}
        </div>

        <div className="letter-sparkle" aria-hidden="true">
          <Sparkles />
        </div>
      </div>
    </section>
  );
}
