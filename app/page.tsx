import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";
import Metrics from "@/src/components/sections/Metrics";
import Journey from "@/src/components/sections/Journey";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#091B36] text-white">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Journey />
        {[
          ["atlas", "The Atlas", "See the forces shaping a more brilliant future."],
          ["programs", "Programs", "Move from intention to meaningful action."],
          ["frameworks", "Frameworks", "Tools for transformation that lasts."],
          ["founders-voice", "Founder's Voice", "A clear point of view for a changing world."],
        ].map(([id, title, description]) => (
          <section key={id} id={id} className="border-t border-white/10 px-6 py-28 sm:px-10 lg:px-16">
            <div className="mx-auto grid w-full max-w-7xl gap-6 sm:grid-cols-[1fr_2fr]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">{title}</p>
              <div>
                <h2 className="text-4xl font-light tracking-[-0.03em] sm:text-6xl">{title}</h2>
                <p className="mt-5 max-w-xl text-lg font-light text-white/60">{description}</p>
              </div>
            </div>
          </section>
        ))}
        <section id="join" className="border-t border-white/10 px-6 py-28 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-7xl">
            <h2 className="max-w-3xl text-4xl font-light tracking-[-0.03em] sm:text-6xl">Build what comes next.</h2>
            <a href="mailto:hello@abrilliantchange.com" className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#091B36] transition-colors hover:bg-white">Join The Movement -&gt;</a>
          </div>
        </section>
      </main>
    </div>
  );
}
