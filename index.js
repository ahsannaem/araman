<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>yourname • builds</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <style>
    body { font-family: 'Inter', system-ui, sans-serif; }
    .hero-bg { background: linear-gradient(135deg, #0a0a0a, #1a1a2e); }
    .card-hover:hover { transform: translateY(-8px); }
  </style>
</head>
<body class="bg-zinc-950 text-zinc-100">

  <!-- Navbar -->
  <nav class="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
    <div class="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
      <h1 class="text-2xl font-bold">yourname</h1>
      <div class="flex gap-8 text-sm">
        <a href="#work" class="hover:text-violet-400 transition">Work</a>
        <a href="#process" class="hover:text-violet-400 transition">Process</a>
        <a href="#about" class="hover:text-violet-400 transition">About</a>
        <a href="#contact" class="hover:text-violet-400 transition">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="hero-bg min-h-screen flex items-center pt-20">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <h1 class="text-6xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
        I build software<br>that <span class="text-violet-400">ships fast</span>
      </h1>
      <p class="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
        Custom web apps, SaaS tools, AI integrations &amp; beautiful digital products.<br>
        You own the code. We ship every week.
      </p>
      <a href="#contact" 
         class="inline-block px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-violet-400 hover:text-white transition text-lg">
        Start a Project
      </a>
    </div>
  </section>

  <!-- Trust line -->
  <div class="border-b border-zinc-800 py-6">
    <div class="max-w-6xl mx-auto px-6 text-center text-zinc-500 text-sm">
      Trusted by founders &amp; teams • 15+ projects shipped
    </div>
  </div>

  <!-- Work / Projects -->
  <section id="work" class="py-24">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-5xl font-bold mb-12">Featured Work</h2>
      <div class="grid md:grid-cols-2 gap-8">
        
        <div class="bg-zinc-900 rounded-3xl overflow-hidden card-hover transition-all group">
          <div class="h-80 bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-6xl">
            🤖
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-semibold mb-2">AI Support Copilot</h3>
            <p class="text-zinc-400 mb-4">Reduced response time by 45% with RAG-powered assistant.</p>
            <span class="text-xs uppercase tracking-widest text-violet-400">SaaS • AI</span>
          </div>
        </div>

        <div class="bg-zinc-900 rounded-3xl overflow-hidden card-hover transition-all group">
          <div class="h-80 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-6xl">
            📊
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-semibold mb-2">Analytics Dashboard</h3>
            <p class="text-zinc-400 mb-4">Real-time metrics platform with beautiful visualizations.</p>
            <span class="text-xs uppercase tracking-widest text-cyan-400">Web App</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Process -->
  <section id="process" class="py-24 bg-zinc-900">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-5xl font-bold mb-12 text-center">How We Work</h2>
      <div class="grid md:grid-cols-3 gap-10">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 bg-violet-500/10 rounded-2xl flex items-center justify-center text-3xl">1️⃣</div>
          <h3 class="text-xl font-semibold mb-3">Scope & Plan</h3>
          <p class="text-zinc-400">Fixed scope, clear timeline and cost before any code is written.</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 bg-violet-500/10 rounded-2xl flex items-center justify-center text-3xl">2️⃣</div>
          <h3 class="text-xl font-semibold mb-3">Build & Demo</h3>
          <p class="text-zinc-400">Weekly sprints with live demos. You see progress every week.</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 bg-violet-500/10 rounded-2xl flex items-center justify-center text-3xl">3️⃣</div>
          <h3 class="text-xl font-semibold mb-3">Ship & Own</h3>
          <p class="text-zinc-400">Full codebase handover. You own everything — no lock-in.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="py-24">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-5xl font-bold mb-8">Hi, I'm [Your Name]</h2>
      <p class="text-xl text-zinc-400 leading-relaxed">
        Independent developer building high-quality digital products with modern tools and AI.
        I focus on clean code, great UX, and fast delivery.
      </p>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-24 bg-zinc-900">
    <div class="max-w-2xl mx-auto px-6 text-center">
      <h2 class="text-5xl font-bold mb-6">Let's build something great</h2>
      <p class="text-zinc-400 mb-10">Open to new projects — web apps, AI tools, SaaS, or anything interesting.</p>
      
      <a href="mailto:you@email.com" 
         class="block w-fit mx-auto px-12 py-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl text-lg font-medium hover:scale-105 transition">
        Get in touch →
      </a>
    </div>
  </section>

  <footer class="py-12 text-center text-zinc-500 border-t border-zinc-800">
    © 2026 • Built with vibes
  </footer>

</body>
</html>
