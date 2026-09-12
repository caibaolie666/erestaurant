import Link from 'next/link';

export default function HomePage() {
  return <main>
    <section className="hero"><div className="hero-copy"><p className="eyebrow">· 今日爆香 ·</p><h1>一口下去，<br /><em>好吃到爆。</em></h1><p className="hero-text">新鲜、有趣、火力全开。我们认真对待每一颗蔬菜，也认真制造每一次舌尖惊喜。</p><Link className="button button-dark" href="#menu">开吃吧 <span>→</span></Link></div><div className="hero-art"><div className="burst burst-one">啪！</div><div className="burst burst-two">HOT</div><div className="plate"><i className="food f1" /><i className="food f2" /><i className="food f3" /><i className="food f4" /><i className="food f5" /><i className="food f6" /></div><p className="hero-label">NO. 01<br /><strong>爆香小炒</strong></p></div><div className="scroll-note">SCROLL TO TASTE <span>↓</span></div></section>
    <section className="intro section-pad"><p className="eyebrow">我们相信</p><h2>日常的一餐，<br />也值得<span>轰轰烈烈。</span></h2><p>不玩复杂的套路，只把好食材、真手艺和一点点不安分，盛进你的碗里。</p></section>
    <section id="menu" className="menu-section section-pad"><div className="section-heading"><div><p className="eyebrow">本周推荐</p><h2>菜单有点<span>爆。</span></h2></div><a href="#menu" className="text-link">换一批看看 ↻</a></div><div className="dish-grid"><Dish color="dish-yellow" visual="noodles" number="01 / 招牌" name="爆裂椒麻拌面" desc="麻、香、辣，刚刚好上头。" price="28" tag="辣" /><Dish color="dish-pink" visual="tofu" number="02 / 人气" name="番茄火山豆腐" desc="酸甜滚烫，软嫩到离谱。" price="32" tag="鲜" /><Dish color="dish-blue" visual="chicken" number="03 / 必点" name="咔滋爆汁小酥肉" desc="外酥里嫩，蘸料管够。" price="36" tag="脆" /></div></section>
    <section className="visit section-pad"><div><p className="eyebrow">来坐坐</p><h2>今天，也要<br /><span>好好吃饭。</span></h2></div><div className="visit-info"><p>北京市朝阳区有料路 88 号<br />每日 11:00 — 22:00</p><a className="button button-light" href="mailto:hello@baoliecai.com">找我们聊聊 <span>→</span></a></div></section>
  </main>;
}

function Dish({ color, visual, number, name, desc, price, tag }: { color: string; visual: string; number: string; name: string; desc: string; price: string; tag: string }) {
  return <article className={`dish ${color}`}><div className={`dish-visual ${visual}`}><i /><i /><i /><b>{tag}</b></div><p className="dish-number">{number}</p><h3>{name}</h3><p>{desc}</p><strong>¥ {price}</strong></article>;
}
