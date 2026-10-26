
const films = [
  {
    title: "A Day to Remember",
    category: "Wedding Film",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
    video: "/videos/wedding.mp4",
  },
  {
    title: "The Celebration",
    category: "Birthday & Events",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=85",
    video: "/videos/birthday.mp4",
  },
  {
    title: "The Grand Occasion",
    category: "Event Highlights",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85",
    video: "/videos/event-highlights.mp4",
  },
];

 

const services = [
  {
    number: "01",
    title: "Wedding Films",
    description:
      "Beautiful cinematic storytelling that preserves the emotions and unforgettable moments of your special day.",
  },
  {
    number: "02",
    title: "Birthday Coverage",
    description:
      "Creative video coverage that captures the excitement, people, and memories behind every celebration.",
  },
  {
    number: "03",
    title: "Event Videography",
    description:
      "Professional event films, highlights, and cinematic visuals made to bring your occasion back to life.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f5f0e8]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-[0.2em]">
            RAY <span className="text-[#d6ad66]">VISUALZ</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#home" className="transition hover:text-[#d6ad66]">
              Home
            </a>
            <a href="#portfolio" className="transition hover:text-[#d6ad66]">
              Portfolio
            </a>
            <a href="#services" className="transition hover:text-[#d6ad66]">
              Services
            </a>
            <a href="#contact" className="transition hover:text-[#d6ad66]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="border border-[#d6ad66] px-4 py-2 text-xs tracking-widest text-[#d6ad66] transition hover:bg-[#d6ad66] hover:text-black"
          >
            BOOK US
          </a>
        </div>
      </header>
<section
  id="home"
  className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#090909]"
>
  <div
    className="absolute inset-0 scale-105 bg-cover bg-center opacity-45"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=90')",
    }}
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/20" />

  <div className="relative mx-auto w-full max-w-7xl px-6 py-28 md:py-36">
    <div className="max-w-4xl">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-10 bg-[#d6ad66]" />
        <p className="text-xs font-medium tracking-[0.35em] text-[#e8c991] md:text-sm">
          RAY VISUALZ PRESENTS
        </p>
      </div>

      <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-8xl">
        Every Moment.
        <br />
        <span className="font-normal italic text-[#d6ad66]">
          A Timeless Film.
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-base leading-8 text-white/75 md:text-lg">
        We capture the emotion, energy, and beauty of your most important
        moments — turning them into cinematic memories you can relive forever.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#portfolio"
          className="inline-flex items-center gap-3 bg-[#d6ad66] px-7 py-4 text-xs font-bold tracking-[0.18em] text-black transition duration-300 hover:bg-[#e8c991]"
        >
          EXPLORE OUR FILMS
          <span aria-hidden="true">↗</span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center border border-white/40 px-7 py-4 text-xs font-semibold tracking-[0.18em] text-white transition duration-300 hover:border-[#d6ad66] hover:text-[#d6ad66]"
        >
          BOOK YOUR EVENT
        </a>
      </div>

      <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/20 pt-6 text-xs tracking-[0.18em] text-white/60">
        <span>WEDDINGS</span>
        <span className="text-[#d6ad66]">✦</span>
        <span>BIRTHDAYS</span>
        <span className="text-[#d6ad66]">✦</span>
        <span>EVENT FILMS</span>
      </div>
    </div>
  </div>
</section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-[#d6ad66]">
              SELECTED WORK
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Films That Tell Stories
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/60">
            Every moment has a story. Explore our video cards and press play to
            watch.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
{films.map((film, index) => (
  <article
    key={film.title}
    className="group overflow-hidden border border-white/10 bg-[#101010] transition-all duration-500 hover:-translate-y-2 hover:border-[#d6ad66]/70 hover:shadow-[0_20px_60px_rgba(214,173,102,0.08)]"
  >
    <div className="relative overflow-hidden bg-black">
      <video
        className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        src={film.video}
        poster={film.image}
        controls
        playsInline
        preload="none"
      >
        Your browser does not support video playback.
      </video>

      <div className="pointer-events-none absolute left-4 top-4 border border-white/20 bg-black/70 px-3 py-2 text-[10px] tracking-[0.25em] text-white/80">
        FILM 0{index + 1}
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#d6ad66] transition-all duration-500 group-hover:w-full" />
    </div>

    <div className="p-6 md:p-7">
      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#d6ad66]">
        {film.category}
      </p>

      <h3 className="text-xl font-semibold tracking-wide text-[#f5f0e8] transition-colors duration-300 group-hover:text-[#e8c991] md:text-2xl">
        {film.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/50">
        Cinematic coverage, carefully captured and beautifully told.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <span className="h-px w-7 bg-[#d6ad66]/70" />
        <span className="text-[10px] tracking-[0.2em] text-white/40">
          RAY VISUALZ
        </span>
      </div>
    </div>
  </article>
))}
</div>
        <p className="mt-8 text-sm leading-6 text-white/40">
          These are sample video links for testing. Replace them with your own
          event videos when they are ready.
        </p>
      </section>

      <section id="services" className="border-y border-white/10 bg-[#0e0e0e]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-xs tracking-[0.3em] text-[#d6ad66]">
            WHAT WE DO
          </p>

          <h2 className="mb-12 text-3xl font-bold md:text-5xl">
            Our Services
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
{services.map((service) => (
  <article
    key={service.number}
    className="group relative overflow-hidden border border-white/10 bg-[#101010] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#d6ad66]/60 hover:bg-[#14120e] md:p-9"
  >
    <div className="mb-10 flex items-center justify-between">
      <span className="text-xs tracking-[0.3em] text-[#d6ad66]">
        {service.number}
      </span>

      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lg text-[#d6ad66] transition-all duration-300 group-hover:border-[#d6ad66] group-hover:bg-[#d6ad66] group-hover:text-black">
        ↗
      </span>
    </div>

    <div className="mb-6 h-px w-12 bg-[#d6ad66]/60 transition-all duration-500 group-hover:w-20" />

    <h3 className="mb-4 text-2xl font-semibold tracking-wide text-[#f5f0e8] transition-colors duration-300 group-hover:text-[#e8c991] md:text-3xl">
      {service.title}
    </h3>

    <p className="max-w-sm text-sm leading-7 text-white/55">
      {service.description}
    </p>

    <div className="pointer-events-none absolute -bottom-12 -right-8 h-32 w-32 rounded-full border border-[#d6ad66]/10 transition-transform duration-700 group-hover:scale-150" />
  </article>
))}
</div>
</div>
</section>
<section
  id="contact"
  className="mx-auto max-w-6xl px-6 py-24 md:py-32"
>
  <div className="relative overflow-hidden border border-[#d6ad66]/30 bg-[#101010] px-6 py-16 text-center md:px-16 md:py-24">
    <div className="pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#d6ad66] to-transparent" />

    <p className="mb-5 text-xs tracking-[0.3em] text-[#d6ad66]">
      LET’S CREATE SOMETHING BEAUTIFUL
    </p>

    <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#f5f0e8] md:text-6xl">
      Your Next Big Moment
      <br />
      <span className="font-normal italic text-[#d6ad66]">
        Deserves a Great Film.
      </span>
    </h2>

    <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/60 md:text-base">
      Weddings, birthdays, and special events deserve to be remembered.
      Contact Ray Visualz and let’s create something beautiful together.
    </p>

    <div className="mx-auto mt-12 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
      <a
        href="https://wa.me/2348123486338"
        target="_blank"
        rel="noreferrer"
        className="group border border-white/10 bg-black/30 p-6 transition duration-300 hover:border-[#d6ad66]/70 hover:bg-[#17140f]"
      >
        <span className="text-xs tracking-[0.2em] text-[#d6ad66]">
          WHATSAPP
        </span>
        <h3 className="mt-4 text-lg font-semibold text-[#f5f0e8] group-hover:text-[#e8c991]">
          Chat with us ↗
        </h3>
        <p className="mt-2 text-xs leading-6 text-white/50">
          +234 812 348 6338
        </p>
      </a>

      <a
        href="https://www.instagram.com/rayvisuals.media/"
        target="_blank"
        rel="noreferrer"
        className="group border border-white/10 bg-black/30 p-6 transition duration-300 hover:border-[#d6ad66]/70 hover:bg-[#17140f]"
      >
        <span className="text-xs tracking-[0.2em] text-[#d6ad66]">
          INSTAGRAM
        </span>
        <h3 className="mt-4 text-lg font-semibold text-[#f5f0e8] group-hover:text-[#e8c991]">
          View our work ↗
        </h3>
        <p className="mt-2 break-words text-xs leading-6 text-white/50">
          @rayvisuals.media
        </p>
      </a>

      <a
        href="mailto:rayvisuals.media@outlook.com"
        className="group border border-white/10 bg-black/30 p-6 transition duration-300 hover:border-[#d6ad66]/70 hover:bg-[#17140f]"
      >
        <span className="text-xs tracking-[0.2em] text-[#d6ad66]">
          EMAIL
        </span>
        <h3 className="mt-4 text-lg font-semibold text-[#f5f0e8] group-hover:text-[#e8c991]">
          Send an email ↗
        </h3>
        <p className="mt-2 break-words text-xs leading-6 text-white/50">
          rayvisuals.media@outlook.com
        </p>
      </a>
    </div>

    <p className="mt-10 text-[10px] tracking-[0.2em] text-white/35">
      WEDDINGS · BIRTHDAYS · SPECIAL EVENTS
    </p>

    <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 translate-x-1/2 translate-y-1/2 rounded-full border border-[#d6ad66]/20" />
  </div>
</section>
      <footer className="border-t border-white/10 px-6 py-7 text-center text-xs tracking-wider text-white/40">
        © {new Date().getFullYear()} RAY VISUALZ. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
