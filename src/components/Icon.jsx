export default function Icon({ name = 'arrow', className = '', ...props }) {
  const paths = {
    arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>,
    diagonal: <><path d="M5 19 19 5M5 5h14v14" /></>,
    down: <><path d="M12 3v17M5 13l7 7 7-7" /></>,
    close: <><path d="m6 6 12 12M6 18 18 6" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    design: <><path d="m12 2 10 10-10 10L2 12Z" /><path d="M12 2v20M2 12h20" /></>,
    build: <><path d="m8 5-6 7 6 7m8-14 6 7-6 7m-3-16-2 20" /></>,
    improve: <><path d="M20 8a9 9 0 1 0 1 8M20 2v6h-6" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
  };
  return <svg className={`icon ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.arrow}</svg>;
}
