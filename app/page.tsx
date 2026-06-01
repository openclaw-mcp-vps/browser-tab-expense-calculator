export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate the Real Cost of Your{" "}
          <span className="text-[#58a6ff]">Browser Tabs</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          TabCost monitors each tab&apos;s memory footprint and translates it into equivalent AWS/GCP cloud compute costs — so you finally know what your dev environment is really burning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $5/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#f85149] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#d29922] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950] inline-block"></span>
            <span className="ml-2 text-xs text-[#8b949e] font-mono">TabCost Dashboard</span>
          </div>
          <div className="font-mono text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-[#8b949e]">github.com/my-org/repo</span>
              <span className="text-[#f85149]">412 MB</span>
              <span className="text-[#58a6ff]">$0.0031/hr</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b949e]">localhost:3000</span>
              <span className="text-[#d29922]">289 MB</span>
              <span className="text-[#58a6ff]">$0.0022/hr</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b949e]">console.aws.amazon.com</span>
              <span className="text-[#3fb950]">178 MB</span>
              <span className="text-[#58a6ff]">$0.0013/hr</span>
            </div>
            <div className="border-t border-[#30363d] pt-2 mt-2 flex justify-between font-bold">
              <span className="text-white">Total (23 tabs)</span>
              <span className="text-[#f85149]">3.1 GB</span>
              <span className="text-[#58a6ff]">$0.023/hr</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
          <h3 className="text-xl font-bold text-white mb-1">Pro</h3>
          <div className="text-4xl font-bold text-[#58a6ff] mb-1">$5<span className="text-lg text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to track tab costs</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {["Real-time memory monitoring","AWS & GCP cost models","Unlimited tabs tracked","Historical cost reports","Chrome extension included","Priority support"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How does TabCost measure memory?</h3>
            <p className="text-[#8b949e] text-sm">Our Chrome extension uses the <code className="text-[#58a6ff]">chrome.processes</code> API to read each tab&apos;s private memory footprint in real time and streams it to your dashboard.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Which cloud pricing models are supported?</h3>
            <p className="text-[#8b949e] text-sm">We map memory usage to AWS EC2 and GCP Compute Engine on-demand pricing, updated monthly so your cost estimates stay accurate.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Is my browsing data private?</h3>
            <p className="text-[#8b949e] text-sm">Only tab URLs and memory metrics are collected — no page content, no keystrokes. Data is encrypted in transit and never sold to third parties.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} TabCost. Built for developers who care about performance.
      </footer>
    </main>
  );
}
