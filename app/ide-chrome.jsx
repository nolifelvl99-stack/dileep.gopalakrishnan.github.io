// IDE chrome — titlebar, activity bar, explorer, tabs, minimap, statusbar.
// View-agnostic: takes { view, setView } from main and renders accordingly.

function TitleBar() {
  return (
    <div className="titlebar">
      <div className="dots">
        <span className="dot r"/>
        <span className="dot y"/>
        <span className="dot g"/>
      </div>
      <span className="path">dileep-gopalakrishnan · portfolio — <span style={{ color: 'var(--muted)' }}>main</span></span>
      <span className="spacer"/>
      <span className="winctl">− ◻ ×</span>
    </div>
  );
}

function ActivityBar({ view, setView }) {
  const items = [
    { id: 'explorer', icon: '▤', label: 'Explorer' },
    { id: 'search', icon: '⌕', label: 'Search' },
    { id: 'git', icon: '⎇', label: 'Source control' },
    { id: 'run', icon: '▶', label: 'Run' },
  ];
  return (
    <div className="activity">
      {items.map(it => (
        <div key={it.id} className={'item' + (it.id === 'explorer' ? ' active' : '')} title={it.label}>{it.icon}</div>
      ))}
      <div className="grow"/>
      <div className="item" title="Email" onClick={() => window.location.href = 'mailto:dileephpg6@outlook.com'}>✉</div>
      <div className="item" title="Settings">⚙</div>
    </div>
  );
}

const FILE_TREE = [
  { group: '▾ DILEEP/' },
  { file: 'README.md', icon: 'M', view: 'readme' },
  { file: 'about.md', icon: 'M', view: 'about' },
  { file: 'experience.ts', icon: 'T', view: 'experience' },
  { file: 'skills.json', icon: '{}', view: 'skills' },
  { group: '▾ blog/' },
  { file: 'index.md', icon: 'M', view: 'blog', depth: 2 },
  { file: 'reference-fields.md', icon: 'M', external: 'blog/reference-fields.html', depth: 2 },
  { file: 'ax-to-d365.md', icon: 'M', external: 'blog/index.html', depth: 2 },
  { group: '▾ meta/' },
  { file: 'contact.yaml', icon: 'Y', view: 'contact', depth: 2 },
  { file: 'resume.pdf', icon: 'P', external: '#', depth: 2 },
  { group: '▾ tools/' },
  { file: 'new-post.html', icon: '+', external: 'new-post.html', depth: 2 },
];

function Explorer({ view, setView }) {
  return (
    <div className="explorer">
      <div className="hdr"><span>Explorer</span><span style={{ color: 'var(--muted)' }}>···</span></div>
      {FILE_TREE.map((row, i) => {
        if (row.group) return <div key={i} className="group">{row.group}</div>;
        const active = row.view === view;
        const cls = 'filerow d' + (row.depth || 1) + (active ? ' active' : '');
        if (row.external) {
          return (
            <a key={i} href={row.external} className={cls} style={{ textDecoration: 'none' }}>
              <span className="icon">{row.icon}</span>
              <span>{row.file}</span>
            </a>
          );
        }
        return (
          <button key={i} className={cls} onClick={() => setView(row.view)}>
            <span className="icon">{row.icon}</span>
            <span>{row.file}</span>
          </button>
        );
      })}
    </div>
  );
}

const VIEW_META = {
  readme:     { file: 'README.md',      icon: 'M', tabicon: '◆' },
  about:      { file: 'about.md',       icon: 'M', tabicon: '◆' },
  experience: { file: 'experience.ts',  icon: 'T', tabicon: '◆' },
  skills:     { file: 'skills.json',    icon: '{}', tabicon: '◆' },
  blog:       { file: 'blog/index.md',  icon: 'M', tabicon: '◆' },
  contact:    { file: 'contact.yaml',   icon: 'Y', tabicon: '◆' },
};

function Tabs({ open, view, setView, closeTab }) {
  return (
    <div className="tabs">
      {open.map(id => {
        const m = VIEW_META[id];
        if (!m) return null;
        return (
          <button key={id} className={'tab' + (id === view ? ' active' : '')} onClick={() => setView(id)}>
            <span className="tabicon">{m.tabicon}</span>
            <span>{m.file}</span>
            <span className="close" onClick={(e) => { e.stopPropagation(); closeTab(id); }}>×</span>
          </button>
        );
      })}
    </div>
  );
}

function Breadcrumb({ view }) {
  const m = VIEW_META[view];
  if (!m) return null;
  const parts = m.file.split('/');
  return (
    <div className="breadcrumb">
      <span>dileep</span>
      {parts.map((p, i) => (
        <React.Fragment key={i}>
          <span className="chev">›</span>
          <span style={{ color: i === parts.length - 1 ? 'var(--fg)' : 'var(--muted)' }}>{p}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

function Minimap() {
  const widths = [70, 40, 55, 30, 90, 65, 45, 80, 35, 60, 50, 75, 40, 55, 25, 85, 45, 65, 30, 70, 50, 40, 60, 80, 35, 55, 70, 45, 30, 65, 50, 75, 40, 55, 25, 85, 45, 65, 30, 70, 60, 40, 50, 80, 35, 55];
  return (
    <div className="minimap">
      {widths.map((w, i) => (
        <div key={i} className="bar" style={{ width: w + '%', background: i % 9 === 0 ? 'var(--accent)' : (i % 4 === 0 ? 'var(--rule-2)' : 'var(--rule)'), opacity: i % 9 === 0 ? 0.8 : 0.6 }}/>
      ))}
    </div>
  );
}

function StatusBar({ view }) {
  const m = VIEW_META[view];
  return (
    <div className="statusbar">
      <div className="seg brand">⎇ main</div>
      <div className="seg">● 0 errors · 0 warnings</div>
      <div className="seg available">available for freelance</div>
      <div className="grow"/>
      <div className="seg">{m ? m.file : ''}</div>
      <div className="seg">UTF-8</div>
      <div className="seg">LF</div>
      <div className="seg" style={{ color: 'var(--accent)' }}>dileephpg6@outlook.com</div>
    </div>
  );
}

Object.assign(window, { TitleBar, ActivityBar, Explorer, Tabs, Breadcrumb, Minimap, StatusBar, VIEW_META });
