// Variation C — IDE
// VS Code-adjacent dark IDE chrome: sidebar file tree, tab strip, main
// editor area with syntax-tinted copy, a minimap-y right rail, and a
// status bar. Cyan accent. Links "↗ open" the blog/article template.

const IDE = {
  bg: '#0d1117',
  panel: '#0a0e14',
  sidebar: '#0a0e14',
  editor: '#0d1117',
  rule: '#1b232d',
  fg: '#c9d1d9',
  dim: '#6b7684',
  muted: '#3d4651',
  accent: '#22d3ee',
  purple: '#c586c0',
  orange: '#d4a574',
  green: '#7ec699',
  red: '#e06c75',
  font: '"JetBrains Mono", ui-monospace, Menlo, monospace',
};

function IDEFile({ name, active, depth = 1, icon = '·' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '4px 14px 4px ' + (14 + depth * 12) + 'px',
      fontSize: 13, color: active ? IDE.fg : IDE.dim,
      background: active ? '#151c26' : 'transparent',
      borderLeft: active ? `2px solid ${IDE.accent}` : '2px solid transparent',
      cursor: 'pointer',
    }}>
      <span style={{ color: active ? IDE.accent : IDE.muted, width: 10 }}>{icon}</span>
      <span>{name}</span>
    </div>
  );
}

function IDETab({ name, active }) {
  return (
    <div style={{
      padding: '9px 18px', fontSize: 13,
      background: active ? IDE.editor : 'transparent',
      color: active ? IDE.fg : IDE.dim,
      borderRight: `1px solid ${IDE.rule}`,
      borderTop: active ? `2px solid ${IDE.accent}` : '2px solid transparent',
      marginTop: active ? -2 : 0,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ color: active ? IDE.orange : IDE.muted }}>◆</span>
      {name}
      <span style={{ color: IDE.muted, marginLeft: 4 }}>×</span>
    </div>
  );
}

function Line({ n, children, fade }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 14, padding: '1px 0', opacity: fade ? 0.55 : 1 }}>
      <div style={{ color: IDE.muted, fontSize: 13, textAlign: 'right', userSelect: 'none' }}>{n}</div>
      <div style={{ fontSize: 13.5, lineHeight: 1.75 }}>{children}</div>
    </div>
  );
}

const K  = ({ children }) => <span style={{ color: IDE.purple }}>{children}</span>;    // keyword
const S  = ({ children }) => <span style={{ color: IDE.orange }}>{children}</span>;    // string
const V  = ({ children }) => <span style={{ color: IDE.accent }}>{children}</span>;    // var / accent
const C  = ({ children }) => <span style={{ color: IDE.muted, fontStyle: 'italic' }}>{children}</span>; // comment
const N  = ({ children }) => <span style={{ color: IDE.green }}>{children}</span>;     // number / literal
const F  = ({ children }) => <span style={{ color: '#dcdcaa' }}>{children}</span>;     // function

function VariationIDE() {
  return (
    <div style={{ width: '100%', height: '100%', background: IDE.bg, color: IDE.fg, fontFamily: IDE.font, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Title bar */}
      <div style={{ height: 32, background: '#05080c', borderBottom: `1px solid ${IDE.rule}`, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 12, fontSize: 12, color: IDE.dim }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: 6, background: '#ff5f57' }}/>
          <span style={{ width: 12, height: 12, borderRadius: 6, background: '#febc2e' }}/>
          <span style={{ width: 12, height: 12, borderRadius: 6, background: '#28c840' }}/>
        </div>
        <span style={{ marginLeft: 12 }}>dileep-gopalakrishnan · portfolio</span>
        <span style={{ marginLeft: 'auto', color: IDE.muted }}>— ◻ ×</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '48px 240px 1fr 180px', flex: 1, minHeight: 0 }}>
        {/* Activity bar */}
        <div style={{ background: IDE.sidebar, borderRight: `1px solid ${IDE.rule}`, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', gap: 18, fontSize: 18, color: IDE.muted }}>
          <span style={{ color: IDE.accent }}>▤</span>
          <span>⌕</span>
          <span>⎇</span>
          <span>▶</span>
          <span>⚙</span>
        </div>

        {/* File tree */}
        <div style={{ background: IDE.sidebar, borderRight: `1px solid ${IDE.rule}`, padding: '10px 0', fontSize: 13 }}>
          <div style={{ padding: '6px 14px', fontSize: 10, letterSpacing: '0.14em', color: IDE.muted, textTransform: 'uppercase' }}>Explorer</div>
          <div style={{ padding: '4px 14px', fontSize: 11, color: IDE.dim, textTransform: 'uppercase', letterSpacing: '0.08em' }}>▾ dileep/</div>
          <IDEFile name="about.md" icon="M" />
          <IDEFile name="experience.ts" icon="T" active />
          <IDEFile name="skills.json" icon="{}" />
          <IDEFile name="projects/" icon="▾" />
          <IDEFile name="d365-isv-suite.md" depth={2} icon="M" />
          <IDEFile name="ax-migration-kit.md" depth={2} icon="M" />
          <IDEFile name="blog/" icon="▾" />
          <IDEFile name="reference-fields.md" depth={2} icon="M" />
          <IDEFile name="isv-packaging.md" depth={2} icon="M" />
          <IDEFile name="ax-to-d365.md" depth={2} icon="M" />
          <IDEFile name="contact.yaml" icon="Y" />
          <IDEFile name="README.md" icon="M" />
          <div style={{ padding: '10px 14px 4px', fontSize: 11, color: IDE.dim, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 8 }}>▸ node_modules</div>
        </div>

        {/* Editor */}
        <div style={{ background: IDE.editor, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: `1px solid ${IDE.rule}`, background: IDE.sidebar }}>
            <IDETab name="about.md" />
            <IDETab name="experience.ts" active />
            <IDETab name="blog/reference-fields.md" />
          </div>

          {/* Breadcrumb */}
          <div style={{ padding: '8px 20px', borderBottom: `1px solid ${IDE.rule}`, fontSize: 12, color: IDE.muted }}>
            dileep <span style={{ color: IDE.muted }}>›</span> experience.ts
          </div>

          {/* Code content */}
          <div style={{ padding: '18px 14px', overflow: 'hidden', flex: 1 }}>
            <Line n={1}><C>/**</C></Line>
            <Line n={2}><C> * Dileep Gopalakrishnan — D365 F&O Specialist</C></Line>
            <Line n={3}><C> * 10+ years · Freelance &amp; consulting engagements</C></Line>
            <Line n={4}><C> */</C></Line>
            <Line n={5}>&nbsp;</Line>
            <Line n={6}><K>export const</K> <V>dileep</V> = {'{'}</Line>
            <Line n={7}>&nbsp;&nbsp;name: <S>"Dileep Gopalakrishnan"</S>,</Line>
            <Line n={8}>&nbsp;&nbsp;role: <S>"D365 F&amp;O Consultant"</S>,</Line>
            <Line n={9}>&nbsp;&nbsp;yearsOfExperience: <N>10</N>,</Line>
            <Line n={10}>&nbsp;&nbsp;available: <N>true</N>, <C>// for freelance &amp; consulting</C></Line>
            <Line n={11}>&nbsp;&nbsp;stack: [<S>"D365 F&amp;O"</S>, <S>"AX 2012 R3"</S>, <S>"X++"</S>, <S>"ISV Add-ons"</S>],</Line>
            <Line n={12}>&nbsp;&nbsp;contact: {'{'}</Line>
            <Line n={13}>&nbsp;&nbsp;&nbsp;&nbsp;email: <S>"dileephpg6@outlook.com"</S>,</Line>
            <Line n={14}>&nbsp;&nbsp;&nbsp;&nbsp;linkedin: <S>"/in/dileep-gopalakrishnan-43a44a7a"</S>,</Line>
            <Line n={15}>&nbsp;&nbsp;{'}'},</Line>
            <Line n={16}>{'};'}</Line>
            <Line n={17}>&nbsp;</Line>
            <Line n={18}><K>const</K> <F>experience</F>: <V>Role</V>[] = [</Line>
            <Line n={19}>&nbsp;&nbsp;{'{'} from: <S>"2022"</S>, to: <S>"now"</S>, title: <S>"Senior D365 F&amp;O Consultant"</S> {'},'}</Line>
            <Line n={20}>&nbsp;&nbsp;{'{'} from: <S>"2018"</S>, to: <S>"2022"</S>, title: <S>"Functional + Technical Lead"</S> {'},'}</Line>
            <Line n={21}>&nbsp;&nbsp;{'{'} from: <S>"2015"</S>, to: <S>"2018"</S>, title: <S>"AX 2012 Developer / Consultant"</S> {'},'}</Line>
            <Line n={22}>&nbsp;&nbsp;{'{'} from: <S>"2014"</S>, to: <S>"2015"</S>, title: <S>"Junior Dynamics AX Developer"</S> {'},'}</Line>
            <Line n={23}>];</Line>
            <Line n={24}>&nbsp;</Line>
            <Line n={25}><C>// ── writing ─────────────────────────────────────</C></Line>
            <Line n={26}><K>import</K> {'{'} <V>posts</V> {'}'} <K>from</K> <S>"./blog"</S>;</Line>
            <Line n={27}>&nbsp;</Line>
            <Line n={28} fade><C>// latest:</C></Line>
            <Line n={29} fade>&nbsp;&nbsp;<C>// · reference-fields.md &nbsp;&nbsp; ↗ open</C></Line>
            <Line n={30} fade>&nbsp;&nbsp;<C>// · isv-packaging.md &nbsp;&nbsp;&nbsp;&nbsp; ↗ open</C></Line>
            <Line n={31} fade>&nbsp;&nbsp;<C>// · ax-to-d365.md &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↗ open</C></Line>
            <Line n={32}>&nbsp;</Line>

            {/* Interactive footer row inside the editor — links to real blog */}
            <div style={{ marginTop: 18, display: 'flex', gap: 10, paddingLeft: 58 }}>
              <a href="blog/index.html" style={{ padding: '8px 14px', border: `1px solid ${IDE.accent}`, color: IDE.accent, textDecoration: 'none', fontSize: 13 }}>→ open /blog</a>
              <a href="blog/reference-fields.html" style={{ padding: '8px 14px', border: `1px solid ${IDE.rule}`, color: IDE.fg, textDecoration: 'none', fontSize: 13 }}>↗ latest post</a>
              <a href="mailto:dileephpg6@outlook.com" style={{ padding: '8px 14px', border: `1px solid ${IDE.rule}`, color: IDE.fg, textDecoration: 'none', fontSize: 13 }}>✉ email</a>
            </div>

            {/* Panel: skills + about below the code, still in editor */}
            <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div style={{ border: `1px solid ${IDE.rule}`, borderRadius: 6 }}>
                <div style={{ padding: '8px 14px', borderBottom: `1px solid ${IDE.rule}`, fontSize: 11, color: IDE.dim, letterSpacing: '0.12em', textTransform: 'uppercase' }}>PROBLEMS — 0 &nbsp;·&nbsp; OUTPUT &nbsp;·&nbsp; TERMINAL</div>
                <div style={{ padding: 14, fontSize: 13, lineHeight: 1.7 }}>
                  <div style={{ color: IDE.green }}>$ cat about.md</div>
                  <div style={{ color: IDE.fg, marginTop: 6 }}>
                    Dynamic and ambitious professional with over a decade in Dynamics 365 Finance &amp; Operations and AX 2012 R3. I build ISV add-ons and turn complex business challenges into efficient, high-performance systems. Open for freelance &amp; consulting.
                  </div>
                  <div style={{ color: IDE.green, marginTop: 14 }}>$ <span style={{ color: IDE.fg }}>_</span></div>
                </div>
              </div>
              <div style={{ border: `1px solid ${IDE.rule}`, borderRadius: 6 }}>
                <div style={{ padding: '8px 14px', borderBottom: `1px solid ${IDE.rule}`, fontSize: 11, color: IDE.dim, letterSpacing: '0.12em', textTransform: 'uppercase' }}>SKILLS · package.json</div>
                <div style={{ padding: 14, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['D365 F&O','AX 2012 R3','X++','ISV Add-ons','SSRS','Data Entities','Workflow','Security','LCS','Azure DevOps','Power Platform'].map(s => (
                    <span key={s} style={{ fontSize: 12, padding: '4px 10px', border: `1px solid ${IDE.rule}`, borderRadius: 4, color: IDE.fg }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Writing panel */}
            <div style={{ marginTop: 20, border: `1px solid ${IDE.rule}`, borderRadius: 6 }}>
              <div style={{ padding: '8px 14px', borderBottom: `1px solid ${IDE.rule}`, fontSize: 11, color: IDE.dim, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
                <span>BLOG · /writing</span>
                <a href="blog/index.html" style={{ color: IDE.accent, textDecoration: 'none' }}>view all →</a>
              </div>
              {[
                { d: '2026-04-18', t: 'Adding reference fields to forms without a data source', tag: 'D365 F&O', href: 'blog/reference-fields.html' },
                { d: '2026-03-02', t: 'ISV add-on packaging: lessons from 10 releases', tag: 'Architecture', href: 'blog/index.html' },
                { d: '2026-01-14', t: 'Migrating AX 2012 R3 customisations to D365 cleanly', tag: 'Migration', href: 'blog/index.html' },
              ].map((p, i) => (
                <a key={i} href={p.href} style={{ textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 16, padding: '12px 14px', borderTop: i ? `1px solid ${IDE.rule}` : 'none', alignItems: 'baseline' }}>
                  <span style={{ color: IDE.muted, fontSize: 12 }}>{p.d}</span>
                  <span style={{ color: IDE.fg, fontSize: 14 }}>{p.t}</span>
                  <span style={{ color: IDE.accent, fontSize: 11, border: `1px solid ${IDE.rule}`, padding: '2px 8px', borderRadius: 3 }}>{p.tag}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Minimap rail */}
        <div style={{ background: IDE.panel, borderLeft: `1px solid ${IDE.rule}`, padding: 10, fontSize: 6, lineHeight: 1.4, color: IDE.muted, overflow: 'hidden' }}>
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} style={{ height: 4, background: i % 7 === 0 ? IDE.accent : (i % 3 === 0 ? IDE.muted : IDE.rule), width: `${30 + (i * 37) % 60}%`, marginBottom: 3, opacity: 0.6 }}/>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div style={{ background: '#05080c', borderTop: `1px solid ${IDE.rule}`, height: 26, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 18, fontSize: 11, color: IDE.dim }}>
        <span style={{ color: IDE.accent }}>⎇ main</span>
        <span>● 0 errors · 0 warnings</span>
        <span style={{ marginLeft: 'auto' }}>Ln 10, Col 14</span>
        <span>UTF-8</span>
        <span>TypeScript</span>
        <span style={{ color: IDE.accent }}>dileephpg6@outlook.com</span>
      </div>
    </div>
  );
}

window.VariationIDE = VariationIDE;
