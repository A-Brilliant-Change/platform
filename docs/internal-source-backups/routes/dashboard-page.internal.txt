"use client";

import {
  analyzeTransformationGoal,
  buildTransformationGoal,
  getTransformationDomains,
} from "@/neuralvault/transform/transformation-engine";
import { evaluateBarriers } from "@/neuralvault/transform/barrier-engine";
import { evaluateStrengths } from "@/neuralvault/transform/strength-engine";
import { buildPathwayPlan } from "@/neuralvault/transform/pathway-builder";
import { forecastOutcome } from "@/neuralvault/transform/forecast-engine";
import { estimateCommunityImpact } from "@/neuralvault/transform/community-impact-engine";
import { buildOpportunityGraph } from "@/neuralvault/transform/opportunity-graph";
import { neuralVaultIntelligence } from "@/neuralvault/intelligence/neuralvault-intelligence";

const domains = getTransformationDomains();

const goal = buildTransformationGoal(
  "goal-economic-mobility",
  "Economic Mobility",
  "Help participants move from instability toward durable prosperity through coordinated access and support.",
  "high",
  ["workforce-development", "economic-mobility", "resource-navigation", "housing-stability"],
);

const analysis = analyzeTransformationGoal(goal);
const barriers = evaluateBarriers(goal, analysis.domains);
const strengths = evaluateStrengths(goal, analysis.domains);
const pathway = buildPathwayPlan(goal, analysis.domains);
const forecast = forecastOutcome(goal, analysis.domains);
const impact = estimateCommunityImpact(goal, analysis.domains);
const graph = buildOpportunityGraph(goal.title, goal.domainIds);

export default function TransformationDashboardPage() {
  return (
    <main className="min-h-screen bg-[#091B36] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[28px] border border-[#D4AF37]/30 bg-[#0B1F3A]/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">NeuralVault Intelligence™</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-light tracking-[-0.06em] text-white sm:text-5xl">
                {neuralVaultIntelligence.objective.title}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-white/70">
                {neuralVaultIntelligence.summary}
              </p>
            </div>
            <div className="rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/10 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
              {neuralVaultIntelligence.principle}
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {neuralVaultIntelligence.intelligenceSignals.map((signal) => (
            <article key={signal.id} className="rounded-[24px] border border-white/10 bg-white/3 p-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Signal</p>
              <h2 className="mt-3 text-xl font-light tracking-[-0.04em] text-white">{signal.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">{signal.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {analysis.recommendations.map((recommendation) => (
            <article key={recommendation.id} className="rounded-[24px] border border-white/10 bg-white/3 p-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Recommendation</p>
              <h2 className="mt-3 text-2xl font-light tracking-[-0.04em] text-white">{recommendation.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">{recommendation.rationale}</p>
              <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.18em] text-white/60">
                {recommendation.explainability.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Opportunity graph</p>
            <h2 className="mt-3 text-3xl font-light tracking-[-0.05em] text-white">Goal-to-domain relationship map</h2>
            <div className="mt-6 space-y-4">
              {graph.nodes.map((node) => (
                <div key={node.id} className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">{node.kind}</span>
                    <span className="text-xs text-white/60">weight {node.weight}</span>
                  </div>
                  <p className="mt-3 text-lg font-light text-white">{node.label}</p>
                  <p className="mt-2 text-sm text-white/65">{node.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Forecast</p>
              <h3 className="mt-3 text-2xl font-light text-white">Projected trajectory</h3>
              <div className="mt-5 space-y-4">
                {forecast.map((signal) => (
                  <div key={signal.id} className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-light text-white">{signal.title}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{signal.outlook}</span>
                    </div>
                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#D4AF37]"
                        style={{ width: `${signal.confidence}%` }}
                      />
                    </div>
                    <p className="mt-3 text-sm text-white/70">{signal.rationale}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Barriers</p>
            <h3 className="mt-3 text-3xl font-light tracking-[-0.05em] text-white">Current friction points</h3>
            <div className="mt-5 space-y-4">
              {barriers.map((barrier) => (
                <div key={barrier.id} className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-lg font-light text-white">{barrier.title}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{barrier.severity}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/70">{barrier.explanation}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/60">Mitigation: {barrier.mitigation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Strengths</p>
            <h3 className="mt-3 text-3xl font-light tracking-[-0.05em] text-white">Platform leverage</h3>
            <div className="mt-5 space-y-4">
              {strengths.map((strength) => (
                <div key={strength.id} className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-lg font-light text-white">{strength.title}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{strength.score}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/70">{strength.explanation}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/60">Leverage: {strength.leverage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Opportunity explorer</p>
          <h3 className="mt-3 text-3xl font-light tracking-[-0.05em] text-white">Pathway builder</h3>
          <div className="mt-6 space-y-4">
            {pathway.stages.map((stage) => (
              <div key={stage.id} className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xl font-light text-white">{stage.label}</span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">{stage.purpose}</span>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {stage.milestones.map((milestone) => (
                    <div key={milestone.id} className="rounded-xl border border-white/10 bg-white/3 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">{milestone.label}</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">{milestone.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Community impact</p>
            <h3 className="mt-3 text-3xl font-light tracking-[-0.05em] text-white">Return to community</h3>
            <div className="mt-5 space-y-4">
              {impact.map((item) => (
                <div key={item.id} className="rounded-2xl border border-white/10 bg-[#091B36]/60 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-lg font-light text-white">{item.title}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{item.value}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/60">{item.indicators.join(" • ")}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0D1F3D] p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">Doctrine-backed summary</p>
            <h3 className="mt-3 text-3xl font-light tracking-[-0.05em] text-white">Why this recommendation is valid</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">{analysis.summary}</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {domains.map((domain) => (
                <li key={domain.id} className="rounded-xl border border-white/10 bg-[#091B36]/60 p-3">
                  <span className="font-medium text-[#D4AF37]">{domain.title}</span> — {domain.promise}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
