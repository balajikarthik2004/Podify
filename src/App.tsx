import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import { Home } from "./pages/home";
import { Explore } from "./pages/explore";
import { Categories } from "./pages/categories";
import { Creators } from "./pages/creators";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/creators" element={<Creators />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}