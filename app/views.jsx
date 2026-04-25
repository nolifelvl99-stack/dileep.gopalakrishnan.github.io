// Views — one component per file in the explorer. Styled as syntax-tinted
// document bodies that fit the IDE theme.

const K = ({ children }) => <span className="k">{children}</span>;
const S = ({ children }) => <span className="s">{children}</span>;
const N = ({ children }) => <span className="n">{children}</span>;
const C = ({ children }) => <span className="c">{children}</span>;
const T = ({ children }) => <span className="t">{children}</span>;
const F = ({ children }) => <span className="f">{children}</span>;

function Ln({ n, fade, children }) {
  return (
    <div className={'ln-row' + (fade ? ' fade' : '')}>
      <div className="ln">{n}</div>
      <div>{children}</div>
    </div>
  );
}

/* ── README — the landing / hero ─────────────────────────── */
function ReadmeView({ setView }) {
  return (
    <div className="view">
      <div className="kicker">$ cat README.md</div>
      <h1 className="h1" style={{ marginTop: 14 }}>
        Dileep Gopalakrishnan<span className="cursor">_</span>
      </h1>
      <p className="lede">
        <span className="t">// </span>Microsoft Dynamics 365 Finance &amp; Operations and AX 2012 R3 specialist.
        Ten-plus years turning messy business requirements into efficient, high-performance ERP systems.
        ISV add-on developer. Open for freelance &amp; consulting engagements.
      </p>

      <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a className="btn primary" href="https://docs.google.com/forms/d/15_8bXf8Yj5A9e2v_l5_7AzuA-rzUyPHfWVlmMB8psIM/viewform" target="_blank" rel="noopener">→ start a conversation</a>
        <button className="btn" onClick={() => setView('blog')}>↗ read the blog</button>
        <button className="btn" onClick={() => setView('experience')}>◆ experience.ts</button>
      </div>

      <div className="stats">
        <div className="stat"><div className="big">10+</div><div className="lbl">years hands-on</div></div>
        <div className="stat"><div className="big">D365</div><div className="lbl">F&amp;O · AX 2012 R3</div></div>
        <div className="stat"><div className="big">ISV</div><div className="lbl">add-on development</div></div>
        <div className="stat"><div className="big">∞</div><div className="lbl">forms debugged</div></div>
      </div>

      <h2 className="h2"><span className="hash">##</span> What I do</h2>
      <div className="grid2">
        <div className="panel">
          <div className="phdr"><span>functional</span><span style={{ color: 'var(--muted)' }}>◆</span></div>
          <div className="pbody" style={{ fontSize: 14, color: 'var(--dim)' }}>
            Requirement discovery, process mapping, fit-gap analysis, and configuration across
            Finance, Supply Chain, Procurement, and Project modules. I translate between business
            and technical without losing either.
          </div>
        </div>
        <div className="panel">
          <div className="phdr"><span>technical</span><span style={{ color: 'var(--muted)' }}>◆</span></div>
          <div className="pbody" style={{ fontSize: 14, color: 'var(--dim)' }}>
            X++ development, data entities, custom services, SSRS, workflow, security roles,
            and full ISV add-on design — from extension models through LCS deployment.
          </div>
        </div>
      </div>

      <h2 className="h2"><span className="hash">##</span> Latest writing</h2>
      <div className="panel">
        <a className="postrow" href="blog/reference-fields.html">
          <span className="d">2026-04-18</span>
          <span className="t">Adding reference fields to forms without a data source
            <span className="sub">A recipe for the cases where the designer won't let you, but production demands it.</span>
          </span>
          <span className="r">7 min · D365 F&amp;O</span>
        </a>
        <a className="postrow" href="blog/index.html">
          <span className="d">2026-01-14</span>
          <span className="t">Migrating AX 2012 R3 customisations to D365 cleanly
            <span className="sub">The boring, careful, unglamorous playbook that actually ships.</span>
          </span>
          <span className="r">14 min · Migration</span>
        </a>
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a className="btn" href="blog/index.html">view all posts →</a>
        <a className="btn" href="new-post.html">+ new post</a>
      </div>
    </div>
  );
}

/* ── about.md ────────────────────────────────────────────── */
function AboutView() {
  return (
    <div className="view">
      <div className="kicker"># about.md</div>
      <h1 className="h1" style={{ marginTop: 14, fontSize: 34 }}>About</h1>
      <div className="lede" style={{ maxWidth: 680, marginTop: 22 }}>
        <p>
          Dynamic and ambitious professional with <T>over 10 years</T> of hands-on experience
          in Microsoft Dynamics 365 Finance &amp; Operations, as well as AX 2012 R3. Passionate
          about driving innovation in ERP solutions.
        </p>
        <p>
          I've mastered functional expertise and actively contributed to the development of
          ISV add-ons, delivering scalable, client-focused outcomes. I thrive on transforming
          complex business challenges into efficient, high-performance systems.
        </p>
        <p style={{ color: 'var(--dim)' }}>
          Committed to advancing as a top-tier specialist in this domain. Currently open to
          freelance and consulting engagements — reach out if you're working through a tricky
          migration, a demanding customisation, or just need a second pair of eyes on an
          architecture decision.
        </p>
      </div>

      <h2 className="h2"><span className="hash">##</span> How I work</h2>
      <ul style={{ color: 'var(--dim)', maxWidth: 680, paddingLeft: 20 }}>
        <li><span style={{ color: 'var(--fg)' }}>Functional first.</span> Understand the process, then write the code that fits it — not the other way around.</li>
        <li><span style={{ color: 'var(--fg)' }}>Extensions over overlays.</span> ISV-grade practices even on greenfield work, so upgrades never hurt.</li>
        <li><span style={{ color: 'var(--fg)' }}>Boring deployments.</span> LCS, models, and DevOps pipelines set up so shipping is uneventful.</li>
        <li><span style={{ color: 'var(--fg)' }}>Teach as I go.</span> Every engagement leaves the client's team a little more confident in the platform.</li>
      </ul>
    </div>
  );
}

/* ── experience.ts ───────────────────────────────────────── */
const EXPERIENCE = [
  { from: '2022', to: 'now',  role: 'Senior D365 F&O Consultant', co: 'Freelance · Consulting',
    bullets: ['End-to-end D365 F&O implementations', 'ISV add-on architecture and packaging', 'Client advisory and team mentoring'] },
  { from: '2018', to: '2022', role: 'D365 F&O Functional + Technical Lead', co: 'Enterprise ERP',
    bullets: ['Led migrations from AX 2012 R3 to D365 F&O', 'Custom module delivery across Finance & SCM', 'Owned the DevOps pipeline and release process'] },
  { from: '2015', to: '2018', role: 'AX 2012 Developer / Consultant', co: 'ERP Services',
    bullets: ['X++ development and form customisations', 'SSRS report suites for finance operations', 'Data migration and cutover planning'] },
  { from: '2014', to: '2015', role: 'Junior Dynamics AX Developer', co: 'First role',
    bullets: ['Learned the craft', 'Shipped first production customisations'] },
];

function ExperienceView() {
  return (
    <div className="view">
      <div className="code" style={{ marginBottom: 28 }}>
        <Ln n={1}><C>/**</C></Ln>
        <Ln n={2}><C> * Career timeline — 10+ years in Microsoft Dynamics.</C></Ln>
        <Ln n={3}><C> */</C></Ln>
        <Ln n={4}>&nbsp;</Ln>
        <Ln n={5}><K>export const</K> <T>experience</T>: <T>Role</T>[] = [</Ln>
      </div>

      {EXPERIENCE.map((e, i) => (
        <div key={i} className="exp-row">
          <div>
            <div className="yr">{e.from} — {e.to}</div>
          </div>
          <div>
            <div className="role">{e.role}</div>
            <div className="co">{e.co}</div>
            <ul className="bullets">
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}

      <div className="code" style={{ marginTop: 28 }}>
        <Ln n={24}>];</Ln>
      </div>
    </div>
  );
}

/* ── skills.json ─────────────────────────────────────────── */
const SKILLS = {
  'ERP Platforms': ['D365 F&O', 'AX 2012 R3', 'AX 2009'],
  'Languages & Frameworks': ['X++', 'C#', 'T-SQL', 'TypeScript', 'Power Automate'],
  'D365 Stack': ['Data Entities', 'Data Management', 'Workflow', 'SSRS', 'Security Roles', 'Extensions', 'Chain of Command'],
  'Platform & Ops': ['LCS', 'Azure DevOps', 'Deployable Packages', 'Power Platform', 'Dataverse'],
  'Functional': ['General Ledger', 'AR / AP', 'Inventory', 'Procurement', 'Project Ops', 'Production'],
};

function SkillsView() {
  return (
    <div className="view">
      <div className="kicker">{'{ } skills.json'}</div>
      <h1 className="h1" style={{ marginTop: 14, fontSize: 34 }}>Stack</h1>
      <p className="lede">What I reach for, grouped by where it lives in the delivery.</p>

      <div className="code" style={{ marginTop: 28 }}>
        <Ln n={1}>{'{'}</Ln>
        {Object.entries(SKILLS).map(([group, items], gi) => (
          <React.Fragment key={group}>
            <Ln n={gi + 2}>&nbsp;&nbsp;<S>"{group}"</S>: [</Ln>
            <div style={{ paddingLeft: 54, paddingRight: 8, marginBottom: 12 }}>
              <div className="chips" style={{ marginTop: 6, marginBottom: 6 }}>
                {items.map(s => <span key={s} className="chip accent">{s}</span>)}
              </div>
            </div>
            <Ln n={gi + 2 + '.5'}>&nbsp;&nbsp;],</Ln>
          </React.Fragment>
        ))}
        <Ln n={99}>{'}'}</Ln>
      </div>
    </div>
  );
}

/* ── blog (index inside IDE) ─────────────────────────────── */
const POSTS = [
  { d: '2026-04-18', t: 'Adding reference fields to forms without a data source',
    sub: 'A recipe for the cases where the designer won\'t let you, but production demands it.',
    tag: 'D365 F&O', read: '7 min', href: 'blog/reference-fields.html' },
  { d: '2026-01-14', t: 'Migrating AX 2012 R3 customisations to D365 cleanly',
    sub: 'The boring, careful, unglamorous playbook that actually ships.',
    tag: 'Migration', read: '14 min', href: 'blog/index.html' },
  { d: '2025-11-22', t: 'Data entities vs. custom services: a decision tree',
    sub: 'When to reach for what, with real-world failure modes.',
    tag: 'D365 F&O', read: '9 min', href: 'blog/index.html' },
  { d: '2025-09-30', t: 'Security roles without tears',
    sub: 'A repeatable process for modelling duties, privileges and role assignments.',
    tag: 'Security', read: '12 min', href: 'blog/index.html' },
];

function BlogView() {
  const [filter, setFilter] = React.useState('all');
  const tags = ['all', 'D365 F&O', 'AX 2012 R3', 'Architecture', 'Migration', 'Security'];
  const rows = POSTS.filter(p => filter === 'all' || p.tag === filter);
  return (
    <div className="view">
      <div className="kicker"># blog/index.md</div>
      <h1 className="h1" style={{ marginTop: 14, fontSize: 36 }}>Writing</h1>
      <p className="lede">Notes, patterns and field reports from 10+ years inside Dynamics.</p>

      <div className="chips" style={{ marginTop: 28 }}>
        {tags.map(t => (
          <button key={t} className="chip" onClick={() => setFilter(t)}
            style={{ cursor: 'pointer', color: filter === t ? 'var(--accent)' : 'var(--fg)', borderColor: filter === t ? 'var(--accent)' : 'var(--rule)' }}>
            {t}
          </button>
        ))}
      </div>

      <div className="panel" style={{ marginTop: 24 }}>
        {rows.map((p, i) => (
          <a key={i} className="postrow" href={p.href}>
            <span className="d">{p.d}</span>
            <span className="t">{p.t}<span className="sub">{p.sub}</span></span>
            <span className="r">{p.read} · {p.tag}</span>
          </a>
        ))}
        {rows.length === 0 && (
          <div style={{ padding: 24, color: 'var(--dim)', fontSize: 13 }}>No posts in this tag yet.</div>
        )}
      </div>

      <div style={{ marginTop: 24, color: 'var(--dim)', fontSize: 13, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <a className="btn" href="new-post.html">+ new post (generator)</a>
        <span><C>// or copy </C><code className="inline">blog/reference-fields.html</code><C> by hand.</C></span>
      </div>
    </div>
  );
}

/* ── contact.yaml ────────────────────────────────────────── */
function ContactView() {
  return (
    <div className="view">
      <div className="kicker"># contact.yaml</div>
      <h1 className="h1" style={{ marginTop: 14, fontSize: 34 }}>Let's talk</h1>
      <p className="lede">
        I'm currently available for freelance and consulting engagements — implementations,
        migrations, rescue projects, and ISV add-on work.
      </p>

      <div className="panel" style={{ marginTop: 32 }}>
        <div className="phdr"><span>channels</span><span className="n">● available</span></div>
        <div className="pbody">
          <div className="contact-grid">
            <span className="k2">email:</span>
            <a className="v" style={{ color: 'var(--accent)' }} href="mailto:dileephpg6@outlook.com">dileephpg6@outlook.com</a>
          </div>
          <div className="contact-grid">
            <span className="k2">linkedin:</span>
            <a className="v" style={{ color: 'var(--accent)' }} href="https://www.linkedin.com/in/dileep-gopalakrishnan-43a44a7a/" target="_blank" rel="noopener">/in/dileep-gopalakrishnan-43a44a7a</a>
          </div>
          <div className="contact-grid">
            <span className="k2">working-hours:</span>
            <span className="v">Mon–Fri · flexible across EU &amp; APAC</span>
          </div>
          <div className="contact-grid">
            <span className="k2">response-time:</span>
            <span className="v">within 24 hours on weekdays</span>
          </div>
          <div className="contact-grid">
            <span className="k2">engagement:</span>
            <span className="v">short audits → multi-month implementations</span>
          </div>
        </div>
      </div>

      <div className="term" style={{ marginTop: 28 }}>
        <div><span className="prompt">$</span> echo <S>"Got a problem in D365 F&amp;O or AX?"</S></div>
        <div style={{ color: 'var(--fg)' }}>Got a problem in D365 F&amp;O or AX?</div>
        <div style={{ marginTop: 6 }}><span className="prompt">$</span> mail dileephpg6@outlook.com<span className="cursor">_</span></div>
      </div>
    </div>
  );
}

Object.assign(window, { ReadmeView, AboutView, ExperienceView, SkillsView, BlogView, ContactView });
