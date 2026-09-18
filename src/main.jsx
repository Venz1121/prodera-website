import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { SylvaLivingWorldScene } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';
import './styles.css';

const modules = [
  ['01', 'Driving Range', 'See open bays before you arrive and reserve with confidence.', 'images/driving range.png'],
  ['02', 'Tee-time', 'Choose a date, player count, and slot without the back-and-forth.', 'images/tee-time.png'],
  ['03', 'Live Availability', 'Know what is open, limited, or booked at a glance.', 'images/live availability.png'],
  ['04', 'Membership Plan', 'Keep your plan, benefits, and renewal details in one place.', 'images/membership.png'],
];

const team = [
  ['images/john-von-ryen-aguilar.jpg', 'JA', 'John Von Ryen Aguilar'],
  ['images/eiron-dela-cruz.png', 'ED', 'Eiron Dela Cruz'],
  ['images/ckurt-naag.png', 'CN', 'Ckurt Naag'],
  ['images/mervin-pangilinan.png', 'MP', 'Mervin Pangilinan'],
];

function Topbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 20);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`topbar${scrolled ? ' is-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="PRODERA home">
        <img src="images/logo.png" alt="PRODERA — Play More, Wait Less." />
      </a>
      <nav>
        <a href="#experience">Experience</a>
        <a href="#modules">features</a>
        <a href="#staff">Team</a>
      </nav>
      <a
        className="button button-gold"
        href="https://github.com/Venz1121/prodera-website/releases/download/v1.0.1/golf-app.apk"
        download
      >
        Download APK
      </a>
    </header>
  );
}

function App() {
  return (
    <div className="prodera-app">
      <div className="sylva-layer" aria-hidden="true">
        <SylvaLivingWorldScene />
      </div>
      <div className="green-wash" aria-hidden="true" />

      <Topbar />

      <main id="top">
        <section className="hero-copy" aria-labelledby="hero-title">
          <div className="eyebrow">
            <span className="dot" /> PRODERA: AN ONLINE GOLF COURSE MANAGEMENT SYSTEM
            <span className="rule" /> 01—03
          </div>
          <h1 id="hero-title">
            Play more.
            <br />
            <em>Wait less.</em>
          </h1>
          <div className="hero-bottom">
            <div>
              <p>
                PRODERA brings bookings, live availability, rentals, and coaching
                together in one simple app for every part of your golf day.
              </p>
              <div className="actions">
                <a
                  className="button button-gold"
                  href="https://github.com/Venz1121/prodera-website/releases/download/v1.0.1/golf-app.apk"
                  download
                >
                  Get the Android app ↓
                </a>
                <a className="button button-quiet" href="#experience">
                  Explore the experience
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="experience-copy">
            <span>01 / PRODERA</span>
            <h2>
              Everything starts
              <br />
              <em>with a tap.</em>
            </h2>
            <p>
              Registration, live visibility, and reservations in one focused
              member experience.
            </p>
          </div>
          <div className="experience-visual">
            <img
              className="experience-image"
              src="images/landing page.png"
              alt="PRODERA mobile app experience"
            />
          </div>
        </section>

        <section className="modules" id="modules">
          <div className="section-head">
            <span>02 / FEATURES</span>
            <h2>
              Built around
              <br />
              <em>your next round.</em>
            </h2>
            <p>Four focused tools keep the golf day moving.</p>
          </div>
          <div className="module-grid">
            {modules.map(([n, title, text, image]) => (
              <article className="module-card" key={title}>
                <div className="module-image">
                  <img src={image} alt={`${title} PRODERA feature`} />
                </div>
                <div className="module-copy">
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="staff" id="staff">
          <div className="team-heading">
            <span>THE PEOPLE BEHIND THE SYSTEM</span>
            <h2>
              Meet the
              <br />
              <em>team.</em>
            </h2>
          </div>
          <div className="team-grid">
            {team.map(([image, initials, name]) => (
              <article className="team-card" key={name}>
                <div className="team-photo">
                  <img src={image} alt={name} />
                </div>
                <div className="initials-badge">{initials}</div>
                <div className="team-card-copy">
                  <h3>{name}</h3>
                  <p>Developer</p>
                </div>
              </article>
            ))}
          </div>
          <div className="adviser-card">
            <div className="adviser-badge">CC</div>
            <div>
              <span>CAPSTONE INSTRUCTOR &amp; ADVISER</span>
              <h3>Dr. Cherry Collera</h3>
              <p>
                Guiding the team from concept to a more connected golf
                experience.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <strong>PR⦿DERA</strong>
        <span>Play More, Wait Less.</span>
        <span>BPSU-CCST Main Campus · Balanga City, Bataan</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
