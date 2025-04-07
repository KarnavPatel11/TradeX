import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import './App.css'; // You'll need to convert the CSS from style.css


function App() {
  return (
    <>
      <Header />
      <main>
        <article>
          <HeroSection />
          <TrendSection />
          <MarketSection />
          <InstructionSection />
          <AboutSection />
          <AppSection />
        </article>
      </main>
      <Footer />
    </>
  );
  
}

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <img src="/assets/images/logo.svg" width="32" height="32" alt="TradeX logo" />
          TradeX
        </a>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/" className="navbar-link active">Homepage</a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">Buy Crypto</a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">Markets</a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">Sell Crypto</a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">Blog</a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">BITUSDT</a>
            </li>
          </ul>
        </nav>

        <button 
          className="nav-toggle-btn" 
          aria-label="Toggle menu" 
          onClick={toggleNav}
        >
          <span className={`line line-1 ${isNavOpen ? 'active' : ''}`}></span>
          <span className={`line line-2 ${isNavOpen ? 'active' : ''}`}></span>
          <span className={`line line-3 ${isNavOpen ? 'active' : ''}`}></span>
        </button>

        <a href="/" className="btn btn-outline">Wallet</a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="section hero" aria-label="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">Buy & Sell Digital Assets In The TradeX</h1>
          <p className="hero-text">
            Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
          </p>
          <a href="/" className="btn btn-primary">Get started now</a>
        </div>

        <figure className="hero-banner">
          <img src="/assets/images/hero-banner.png" width="570" height="448" alt="hero banner" className="w-100" />
        </figure>
      </div>
    </section>
  );
}

function TrendSection() {
  const [activeTab, setActiveTab] = useState('Crypto');
  
  const tabData = [
    'Crypto', 'DeFi', 'BSC', 'NFT', 'Metaverse', 'Polkadot', 'Solana', 'Opensea', 'Makersplace'
  ];
  
  return (
    <section className="section trend" aria-label="crypto trend">
      <div className="container">
        <div className="trend-tab">
          <ul className="tab-nav">
            {tabData.map((tab) => (
              <li key={tab}>
                <button 
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>

          <ul className="tab-content">
            <li>
              <div className="trend-card">
                <div className="card-title-wrapper">
                  <img src="/assets/images/coin-1.svg" width="24" height="24" alt="bitcoin logo" />
                  <a href="/" className="card-title">
                    Bitcoin <span className="span">BTC/USD</span>
                  </a>
                </div>
                <data className="card-value" value="46168.95">USD 46,168.95</data>
                <div className="card-analytics">
                  <data className="current-price" value="36641.20">36,641.20</data>
                  <div className="badge red">-0.79%</div>
                </div>
              </div>
            </li>

            <li>
              <div className="trend-card active">
                <div className="card-title-wrapper">
                  <img src="/assets/images/coin-2.svg" width="24" height="24" alt="ethereum logo" />
                  <a href="/" className="card-title">
                    Ethereum <span className="span">ETH/USD</span>
                  </a>
                </div>
                <data className="card-value" value="3480.04">USD 3,480.04</data>
                <div className="card-analytics">
                  <data className="current-price" value="36641.20">36,641.20</data>
                  <div className="badge green">+10.55%</div>
                </div>
              </div>
            </li>

            <li>
              <div className="trend-card">
                <div className="card-title-wrapper">
                  <img src="/assets/images/coin-3.svg" width="24" height="24" alt="tether logo" />
                  <a href="/" className="card-title">
                    Tether <span className="span">USDT/USD</span>
                  </a>
                </div>
                <data className="card-value" value="1.00">USD 1.00</data>
                <div className="card-analytics">
                  <data className="current-price" value="36641.20">36,641.20</data>
                  <div className="badge red">-0.01%</div>
                </div>
              </div>
            </li>

            <li>
              <div className="trend-card">
                <div className="card-title-wrapper">
                  <img src="/assets/images/coin-4.svg" width="24" height="24" alt="bnb logo" />
                  <a href="/" className="card-title">
                    BNB <span className="span">BNB/USD</span>
                  </a>
                </div>
                <data className="card-value" value="443.56">USD 443.56</data>
                <div className="card-analytics">
                  <data className="current-price" value="36641.20">36,641.20</data>
                  <div className="badge red">-1.24%</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function MarketSection() {
  const [activeTab, setActiveTab] = useState('View All');
  const [favorites, setFavorites] = useState({});
  
  const tabData = [
    'View All', 'Metaverse', 'Entertainment', 'Energy', 'NFT', 'Gaming', 'Music'
  ];
  
  const marketData = [
    {
      id: 1,
      name: 'Bitcoin',
      abbr: 'BTC',
      img: '/assets/images/coin-1.svg',
      lastPrice: '$56,623.54',
      change: '+1.45%',
      isPositive: true,
      marketCap: '$880,423,640,582',
      chart: '/assets/images/chart-1.svg'
    },
    {
      id: 2,
      name: 'Ethereum',
      abbr: 'ETH',
      img: '/assets/images/coin-2.svg',
      lastPrice: '$56,623.54',
      change: '-5.12%',
      isPositive: false,
      marketCap: '$880,423,640,582',
      chart: '/assets/images/chart-2.svg'
    },
    {
      id: 3,
      name: 'Tether',
      abbr: 'USDT/USD',
      img: '/assets/images/coin-3.svg',
      lastPrice: '$56,623.54',
      change: '+1.45%',
      isPositive: true,
      marketCap: '$880,423,640,582',
      chart: '/assets/images/chart-1.svg'
    },
    {
      id: 4,
      name: 'BNB',
      abbr: 'BNB/USD',
      img: '/assets/images/coin-4.svg',
      lastPrice: '$56,623.54',
      change: '-3.75%',
      isPositive: false,
      marketCap: '$880,423,640,582',
      chart: '/assets/images/chart-2.svg'
    },
    {
      id: 5,
      name: 'Solana',
      abbr: 'SOL',
      img: '/assets/images/coin-5.svg',
      lastPrice: '$56,623.54',
      change: '+1.45%',
      isPositive: true,
      marketCap: '$880,423,640,582',
      chart: '/assets/images/chart-1.svg'
    },
    {
      id: 6,
      name: 'XRP',
      abbr: 'XRP',
      img: '/assets/images/coin-6.svg',
      lastPrice: '$56,623.54',
      change: '-2.22%',
      isPositive: false,
      marketCap: '$880,423,640,582',
      chart: '/assets/images/chart-2.svg'
    },
    {
      id: 7,
      name: 'Cardano',
      abbr: 'ADA',
      img: '/assets/images/coin-7.svg',
      lastPrice: '$56,623.54',
      change: '+0.8%',
      isPositive: true,
      marketCap: '$880,423,640,582',
      chart: '/assets/images/chart-1.svg'
    },
    {
      id: 8,
      name: 'Avalanche',
      abbr: 'AVAX',
      img: '/assets/images/coin-8.svg',
      lastPrice: '$56,623.54',
      change: '+1.41%',
      isPositive: true,
      marketCap: '$880,423,640,582',
      chart: '/assets/images/chart-1.svg'
    }
  ];
  
  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="section market" aria-label="market update">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Market Update</h2>
          <a href="/" className="btn-link">See All Coins</a>
        </div>

        <div className="market-tab">
          <ul className="tab-nav">
            {tabData.map((tab) => (
              <li key={tab}>
                <button 
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>

          <table className="market-table">
            <thead className="table-head">
              <tr className="table-row table-title">
                <th className="table-heading"></th>
                <th className="table-heading" scope="col">#</th>
                <th className="table-heading" scope="col">Name</th>
                <th className="table-heading" scope="col">Last Price</th>
                <th className="table-heading" scope="col">24h %</th>
                <th className="table-heading" scope="col">Market Cap</th>
                <th className="table-heading" scope="col">Last 7 Days</th>
                <th className="table-heading"></th>
              </tr>
            </thead>

            <tbody className="table-body">
              {marketData.map((coin) => (
                <tr className="table-row" key={coin.id}>
                  <td className="table-data">
                    <button 
                      className="add-to-fav" 
                      aria-label="Add to favourite"
                      onClick={() => toggleFavorite(coin.id)}
                    >
                      {favorites[coin.id] ? (
                        <Star className="icon-fill" fill="currentColor" />
                      ) : (
                        <Star className="icon-outline" />
                      )}
                    </button>
                  </td>
                  <th className="table-data rank" scope="row">{coin.id}</th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img src={coin.img} width="20" height="20" alt={`${coin.name} logo`} className="img" />
                      <h3>
                        <a href="/" className="coin-name">{coin.name} <span className="span">{coin.abbr}</span></a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">{coin.lastPrice}</td>
                  <td className={`table-data last-update ${coin.isPositive ? 'green' : 'red'}`}>
                    {coin.change}
                  </td>
                  <td className="table-data market-cap">{coin.marketCap}</td>
                  <td className="table-data">
                    <img src={coin.chart} width="100" height="40" alt={`${coin.isPositive ? 'profit' : 'loss'} chart`} className="chart" />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function InstructionSection() {
  const instructionSteps = [
    {
      id: 1,
      img: '/assets/images/instruction-1.png',
      title: 'Download',
      text: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.'
    },
    {
      id: 2,
      img: '/assets/images/instruction-2.png',
      title: 'Connect Wallet',
      text: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.'
    },
    {
      id: 3,
      img: '/assets/images/instruction-3.png',
      title: 'Start Trading',
      text: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.'
    },
    {
      id: 4,
      img: '/assets/images/instruction-4.png',
      title: 'Earn Money',
      text: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.'
    }
  ];

  return (
    <section className="section instruction" aria-label="instruction">
      <div className="container">
        <h2 className="h2 section-title">How It Work</h2>
        <p className="section-text">
          Stacks is a production-ready library of stackable content blocks built in React Native.
        </p>

        <ul className="instruction-list">
          {instructionSteps.map((step) => (
            <li key={step.id}>
              <div className="instruction-card">
                <figure className="card-banner">
                  <img src={step.img} width="96" height="96" loading="lazy" alt={`Step ${step.id}`} className="img" />
                </figure>
                <p className="card-subtitle">Step {step.id}</p>
                <h3 className="h3 card-title">{step.title}</h3>
                <p className="card-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AboutSection() {
  const benefitsList = [
    {
      id: 1,
      title: 'View real-time cryptocurrency prices',
      text: 'Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.'
    },
    {
      id: 2,
      title: 'Buy and sell BTC, ETH, XRP, OKB, Etc...',
      text: 'Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.'
    }
  ];

  return (
    <section className="section about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <img src="/assets/images/about-banner.png" width="748" height="436" loading="lazy" alt="about banner" className="w-100" />
        </figure>

        <div className="about-content">
          <h2 className="h2 section-title">What Is TradeX</h2>
          <p className="section-text">
            Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot
            Trade, Futures Trade, P2P, Staking, Mining, and margin.
          </p>

          <ul className="section-list">
            {benefitsList.map((item) => (
              <li className="section-item" key={item.id}>
                <div className="title-wrapper">
                  <CheckCircle aria-hidden="true" />
                  <h3 className="h3 list-title">{item.title}</h3>
                </div>
                <p className="item-text">{item.text}</p>
              </li>
            ))}
          </ul>

          <a href="/" className="btn btn-primary">Explore More</a>
        </div>
      </div>
    </section>
  );
}

function AppSection() {
  const appFeatures = [
    {
      id: 1,
      title: 'Buy, Sell, And Trade On The Go',
      text: 'Manage Your Holdings From Your Mobile Decive'
    },
    {
      id: 2,
      title: 'Take Control Of Your Wealth',
      text: 'Rest Assured You (And Only You) Have Access To Your Funds'
    }
  ];

  return (
    <section className="section app" aria-label="app">
      <div className="container">
        <div className="app-content">
          <h2 className="h2 section-title">Free Your Money & Invest With Confident</h2>
          <p className="section-text">
            With Cryptor Trade, you can be sure your trading skills are matched
          </p>

          <ul className="section-list">
            {appFeatures.map((feature) => (
              <li className="section-item" key={feature.id}>
                <div className="title-wrapper">
                  <CheckCircle aria-hidden="true" />
                  <h3 className="h3 item-title">{feature.title}</h3>
                </div>
                <p className="item-text">{feature.text}</p>
              </li>
            ))}
          </ul>

          <div className="app-wrapper">
            <a href="/">
              <img src="/assets/images/googleplay.png" width="135" height="40" loading="lazy" alt="get it on google play" />
            </a>
            <a href="/">
              <img src="/assets/images/appstore.png" width="120" height="40" loading="lazy" alt="download on the app store" />
            </a>
          </div>
        </div>

        <div className="app-banner">
          <img src="/assets/images/app-banner.png" width="618" height="526" loading="lazy" alt="app banner" className="w-100" />
          <span className="span">Scan To Download</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = {
    products: ['Spot', 'Inverse Perpetual', 'USDT Perpetual', 'Exchange', 'Launchpad', 'Binance Pay'],
    services: ['Buy Crypto', 'Markets', 'Tranding Fee', 'Affiliate Program', 'Referral Program', 'API'],
    support: ['Bybit Learn', 'Help Center', 'User Feedback', 'Submit a request', 'API Documentation', 'Trading Rules'],
    about: ['About Bybit', 'Authenticity Check', 'Careers', 'Business Contacts', 'Blog']
  };

  return ( 
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src="/assets/images/logo.svg" width="50" height="50" alt="TradeX logo" />
              TradeX
            </a>
            <h2 className="footer-title">Let's talk! 🤙</h2>
            <a href="tel:+918780050252" className="footer-contact-link">+91 8780050252</a>
            <a href="mailto:hello.TradeX@gmail.com" className="footer-contact-link">hello.TradeX@gmail.com</a>
            <address className="footer-contact-link">
              At & Post Gandhinagar, Gujarat, India
            </address>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Products</p>
            </li>
            {footerLinks.products.map((link, index) => (
              <li key={`product-${index}`}>
                <a href="/" className="footer-link">{link}</a>
              </li>
            ))}
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Services</p>
            </li>
            {footerLinks.services.map((link, index) => (
              <li key={`service-${index}`}>
                <a href="/" className="footer-link">{link}</a>
              </li>
            ))}
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Support</p>
            </li>
            {footerLinks.support.map((link, index) => (
              <li key={`support-${index}`}>
                <a href="/" className="footer-link">{link}</a>
              </li>
            ))}
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">About Us</p>
            </li>
            {footerLinks.about.map((link, index) => (
              <li key={`about-${index}`}>
                <a href="/" className="footer-link">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2025 TradeX All Rights Reserved by <a href="/" className="copyright-link">KarnavPatel</a>
          </p>

          <ul className="social-list">
            <li>
              <a href="/" className="social-link">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="/" className="social-link">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="/" className="social-link">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="/" className="social-link">
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default App;