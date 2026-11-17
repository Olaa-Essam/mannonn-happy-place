import React from 'react';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';

const starter = [
  {
    id: 1,
    src: photo1,
    title: 'the little moments',
    caption: 'the ones that become our favourites',
  },
  {
    id: 2,
    src: photo2,
    title: 'our silly side',
    caption: 'proof that we are never normal',
  },
  {
    id: 3,
    src: photo3,
    title: 'a day to keep',
    caption: 'one for the memory box',
  },
];

export default function Memories() {
  return (
    <section className="content-width section-inner">
      {/* Section heading */}
      <div className="section-kicker">04 — OUR LITTLE TIME CAPSULE</div>

      <h2>
        Little moments,
        <br />
        <em>big feelings.</em>
      </h2>

      <p className="section-intro">
        A space waiting for your favourite photos, inside jokes, and memories
        worth keeping.
      </p>

      {/* Memory gallery */}
      <div className="memory-grid">
        {starter.map((memory, index) => (
          <div className={`uploaded-memory memory-card-${index + 1}`} key={memory.id}>
            <img src={memory.src} alt={memory.title} loading="lazy" />
            <div className="memory-caption">
              <strong>{memory.title}</strong>
              <p>{memory.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}