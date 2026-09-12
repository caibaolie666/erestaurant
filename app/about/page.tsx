import Link from 'next/link';

export default function AboutPage() {
  return <main><section className="about-hero section-pad"><p className="eyebrow">关于爆裂菜</p><h1>我们不止想<br />让你<span>吃饱。</span></h1><p>更想让你在忙乱的日子里，因为一口热乎、有劲儿的菜，重新开心起来。</p></section><section className="story section-pad"><div className="story-art"><span>BAO!</span><div className="story-plate"><i /><i /><i /></div></div><div className="story-copy"><p className="eyebrow">一切从一口锅开始</p><h2>把平凡食材，<br />炒出<span>大动静。</span></h2><p>爆裂菜诞生于一间小小的开放厨房。我们发现，食物不该只是填饱肚子的选项——它可以有热气、有个性，也可以让人忍不住多聊几句。</p><p>所以我们用当季食材、利落的火候，和一点大胆的灵感，做每一道菜。</p></div></section><section className="values section-pad"><p className="eyebrow">我们的三条死磕</p><div className="values-grid"><Value n="01" title="食材够鲜" text="当天到货，当天处理。能看见来处，也吃得出新鲜。" /><Value n="02" title="火候够狠" text="锅气是灵魂。该猛火的绝不温吞，该慢炖的绝不着急。" /><Value n="03" title="心意够满" text="好吃不是口号，是每一次端上桌时，我们的认真。" /></div></section><section className="join section-pad"><p className="eyebrow">见面吧</p><h2>锅已经热了，<br /><span>就等你来。</span></h2><Link className="button button-dark" href="/#menu">去看看菜单 <span>→</span></Link></section></main>;
}

function Value({ n, title, text }: { n: string; title: string; text: string }) { return <article><b>{n}</b><h3>{title}</h3><p>{text}</p></article>; }
