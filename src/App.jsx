import { Crosshair, Map, Shield, Trophy } from 'lucide-react'

const stats = [
  ['20+', 'Agents'],
  ['9', 'Maps'],
  ['8', 'Rank Tiers'],
  ['15M+', 'Active Players'],
]

const agents = [
  {
    role: 'Duelist',
    description: 'Take space, create openings, and lead the attack with aggressive abilities.',
    icon: Crosshair,
  },
  {
    role: 'Controller',
    description: 'Shape the battlefield by blocking vision and controlling key areas.',
    icon: Map,
  },
  {
    role: 'Sentinel',
    description: 'Lock down sites, watch flanks, and protect your team with defensive utility.',
    icon: Shield,
  },
]

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* ============ NAVBAR ============ */}
      <nav className="flex justify-between items-center px-6 py-5 md:px-16 bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="text-2xl font-black tracking-widest text-red-500">VALORANT</div>

        <ul className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wide text-zinc-300">
          <li><a href="#home" className="hover:text-red-500 transition">Home</a></li>
          <li><a href="#agents" className="hover:text-red-500 transition">Agents</a></li>
          <li><a href="#maps" className="hover:text-red-500 transition">Maps</a></li>
          <li><a href="#ranked" className="hover:text-red-500 transition">Ranked</a></li>
          <li><a href="#news" className="hover:text-red-500 transition">News</a></li>
        </ul>

        <a
          href="#play"
          className="hidden md:inline-block bg-red-600 text-white px-6 py-2 font-bold uppercase text-sm tracking-wide hover:bg-red-700 transition"
        >
          Play Now
        </a>
      </nav>

      {/* ============ HERO ============ */}
      <section
        id="home"
        className="relative bg-zinc-950 px-6 md:px-16 py-24 flex flex-col md:flex-row items-center gap-12 border-b border-zinc-800"
      >
        <div className="w-full md:w-1/2">
          <span className="inline-block bg-red-600/20 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-1 border border-red-600 mb-5">
            Free To Play Tactical Shooter
          </span>

          <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight mb-6">
            Defy The Limits
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-8">
            Blend precise gunplay with unique agent abilities and compete in high-stakes tactical rounds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              id="play"
              href="https://playvalorant.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-red-700 transition text-center"
            >
              Play For Free
            </a>

            <a
              href="#maps"
              className="border border-zinc-600 px-8 py-3 font-bold uppercase tracking-wide hover:border-red-500 hover:text-red-500 transition text-center"
            >
              Watch Trailer
            </a>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 w-full md:w-1/2 h-72 md:h-96 flex items-center justify-center text-zinc-500 text-lg font-bold uppercase overflow-hidden">
          <div className="text-center px-8">
            <Crosshair className="mx-auto mb-4 h-16 w-16 text-red-500" />
            <p>[ Hero Key Art Placeholder ]</p>
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="bg-black px-6 md:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-b border-zinc-800">
        {stats.map(([value, label]) => (
          <div key={label}>
            <p className="text-3xl font-black text-red-500">{value}</p>
            <p className="text-zinc-400 uppercase text-xs tracking-wide mt-1">{label}</p>
          </div>
        ))}
      </section>

      {/* ============ AGENTS ============ */}
      <section id="agents" className="px-6 md:px-16 py-20 bg-zinc-950 border-b border-zinc-800">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-red-500 font-bold uppercase tracking-widest text-xs mb-3">Agents</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase">Choose Your Agent</h2>
          <p className="text-zinc-400 mt-4">Master a role, coordinate with your team, and make every round count.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map(({ role, description, icon: Icon }) => (
            <div
              key={role}
              className="bg-zinc-900 border border-zinc-800 p-8 hover:border-red-600 transition"
            >
              <Icon className="h-8 w-8 text-red-500 mb-5" />
              <h3 className="text-xl font-black uppercase mb-3">{role}</h3>
              <p className="text-zinc-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ MAPS / ABOUT ============ */}
      <section id="maps" className="px-6 md:px-16 py-20 flex flex-col md:flex-row items-center gap-12 border-t border-zinc-800">
        <div className="bg-zinc-900 border border-zinc-700 w-full h-72 md:h-96 flex items-center justify-center text-zinc-500 font-bold uppercase">
          <div className="text-center px-8">
            <Map className="mx-auto mb-4 h-14 w-14 text-red-500" />
            <p>[ Map Callout Placeholder ]</p>
          </div>
        </div>

        <div className="w-full">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest">Battlegrounds</p>
          <h2 className="text-3xl font-black uppercase mt-2 mb-5">Fight Across Iconic Maps</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Learn the angles, control key routes, and adapt your strategy to every battlefield.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-500"></span>
              9 unique maps with rotating map pool
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-500"></span>
              Competitive layouts built for tactical team play
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-500"></span>
              Distinct chokepoints, sites, and movement routes
            </li>
          </ul>
        </div>
      </section>

      {/* ============ RANKED / TESTIMONIALS ============ */}
      <section id="ranked" className="px-6 md:px-16 py-20 bg-red-600 text-white">
        <div className="text-center max-w-xl mx-auto mb-14">
          <Trophy className="mx-auto h-10 w-10 mb-4" />
          <h2 className="text-3xl md:text-4xl font-black uppercase">Climb The Ranks</h2>
          <p className="mt-4 text-white/80">Sharpen your mechanics, communicate with your squad, and prove your skill.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Every match feels different.", "Teamwork changes everything.", "Every round is a chance to improve."].map((quote) => (
            <div key={quote} className="bg-black/20 backdrop-blur p-8 border border-white/20">
              <p className="text-lg font-semibold">“{quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="news" className="px-6 md:px-16 py-20 text-center bg-zinc-950">
        <h2 className="text-3xl font-black uppercase mb-4">Ready To Enter The Fight?</h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">Join the action and experience tactical 5v5 gameplay.</p>
        <a
          href="https://playvalorant.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-red-600 text-white px-10 py-3 font-bold uppercase tracking-wide hover:bg-red-700 transition"
        >
          Download Now
        </a>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-black text-zinc-400 px-6 md:px-16 py-12 border-t border-zinc-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div><p className="text-white font-bold uppercase mb-3">Valorant</p><p className="text-sm">Tactical shooter landing page.</p></div>
          <div><p className="text-white font-bold uppercase mb-3">Game</p><p className="text-sm">Agents<br />Maps<br />Ranked</p></div>
          <div><p className="text-white font-bold uppercase mb-3">Resources</p><p className="text-sm">News<br />Support<br />Community</p></div>
          <div><p className="text-white font-bold uppercase mb-3">Contact</p><p className="text-sm">Practice Project<br />React + Tailwind</p></div>
        </div>

        <div className="border-t border-zinc-800 pt-6 text-center text-xs text-zinc-600">
          © 2026 Riot Games, Inc. Fan-made practice project.
        </div>
      </footer>
    </main>
  )
}

export default App
