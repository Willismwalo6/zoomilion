import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsApp } from './components/Icons';
import { waLink } from './data/site';
import Home from './pages/Home';
import CataloguePage from './pages/CataloguePage';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import SpareParts from './pages/SpareParts';
import Credits from './pages/Credits';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main key={location.pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tractors" element={<CataloguePage view="tractors" />} />
          <Route path="/implements" element={<CataloguePage view="implements" />} />
          <Route path="/catalogue" element={<CataloguePage view="all" />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/spare-parts" element={<SpareParts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />

      <a
        className="wa-float"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
      >
        <WhatsApp size={18} />
        <span className="wa-float__label">WhatsApp</span>
      </a>
    </>
  );
}
