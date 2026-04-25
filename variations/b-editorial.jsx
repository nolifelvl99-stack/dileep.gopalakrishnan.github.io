// Variation B — Editorial Mono
// Warm paper (off-cream), near-black text, single amber accent.
// Monospace for everything but generous, editorial-feeling line-height and
// a big numbered index. Still developer-flavored without the CRT theatrics.

const ED = {
  bg: '#efece4',
  ink: '#1c1a16',
  dim: '#6a6357',
  rule: '#cfc8b9',
  accent: '#b44a1a',
  font: '"Geist Mono", "JetBrains Mono", ui-monospace, monospace',
};

function VariationEditorial() {
  return (
    <div style={{ width: '100%', height: '100%', background: ED.bg, color: ED.ink, fontFamily: ED.font, fontSize: 14, lineHeight: 1.6, position: 'relative', overflow: 'hidden' }}>
      <div style={{ padding: '40px 80px 72px' }}>
        {/* nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <span style={{ fontWeight: 600 }}>dileep.g</span>
          <div style={{ display: 'flex', gap: 28, color: ED.dim }}>
            <span>index</span><span>work</span><span>writing</span><span style={{ color: ED.ink }}>contact</span>
          </div>
          <span style={{ color: ED.dim }}>04·2026</span>
        </div>

        {/* hero */}
        <div style={{ marginTop: 56, borderBottom: `1px solid ${ED.rule}`, paddingBottom: 44 }}>
          <div style={{ fontSize: 11, color: ED.dim, letterSpacing: '0.16em', textTransform: 'uppercase' }}>№ 001 — Introduction</div>
          <h1 style={{ margin: '18px 0 0', fontFamily: ED.font, fontWeight: 500, fontSize: 96, lineHeight: 0.98, letterSpacing: '-0.04em' }}>
            Ten years<br/>inside <span style={{ color: ED.accent, fontStyle: 'italic' }}>Dynamics</span>.
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 40 }}>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: ED.ink, textWrap: 'pretty' }}>
              I'm <span style={{ color: ED.accent }}>Dileep Gopalakrishnan</span> — a Microsoft Dynamics 365 Finance &amp; Operations and AX 2012 R3 specialist. I build ISV add-ons, lead migrations, and turn messy business requirements into systems that hold up in production.
            </p>
            <div style={{ fontSize: 13, color: ED.dim, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignContent: 'start' }}>
              <div><div style={{ color: ED.ink, fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em' }}>10+</div>years hands-on</div>
              <div><div style={{ color: ED.ink, fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em' }}>D365</div>F&amp;O · AX 2012 R3</div>
              <div><div style={{ color: ED.ink, fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em' }}>ISV</div>add-on dev</div>
              <div><div style={{ color: ED.ink, fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em' }}>∞</div>forms debugged</div>
            </div>
          </div>
        </div>

        {/* About */}
        <section style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40, padding: '44px 0', borderBottom: `1px solid ${ED.rule}` }}>
          <div>
            <div style={{ fontSize: 11, color: ED.dim, letterSpacing: '0.16em', textTransform: 'uppercase' }}>№ 002</div>
            <div style={{ fontSize: 18, marginTop: 4, fontWeight: 500 }}>About</div>
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.75, color: ED.ink, maxWidth: 680 }}>
            <p style={{ marginTop: 0 }}>
              Dynamic and ambitious professional with over 10 years of hands-on experience in Microsoft Dynamics 365 Finance &amp; Operations, as well as AX 2012 R3. Passionate about driving innovation in ERP solutions.
            </p>
            <p>
              I've mastered functional expertise and actively contributed to the development of ISV add-ons — delivering scalable, client-focused outcomes. I thrive on transforming complex business challenges into efficient, high-performance systems.
            </p>
            <p style={{ color: ED.dim, marginBottom: 0 }}>
              Committed to advancing as a top-tier specialist in this domain. Currently open to freelance and consulting engagements.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40, padding: '44px 0', borderBottom: `1px solid ${ED.rule}` }}>
          <div>
            <div style={{ fontSize: 11, color: ED.dim, letterSpacing: '0.16em', textTransform: 'uppercase' }}>№ 003</div>
            <div style={{ fontSize: 18, marginTop: 4, fontWeight: 500 }}>Experience</div>
          </div>
          <div>
            {[
              { yr: '2022 →', role: 'Senior D365 F&O Consultant', co: 'Freelance · Consulting' },
              { yr: '2018 — 2022', role: 'Functional + Technical Lead', co: 'Enterprise ERP' },
              { yr: '2015 — 2018', role: 'AX 2012 Developer / Consultant', co: 'ERP Services' },
              { yr: '2014 — 2015', role: 'Junior Dynamics AX Developer', co: 'First role' },
            ].map((e, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 20, padding: '16px 0', borderTop: i ? `1px solid ${ED.rule}` : 'none' }}>
                <div style={{ fontSize: 13, color: ED.accent }}>{e.yr}</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500 }}>{e.role}</div>
                  <div style={{ fontSize: 13, color: ED.dim, marginTop: 2 }}>{e.co}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40, padding: '44px 0', borderBottom: `1px solid ${ED.rule}` }}>
          <div>
            <div style={{ fontSize: 11, color: ED.dim, letterSpacing: '0.16em', textTransform: 'uppercase' }}>№ 004</div>
            <div style={{ fontSize: 18, marginTop: 4, fontWeight: 500 }}>Stack</div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['D365 F&O', 'AX 2012 R3', 'X++', 'ISV Add-ons', 'SSRS', 'Forms & Tables', 'Data Entities', 'Workflow', 'Security Roles', 'Power Platform', 'LCS', 'Azure DevOps'].map(s => (
              <span key={s} style={{ fontSize: 13, padding: '6px 12px', border: `1px solid ${ED.rule}`, color: ED.ink }}>{s}</span>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40, padding: '44px 0', borderBottom: `1px solid ${ED.rule}` }}>
          <div>
            <div style={{ fontSize: 11, color: ED.dim, letterSpacing: '0.16em', textTransform: 'uppercase' }}>№ 005</div>
            <div style={{ fontSize: 18, marginTop: 4, fontWeight: 500 }}>Writing</div>
          </div>
          <div>
            {[
              { d: 'Apr 18, 2026', t: 'Adding reference fields to forms without a data source', r: '7 min' },
              { d: 'Mar 02, 2026', t: 'ISV add-on packaging: lessons from 10 releases', r: '11 min' },
              { d: 'Jan 14, 2026', t: 'Migrating AX 2012 R3 customisations to D365 cleanly', r: '14 min' },
            ].map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 80px', gap: 20, padding: '14px 0', borderTop: i ? `1px solid ${ED.rule}` : 'none', alignItems: 'baseline' }}>
                <span style={{ fontSize: 12, color: ED.dim }}>{p.d}</span>
                <span style={{ fontSize: 15, color: ED.ink }}>{p.t}</span>
                <span style={{ fontSize: 12, color: ED.dim, textAlign: 'right' }}>{p.r}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40, padding: '44px 0' }}>
          <div>
            <div style={{ fontSize: 11, color: ED.dim, letterSpacing: '0.16em', textTransform: 'uppercase' }}>№ 006</div>
            <div style={{ fontSize: 18, marginTop: 4, fontWeight: 500 }}>Contact</div>
          </div>
          <div style={{ fontSize: 22, lineHeight: 1.5 }}>
            <div>dileephpg6<span style={{ color: ED.accent }}>@</span>outlook.com</div>
            <div style={{ color: ED.dim, fontSize: 15, marginTop: 6 }}>linkedin.com/in/dileep-gopalakrishnan-43a44a7a</div>
          </div>
        </section>
      </div>
    </div>
  );
}

window.VariationEditorial = VariationEditorial;
