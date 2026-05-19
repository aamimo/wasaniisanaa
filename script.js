:root {
  --brand-blue: #2f63d4;
  --brand-blue-deep: #1d3f8f;
  --brand-yellow: #f5c038;
  --brand-green: #3fb05a;
  --brand-red: #e2433a;
  --bg: #fbfcff;
  --fg: #14213d;
  --muted: #5b6478;
  --card: #ffffff;
  --border: #e5e8ef;
  --gradient-hero: linear-gradient(135deg, #1d3f8f 0%, #2f63d4 55%, #3fb05a 100%);
  --gradient-accent: linear-gradient(90deg, var(--brand-yellow), var(--brand-red), var(--brand-green), var(--brand-blue));
  --shadow-soft: 0 8px 30px -10px rgba(29, 63, 143, 0.2);
  --shadow-elegant: 0 20px 60px -20px rgba(29, 63, 143, 0.45);
  --radius: 14px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: "Poppins", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: var(--fg);
  background: var(--bg);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; border-radius: 8px; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; border: none; background: none; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* Header Layout */
.header {
  position: sticky;
  top: 0; z-index: 50;
  background: rgba(251, 252, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.header-inner {
  display: flex;
  align-items: center; justify-content: space-between;
  height: 80px;
}
.brand { display: flex; align-items: center; gap: 12px; }
.brand img { height: 48px; width: 48px; object-fit: contain; }
.brand-text { line-height: 1.1; }
.brand-text strong { display: block; font-weight: 700; color: var(--brand-blue-deep); }
.brand-text span { font-size: 12px; color: var(--muted); }

.nav { display: flex; gap: 4px; }
.nav a {
  padding: 8px 18px;
  border-radius: 999px; font-size: 14px; font-weight: 500;
  color: rgba(20,33,61,0.7); transition: all .2s;
}
.nav a:hover { background: #eef0f5; color: var(--fg); }
.nav a.active {
  background: var(--brand-blue-deep); color: #fff; font-weight: 600;
}

.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 12px 26px; border-radius: 999px; font-weight: 600; font-size: 14px;
  transition: transform .2s, box-shadow .2s;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary { background: var(--gradient-hero); color: #fff; box-shadow: var(--shadow-soft); }
.btn-yellow { background: var(--brand-yellow); color: var(--brand-blue-deep); }
.btn-white { background: #fff; color: var(--brand-blue-deep); box-shadow: var(--shadow-elegant); }

.menu-toggle { display: none; font-size: 24px; }

/* Route Controllers */
.page { display: none; }
.page.active { display: block; }

/* Hero Block */
.hero { position: relative; overflow: hidden; color: #fff; }
.hero-bg { position: absolute; inset: 0; background: var(--gradient-hero); z-index: -2; }
.hero-img {
  position: absolute; inset: 0; background-size: cover; background-position: center;
  opacity: .3; mix-blend-mode: overlay; z-index: -1;
}
.hero-inner { padding: 120px 0; }
.hero .badge {
  display: inline-block; padding: 6px 16px; border-radius: 999px;
  background: rgba(255,255,255,0.15); backdrop-filter: blur(6px);
  font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
  margin-bottom: 24px;
}
.hero h1 { font-size: clamp(36px, 6vw, 76px); font-weight: 800; line-height: 1.05; max-width: 900px; }
.hero h1 .accent { color: var(--brand-yellow); }
.hero p { margin-top: 24px; max-width: 600px; font-size: 18px; color: rgba(255,255,255,0.85); }
.hero .actions { margin-top: 40px; display: flex; gap: 16px; flex-wrap: wrap; }
.accent-bar { height: 8px; background: var(--gradient-accent); }

/* Statistics Component */
.stats {
  position: relative; z-index: 10; margin-top: -48px;
  background: var(--card); border: 1px solid var(--border); border-radius: 24px;
  padding: 32px; box-shadow: var(--shadow-soft);
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
}
.stat { text-align: center; }
.stat-num { font-size: clamp(24px, 3.5vw, 44px); font-weight: 800; color: var(--brand-blue-deep); }
.stat-label { font-size: 14px; color: var(--muted); margin-top: 4px; }

/* Structural Defaults */
.section { padding: 96px 0; }
.section h2 { font-size: clamp(30px, 4vw, 48px); font-weight: 700; letter-spacing: -0.02em; }
.eyebrow { font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--brand-blue); }
.lead { margin-top: 16px; font-size: 18px; color: var(--muted); max-width: 720px; }

.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.photo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.photo-grid img { border-radius: 18px; aspect-ratio: 3/4; object-fit: cover; box-shadow: var(--shadow-soft); }
.photo-grid img:nth-child(2) { margin-top: 32px; }

.values-bg { background: #f3f5fa; }
.values { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 50px; }
.value-card {
  background: var(--card); border: 1px solid var(--border); border-radius: 18px;
  padding: 24px; transition: box-shadow .2s;
}
.value-card:hover { box-shadow: var(--shadow-soft); }
.value-card .bar { height: 6px; width: 40px; border-radius: 999px; margin-bottom: 16px; }
.value-card h3 { font-size: 16px; font-weight: 600; }

.cta-card {
  position: relative; overflow: hidden; border-radius: 24px; padding: 60px;
  background: var(--gradient-hero); color: #fff;
}
.cta-card .cta-img {
  position: absolute; inset: 0; background-size: cover; background-position: center;
  opacity: .25; mix-blend-mode: overlay;
}
.cta-card > * { position: relative; }
.cta-card h2 { color: #fff; }
.cta-card p { margin-top: 16px; color: rgba(255,255,255,0.85); max-width: 600px; }

/* Profile Layouts */
.mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 60px; }
.mv-card { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 32px; box-shadow: var(--shadow-soft); }
.mv-card h2, .mv-card h3 { font-size: 24px; color: var(--brand-blue-deep); }
.mv-card p { margin-top: 14px; color: var(--muted); }
.story { margin-top: 60px; max-width: 900px; }
.story h2 { font-size: 28px; margin-bottom: 16px; }
.story p { margin-top: 16px; color: var(--muted); font-size: 17px; }

.ceo-card {
  background: var(--card); border: 1px solid var(--border); border-radius: 24px;
  padding: 40px; margin-top: 40px; box-shadow: var(--shadow-soft); position: relative; overflow: hidden;
}
.ceo-info .role { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--brand-blue); display: block; }
.ceo-info h3 { font-size: 28px; margin-top: 4px; color: var(--brand-blue-deep); }
.ceo-info .bio { margin-top: 16px; color: var(--muted); font-size: 15px; }
.ceo-info .meta { margin-top: 24px; display: grid; gap: 8px; font-size: 14px; }
.ceo-info .stripe { position: absolute; bottom: 0; left: 0; right: 0; height: 6px; background: var(--gradient-accent); }

/* Forms */
.contact-form {
  background: var(--card); border: 1px solid var(--border); padding: 40px;
  border-radius: 24px; box-shadow: var(--shadow-elegant); width: 100%;
}
.contact-form h2 { font-size: 24px; margin-bottom: 24px; }
.contact-form input, .contact-form textarea {
  width: 100%; padding: 14px; border: 1px solid var(--border);
  background: var(--bg); border-radius: 10px; font-family: inherit;
  margin-bottom: 16px; font-size: 14px;
}
.contact-form textarea { height: 120px; resize: vertical; }
.contact-form button {
  width: 100%; padding: 14px; background: var(--brand-blue-deep);
  color: #fff; font-weight: 600; border-radius: 10px; transition: background .2s;
}
.contact-form button:hover { background: var(--brand-blue); }

/* Footer */
.footer { background: var(--brand-blue-deep); color: rgba(255,255,255,0.9); margin-top: 80px; }
.footer-inner { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; padding: 48px 24px; max-width: 1200px; margin: 0 auto; }
.footer h4 { font-weight: 600; margin-bottom: 12px; }
.footer p { font-size: 14px; color: rgba(255,255,255,0.7); }
.footer .brand-line { font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #fff; }
.footer .copy { text-align: center; padding: 16px; font-size: 12px; color: rgba(255,255,255,0.5); border-top: 1px solid rgba(255,255,255,0.1); }

/* Responsive adjustments */
@media (max-width: 860px) {
  .nav { display: none; }
  .menu-toggle { display: block; }
  .two-col, .mv-grid, .footer-inner { grid-template-columns: 1fr; gap: 40px; }
  .stats { grid-template-columns: 1fr 1fr; }
  .values { grid-template-columns: repeat(2, 1fr); }
}
