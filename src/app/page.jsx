"use client";

const URL = "https://algrow.online/";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900 font-sans">
      <div className="p-8">
        <a
          href={URL}
          aria-label="Ir a Algrow Channels"
          className={[
            "group relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl cursor-pointer",
            "text-base font-semibold",
            "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
            "hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98]",
            "shadow-lg hover:shadow-xl",
            "transition-all motion-safe:duration-200",
            "focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/50",
            "ring-1 ring-white/10",
          ].join(" ")}
        >
          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/5 transition-colors" />

          {/* Icono */}
          <svg
            className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M13.172 12 8.222 7.05a1 1 0 1 1 1.414-1.414l6.364 6.364a1 1 0 0 1 0 1.414l-6.364 6.364a1 1 0 0 1-1.414-1.414L13.172 12z" />
          </svg>

          <span>Ir a Algrow Channels</span>
        </a>

        <div className="mt-3 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <span className="opacity-80">
            Click para abrir{" "}
            <span className="font-medium">algrow.online/elevenlabs</span>
          </span>
        </div>
      </div>
    </div>
  );
}
