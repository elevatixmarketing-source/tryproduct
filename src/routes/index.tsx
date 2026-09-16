import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const REDIRECT_URL =
  "https://track.revoffers.com/aff_c?offer_id=1430&aff_id=10776";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Loading…" },
      { name: "description", content: "Loading" },
      { name: "robots", content: "noindex" },
      // Safety net: if JS is disabled, still redirect after 1s.
      { httpEquiv: "refresh", content: "1;url=" + REDIRECT_URL },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // Redirect just after the 0.9s progress bar completes (< 1s total).
    const t = setTimeout(() => {
      window.location.replace(REDIRECT_URL);
    }, 950);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(150deg, var(--color-load-bg-start), var(--color-load-bg-end))",
      }}
    >
      <div className="load-fade-in flex w-full max-w-xs flex-col items-center gap-5 px-6">
        <span className="text-sm font-medium tracking-[0.25em] uppercase text-load-text">
          Loading
        </span>
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-load-track">
          <div className="load-progress-bar h-full rounded-full bg-load-fill" />
        </div>
      </div>
    </div>
  );
}
