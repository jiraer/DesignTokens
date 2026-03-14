import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground font-sans px-8 py-32 flex flex-col items-start justify-center overflow-hidden">
      {/* Blurred Gradient Background Layers */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/30 rounded-full blur-3xl opacity-60"
          style={{ filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-40"
          style={{ filter: "blur(140px)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "blur(160px)" }}
        />
      </div>

      {/* Open for Projects Badge */}
      <div className="absolute top-10 left-8">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-destructive rounded px-3 py-1 text-destructive select-none">
          <span className="w-2 h-2 bg-destructive rounded-full inline-block" />
          Open for Projects · 2026
        </span>
      </div>

      {/* Hero Section */}
      <section className="max-w-xl space-y-6 z-10">
        <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight tracking-tight max-w-[18ch]">
          <span className="tracking-tighter underline decoration-yellow-400 decoration-4 underline-offset-6 text-7xl">JPATH</span><span className="text-primary text-7xl">.</span>{" "}
          Meaningful <br />
          Digital

        </h1>

        <p className="text-muted-foreground text-lg tracking-wide max-w-md font-mono">
          A one-person design studio producing Figma, UI, and branding work with impact.
        </p>

        <div className="flex space-x-6 mt-8">
          <Button className="bg-primary text-primary-foreground px-10 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border border-primary text-primary px-10 py-3 shadow hover:shadow-md transition-shadow duration-300"
          >
            View Docs
          </Button>
        </div>
      </section>

      {/* Under Hero: Featured Services Cards */}
      <section className="mt-28 w-full max-w-6xl z-10">
        <h2 className="text-3xl font-bold mb-12">What I Offer</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <Card className="border border-border shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>UI Design</CardTitle>
              <CardDescription>Clean, modern interfaces crafted for users.</CardDescription>
            </CardHeader>
            <CardContent>
              Pixel-perfect UI design that scales seamlessly across devices.
            </CardContent>
          </Card>

          <Card className="border border-border shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Brand Identity</CardTitle>
              <CardDescription>Unique branding to tell your story effectively.</CardDescription>
            </CardHeader>
            <CardContent>
              Logos, color schemes, and visual assets that resonate with your audience.
            </CardContent>
          </Card>

          <Card className="border border-border shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Figma Prototyping</CardTitle>
              <CardDescription>Interactive prototypes for quick validation.</CardDescription>
            </CardHeader>
            <CardContent>
              User flows and clickable demos to bring ideas to life and test early.
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}