import React from 'react';
import { useState } from 'react';
import {
  Heart,
  Cloud,
  Sun,
  Moon,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

const moods = [
  {
    id: 'sad',
    label: 'A little sad',
    icon: Cloud,
    title: "It's okay to feel this way.",
    body: "You don't need to fix your feelings right now. Take a breath, drink some water, and be gentle with yourself. This feeling is a visitor, not your forever.",
    color: 'mood-lilac',
  },
  {
    id: 'tired',
    label: 'So tired',
    icon: Moon,
    title: 'Rest is productive, too.',
    body: 'You have done enough for today. The world can wait a little. Get cozy, unclench your shoulders, and let yourself do absolutely nothing for a while.',
    color: 'mood-blue',
  },
  {
    id: 'okay',
    label: 'Somewhere in between',
    icon: Heart,
    title: 'You are doing just fine.',
    body: "Not every day needs to be amazing. Some days are simply days, and that's perfectly alright. One small step at a time, lovely girl.",
    color: 'mood-pink',
  },
  {
    id: 'happy',
    label: 'Actually happy!',
    icon: Sun,
    title: 'Please keep this feeling!',
    body: 'Look at you, sunshine! I hope this moment stretches out and gives you a hundred tiny reasons to smile. You deserve days that feel like this.',
    color: 'mood-peach',
  },
];

export default function Mood() {
  const [selected, setSelected] = useState(null);

  const selectedMood = moods.find(
    (mood) => mood.id === selected
  );

  const resetMood = () => {
    setSelected(null);
  };

  return (
    <section className="content-width section-inner mood-section">

      {/* Section heading */}
      <div className="section-kicker">
        03 — CHECK IN WITH YOURSELF
      </div>

      <h2>
        How's your heart
        <br />
        <em>doing today?</em>
      </h2>

      <p className="section-intro">
        No pressure to feel any certain way. Just pick what feels closest.
      </p>

      {/* Mood options */}
      <div className="mood-options">
        {moods.map(({ id, label, icon: Icon }) => {
          const isSelected = selected === id;

          return (
            <button
              key={id}
              type="button"
              className={`mood-option ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelected(id)}
              aria-pressed={isSelected}
            >
              <span className="mood-icon">
                <Icon size={23} aria-hidden="true" />
              </span>

              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Selected mood message */}
      <div aria-live="polite" aria-atomic="true">
        {selectedMood && (
          <div className={`mood-message ${selectedMood.color}`}>

            <Sparkles size={19} aria-hidden="true" />

            <h3>{selectedMood.title}</h3>

            <p>{selectedMood.body}</p>

            <span>
              sending you the biggest hug
              <Heart size={13} fill="currentColor" aria-hidden="true" />
            </span>

            <button
              type="button"
              className="text-button"
              onClick={resetMood}
            >
              <RotateCcw size={13} aria-hidden="true" />
              choose another mood
            </button>

          </div>
        )}
      </div>

    </section>
  );
}
