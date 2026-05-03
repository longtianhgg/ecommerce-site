"use client";

import { useState } from "react";

const navItems = [
  { href: "#categories", label: "分类" },
  { href: "#products", label: "热销" },
  { href: "#offers", label: "优惠" },
  { href: "#reviews", label: "评价" },
  { href: "#contact", label: "联系" }
] as const;

const categories = [
  {
    index: "01",
    title: "智能数码",
    description: "耳机、平板、办公设备与移动配件精选。"
  },
  {
    index: "02",
    title: "家居生活",
    description: "厨房、收纳、香氛和提升居住幸福感的单品。"
  },
  {
    index: "03",
    title: "美妆个护",
    description: "护肤、吹护工具与旅途便携护理用品。"
  },
  {
    index: "04",
    title: "运动户外",
    description: "轻运动装备、出行水具和日常活力穿搭。"
  }
] as const;

const products = [
  {
    tag: "热卖",
    thumbClassName: "thumb-one",
    name: "CloudBuds 无线耳机",
    description: "降噪清晰通话，适合通勤和运动场景。",
    price: "¥399"
  },
  {
    tag: "新品",
    thumbClassName: "thumb-two",
    name: "Luma 便携榨汁杯",
    description: "轻量随行设计，一键清洗更省心。",
    price: "¥229"
  },
  {
    tag: "推荐",
    thumbClassName: "thumb-three",
    name: "Halo 香氛加湿器",
    description: "柔和夜灯氛围，提升卧室与办公区舒适度。",
    price: "¥319"
  }
] as const;

const reviews = [
  {
    quote: "“页面找商品很顺手，家居区和优惠活动做得很清晰，下单流程也很轻松。”",
    author: "林小姐",
    role: "复购用户",
    ratingLabel: "五星好评"
  },
  {
    quote: "“热销商品的展示很直观，移动端浏览体验也很好，价格信息一眼就能看到。”",
    author: "陈先生",
    role: "数码爱好者",
    ratingLabel: "五星好评"
  },
  {
    quote: "“整体风格很干净，像逛一本精心整理的生活方式杂志，愿意多停留一会儿。”",
    author: "王女士",
    role: "家居用户",
    ratingLabel: "五星好评"
  }
] as const;

export default function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set());

  const handleAddToCart = (productName: string) => {
    if (addedProducts.has(productName)) {
      return;
    }

    setCartCount((count) => count + 1);
    setAddedProducts((current) => new Set(current).add(productName));
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#home">
            NovaMart
          </a>
          <button
            aria-expanded={isNavOpen}
            aria-label="切换导航"
            className="nav-toggle"
            onClick={() => setIsNavOpen((open) => !open)}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav-menu${isNavOpen ? " open" : ""}`}>
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                onClick={() => setIsNavOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="cart-entry" href="#cart" aria-label="购物车入口">
            <span>购物车</span>
            <strong>{cartCount}</strong>
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">新一代生活方式电商</p>
              <h1>把质感好物带回家，让购物更轻盈。</h1>
              <p className="hero-text">
                精选家居、数码、个护与运动单品，以更清爽的浏览体验、更直接的优惠和更安心的服务，打造你会愿意反复打开的首页。
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#products">
                  立即选购
                </a>
                <a className="button secondary" href="#offers">
                  查看优惠
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <strong>1200+</strong>
                  <span>精选商品</span>
                </div>
                <div>
                  <strong>48h</strong>
                  <span>极速发货</span>
                </div>
                <div>
                  <strong>4.9</strong>
                  <span>用户评分</span>
                </div>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-top">
                <span>本周主推</span>
                <span className="badge">限时 75 折</span>
              </div>
              <div className="hero-product">
                <div className="product-visual"></div>
                <div>
                  <h2>AirFlow 智能净化风扇</h2>
                  <p>冷暖双循环、静音节能、适配卧室和客厅场景。</p>
                  <div className="price-row">
                    <strong>¥699</strong>
                    <del>¥899</del>
                  </div>
                </div>
              </div>
              <ul className="feature-list">
                <li>包邮到家</li>
                <li>支持 7 天无忧退换</li>
                <li>下单赠清洁配件套装</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">商品分类</p>
              <h2>按场景挑选，更快找到想要的好物</h2>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <article className="card category-card" key={category.index}>
                  <span className="category-icon">{category.index}</span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <div className="section-heading heading-row">
              <div>
                <p className="eyebrow">热销商品</p>
                <h2>口碑与销量都在线的人气单品</h2>
              </div>
              <a className="text-link" href="#contact">
                获取更多选品建议
              </a>
            </div>
            <div className="product-grid">
              {products.map((product) => {
                const isAdded = addedProducts.has(product.name);

                return (
                  <article className="card product-card" key={product.name}>
                    <span className="tag">{product.tag}</span>
                    <div className={`product-thumb ${product.thumbClassName}`}></div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="product-meta">
                      <strong>{product.price}</strong>
                      <button
                        className="mini-button add-cart"
                        disabled={isAdded}
                        onClick={() => handleAddToCart(product.name)}
                        type="button"
                      >
                        {isAdded ? "已加入" : "加入购物车"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="offers">
          <div className="container offer-panel">
            <div>
              <p className="eyebrow">优惠活动</p>
              <h2>会员周专属折扣，满额再减</h2>
              <p>现在注册即可领取新人礼券，指定品类叠加满减，热门商品低至 7 折。</p>
            </div>
            <div className="offer-cards">
              <article className="offer-card">
                <span>新人礼包</span>
                <strong>¥80</strong>
                <p>注册即领满 399 可用</p>
              </article>
              <article className="offer-card accent">
                <span>周末闪促</span>
                <strong>2 件 85 折</strong>
                <p>家居与个护专区限时开启</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section cart-section" id="cart">
          <div className="container cart-banner">
            <div>
              <p className="eyebrow">购物车入口</p>
              <h2>已为你保留心动商品，随时继续下单</h2>
            </div>
            <a className="button primary" href="#contact">
              立即结算咨询
            </a>
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">用户评价</p>
              <h2>真实反馈，让每次下单都更有把握</h2>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="card review-card" key={review.author}>
                  <div className="review-stars" aria-label={review.ratingLabel}>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                  </div>
                  <p>{review.quote}</p>
                  <strong>{review.author}</strong>
                  <span>{review.role}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section" id="contact">
        <div className="container footer-grid">
          <div>
            <p className="eyebrow">联系方式</p>
            <h2>欢迎联系 NovaMart</h2>
            <p>邮箱：hello@novamart.shop</p>
            <p>电话：400-888-2026</p>
            <p>地址：上海市静安区生活方式大道 88 号</p>
          </div>
          <form className="contact-card">
            <label>
              姓名
              <input type="text" placeholder="请输入你的姓名" />
            </label>
            <label>
              邮箱
              <input type="email" placeholder="请输入你的邮箱" />
            </label>
            <label>
              需求
              <textarea rows={4} placeholder="想了解的商品或合作内容"></textarea>
            </label>
            <button type="button" className="button primary full">
              发送咨询
            </button>
          </form>
        </div>
      </footer>
    </>
  );
}
