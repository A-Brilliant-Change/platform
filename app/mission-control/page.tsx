import { buildMissionControlOS } from "@/src/lib/mission-control";

const missionControl = buildMissionControlOS();

function MetricCard({ metric }: { metric: any }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/3 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">{metric.title}</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-light text-white">{metric.value}</span>
            {metric.unit && <span className="text-sm text-white/60">{metric.unit}</span>}
          </div>
        </div>
        <span className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em] ${
          metric.status === "on-track"
            ? "bg-green-500/20 text-green-300"
            : metric.status === "at-risk"
              ? "bg-yellow-500/20 text-yellow-300"
              : "bg-red-500/20 text-red-300"
        }`}>
          {metric.status}
        </span>
      </div>
      {metric.trend && (
        <p className="mt-3 text-xs text-white/60">Trend: {metric.trend}</p>
      )}
    </div>
  );
}

export default function MissionControlPage() {
  return (
    <main className="min-h-screen bg-[#091B36] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[28px] border border-[#D4AF37]/30 bg-[#0B1F3A]/80 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">Mission Control OS™</p>
          <h1 className="mt-4 text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl">
            Executive Command Center
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-white/70">
            {missionControl.principle}
          </p>
          <p className="mt-4 text-sm text-white/60">{missionControl.summary}</p>
        </header>

        <section className="space-y-6">
          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Organizational scorecard</p>
            <h2 className="mt-3 text-2xl font-light text-white">Health metrics</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Overall</p>
                <p className="mt-3 text-4xl font-light text-white">{missionControl.organizationalScorecard.overall}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Leadership</p>
                <p className="mt-3 text-4xl font-light text-white">{missionControl.organizationalScorecard.leadership}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Operations</p>
                <p className="mt-3 text-4xl font-light text-white">{missionControl.organizationalScorecard.operations}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Impact</p>
                <p className="mt-3 text-4xl font-light text-white">{missionControl.organizationalScorecard.impact}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Ecosystem</p>
                <p className="mt-3 text-4xl font-light text-white">{missionControl.organizationalScorecard.ecosystem}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Organizational health</p>
            <div className="mt-5 space-y-4">
              {missionControl.executiveDashboard.organizationalHealth.map((metric) => (
                <MetricCard key={metric.id} metric={metric} />
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Participant metrics</p>
            <div className="mt-5 space-y-4">
              {missionControl.executiveDashboard.participantMetrics.map((metric) => (
                <MetricCard key={metric.id} metric={metric} />
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Transformation metrics</p>
            <div className="mt-5 space-y-4">
              {missionControl.executiveDashboard.transformationMetrics.map((metric) => (
                <MetricCard key={metric.id} metric={metric} />
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Workforce command</p>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                <span className="text-white/75">Total participants</span>
                <span className="text-2xl font-light text-[#D4AF37]">{missionControl.workforceCommand.totalParticipants}</span>
              </div>
              <div className="flex justify-between rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                <span className="text-white/75">Active journeys</span>
                <span className="text-2xl font-light text-[#D4AF37]">{missionControl.workforceCommand.activeJourneys}</span>
              </div>
              <div className="flex justify-between rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                <span className="text-white/75">Milestone completions</span>
                <span className="text-2xl font-light text-[#D4AF37]">{missionControl.workforceCommand.completedMilestones}</span>
              </div>
              <div className="flex justify-between rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                <span className="text-white/75">Status</span>
                <span className="text-sm uppercase tracking-[0.15em] text-green-300">{missionControl.workforceCommand.status}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Ecosystem command</p>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                <span className="text-white/75">Partner organizations</span>
                <span className="text-2xl font-light text-[#D4AF37]">{missionControl.ecosystemCommand.partners}</span>
              </div>
              <div className="flex justify-between rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                <span className="text-white/75">Coordination score</span>
                <span className="text-2xl font-light text-[#D4AF37]">{missionControl.ecosystemCommand.coordination}%</span>
              </div>
              <div className="flex justify-between rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                <span className="text-white/75">Trust score</span>
                <span className="text-2xl font-light text-[#D4AF37]">{missionControl.ecosystemCommand.trustScore}/100</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">Active domains</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {missionControl.ecosystemCommand.activeDomains.map((domain) => (
                    <span key={domain} className="text-xs text-white/70">{domain}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">Agent operations</p>
          <div className="mt-6 space-y-4">
            {missionControl.agentOperations.map((agent) => (
              <div key={agent.id} className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-light text-white">{agent.name}</p>
                    <p className="text-sm text-white/60">{agent.role}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em] ${
                    agent.status === "active" ? "bg-green-500/20 text-green-300" : "bg-yellow-500/20 text-yellow-300"
                  }`}>
                    {agent.status}
                  </span>
                </div>
                <div className="mt-3 flex gap-6 text-sm">
                  <div>
                    <p className="text-white/60">Assignments</p>
                    <p className="text-[#D4AF37]">{agent.assignments}</p>
                  </div>
                  <div>
                    <p className="text-white/60">Completion rate</p>
                    <p className="text-[#D4AF37]">{agent.completionRate}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
