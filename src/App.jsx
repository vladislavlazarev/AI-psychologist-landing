import { useState } from "react";

/* ─── Analytics helpers ─── */
function track(event, params = {}) {
  if (window.gtag) window.gtag("event", event, params);
  if (event === "store_click" && window.fbq) window.fbq("track", "Lead", { content_name: params.label });
  if (event === "waitlist_signup" && window.fbq) window.fbq("track", "CompleteRegistration");
}

/* ─── Waitlist Modal ─── */
function Modal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  if (!open) return null;
  const submit = () => { track("waitlist_signup", { label: "email" }); setDone(true); };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        {!done ? (<>
          <div className="modal-icon">🎉</div>
          <h3>You're early</h3>
          <p className="muted">We launch in 2 weeks. Drop your email — we'll notify you the second it's live.</p>
          <div className="modal-form">
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" type="email" />
            <button className="btn-primary" onClick={submit}>Notify me</button>
          </div>
          <p className="tiny">No spam. Just one email on launch day.</p>
        </>) : (<>
          <div className="modal-icon success">✓</div>
          <h3>You're on the list</h3>
          <p className="muted">We'll email you on launch day. Talk soon.</p>
        </>)}
      </div>
    </div>
  );
}

/* ─── Store buttons ─── */
function StoreBtns({ onClick }) {
  return (
    <div className="store-btns">
      <button className="store-btn" onClick={() => onClick("ios")}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#000"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
        <div><span className="store-label">Download on the</span><span className="store-name">App Store</span></div>
      </button>
      <button className="store-btn" onClick={() => onClick("android")}>
        <svg width="20" height="22" viewBox="0 0 24 24" fill="none"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4"/><path d="M17.556 8.247L5.124.697a1 1 0 00-1.015-.019l9.683 11.32 3.764-3.751z" fill="#EA4335"/><path d="M17.556 15.753l-3.764-3.751-9.683 11.32a1 1 0 001.015-.019l12.432-7.55z" fill="#34A853"/><path d="M21.39 12c0-.508-.271-.975-.708-1.23l-3.126-1.523-4.148 4.13 4.148 4.13 3.126-1.523c.437-.255.708-.722.708-1.23z" fill="#FBBC04"/></svg>
        <div><span className="store-label">Get it on</span><span className="store-name">Google Play</span></div>
      </button>
    </div>
  );
}

/* ─── Phone Mockup ─── */
function Phone() {
  return (
    <div className="phone-wrap">
      <div className="phone-glow" />
      <div className="phone">
        <div className="phone-island" />
        <div className="phone-status">
          <span className="phone-time">9:41</span>
          <div className="phone-icons">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><rect x="0" y="3" width="2.5" height="8" rx=".8" fill="#fff"/><rect x="4" y="2" width="2.5" height="9" rx=".8" fill="#fff"/><rect x="8" y=".5" width="2.5" height="10.5" rx=".8" fill="#fff"/><rect x="12" y=".5" width="2.5" height="10.5" rx=".8" fill="#fff" opacity=".3"/></svg>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12.55a11 11 0 0114 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill="#fff"/></svg>
            <div className="phone-battery"><div className="phone-battery-fill" /><div className="phone-battery-cap" /></div>
          </div>
        </div>
        <div className="phone-header">
          <svg width="9" height="15" viewBox="0 0 9 15" fill="none" stroke="#8b5cf6" strokeWidth="2.2" strokeLinecap="round"><path d="M7.5 1.5L1.5 7.5l6 6"/></svg>
          <div className="phone-avatar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M5.5 21c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/></svg>
          </div>
          <div><div className="phone-name">AI Psychologist</div><div className="phone-online">Online</div></div>
        </div>
        <div className="phone-chat">
          <div className="phone-date">Today, 9:38 AM</div>
          <div className="bubble-user">Jake and I had another fight</div>
          <div className="bubble-ai"><strong>Back in September you described the same pattern.</strong> You felt unheard and shut down. Same thing?</div>
          <div className="bubble-user">How do you remember that?</div>
          <div className="bubble-typing"><span/><span/><span/></div>
        </div>
        <div className="phone-input-area">
          <div className="phone-input-row">
            <div className="phone-input-field">Message...</div>
            <div className="phone-send"><svg width="15" height="15" viewBox="0 0 24 24" fill="#fff"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></div>
          </div>
        </div>
        <div className="phone-home-bar" />
      </div>
    </div>
  );
}

/* ─── Feature Card ─── */
function Card({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

/* ═══════════════════ MAIN ═══════════════════ */
export default function App() {
  const [modal, setModal] = useState(null);
  const open = (src) => { track("store_click", { event_category: "conversion", label: src }); setModal(src); };

  return (<>
    <style>{`
      *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
      :root { --f: 'Sora', -apple-system, sans-serif; --accent: #8b5cf6; --accent-light: #a78bfa; }
      html { scroll-behavior: smooth; }
      body { background: #08080c; color: #fff; font-family: var(--f); -webkit-font-smoothing: antialiased; }
      ::selection { background: rgba(139,92,246,.3); }

      /* ── Layout ── */
      .wrap { max-width: 1180px; margin: 0 auto; padding-left: 40px; padding-right: 40px; }
      .section-label { color: #4a4a60; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 14px; }
      .section-title { font-size: 36px; font-weight: 300; color: #e8e8f0; letter-spacing: -0.02em; margin-bottom: 48px; }

      /* ── Nav ── */
      nav { display: flex; align-items: center; justify-content: space-between; padding: 20px 0; }
      .nav-logo { display: flex; align-items: center; gap: 10px; font-size: 16px; font-weight: 600; letter-spacing: -0.01em; }
      .nav-logo-icon { width: 32px; height: 32px; border-radius: 9px; background: linear-gradient(135deg, #7c3aed, #6366f1); display: flex; align-items: center; justify-content: center; }
      .nav-cta { padding: 9px 20px; border-radius: 11px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.08); color: #ccccd8; font-size: 13.5px; font-weight: 500; cursor: pointer; font-family: var(--f); transition: all .2s; }
      .nav-cta:hover { background: rgba(139,92,246,.1); border-color: rgba(139,92,246,.25); color: #d4bcff; }

      /* ── Hero ── */
      .hero { display: flex; align-items: center; gap: 72px; padding: 80px 0 60px; }
      .hero-text { flex: 1; min-width: 0; }
      .hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 16px 7px 8px; border-radius: 100px; background: rgba(139,92,246,.06); border: 1px solid rgba(139,92,246,.15); margin-bottom: 28px; }
      .hero-badge .dot { width: 8px; height: 8px; border-radius: 4px; background: #22c55e; }
      .hero-badge span { color: var(--accent-light); font-size: 12.5px; font-weight: 500; letter-spacing: .3px; }
      h1 { font-size: 52px; font-weight: 300; line-height: 1.15; letter-spacing: -0.03em; color: #f0f0f5; margin-bottom: 22px; }
      h1 em { font-family: 'Crimson Pro', Georgia, serif; font-style: italic; font-weight: 600; font-size: 58px; background: linear-gradient(135deg, #a78bfa, #c084fc, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .hero-sub { font-size: 17px; line-height: 1.7; color: #6b6b80; margin-bottom: 36px; max-width: 480px; }
      .hero-free { color: #3a3a4a; font-size: 12.5px; margin-top: 16px; }

      /* ── Store buttons ── */
      .store-btns { display: flex; gap: 12px; flex-wrap: wrap; }
      .store-btn { display: inline-flex; align-items: center; gap: 11px; padding: 12px 24px; border-radius: 14px; background: #fff; border: none; cursor: pointer; transition: all .2s; font-family: var(--f); }
      .store-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,255,255,.08); }
      .store-label { display: block; font-size: 9.5px; color: #888; line-height: 1.1; font-weight: 500; letter-spacing: .2px; text-align: left; }
      .store-name { display: block; font-size: 16px; font-weight: 700; color: #000; line-height: 1.25; text-align: left; }

      /* ── Phone ── */
      .phone-wrap { width: 300px; flex-shrink: 0; position: relative; animation: float 5s ease-in-out infinite; animation-delay: .5s; }
      .phone-glow { position: absolute; top: 10%; left: -25%; width: 150%; height: 80%; background: radial-gradient(ellipse, rgba(139,92,246,.1) 0%, transparent 65%); filter: blur(50px); pointer-events: none; }
      .phone { width: 280px; height: 590px; border-radius: 44px; background: #000; overflow: hidden; position: relative; border: 2.5px solid #222228; box-shadow: 0 0 0 1px rgba(255,255,255,.02), 0 40px 100px rgba(0,0,0,.5), 0 20px 60px rgba(139,92,246,.06); }
      .phone-island { position: absolute; top: 10px; left: 50%; transform: translateX(-50%); width: 100px; height: 28px; border-radius: 20px; background: #000; z-index: 10; }
      .phone-status { padding: 14px 24px 0; display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 5; }
      .phone-time { color: #fff; font-size: 13px; font-weight: 600; }
      .phone-icons { display: flex; align-items: center; gap: 5px; }
      .phone-battery { width: 22px; height: 10px; border-radius: 3px; border: 1.5px solid rgba(255,255,255,.35); position: relative; display: flex; align-items: center; padding: 1.5px; }
      .phone-battery-fill { width: 65%; height: 100%; border-radius: 1.5px; background: #fff; }
      .phone-battery-cap { position: absolute; right: -3px; top: 50%; transform: translateY(-50%); width: 2px; height: 5px; border-radius: 0 1px 1px 0; background: rgba(255,255,255,.35); }
      .phone-header { padding: 18px 16px 12px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,.05); }
      .phone-avatar { width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg, #7c3aed, #6366f1); display: flex; align-items: center; justify-content: center; }
      .phone-name { color: #f0f0f5; font-size: 14px; font-weight: 600; line-height: 1.2; }
      .phone-online { color: #48486a; font-size: 10.5px; }
      .phone-chat { padding: 16px 12px; display: flex; flex-direction: column; gap: 10px; }
      .phone-date { text-align: center; color: #3a3a50; font-size: 10px; padding: 2px 0 8px; }
      .bubble-user { align-self: flex-end; max-width: 72%; padding: 10px 14px; border-radius: 16px 16px 4px 16px; background: #8b5cf6; color: #fff; font-size: 12.5px; line-height: 1.5; }
      .bubble-ai { align-self: flex-start; max-width: 82%; padding: 10px 14px; border-radius: 16px 16px 16px 4px; background: rgba(255,255,255,.06); color: #c8c8d8; font-size: 12.5px; line-height: 1.5; }
      .bubble-ai strong { color: #d4bcff; }
      .bubble-typing { align-self: flex-start; max-width: 30%; padding: 12px 18px; border-radius: 16px 16px 16px 4px; background: rgba(255,255,255,.06); display: flex; gap: 5px; align-items: center; }
      .bubble-typing span { width: 6px; height: 6px; border-radius: 50%; background: #6b6b80; animation: typeDot 1.4s ease-in-out infinite; }
      .bubble-typing span:nth-child(2) { animation-delay: .2s; }
      .bubble-typing span:nth-child(3) { animation-delay: .4s; }
      .phone-input-area { position: absolute; bottom: 0; left: 0; right: 0; padding: 10px 12px 32px; background: linear-gradient(0deg, #000 70%, transparent); }
      .phone-input-row { display: flex; align-items: center; gap: 8px; }
      .phone-input-field { flex: 1; background: rgba(255,255,255,.06); border-radius: 20px; padding: 10px 16px; border: 1px solid rgba(255,255,255,.04); color: #3a3a50; font-size: 13px; }
      .phone-send { width: 36px; height: 36px; border-radius: 18px; background: #8b5cf6; display: flex; align-items: center; justify-content: center; }
      .phone-home-bar { position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); width: 120px; height: 4px; border-radius: 2px; background: rgba(255,255,255,.15); }

      /* ── Features ── */
      .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
      .feature-card { padding: 32px 28px; border-radius: 22px; background: linear-gradient(165deg, rgba(255,255,255,.025), rgba(255,255,255,.005)); border: 1px solid rgba(255,255,255,.05); transition: border-color .3s; }
      .feature-card:hover { border-color: rgba(139,92,246,.2); }
      .feature-icon { width: 44px; height: 44px; border-radius: 13px; background: rgba(139,92,246,.08); border: 1px solid rgba(139,92,246,.12); display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 18px; }
      .feature-card h3 { color: #eeeef5; font-size: 17px; font-weight: 600; margin-bottom: 8px; }
      .feature-card p { color: #6b6b80; font-size: 14.5px; line-height: 1.65; }

      /* ── Steps ── */
      .steps { display: flex; flex-direction: column; gap: 32px; max-width: 540px; }
      .step { display: flex; gap: 20px; align-items: flex-start; }
      .step-num { width: 42px; height: 42px; border-radius: 13px; flex-shrink: 0; background: rgba(139,92,246,.07); border: 1px solid rgba(139,92,246,.15); display: flex; align-items: center; justify-content: center; color: var(--accent-light); font-size: 16px; font-weight: 700; }
      .step h4 { color: #eeeef5; font-size: 16px; font-weight: 600; margin-bottom: 5px; }
      .step p { color: #6b6b80; font-size: 14.5px; line-height: 1.6; }

      /* ── Trust ── */
      .trust-row { display: flex; gap: 40px; justify-content: center; }
      .trust-item { text-align: center; flex: 1; min-width: 200px; }
      .trust-icon { width: 48px; height: 48px; border-radius: 14px; margin: 0 auto 14px; background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.06); display: flex; align-items: center; justify-content: center; font-size: 22px; }
      .trust-item h4 { color: #dddde8; font-size: 15px; font-weight: 600; margin-bottom: 6px; }
      .trust-item p { color: #55556a; font-size: 13.5px; line-height: 1.55; }

      /* ── CTA ── */
      .final-cta { max-width: 760px; margin: 0 auto; padding: 80px 40px 100px; text-align: center; }
      .final-cta h2 { font-size: 40px; font-weight: 300; line-height: 1.25; color: #e8e8f0; letter-spacing: -0.02em; margin-bottom: 14px; }
      .final-cta h2 em { font-family: 'Crimson Pro', Georgia, serif; font-style: italic; font-weight: 600; color: var(--accent-light); font-size: 44px; }
      .final-cta .sub { color: #55556a; font-size: 16px; margin-bottom: 36px; }
      .final-cta .tiny { color: #3a3a4a; font-size: 12.5px; margin-top: 20px; }

      /* ── Footer ── */
      footer { padding: 28px 0; border-top: 1px solid rgba(255,255,255,.03); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
      footer span { color: #2a2a38; font-size: 12.5px; }
      .footer-links { display: flex; gap: 24px; }
      .footer-links a { color: #3a3a4a; font-size: 12.5px; text-decoration: none; transition: color .2s; }
      .footer-links a:hover { color: #888; }

      /* ── Modal ── */
      .modal-overlay { position: fixed; inset: 0; z-index: 999; background: rgba(0,0,0,.8); backdrop-filter: blur(20px); display: flex; align-items: center; justify-content: center; padding: 24px; }
      .modal { width: 100%; max-width: 420px; border-radius: 28px; background: linear-gradient(165deg, #141418, #0e0e12); border: 1px solid rgba(255,255,255,.06); padding: 52px 40px 44px; text-align: center; position: relative; box-shadow: 0 60px 120px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.04); }
      .modal-close { position: absolute; top: 18px; right: 18px; background: rgba(255,255,255,.04); border: none; color: #555; font-size: 14px; cursor: pointer; width: 32px; height: 32px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
      .modal-icon { width: 56px; height: 56px; border-radius: 16px; margin: 0 auto 20px; background: linear-gradient(135deg, rgba(139,92,246,.15), rgba(99,102,241,.08)); border: 1px solid rgba(139,92,246,.2); display: flex; align-items: center; justify-content: center; font-size: 26px; }
      .modal-icon.success { background: rgba(34,197,94,.1); border-color: rgba(34,197,94,.2); }
      .modal h3 { color: #f0f0f5; font-size: 22px; font-weight: 600; margin-bottom: 8px; }
      .modal .muted { color: #6b6b80; font-size: 14.5px; line-height: 1.6; margin-bottom: 28px; }
      .modal-form { display: flex; gap: 10px; }
      .modal-form input { flex: 1; padding: 14px 16px; border-radius: 14px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); color: #fff; font-size: 14.5px; outline: none; font-family: var(--f); }
      .btn-primary { padding: 14px 22px; border-radius: 14px; background: var(--accent); border: none; color: #fff; font-size: 14.5px; font-weight: 600; cursor: pointer; white-space: nowrap; font-family: var(--f); }
      .modal .tiny { color: #3a3a4a; font-size: 12px; margin-top: 16px; }

      /* ── Animations ── */
      @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(.5deg)} }
      @keyframes typeDot { 0%,60%,100%{opacity:.3;transform:translateY(0)} 30%{opacity:1;transform:translateY(-3px)} }
      @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

      /* ═══════ RESPONSIVE ═══════ */
      @media (max-width: 1024px) {
        .features-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 768px) {
        .wrap { padding-left: 20px; padding-right: 20px; }
        .hero { flex-direction: column; gap: 48px; padding: 48px 0 40px; text-align: center; }
        .hero-text { min-width: 0; }
        .hero-badge { margin-left: auto; margin-right: auto; }
        h1 { font-size: 36px; }
        h1 em { font-size: 40px; }
        .hero-sub { font-size: 15.5px; margin-left: auto; margin-right: auto; }
        .store-btns { justify-content: center; }
        .hero-free { text-align: center; }
        .phone-wrap { margin: 0 auto; width: 260px; }
        .phone { width: 244px; height: 514px; border-radius: 38px; }
        .phone-island { width: 86px; height: 24px; top: 8px; }
        .section-title { font-size: 28px; margin-bottom: 32px; }
        .features-grid { grid-template-columns: 1fr; gap: 12px; }
        .feature-card { padding: 24px 22px; }
        .trust-row { flex-direction: column; align-items: center; gap: 32px; }
        .trust-item { min-width: 0; max-width: 300px; }
        .final-cta { padding: 60px 20px 80px; }
        .final-cta h2 { font-size: 30px; }
        .final-cta h2 em { font-size: 34px; }
        .modal { padding: 40px 24px 36px; border-radius: 22px; }
        .modal-form { flex-direction: column; }
        footer { flex-direction: column; align-items: center; text-align: center; }
        .footer-links { gap: 16px; }
      }
      @media (max-width: 380px) {
        h1 { font-size: 30px; }
        h1 em { font-size: 34px; }
        .store-btns { flex-direction: column; align-items: center; }
        .store-btn { width: 100%; justify-content: center; }
      }
    `}</style>

    <Modal open={!!modal} onClose={() => setModal(null)} />

    <div className="wrap">
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          <div className="nav-logo-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M5.5 21c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/></svg></div>
          AI Psychologist
        </div>
        <button className="nav-cta" onClick={() => open("nav")}>Download free</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <div className="hero-badge"><div className="dot"/><span>Available 24/7 · Free to start</span></div>
          <h1>An AI psychologist<br/>that <em>remembers you</em></h1>
          <p className="hero-sub">Not a chatbot that resets every conversation. A psychologist that knows your patterns, your relationships, and your history — and uses it all to help you grow.</p>
          <StoreBtns onClick={open} />
          <p className="hero-free">Free · No credit card required</p>
        </div>
        <Phone />
      </section>

      {/* FEATURES */}
      <section style={{ paddingTop: 80, paddingBottom: 80 }}>
        <p className="section-label">Why this is not ChatGPT</p>
        <h2 className="section-title">Four things no other AI does</h2>
        <div className="features-grid">
          <Card icon="🧠" title="Remembers you forever" text="Had a fight with Jake? It already knows your September argument followed the same pattern. No re-explaining your life every session." />
          <Card icon="🌙" title="There at 2 AM" text="Spiraling at night? Your therapist is asleep. ChatGPT forgot who you are. This one knows exactly where you left off." />
          <Card icon="🪞" title="Won't just validate you" text={`"Tell me I'm right" — "No. Here's what you're not seeing." Built for people who want answers, not comfort.`} />
          <Card icon="📱" title="Analyzes your real chats" text="Send a screenshot of your argument. AI breaks it down using your history, their personality, and your conflict patterns." />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ paddingTop: 60, paddingBottom: 80 }}>
        <p className="section-label">How it works</p>
        <h2 className="section-title">Start in 60 seconds</h2>
        <div className="steps">
          <div className="step"><div className="step-num">1</div><div><h4>Tell it about yourself</h4><p>Share your story through chat or voice. It builds a profile of your relationships, patterns, and history.</p></div></div>
          <div className="step"><div className="step-num">2</div><div><h4>Talk like you would to a real therapist</h4><p>Text, voice messages, screenshots — whatever feels natural. Available anytime, anywhere.</p></div></div>
          <div className="step"><div className="step-num">3</div><div><h4>Watch it get smarter</h4><p>Every conversation deepens its understanding. Patterns it spots in month 3 are invisible in week 1.</p></div></div>
        </div>
      </section>

      {/* TRUST */}
      <section style={{ paddingTop: 60, paddingBottom: 80, borderTop: "1px solid rgba(255,255,255,.03)" }}>
        <div className="trust-row">
          <div className="trust-item"><div className="trust-icon">🧪</div><h4>Evidence-based</h4><p>Uses CBT, attachment theory, and pattern recognition — the same frameworks your therapist uses.</p></div>
          <div className="trust-item"><div className="trust-icon">🔒</div><h4>Private by design</h4><p>Your data stays yours. No ads, no selling data. Delete everything anytime.</p></div>
          <div className="trust-item"><div className="trust-icon">🤝</div><h4>Not a replacement</h4><p>A tool between sessions, or a first step if you're not ready for a therapist yet.</p></div>
        </div>
      </section>
    </div>

    {/* FINAL CTA */}
    <section className="final-cta">
      <h2>Your next argument is coming.<br/><em>Be ready.</em></h2>
      <p className="sub">Download free. Start building context today.</p>
      <div style={{ display: "flex", justifyContent: "center" }}><StoreBtns onClick={open} /></div>
      <p className="tiny">Free plan · 10 messages/day · Premium unlocks 70</p>
    </section>

    <div className="wrap">
      <footer>
        <span>© 2026 AI Psychologist</span>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  </>);
}
