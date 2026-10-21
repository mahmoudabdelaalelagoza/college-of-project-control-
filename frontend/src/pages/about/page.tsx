import Footer from '@/components/feature/Footer';
import AboutCPCM from './components/AboutCPCM';
import './about.css';

export default function AboutPage() {
  return (
    <div className="about-page min-h-screen bg-background-50">
      <main id="hero">
        <AboutCPCM />
      </main>
      <Footer />
    </div>
  );
}
