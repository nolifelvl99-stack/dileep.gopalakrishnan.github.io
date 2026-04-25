// Variation A — Phosphor
// Classic CRT-terminal. Green-on-black, scanline feel, everything framed as
// shell output. Heavy use of ASCII box-drawing. Single accent color.

const PH = {
  bg: '#07100b',
  bg2: '#0a150f',
  fg: '#c8ffd8',
  dim: '#5a8a6f',
  muted: '#3a5a48',
  accent: '#39ff74',
  warn: '#ffb454',
  rule: 'rgba(57,255,116,0.18)',
  font: '"JetBrains Mono", ui-monospace, Menlo, monospace',
};

function PhBox({ title, children, style }) {
  return (
    <div style={{ border: `1px solid ${PH.rule}`, background: PH.bg2, ...style }}>
      {title && (
        <div style={{ padding: '8px 14px', borderBottom: `1px solid ${PH.rule}`, color: PH.dim, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
          <span>{title}</span>
          <span style={{ color: PH.muted }}>●●●</span>
        </div>
      )}
      <div style={{ padding: '18px 20px' }}>{children}</div>
    </div>
  );
}

function VariationPhosphor() {
  const scan = 'repeating-linear-gradient(0deg, rgba(255,255,255,0.0) 0px, rgba(255,255,255,0.0) 2px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)';
  return (
    <div style={{ width: '100%', height: '100%', background: PH.bg, color: PH.fg, fontFamily: PH.font, fontSize: 14, lineHeight: 1.6, position: 'relative', overflow: 'hidden' }}>
      {/* scanlines overlay */}
      <div style={{ position: 'absolute', inset: 0, background: scan, pointerEvents: 'none', mixBlendMode: 'overlay', opacity: 0.6 }}/>
      {/* vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)', pointerEvents: 'none' }}/>

      <div style={{ position: 'relative', padding: '28px 56px 56px' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: PH.dim, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: `1px dashed ${PH.rule}`, paddingBottom: 10 }}>
          <span>tty1 · dileep@d365 ~ </span>
          <span>{'[ uptime 10y 240d ]'}</span>
          <span>session · 2026.04.22</span>
        </div>

        {/* Hero */}
        <div style={{ padding: '40px 0 30px', borderBottom: `1px solid ${PH.rule}` }}>
          <div style={{ color: PH.dim, fontSize: 12 }}>$ whoami --verbose</div>
          <h1 style={{ margin: '18px 0 0', fontFamily: PH.font, fontWeight: 600, fontSize: 72, lineHeight: 1.02, letterSpacing: '-0.02em', color: PH.fg }}>
            Dileep<br/>Gopalakrishnan<span style={{ color: PH.accent, animation: 'blink 1s step-end infinite' }}>_</span>
          </h1>
          <style>{'@keyframes blink{50%{opacity:0}}'}</style>
          <div style={{ marginTop: 22, color: PH.dim, maxWidth: 720, fontSize: 15 }}>
            &gt; Microsoft Dynamics 365 Finance &amp; Operations specialist · 10+ years hands-on<br/>
            &gt; ISV add-on development · AX 2012 R3 migrations · functional + technical<br/>
            &gt; Available for freelance &amp; consulting engagements
          </div>
          <div style={{ marginTop: 26, display: 'flex', gap: 10 }}>
            {['[ book a call ]', '[ read blog ]', '[ download cv ]'].map((t, i) => (
              <span key={i} style={{ padding: '10px 18px', border: `1px solid ${i===0?PH.accent:PH.rule}`, color: i===0?PH.accent:PH.fg, fontSize: 13, letterSpacing: '0.04em' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* About + Skills row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, marginTop: 36 }}>
          <PhBox title="about.md">
            <p style={{ margin: 0, color: PH.fg, fontSize: 15, lineHeight: 1.7 }}>
              Dynamic and ambitious professional with over a decade of hands-on experience in Microsoft Dynamics 365 Finance &amp; Operations, as well as AX 2012 R3. I've mastered functional expertise and actively contributed to ISV add-on development — delivering scalable, client-focused outcomes.
            </p>
            <p style={{ margin: '14px 0 0', color: PH.dim, fontSize: 14 }}>
              I thrive on transforming complex business challenges into efficient, high-performance systems. Committed to advancing as a top-tier specialist in this domain.
            </p>
          </PhBox>
          <PhBox title="stack.json">
            {[
              ['D365 F&O', 100],
              ['AX 2012 R3', 95],
              ['X++', 92],
              ['ISV Add-ons', 88],
              ['SSRS / Reports', 80],
              ['Power Platform', 70],
            ].map(([name, pct]) => (
              <div key={name} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: PH.dim }}>
                  <span>{name}</span><span>{pct}%</span>
                </div>
                <div style={{ fontFamily: PH.font, color: PH.accent, fontSize: 13, letterSpacing: '-0.05em' }}>
                  {'█'.repeat(Math.round(pct/5)) + '░'.repeat(20 - Math.round(pct/5))}
                </div>
              </div>
            ))}
          </PhBox>
        </div>

        {/* Experience */}
        <div style={{ marginTop: 36 }}>
          <div style={{ color: PH.dim, fontSize: 12, marginBottom: 14 }}>$ git log --oneline career/</div>
          <PhBox title="experience.log">
            {[
              { yr: '2022 — now', role: 'Senior D365 F&O Consultant', co: 'Freelance / Consulting', note: 'End-to-end implementations, ISV add-on architecture, client advisory.' },
              { yr: '2018 — 2022', role: 'D365 F&O Functional + Technical Lead', co: 'Enterprise ERP', note: 'Led migrations from AX 2012 R3 to D365, custom module delivery.' },
              { yr: '2015 — 2018', role: 'AX 2012 Developer / Consultant', co: 'ERP Services', note: 'X++ development, form customisations, SSRS report suites.' },
              { yr: '2014 — 2015', role: 'Junior Dynamics AX Developer', co: 'First role', note: 'Learned the craft. Shipped my first production customisations.' },
            ].map((e, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, padding: '14px 0', borderTop: i ? `1px dashed ${PH.rule}` : 'none' }}>
                <div style={{ color: PH.accent, fontSize: 12 }}>{e.yr}</div>
                <div>
                  <div style={{ color: PH.fg, fontSize: 15, fontWeight: 500 }}>{e.role} <span style={{ color: PH.dim, fontWeight: 400 }}>· {e.co}</span></div>
                  <div style={{ color: PH.dim, fontSize: 13, marginTop: 4 }}>{e.note}</div>
                </div>
              </div>
            ))}
          </PhBox>
        </div>

        {/* Blog teaser */}
        <div style={{ marginTop: 36 }}>
          <div style={{ color: PH.dim, fontSize: 12, marginBottom: 14 }}>$ ls -la ~/writing/</div>
          <PhBox title="/blog">
            {[
              { d: '2026-04-18', t: 'Adding reference fields to forms without a data source', tag: 'D365 F&O' },
              { d: '2026-03-02', t: 'ISV add-on packaging: lessons from 10 releases', tag: 'Architecture' },
              { d: '2026-01-14', t: 'Migrating AX 2012 R3 customisations to D365 cleanly', tag: 'Migration' },
            ].map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 16, padding: '10px 0', borderTop: i ? `1px dashed ${PH.rule}` : 'none', alignItems: 'baseline' }}>
                <span style={{ color: PH.muted, fontSize: 12 }}>{p.d}</span>
                <span style={{ color: PH.fg, fontSize: 14 }}>{p.t}</span>
                <span style={{ color: PH.accent, fontSize: 11, border: `1px solid ${PH.rule}`, padding: '2px 8px' }}>{p.tag}</span>
              </div>
            ))}
          </PhBox>
        </div>

        {/* Contact */}
        <div style={{ marginTop: 36, color: PH.dim, fontSize: 13, borderTop: `1px dashed ${PH.rule}`, paddingTop: 18, display: 'flex', gap: 24 }}>
          <span>$ contact --email</span>
          <span style={{ color: PH.fg }}>dileephpg6@outlook.com</span>
          <span>$ contact --linkedin</span>
          <span style={{ color: PH.fg }}>/in/dileep-gopalakrishnan-43a44a7a</span>
        </div>
      </div>
    </div>
  );
}

window.VariationPhosphor = VariationPhosphor;
