// Main — wires chrome + views together, manages open tabs and persistence.

function App() {
  const STORAGE_KEY = 'dileep-portfolio-v1';

  const [view, setView] = React.useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return saved.view || 'readme';
    } catch { return 'readme'; }
  });

  const [open, setOpen] = React.useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return saved.open || ['readme'];
    } catch { return ['readme']; }
  });

  React.useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ view, open })); } catch {}
  }, [view, open]);

  const openView = (id) => {
    setView(id);
    setOpen(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  const closeTab = (id) => {
    setOpen(prev => {
      const next = prev.filter(x => x !== id);
      if (id === view && next.length) setView(next[next.length - 1]);
      if (next.length === 0) { setView('readme'); return ['readme']; }
      return next;
    });
  };

  // keyboard shortcut — ⌘/Ctrl-K to jump to blog
  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault(); openView('blog');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const VIEWS = {
    readme: <ReadmeView setView={openView}/>,
    about: <AboutView/>,
    experience: <ExperienceView/>,
    skills: <SkillsView/>,
    blog: <BlogView/>,
    contact: <ContactView/>,
  };

  return (
    <div className="ide">
      <TitleBar/>
      <div className="workspace">
        <ActivityBar view={view} setView={openView}/>
        <Explorer view={view} setView={openView}/>
        <div className="editor">
          <Tabs open={open} view={view} setView={setView} closeTab={closeTab}/>
          <Breadcrumb view={view}/>
          <div className="viewport">
            {VIEWS[view] || <ReadmeView setView={openView}/>}
          </div>
        </div>
        <Minimap/>
      </div>
      <StatusBar view={view}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
