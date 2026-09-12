'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link className="brand" href="/"><span>爆</span>裂菜</Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>菜单 <i /></button>
    <nav className={`main-nav ${open ? 'is-open' : ''}`}>
      <Link href="/" onClick={() => setOpen(false)}>首页</Link>
      <Link href="/about" onClick={() => setOpen(false)}>关于我们</Link>
      <Link href="/#menu" className="nav-order" onClick={() => setOpen(false)}>看看菜单 <b>↗</b></Link>
    </nav>
  </header>;
}
