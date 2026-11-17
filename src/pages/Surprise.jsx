import React from 'react';
import { useState } from 'react';
import {
  Heart,
  PartyPopper,
} from 'lucide-react';

export default function Surprise() {
  const [opened, setOpened] = useState(false);

  const toggleGift = () => {
    setOpened((previousState) => !previousState);
  };

  return (
    <section className="surprise-wrap">
      <div className="content-width section-inner surprise-inner">

        {/* Section heading */}
        <div className="section-kicker">
          06 — ONE LAST THING
        </div>

        <h2>
          Something tiny,
          <br />
          <em>for my favourite girl.</em>
        </h2>

        <p className="section-intro">
          You made it all the way here. There's just one more thing
          waiting for you.
        </p>

        {/* Interactive gift */}
        <button
          type="button"
          className={`gift-box ${opened ? 'opened' : ''}`}
          onClick={toggleGift}
          aria-label={opened ? 'Close your gift' : 'Open your gift'}
          aria-expanded={opened}
        >
          <span className="gift-sparkle s1" aria-hidden="true">
            ✧
          </span>

          <span className="gift-sparkle s2" aria-hidden="true">
            ✦
          </span>

          <span className="gift-lid" aria-hidden="true">
            <i />
          </span>

          <span className="gift-body" aria-hidden="true">
            <i />
          </span>

          <span className="gift-bow" aria-hidden="true">
            ୨୧
          </span>
        </button>

        {/* Gift message */}
        {opened ? (
          <div className="final-message" aria-live="polite">
            <PartyPopper size={24} aria-hidden="true" />

            <h3>
              In case nobody told you today...
            </h3>

            <p>
              You are precious. You are worthy of beautiful things.
              You deserve friendships that feel safe, laughter that
              makes your cheeks hurt, and mornings you look forward to.
            </p>

            <p>
              And no matter what kind of day you're having, I hope
              you remember:
              {' '}
              <em>you will always have a friend in me.</em>
            </p>

            <div className="final-sign">
              all my love, always
              <Heart size={15} fill="currentColor" aria-hidden="true" />
            </div>
          </div>
        ) : (
          <div className="gift-hint">
            tap your little present to open it
          </div>
        )}

      </div>
    </section>
  );
}
