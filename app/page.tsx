import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import MouseGlow from "@/components/MouseGlow";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Tracks from "@/components/sections/Tracks";
import Prizes from "@/components/sections/Prizes";
import Judges from "@/components/sections/Judges";
import Criteria from "@/components/sections/Criteria";
import Timeline from "@/components/sections/Timeline";
import Resources from "@/components/sections/Resources";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Community from "@/components/sections/Community";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

async function getDevpostStats() {
  try {
    // Fetch Devpost HTML directly. Next.js will cache this and revalidate every 60 seconds.
    const res = await fetch('https://build-the-future-with-ai.devpost.com/', { 
      next: { revalidate: 60 } 
    });
    
    if (!res.ok) return { participants: 64, prizes: 7 };
    
    const html = await res.text();
    const participantsMatch = html.match(/<strong>([\d,]+)<\/strong>\s*participants/i);
    const prizesMatch = html.match(/<strong>([\d,]+)<\/strong>\s*non-cash prizes/i);
    
    return {
      participants: participantsMatch ? parseInt(participantsMatch[1].replace(/,/g, '')) : 64,
      prizes: prizesMatch ? parseInt(prizesMatch[1].replace(/,/g, '')) : 7
    };
  } catch (error) {
    return { participants: 64, prizes: 7 };
  }
}

export default async function Home() {
  const stats = await getDevpostStats();

  return (
    <main className="relative bg-[#030712] min-h-screen overflow-x-hidden">
      {/* Global particle background */}
      <ParticleBackground />
      
      {/* Mouse-following ambient glow */}
      <MouseGlow />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Page Sections */}
      <Hero participants={stats.participants} prizes={stats.prizes} />

      <div className="section-divider" />
      <Stats participants={stats.participants} prizes={stats.prizes} />

      <div className="section-divider" />
      <About />

      <div className="section-divider" />
      <Tracks />

      <div className="section-divider" />
      <Prizes />

      <div className="section-divider" />
      <Judges />

      <div className="section-divider" />
      <Criteria />

      <div className="section-divider" />
      <Timeline />

      <div className="section-divider" />
      <Resources />

      <div className="section-divider" />
      <Team />

      <div className="section-divider" />
      <FAQ />

      <div className="section-divider" />
      <Community />

      <div className="section-divider" />
      <CTA />

      <Footer />
    </main>
  );
}
