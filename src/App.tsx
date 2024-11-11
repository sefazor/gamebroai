import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HowToPlay } from './pages/HowToPlay';
import { Leaderboard } from './pages/Leaderboard';
import { Season } from './pages/Season';
import { AI } from './pages/AI';
import { Contact } from './pages/Contact';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';

const App: React.FC = () => {
  const renderPage = () => {
    const path = window.location.pathname;

    switch (path) {
      case '/':
        return <Home />;
      case '/how-to-play':
        return <HowToPlay />;
      case '/leaderboard':
        return <Leaderboard />;
      case '/season':
        return <Season />;
      case '/ai':
        return <AI />;
      case '/contact':
        return <Contact />;
      case '/faq':
        return <FAQPage />;
      case '/privacy':
        return <PrivacyPolicy />;
      case '/terms':
        return <TermsOfService />;
      case '/cookies':
        return <CookiePolicy />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;