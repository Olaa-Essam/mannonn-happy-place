import React from 'react';
import { useState } from 'react';
import { Heart, RefreshCw } from 'lucide-react';

const reasons = [
  'Your heart is softer than you think.',
  'You make ordinary moments feel special.',
  'Your laugh deserves to be heard more often.',
  'You are allowed to take up space.',
  'You care in a way that people remember.',
  'You are still wonderful on your messy days.',
  'The world is genuinely better with you in it.',
  'You never have to earn the love you deserve.',
];

const colors = ['pink', 'lilac', 'cream', 'rose'];

export default function Reasons() {
  const [flipped, setFlipped] = useState([]);
  const [shuffle, setShuffle] = useState(0);

  const toggleCard = (index) => {
    setFlipped((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  const resetCards = () => {
    setFlipped([]);
    setShuffle((previous) => previous + 1);
  };

  return (
    <section className="content-width section-inner">

      {/* Section heading */}
      <div className="section-kicker">
        02 — THE MANNONN APPRECIATION CLUB
      </div>

      <h2>
        Reasons you're
        <br />
        <em>so very lovely.</em>
      </h2>

      <p className="section-intro">
        Pick a little card. There's something good waiting on the other side.
      </p>

      {/* Reasons cards */}
      <div className="reasons-grid">
        {reasons.map((reason, index) => {
          const isFlipped = flipped.includes(index);
          const color = colors[(index + shuffle) % colors.length];

          return (
            <button
              key={`${shuffle}-${index}`}
              type="button"
              className={`reason-card ${color} ${isFlipped ? 'flipped' : ''}`}
              onClick={() => toggleCard(index)}
              aria-pressed={isFlipped}
              aria-label={
                isFlipped
                  ? `Reason ${index + 1}: ${reason}. Tap to hide.`
                  : `Reveal reason number ${index + 1}`
              }
            >
              <span className="reason-number">
                NO. {String(index + 1).padStart(2, '0')}
              </span>

              {isFlipped ? (
                <>
                  <Heart
                    className="reason-heart"
                    size={24}
                    fill="currentColor"
                    aria-hidden="true"
                  />

                  <span className="reason-text">
                    {reason}
                  </span>

                  <span className="reason-tap">
                    and that's a fact ♡
                  </span>
                </>
              ) : (
                <>
                  <span className="card-question">
                    A little
                    <br />
                    <em>reminder</em>
                  </span>

                  <span className="card-heart">
                    <Heart size={24} aria-hidden="true" />
                  </span>

                  <span className="reason-tap">
                    tap to reveal
                  </span>
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Reset button */}
      <button
        type="button"
        className="text-button"
        onClick={resetCards}
      >
        <RefreshCw size={15} aria-hidden="true" />
        reset the little cards
      </button>

    </section>
  );
}
