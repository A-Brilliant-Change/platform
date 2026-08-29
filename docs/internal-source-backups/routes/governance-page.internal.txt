import { platformGovernanceArchitecture, runPlatformGovernance } from "@/neuralvault/governance/platform-governance";

const governance = runPlatformGovernance();

function LayerTree({ layers }: { layers: typeof platformGovernanceArchitecture }) {
  return (
    <div className="space-y-4">
      {layers.map((layer) => (
        <div key={layer.name} className="rounded-[24px] border border-white/10 bg-[#0D1F3D] p-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">{layer.name}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {layer.children.map((child) => (
              <span
                key={child}
                className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/8 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80"
              >
                {child}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-[#091B36] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[28px] border border-[#D4AF37]/35 bg-[#0B1F3A]/80 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Platform Governance Layer™</p>
          <h1 className="mt-4 text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl">
            Registry, Doctrine, and Manifest Validation
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            This governance layer validates schema integrity, doctrine alignment, asset readiness, and relationship continuity across the NeuralVault operating system.
          </p>
          <div className="mt-5 inline-flex rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
            {governance.status} status
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Architecture map</p>
            <div className="mt-6">
              <LayerTree layers={governance.architectureLayers} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Summary</p>
              <h2 className="mt-3 text-2xl font-light text-white">Validation overview</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">{governance.summary}</p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Checklist</p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {governance.checks.map((check) => (
                  <li key={check.id} className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-light text-white">{check.title}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">{check.status}</span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-white/60">{check.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
