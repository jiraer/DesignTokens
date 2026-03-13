export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <section className="px-6 py-hero-pad flex flex-col items-center text-center">
        <h1 className="text-hero-title font-bold text-secondary max-w-4xl tracking-tight">
          Design tokens synced <span className="text-primary">seamlessly</span> from Figma.
        </h1>

        <p className="mt-stack-lg text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          This layout uses custom Tailwind keys mapped directly to your
          Figma variables for spacing, color, and typography.
        </p>

        <div className="mt-stack-lg flex gap-4">
          <button className="bg-primary text-primary-fg px-8 py-3 rounded-btn font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="border border-slate-200 dark:border-slate-800 text-secondary px-8 py-3 rounded-btn font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            View Docs
          </button>
        </div>
      </section>
    </main>
  );
}
