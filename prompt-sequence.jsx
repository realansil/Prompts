import { useState } from "react";

const phases = [
  {
    id: 1,
    phase: "Phase 1",
    label: "Scaffold & Setup",
    color: "#1A3C6E",
    accent: "#2E75B6",
    icon: "🏗️",
    sessions: [
      {
        session: "Session 1.1",
        title: "Project Setup",
        tip: "Run this first — before writing any code.",
        context: `Project: Interactive Election Guide Assistant
Stack: React + Tailwind CSS
Colors: Primary #1A3C6E | Accent #2E75B6 | Gold #C9A84C | Light BG #EBF2FA
Font: Inter (Google Fonts)
Rule: Strictly non-partisan. No political opinions, party names, or candidate references.`,
        prompt: `Build a mobile-first interactive election guide web app using React and Tailwind CSS.

Set up the main layout with:
- A sticky header with a logo on the left and a dark mode toggle (sun/moon icon) on the right
- A sidebar navigation on desktop with links: Home, Timeline, Eligibility, FAQ, My Progress
- On mobile, collapse the sidebar into a bottom navigation bar with icons
- A main content area that fills the remaining space

Use this exact color palette:
- Primary: #1A3C6E
- Accent: #2E75B6
- Gold: #C9A84C
- Light background: #EBF2FA
- Body text: #333333

Load Inter font from Google Fonts. Set base font size to 16px and line-height to 1.6.`,
      },
      {
        session: "Session 1.2",
        title: "Hero Section",
        tip: "Keep all existing code. Only add the hero section below the header.",
        context: `Project: Interactive Election Guide Assistant
Stack: React + Tailwind CSS
Colors: Primary #1A3C6E | Accent #2E75B6 | Gold #C9A84C
Rule: No political symbols, party colors, or partisan imagery of any kind.`,
        prompt: `Keep all existing code intact. Only add a Hero section component.

The Hero section should include:
- Headline: "Your Election, Explained." in bold Primary blue (#1A3C6E), large display size
- Subheadline: "A simple guide to understanding and participating in the election process." in muted gray
- Two CTA buttons:
  → "Get Started" (filled, Accent blue) — scrolls to the Election Timeline section
  → "Check My Eligibility" (outlined, gold border) — scrolls to the Eligibility Checker section
- A subtle animated background using CSS keyframes featuring civic icons (ballot box ✓, checkmark, flag) that drift slowly and fade — no political symbols
- Fully responsive: stacked on mobile, side-by-side illustration on desktop`,
      },
    ],
  },
  {
    id: 2,
    phase: "Phase 2",
    label: "Core Features",
    color: "#1A3C6E",
    accent: "#2E75B6",
    icon: "⚙️",
    sessions: [
      {
        session: "Session 2.1",
        title: "Election Timeline",
        tip: "This is the most important feature. Take your time reviewing it before moving on.",
        context: `Project: Interactive Election Guide Assistant
Stack: React + Tailwind CSS
Rule: Non-partisan content only. No political opinions.`,
        prompt: `Keep all existing code intact. Add an interactive Election Timeline component with exactly 6 stages:

Stage 1 — Voter Registration
  Description: How to register, key deadlines, and eligibility basics
  User Action: Check your registration status and register before the deadline

Stage 2 — Candidate Nomination
  Description: How candidates qualify and get their name on the ballot
  User Action: Learn who is running in your area

Stage 3 — Campaigning Period
  Description: What candidates do during campaigns, debates, and campaign finance basics
  User Action: Research candidates and their positions

Stage 4 — Voting Day
  Description: Where to vote, what ID to bring, and how the ballot works
  User Action: Make a voting plan — know your polling station and time off work

Stage 5 — Vote Counting
  Description: How votes are counted, who the observers are, and the verification process
  User Action: Follow official channels for results

Stage 6 — Result Announcement
  Description: How results are certified and officially announced
  User Action: Stay informed from official sources

Requirements:
- Each stage is clickable and expands to show its full detail
- Highlight the active/selected stage with a gold left border and light blue background
- Show a linear progress bar across the top tracking which stage is selected
- Include a simple civic icon per stage (use emoji: 📋 🧑‍💼 📢 🗳️ 🔢 📣)
- On desktop: vertical stack layout. On mobile: horizontally scrollable cards
- Smooth CSS transition when expanding/collapsing stages`,
      },
      {
        session: "Session 2.2",
        title: "Eligibility Checker",
        tip: "Do not change the timeline. Only add the eligibility checker below it.",
        context: `Project: Interactive Election Guide Assistant
Stack: React + Tailwind CSS
Rule: Non-judgmental, welcoming tone in all outcome messages. No data stored on any server.`,
        prompt: `Keep all existing code intact. Add an Eligibility Checker component below the timeline.

The checker is a 4-step guided questionnaire:

Step 1: "Are you 18 years of age or older?"
Step 2: "Are you a citizen of this country?"
Step 3: "Have you lived at your current address for at least 30 days?"
Step 4: "Are you registered to vote?"

For each step:
- Show large tap-friendly buttons: Yes / No / Not Sure (min height 44px)
- Show a "Step X of 4" progress indicator at the top
- Animate to the next step smoothly on selection

After Step 4, show a Result Card based on answers:
→ All Yes: "You're Ready to Vote! 🎉" — show voting day tips
→ Eligible but not registered: "You're Eligible — Let's Get You Registered" — link to vote.gov
→ Not sure about registration: "Let's Check Your Registration" — link to vote.gov
→ Under 18: "Not Quite Yet — But Your Time is Coming!" — explain when they become eligible
→ Not a citizen: "Thank You for Wanting to Participate" — gently explain citizenship path

Keep the tone encouraging and never judgmental. Include a "Start Over" button on the result screen.`,
      },
      {
        session: "Session 2.3",
        title: "FAQ Assistant",
        tip: "Do not modify the timeline or eligibility checker. Only add the FAQ panel.",
        context: `Project: Interactive Election Guide Assistant
Stack: React + Tailwind CSS
Rule: All answers are pre-written neutral civic content. No AI-generated political opinions.`,
        prompt: `Keep all existing code intact. Add a FAQ Assistant panel.

Include 8 quick-reply chip buttons at the top:
1. "How do I register?"
2. "When is voting day?"
3. "What ID do I need?"
4. "How are votes counted?"
5. "What if I make a ballot mistake?"
6. "Can I vote by mail?"
7. "Who observes the count?"
8. "I missed the registration deadline"

When a chip is clicked, display a clean answer card below with:
- A relevant emoji icon
- A bold question title
- A plain-language 2-3 sentence answer (write neutral, factual civic content)
- A "View Official Source" link pointing to vote.gov

Also add a text input field at the bottom: "Ask another question..."
- If the typed question loosely matches one of the 8 topics, show that answer
- If no match, show: "For the most accurate answer, visit vote.gov or contact your local election office."

All chips should be keyboard accessible. Show only one answer card at a time.`,
      },
    ],
  },
  {
    id: 3,
    phase: "Phase 3",
    label: "Progress & Polish",
    color: "#1A3C6E",
    accent: "#C9A84C",
    icon: "✨",
    sessions: [
      {
        session: "Session 3.1",
        title: "Progress Tracker",
        tip: "Do not touch any other components. Only add the Progress Tracker.",
        context: `Project: Interactive Election Guide Assistant
Stack: React + Tailwind CSS
Rule: Save all state to localStorage only. No server, no login required.`,
        prompt: `Keep all existing code intact. Add a Personal Progress Tracker component.

Include a checklist with exactly 6 items:
☐ I have confirmed my eligibility
☐ I am registered to vote
☐ I know the date and location of my polling station
☐ I have the required ID ready
☐ I have reviewed the candidates and ballot measures
☐ I have made a voting plan (transport, time off, childcare, etc.)

At the top of the page (below the header), show a persistent progress bar:
- Text: "X of 6 steps complete — [encouraging message]"
- Messages by step count:
  0: "Let's get you election-ready!"
  1–2: "Great start — keep going!"
  3–4: "You're more than halfway there!"
  5: "Almost ready — one more step!"
  6: "You're fully election-ready! 🎉"

Requirements:
- Checkboxes must be large and tap-friendly (min 44px height)
- Checked items show a gold checkmark and strikethrough text
- Save all checkbox state to localStorage — must survive page refresh
- Add a "Reset My Progress" button at the bottom (with a confirmation step)
- Animate the progress bar width smoothly when a checkbox is toggled`,
      },
      {
        session: "Session 3.2",
        title: "Dark Mode",
        tip: "Do not change any logic or content. Only add dark mode styles.",
        context: `Project: Interactive Election Guide Assistant
Stack: React + Tailwind CSS
Rule: Dark mode preference must persist across page refreshes via localStorage.`,
        prompt: `Keep all existing code intact. Add a dark mode toggle.

Dark theme color values:
- Background: #0D1B2E
- Card background: #142236
- Primary text: #F0F4F8
- Muted text: #94A3B8
- Accent: #2E75B6
- Gold: #C9A84C
- Border: #1E3A5F

Requirements:
- Toggle is the sun/moon icon already in the header
- Clicking it switches the entire app to the dark theme
- ALL components must adapt: no white boxes bleeding through in dark mode
- Add a smooth CSS transition (200ms) on toggle — no flicker
- Save preference to localStorage key "darkMode" — persist across visits
- On first load, check localStorage and apply the saved preference instantly`,
      },
      {
        session: "Session 3.3",
        title: "Final Mobile Polish",
        tip: "Do not change any logic or content. Fix styling and performance only.",
        context: `Project: Interactive Election Guide Assistant
Stack: React + Tailwind CSS
Target: Lighthouse Mobile score ≥ 90`,
        prompt: `Do not change any logic or content. Only improve mobile responsiveness and performance.

Mobile fixes needed:
- On screens < 640px: collapse sidebar to a bottom nav bar with icons only (no text labels)
- Ensure all buttons and interactive elements are minimum 44px tall
- Timeline cards must scroll horizontally on mobile without breaking layout
- FAQ chips must wrap cleanly on small screens
- Ensure no horizontal page overflow on any screen size

Performance fixes:
- Add loading="lazy" to any images
- Ensure no layout shift on page load
- Verify Inter font loads with font-display: swap
- Check that dark mode class is applied before first paint (no flash)

Accessibility fixes:
- All icon-only buttons must have aria-label attributes
- FAQ text input must have a visible label or aria-label
- Eligibility checker buttons must be keyboard navigable with visible focus ring
- Ensure color contrast ratio is at least 4.5:1 for all body text`,
      },
    ],
  },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      style={{
        background: copied ? "#16a34a" : "#1A3C6E",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        padding: "6px 14px",
        fontSize: "12px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background 0.2s",
        letterSpacing: "0.03em",
        fontFamily: "inherit",
      }}
    >
      {copied ? "✓ Copied!" : "Copy"}
    </button>
  );
}

function CodeBlock({ label, content, accent }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: accent,
        borderRadius: "8px 8px 0 0",
        padding: "8px 14px",
      }}>
        <span style={{ color: "#fff", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</span>
        <CopyButton text={content} />
      </div>
      <pre style={{
        background: "#0D1B2E",
        color: "#CBD5E1",
        margin: 0,
        padding: "16px",
        borderRadius: "0 0 8px 8px",
        fontSize: "12.5px",
        lineHeight: "1.7",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        fontFamily: "'Fira Code', 'Courier New', monospace",
        border: "1px solid #1E3A5F",
        borderTop: "none",
      }}>{content}</pre>
    </div>
  );
}

function SessionCard({ session, isOpen, onToggle, accent }) {
  return (
    <div style={{
      border: `1px solid ${isOpen ? accent : "#E2E8F0"}`,
      borderRadius: "12px",
      marginBottom: "12px",
      overflow: "hidden",
      transition: "border-color 0.2s",
      background: "#fff",
      boxShadow: isOpen ? `0 4px 20px ${accent}22` : "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: isOpen ? `${accent}10` : "#fff",
          border: "none",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left",
          transition: "background 0.2s",
        }}
      >
        <div>
          <div style={{ fontSize: "11px", fontWeight: "700", color: accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "3px" }}>
            {session.session}
          </div>
          <div style={{ fontSize: "15px", fontWeight: "700", color: "#1A3C6E" }}>{session.title}</div>
        </div>
        <span style={{ fontSize: "18px", color: accent, transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>⌄</span>
      </button>

      {isOpen && (
        <div style={{ padding: "0 20px 20px" }}>
          <div style={{
            background: "#FFFBEB",
            border: "1px solid #FCD34D",
            borderRadius: "8px",
            padding: "10px 14px",
            marginBottom: "16px",
            fontSize: "13px",
            color: "#92400E",
          }}>
            💡 <strong>Before you paste:</strong> {session.tip}
          </div>
          <CodeBlock label="Step 1 — Paste this context block first" content={session.context} accent="#64748B" />
          <CodeBlock label="Step 2 — Paste this prompt" content={session.prompt} accent={accent} />
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [openSession, setOpenSession] = useState(null);
  const [activePhase, setActivePhase] = useState(0);

  const phase = phases[activePhase];
  const completedCount = 0;

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#F8FAFC", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{
        background: "#1A3C6E",
        padding: "20px 24px 16px",
        color: "#fff",
      }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", color: "#C9A84C", textTransform: "uppercase", marginBottom: "6px" }}>
            Anti-Gravity Prompt Sequence
          </div>
          <div style={{ fontSize: "22px", fontWeight: "800", marginBottom: "4px" }}>
            Election Guide Assistant
          </div>
          <div style={{ fontSize: "13px", color: "#94A3B8" }}>
            {phases.reduce((a, p) => a + p.sessions.length, 0)} sessions across {phases.length} phases — run in order, one at a time
          </div>

          {/* Phase tabs */}
          <div style={{ display: "flex", gap: "8px", marginTop: "20px", flexWrap: "wrap" }}>
            {phases.map((p, i) => (
              <button
                key={i}
                onClick={() => { setActivePhase(i); setOpenSession(null); }}
                style={{
                  background: activePhase === i ? "#C9A84C" : "rgba(255,255,255,0.1)",
                  color: activePhase === i ? "#1A3C6E" : "#CBD5E1",
                  border: "none",
                  borderRadius: "20px",
                  padding: "6px 16px",
                  fontSize: "13px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "inherit",
                }}
              >
                {p.icon} {p.phase} — {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Phase content */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "24px 16px" }}>

        {/* Phase header */}
        <div style={{
          background: "#fff",
          border: `2px solid ${phase.accent}`,
          borderRadius: "12px",
          padding: "16px 20px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}>
          <span style={{ fontSize: "28px" }}>{phase.icon}</span>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "700", color: phase.accent, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {phase.phase}
            </div>
            <div style={{ fontSize: "17px", fontWeight: "800", color: "#1A3C6E" }}>{phase.label}</div>
            <div style={{ fontSize: "12px", color: "#64748B", marginTop: "2px" }}>
              {phase.sessions.length} sessions — complete all before moving to the next phase
            </div>
          </div>
        </div>

        {/* Golden rule box */}
        <div style={{
          background: "#FFFBEB",
          border: "1px solid #FCD34D",
          borderRadius: "10px",
          padding: "12px 16px",
          marginBottom: "20px",
          fontSize: "13px",
          color: "#78350F",
        }}>
          <strong>🔑 Golden Rules for every session:</strong>
          <div style={{ marginTop: "6px", lineHeight: "1.8" }}>
            • Always paste the <strong>Context Block first</strong>, then the Prompt<br />
            • Never skip a session — each one builds on the last<br />
            • If something breaks, say: <em>"Revert only the last change and try a simpler approach."</em><br />
            • For style-only fixes, say: <em>"Do not change any logic. Fix only the CSS/styling."</em>
          </div>
        </div>

        {/* Sessions */}
        {phase.sessions.map((session, i) => (
          <SessionCard
            key={i}
            session={session}
            isOpen={openSession === `${activePhase}-${i}`}
            onToggle={() => setOpenSession(openSession === `${activePhase}-${i}` ? null : `${activePhase}-${i}`)}
            accent={phase.accent}
          />
        ))}

        {/* Phase nav */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px", gap: "12px" }}>
          {activePhase > 0 && (
            <button
              onClick={() => { setActivePhase(activePhase - 1); setOpenSession(null); }}
              style={{
                background: "#fff",
                border: "2px solid #1A3C6E",
                color: "#1A3C6E",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "13px",
                fontWeight: "700",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              ← Previous Phase
            </button>
          )}
          {activePhase < phases.length - 1 && (
            <button
              onClick={() => { setActivePhase(activePhase + 1); setOpenSession(null); }}
              style={{
                background: "#1A3C6E",
                border: "none",
                color: "#fff",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "13px",
                fontWeight: "700",
                cursor: "pointer",
                fontFamily: "inherit",
                marginLeft: "auto",
              }}
            >
              Next Phase →
            </button>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px", fontSize: "12px", color: "#94A3B8" }}>
          Election Guide Assistant · PRD v1.0 · Anti-Gravity Prompt Sequence
        </div>
      </div>
    </div>
  );
}
