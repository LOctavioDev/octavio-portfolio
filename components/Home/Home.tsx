import About from './About/About';
import Hero from './Hero/Hero';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
    </div>
  );
}
