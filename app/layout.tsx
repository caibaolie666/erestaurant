import type { Metadata } from 'next';
import '../styles.css';
import '../overrides.css';
import SiteHeader from './components/SiteHeader';

export const metadata: Metadata = {
  title: '爆裂菜 · 今日有料',
  description: '把寻常食材做出惊喜。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body><SiteHeader />{children}<footer><a className="brand" href="/"><span>爆</span>裂菜</a><p>好吃这件事，我们是认真的。</p><p>© 2026 BAOLIECAI</p></footer></body>
    </html>
  );
}
