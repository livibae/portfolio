"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import LetsTalk from "@/components/LetsTalk";
import { useState, useEffect } from "react";
import CaseImage from "@/components/CaseImage";

const metrics = [
  { value: "3x", label: "Weekly active users in 3 months", align: "left" as const },
  { value: "+15%", label: "conversion from authentication to first tool call", align: "center" as const },
  { value: "+16%", label: "new MCP users", align: "center" as const },
];

const chips = ["Activation", "Lifecycle email", "In-product entry points", "A/B testing", "User interviews"];

const navItems = [
  { label: "TL;DR", id: "tldr" },
  { label: "Problem, data, and opportunities", id: "problem" },
  { label: "Bet 1: Activation email", id: "bet-1" },
  { label: "Bet 2: In-product entry points", id: "bet-2" },
  { label: "Iterations", id: "iterations" },
  { label: "Outcomes", id: "outcomes" },
  { label: "The MCP roadmap", id: "roadmap" },
];

export default function MiroMcp() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-6xl mx-auto px-6 pt-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity"
            style={{ color: "var(--color-text-muted)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </Link>
        </div>

        <header className="max-w-6xl mx-auto px-6 pt-10 pb-12">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <h1 className="mb-4 max-w-4xl font-sans text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl">
                Tripling Miro MCP weekly active users in 3 months
              </h1>
              <p className="mb-6 max-w-2xl font-sans text-sm leading-relaxed text-gray-600 md:text-base">
                Driving adoption and usage by addressing funnel drop-offs and increasing awareness with in-product entry points
              </p>
              <div className="flex flex-wrap gap-2">
                {chips.map(chip => (
                  <span key={chip} className="glass-tag">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-2">
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Company</p>
                <p className="font-sans text-sm font-medium text-gray-900">Miro</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Period</p>
                <p className="font-sans text-sm font-medium text-gray-900">August to November 2026</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Role</p>
                <p className="font-sans text-sm font-medium text-gray-900">Product Manager, Extensibility team</p>
              </div>
              <div>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Team</p>
                <p className="font-sans text-sm font-medium text-gray-900">1 Designer · 1 FE Engineer</p>
              </div>
            </div>
          </div>
        </header>

        <div className="glass-strip">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {metrics.map(m => (
                <div key={m.label} style={{ textAlign: m.align }}>
                  <p className="mb-1 font-sans text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                    {m.value}
                  </p>
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16 pt-12">
          <div className="flex gap-16 items-start">
            <article className="flex-1 min-w-0 flex flex-col gap-16">

              <section className="scroll-mt-28" id="tldr">
                <SectionLabel>TL;DR</SectionLabel>
                <div className="font-sans flex flex-col gap-4 text-base leading-relaxed text-gray-600">
                  <p>
                    I was promoted to the Extensibility team in August 2026, which looks after our Developer platform (API, SDKs), Apps Marketplace, and Model Context Protocol (MCP). My goal is to drive adoption and usage of Miro MCP.
                  </p>
                  <p>
                    I spoke to ~40 MCP users in two weeks and analyze the user journey funnel to discover growth opportunities. I prioritized two bets: 1) sending an activation email that increased conversion from authentication to first tool call from 52% to 61% as a quick win, and 2) adding a number of in-product  entry points at high-intent moments lifted new MCP users by 16% (sig.). Overall, MCP weekly active users grew from 28k to 86.5k between August and November 2026 (~3x), with the growth rate increasing from 5% WoW in August to 21% WoW in October.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-28" id="problem">
                <SectionLabel>Problem, data, and opportunities</SectionLabel>
                <div className="font-sans flex flex-col gap-8 text-base leading-relaxed text-gray-600">
                  <p>
                    My first two weeks were mostly talking to users, from one-off users to power users. I wanted to know what they used Miro MCP for, why they came back, and why they didn&apos;t. I paired that with a step-by-step funnel analysis. The two together gave me two opportunities.
                  </p>

                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      1. People connect, but have no reason to come back
                    </h3>
                    <ul className="flex flex-col gap-4 pl-5 list-disc">
                      <li>
                        <strong>Data:</strong> 52% of users who completed authentication never reached their first tool call.
                      </li>
                      <li>
                        <strong>User interviews :</strong> Most MCP users found Miro MCP on the marketplace listings inside Claude or ChatGPT. They bulk connect every tool they already use, so they don&apos;t necessarily have a reason to take the first step to try Miro MCP.
                      </li>
                      <li>
                        <strong>Hypothesis:</strong> If we give newly connected users concrete use cases and a one-click way to try it, more of them will make their first tool call.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      2. Users were already trying to get Miro into AI tools, the hard way
                    </h3>
                    <ul className="flex flex-col gap-4 pl-5 list-disc">
                      <li>
                        <strong>What users told us:</strong>
                        <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                          <li>
                            Almost all users found Miro MCP on AI tool marketplace listing,  because there were no entry points in Miro.
                          </li>
                          <li>
                            Before discovering MCP, many people took screenshots of their boards and pasted them into an AI tool to share context and work with their AI.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Opportunity:</strong> MCP is particularly valuable for two groups of users:
                        <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                          <li>
                            Users who use workarounds like screenshotting or exporting their boards as image/ PDF to then upload to their AI tool → Using MCP lets AI read boards directly and build on them
                          </li>
                          <li>
                            Users who already have a habit of sharing boards or object links to their team for human collaboration → Extending the same habit and sharing with AI tools using MCP lets AI read boards directly and build on them
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Hypothesis:</strong> If we nudge users to use MCP at high-intent (sharing and export) moments inside Miro, we can reach people when the value is most obvious to them.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-28" id="bet-1">
                <SectionLabel>Bet 1: Activation email (quick win)</SectionLabel>
                <p className="font-sans text-base leading-relaxed text-gray-600 mb-6">
                  I started with the lowest-effort fix for the biggest drop-off.
                </p>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>
                    <strong>Solution:</strong> Two days after a user authenticated, we sent an email confirming they&apos;d connected Miro. It showed four use cases I&apos;d picked from how power users actually used MCP. Each had a one-click button that opened a new chat in their AI tool with a sample prompt already filled in.
                  </li>
                </ul>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 max-w-3xl items-start">
                  <CaseImage src="/case-studies/mcp/email.png" alt="MCP activation email" />
                  <CaseImage src="/case-studies/mcp/email-cta.png" alt="MCP activation email one-click CTA" borderless />
                </div>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>
                    <strong>Experiment set-up:</strong>
                    <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                      <li>Audience: Users who have completed authenticated but have not made a tool call in 2 days</li>
                      <li>50/50 A/B test</li>
                      <li>Primary metric: % users making a first tool call</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Result:</strong> +15% lift in conversion from authentication to first tool call. Rolled out to 100%.
                  </li>
                  <li>
                    <strong>Learning:</strong> The way the email was built meant we couldn&apos;t track clicks on each use case. So we know the email worked, but not which prompts resonated. I&apos;m fixing that in the next email experiment.
                  </li>
                </ul>
              </section>

              <section className="scroll-mt-28" id="bet-2">
                <SectionLabel>Bet 2: In-product entry points at high-intent moments</SectionLabel>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>
                    <strong>Solution:</strong>
                    <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                      <li>Adding an AI tab within the Share window, where users can connect to AI tools</li>
                      <li>A number of dismissible pop-ups on the board, board export, and copy menus.</li>
                    </ul>
                  </li>
                </ul>
                <div className="my-8">
                  <CaseImage src="/case-studies/mcp/inproduct_entry_points_v1.jpg" alt="In-product MCP entry points v1" />
                </div>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>
                    <strong>Experiment set-up:</strong>
                    <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                      <li>50/50 A/B test</li>
                      <li>Audience: self-serve users who have not used MCP in the last 30d</li>
                      <li>Primary metric: #users and #orgs trying MCP for the first time</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Result:</strong>
                    <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                      <li>AI tab: +24% new MCP orgs (sig.). Rolled out to 100%.</li>
                      <li>Pop-ups: +16% new MCP users (sig.) and +30% new MCP orgs (sig.). Rolled out to 100%.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section className="scroll-mt-28" id="iterations">
                <SectionLabel>Iterations</SectionLabel>
                <div className="flex flex-col gap-10">
                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Landing users to an in-product destination - MCP hub
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        <strong>Data:</strong>
                        <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                          <li>
                            experiment data show a 30% drop-off from clicking on the pop-ups to reaching the first tool call.
                          </li>
                          <li>
                            A previous experiment from the new user onboarding shows a similar drop-off when direct users from Miro to MCP Developer Documentation outside Miro. 70% of MCP users are non-engineers and users have told us that the Developer Documentation is not an intuitive channel for onboarding and discovery in interviews
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Competitor analysis:</strong> B2B SaaS like Figma, Slideshare, and Granola also have permanent and dismissible in-product entry points to their MCP
                      </li>
                    </ul>
                    <div className="my-8">
                      <CaseImage src="/case-studies/mcp/mcp_hub_competitors.jpg" alt="Competitor MCP hub entry points from Figma, Slideshare, and Granola" />
                    </div>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        <strong>UX changes:</strong>
                        <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                          <li>
                            we build a lightweight in-product destination similar to the AI tab in share window. Conversion increased by ~20% based on pre-/post-analysis
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <CaseImage src="/case-studies/mcp/inproduct_entry_points_v2.jpg" alt="In-product MCP entry points v2 with MCP hub" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Other UX improvements
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        To prevent overlapping notifications, we added the display logic to only show new users the pop-up after they finished onboarding (which includes a step to connect to integrations)
                      </li>
                      <li>
                        we received negative user feedback on the experience when the pop-ups are dismissed, so we removed the countdown and point users to the MCP hub so they can set it up later instead
                      </li>
                    </ul>
                    <div className="mt-8">
                      <CaseImage src="/case-studies/mcp/notification-blindness.png" alt="Notification blindness when MCP pop-ups are dismissed" />
                    </div>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-28" id="outcomes">
                <SectionLabel>Outcomes</SectionLabel>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>
                    MCP weekly active users grew from 28k to 86.5k between August and November 2026 (~3x), with the growth rate increasing from 5% WoW in August to 21% at peak WoW in October.
                  </li>
                </ul>
                <div className="my-8">
                  <CaseImage src="/case-studies/mcp/WAU.png" alt="MCP weekly active users growth from August to November 2026" />
                </div>
                <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                  <li>
                    Retention did not drop with newly acquired users. Both W1 (32% → 44%) and W2 retention (25% → 36%) both increased by &gt;10pp from August to Oct, suggesting that quality of acquired users maintained and show deeper usage than older cohorts
                  </li>
                </ul>
                <div className="mt-8">
                  <CaseImage src="/case-studies/mcp/retention.png" alt="MCP W1 and W2 retention from August to October" />
                </div>
              </section>

              <section className="scroll-mt-28" id="roadmap">
                <SectionLabel>The MCP roadmap</SectionLabel>
                <div className="flex flex-col gap-10">
                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Social proof email (quick win) (in development)
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        <strong>Data:</strong> X% of Miro Self-serve organisations only have 1-2 power MCP users.
                      </li>
                      <li>
                        <strong>User interviews:</strong> Many users told us they found out about Miro MCP from their colleagues, and that their organizations often have rituals or channels that share best practices in using AI features, suggesting a strong word-of-mouth effect
                      </li>
                      <li>
                        <strong>Competitors:</strong> Confluence uses social proof to nudge users in the same organization to integrate with more tools and deepen their usage
                      </li>
                      <li>
                        <strong>Opportunity:</strong> when a user connects to Miro MCP, if we sent an email to other users in the same org that have not connected to that tool, we can activate more users to install and use MCP through social proof
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Permanent entry points in Diagramming format (in development)
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        Diagramming is the #1 format created via MCP. Creating diagrams to map technical systems, processes, or architectures via MCP is well-loved by engineering and technical users.
                      </li>
                      <li>
                        However, 90% of diagramming users have not connected to MCP, suggesting a big headroom for growth
                      </li>
                      <li>
                        <strong>Solution:</strong> 4 new entry points for diagramming users who have not connected to Miro MCP
                        <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                          <li>Permanent entry points on diagramming empty state, on the canvas and in focus mode</li>
                          <li>Contextual entry points when users edit their diagram the first time on the canvas or in focus mode</li>
                        </ul>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <CaseVideo src="/case-studies/mcp/mcp_x_diagramming_entry_points.mp4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Miro MCP ChatGPT plugin extension (launched)
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        <strong>Problem:</strong> users have highlighted tool-switching between Miro and AI tools when using MCP is a friction
                      </li>
                      <li>
                        <strong>Opportunity:</strong> ChatGPT released plugin extension support recently that supports a more native, interactive user experience for using plug-ins, so that using Miro MCP within ChatGPT  feels like a first-class citizen:
                        <ul className="flex flex-col gap-3 mt-3 pl-5 list-disc">
                          <li>users can directly view a board within ChatGPT on the sidebar and in full view</li>
                          <li>users can pin frequently used plugins on the side panel for quick access, which opens a &quot;home page&quot; experience</li>
                          <li>users can iterate on generated boards within ChatGPT in real-time by annotating it</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Competitor analysis:</strong> Competitors like Figma, Adobe, Canva, and Notion have all released plugin extensions that offer a richer, native experience within ChatGPT
                      </li>
                    </ul>
                    <div className="mt-8">
                      <CaseVideo src="/case-studies/mcp/chatgpt_extension.mp4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      Template tools (in development)
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        <strong>Problem:</strong> users told us that one of the biggest missing features is to create boards with MCP using templates. As there is currently no templates tool, users resort to taking screenshots of templates and sending it to their AI tool instead
                      </li>
                      <li>
                        <strong>Solution:</strong> building search_template and apply_template tools that search for custom templates users have access to, and apply it to the board. Existing tools then update the board by populating the template based on user prompt.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mb-4 text-gray-900">
                      &quot;Miro Send to AI&quot; (backlog)
                    </h3>
                    <ul className="font-sans flex flex-col gap-4 text-base leading-relaxed pl-5 list-disc text-gray-600">
                      <li>
                        Doubling down on the success of the AI tab in the Share window, allow users to directly send board content to connected AI tools. Clicking &quot;Send&quot; opens a new chat in the connected AI tool with user prompt
                      </li>
                    </ul>
                    <div className="mt-8">
                      <CaseImage src="/case-studies/mcp/send-to-ai.jpg" alt="Miro Send to AI proposed entry points" />
                    </div>
                  </div>
                </div>
              </section>

            </article>

            <SectionNav />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-4">
          <Link
            href="/#projects"
            className="text-sm font-medium hover:opacity-60 transition-opacity"
            style={{ color: "var(--color-text-muted)" }}
          >
            ← Back to Projects
          </Link>
        </div>
        <LetsTalk />
      </main>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-sans text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
      {children}
    </h2>
  );
}


function CaseVideo({ src }: { src: string }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
      <video
        src={src}
        className="w-full h-auto block"
        autoPlay
        muted
        loop
        playsInline
        controls
      />
    </div>
  );
}

function SectionNav() {
  const [active, setActive] = useState("tldr");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <aside
      className="hidden lg:block flex-shrink-0"
      style={{ width: "220px", position: "sticky", top: "100px", alignSelf: "flex-start" }}
    >
      <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em" }}>
        On this page
      </p>
      <nav className="flex flex-col gap-3">
        {navItems.map(item => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                fontSize: "1.1rem",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "var(--color-text)" : "var(--color-text-muted)",
                textDecoration: "none",
                paddingLeft: "14px",
                borderLeft: isActive ? "2px solid var(--color-text)" : "2px solid var(--color-border)",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
