import { createFileRoute } from "@tanstack/react-router";
import heroJar from "@/assets/gummies-hero.jpg";
import flavorStrawberry from "@/assets/flavor-strawberry.jpg";
import flavorMango from "@/assets/flavor-mango.jpg";
import flavorMint from "@/assets/flavor-mint.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bloom — Gummies that glow" },
      {
        name: "description",
        content:
          "A daily fruit gummy made with real fruit and a clean label. Three flavors, one jar, zero added sugar.",
      },
      { property: "og:title", content: "Bloom — Gummies that glow" },
      {
        property: "og:description",
        content:
          "A daily fruit gummy made with real fruit and a clean label. Three flavors, one jar, zero added sugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const flavors = [
  {
    name: "Strawberry Glow",
    badge: "Best seller",
    badgeClass: "bg-rose/20 text-berry",
    image: flavorStrawberry,
    alt: "Pink strawberry gummies in a frosted glass cup",
    blurb:
      "Bright, tangy, and a touch tart — the one people ask for by name.",
  },
  {
    name: "Mango Sunbeam",
    badge: "New",
    badgeClass: "bg-amber/20 text-amber",
    image: flavorMango,
    alt: "Amber mango gummies in a frosted glass cup",
    blurb: "Sun-ripened tropical sweetness with a soft, mellow finish.",
  },
  {
    name: "Mint Breeze",
    badge: "Cool",
    badgeClass: "bg-mint/20 text-mint",
    image: flavorMint,
    alt: "Green mint gummies in a frosted glass cup",
    blurb: "Crisp and clean — the one that makes the jar feel like a treat.",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream font-body text-ink antialiased">
      {/* Ambient drifting color blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-24 size-[420px] animate-drift rounded-full bg-rose/40 blur-3xl [animation-duration:15s]" />
        <div className="absolute top-40 -right-20 size-[380px] animate-drift rounded-full bg-amber/40 blur-3xl [animation-duration:19s]" />
        <div className="absolute bottom-0 left-1/3 size-[400px] animate-drift rounded-full bg-mint/40 blur-3xl [animation-duration:22s]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/50 bg-cream/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <span className="font-display text-xl font-semibold tracking-tight">
            Bloom
          </span>
          <nav className="hidden items-center gap-7 text-sm text-ink-soft sm:flex">
            <a href="#flavors" className="transition-colors hover:text-ink">
              Flavors
            </a>
            <a href="#why" className="transition-colors hover:text-ink">
              Why Bloom
            </a>
            <a href="#buy" className="transition-colors hover:text-ink">
              Reviews
            </a>
          </nav>
          <a
            href="#buy"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-rose"
          >
            Shop now
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* Hero */}
        <section className="grid items-center gap-8 py-12 lg:grid-cols-12 lg:py-20">
          <div className="animate-rise lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-3 py-1 text-xs font-medium text-ink-soft backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-mint" />
              12,000+ happy chewers
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-6xl">
              Gummies that <span className="italic text-berry">glow</span> from
              the inside.
            </h1>
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-ink-soft text-pretty">
              A daily fruit gummy — real fruit, and a clean label. No sugar
              crash, no weird aftertaste. Just a little something to look
              forward to.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#buy"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-rose"
              >
                Buy a box
              </a>
              <a
                href="#flavors"
                className="rounded-full border border-white/60 bg-white/50 px-6 py-3 text-sm font-medium text-ink backdrop-blur-md transition-colors hover:bg-white/80"
              >
                See flavors
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm">
              <span className="font-semibold">
                4.9<span className="text-ink-soft">/5</span>
              </span>
              <span className="h-4 w-px bg-ink/15" />
              <span className="text-ink-soft">Free shipping over $30</span>
            </div>
          </div>
          <div className="animate-rise [animation-delay:0.1s] lg:col-span-7">
            <div className="rounded-[28px] border border-white/60 bg-white/45 p-3 shadow-[0_30px_60px_-30px_rgba(58,42,38,0.4)] backdrop-blur-2xl">
              <img
                src={heroJar}
                alt="Frosted glass jar filled with colorful fruit gummies"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-[20px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Flavors */}
        <section id="flavors" className="scroll-mt-20 py-10">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Pick your glow
            </h2>
            <span className="text-sm text-ink-soft">3 flavors · one jar</span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {flavors.map((flavor, i) => (
              <div
                key={flavor.name}
                className="animate-rise rounded-3xl border border-white/60 bg-white/50 p-5 backdrop-blur-xl"
                style={{ animationDelay: `${0.05 * (i + 1)}s` }}
              >
                <img
                  src={flavor.image}
                  alt={flavor.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">
                    {flavor.name}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${flavor.badgeClass}`}
                  >
                    {flavor.badge}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-ink-soft">{flavor.blurb}</p>
                <div className="mt-3 text-sm font-medium">$24</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Bloom */}
        <section id="why" className="scroll-mt-20 py-10">
          <div className="rounded-[28px] border border-white/60 bg-white/50 p-6 backdrop-blur-xl sm:p-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <div className="font-display text-3xl font-semibold text-berry">
                  100%
                </div>
                <p className="mt-1 text-sm text-ink-soft">
                  Real fruit, whole-food fruit, and a clean label you can
                  actually read.
                </p>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-amber">
                  0g
                </div>
                <p className="mt-1 text-sm text-ink-soft">
                  Added sugar, no artificial dyes, and no weird aftertaste.
                </p>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-mint">
                  2g
                </div>
                <p className="mt-1 text-sm text-ink-soft">
                  A gentle daily dose — two gummies, once a day, that's it.
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-white/60 pt-5">
              <p className="font-display text-lg italic text-ink">
                "Finally a gummy that doesn't taste like a pharmacy."
              </p>
              <p className="mt-1 text-sm text-ink-soft">— Priya, verified buyer</p>
            </div>
          </div>
        </section>

        {/* Buy */}
        <section id="buy" className="scroll-mt-20 py-12">
          <div className="rounded-[28px] border border-white/60 bg-white/55 p-8 text-center backdrop-blur-2xl sm:p-12">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-balance">
              Stock your jar
            </h2>
            <p className="mx-auto mt-3 max-w-[40ch] text-pretty text-ink-soft">
              One box is a month of glow. Free shipping, no subscription,
              cancel-free.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-rose"
              >
                Buy a box · $24
              </a>
              <a
                href="#"
                className="rounded-full border border-white/60 bg-white/50 px-7 py-3.5 text-sm font-medium text-ink backdrop-blur-md transition-colors hover:bg-white/80"
              >
                Subscribe &amp; save 15%
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/50 bg-cream/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-ink-soft sm:flex-row">
          <span className="font-display text-lg font-semibold text-ink">
            Bloom
          </span>
          <span>© 2026 Bloom Gummies · Made with real fruit</span>
          <div className="flex gap-5">
            <a href="#flavors" className="transition-colors hover:text-ink">
              Flavors
            </a>
            <a href="#why" className="transition-colors hover:text-ink">
              Why
            </a>
            <a href="#buy" className="transition-colors hover:text-ink">
              Shop
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
