export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-primary-fg flex items-center justify-center">
      <section className="px-6 py-20 flex flex-col items-center text-center max-w-4xl">

        <h1 className="text-5xl font-bold tracking-tight">
          Design tokens synced{" "}
          <span className="text-p-300">seamlessly</span> from Figma.
        </h1>

        <p className="mt-8 text-lg opacity-80 max-w-2xl">
          This layout now uses p-50 as the main background color.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-p-900 text-p-50 px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
            Get Started
          </button>

          <button className="border border-p-700 px-8 py-3 rounded-lg font-medium hover:bg-p-900/10 transition">
            View Docs
          </button>
        </div>

      </section>
    </main>
  );
}
