import React from 'react';
import { Sparkles, Heart, ArrowDown } from 'lucide-react';

export default function Welcome({ onExplore }) {
  return (
    <section className="hero content-width" aria-label="Welcome to Mannonn's happy place">

      {/* Hero text */}
      <div className="hero-copy">
        <div className="eyebrow">
          <Sparkles size={14} aria-hidden="true" />
          <span>YOUR VERY OWN HAPPY PLACE</span>
        </div>

        <h1>
          Hey, <em>Mannonn.</em>
          <br />
          This little world
          <br />
          is <span>all yours.</span>
        </h1>

        <p className="hero-sub">
          A tiny reminder that you are loved, appreciated, and allowed
          to have good days — even the small, quiet ones.
        </p>

        <button
          type="button"
          className="primary-button"
          onClick={onExplore}
          aria-label="Explore your happy place"
        >
          Come on in
          <Heart size={16} fill="currentColor" aria-hidden="true" />
        </button>

        <div className="hero-note">
          <span className="tiny-heart">♡</span>
          no bad vibes allowed beyond this point
        </div>
      </div>

      {/* Hero artwork */}
      <div className="hero-art" aria-hidden="true">

        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />

        <div className="hero-card">
          <div className="hero-card-top">
            <span>little things to remember</span>
            <Sparkles size={16} />
          </div>

          <div className="sun-art">
            <div className="sun-face">⌣</div>
          </div>

          <div className="hero-card-title">
            you are a
            <br />
            <em>wonderful thing.</em>
          </div>

          <div className="hero-card-bottom">
            <span>♡ 01 / 07</span>
            <span>with love, always</span>
          </div>
        </div>

        <div className="sticker sticker-flower">✿</div>
        <div className="sticker sticker-star">✧</div>
        <div className="sticker sticker-bow">୨୧</div>

        <div className="floating-pill">
          a little love note
          <Heart size={13} fill="currentColor" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" aria-hidden="true">
        <ArrowDown size={14} />
        SCROLL A LITTLE
      </div>

    </section>
  );
}
