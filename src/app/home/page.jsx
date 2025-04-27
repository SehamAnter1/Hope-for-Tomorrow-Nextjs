import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1">
        <Hero />
      </div>
    </div>
  );
}
