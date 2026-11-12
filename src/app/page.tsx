import FilmVideo from "./FilmVideo";

// REPLACE YOUR OLD FILMS ARRAY WITH THIS NEW ONE DOWN BELOW:
const films = [
  {
    title: "The Gala Reception",
    category: "VIP Event",
    video: "/videos/gala-reception.mp4",
  },
  {
    title: "Edo Youth Impact Forum",
    category: "Event Coverage",
    video: "/videos/edo-youth-impact-forum.mp4",
  },
  {
    title: "The Traditional Celebration",
    category: "Traditional Wedding",
    video: "/videos/traditional-wedding.mp4",
  },
  {
    title: "A Love Story",
    category: "Wedding Highlights",
    video: "/videos/wedding-highlights.mp4",
  },
  {
    title: "The Groomsmen Experience",
    category: "Wedding Highlights",
    video: "/videos/groomsmen-experience.mp4",
  },
  {
    title: "Forever Begins",
    category: "Wedding Film",
    video: "/videos/forever-begins.mp4",
  },
];
const services = [
  {
    number: "01",
    title: "Wedding Films",
    description:
      "Beautiful cinematic storytelling that preserves the emotions, details, and unforgettable moments of your special day.",
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
      "Professional event films, highlights, and cinematic visuals that bring your occasion back to life.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#f5f0e8]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#home" className="text-xl font-black tracking-[0.18em]">
            RAY <span className="text-[#d6ad66]">VISUALZ.</span>
          </a>

          <nav className="hidden items-center gap-9 text-xs tracking-[0.16em] text-white/65 md:flex">
            <a href="#home" className="transition hover:text-[#d6ad66]">HOME</a>
            <a href="#portfolio" className="transition hover:text-[#d6ad66]">PORTFOLIO</a>
            <a href="#about" className="transition hover:text-[#d6ad66]">ABOUT</a>
            <a href="#services" className="transition hover:text-[#d6ad66]">SERVICES</a>
            <a href="#contact" className="transition hover:text-[#d6ad66]">CONTACT</a>
          </nav>

          <a
            href="#contact"
            className="border border-[#d6ad66] px-5 py-3 text-[10px] font-bold tracking-[0.2em] text-[#d6ad66] transition hover:bg-[#d6ad66] hover:text-black"
          >
            BOOK AN EVENT ↗
          </a>
        </div>
      </header>
      
{/* HERO */}
<section
  id="home"
 className="relative flex min-h-[90svh] items-center overflow-hidden bg-[#080808]"
>
  <div
    className="absolute inset-0 scale-105 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90')",
    }}
  />

  {/* Cinematic overlays */}
  <div className="absolute inset-0 bg-black/60" />
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20" />

  <div className="relative mx-auto w-full max-w-7xl px-6 py-32 md:px-10">
    <div className="max-w-5xl">

      <div className="mb-9 flex items-center gap-4">
        <span className="h-px w-14 bg-[#d6ad66]" />
        <p className="text-[10px] font-semibold tracking-[0.4em] text-[#e8c991] md:text-xs">
          THE ART OF PRESERVING MOMENTS
        </p>
      </div>

      <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[108px]">
        WE TURN
        <br />
        MOMENTS INTO
        <br />
        <span className="font-normal italic text-[#d6ad66]">
          TIMELESS STORIES.
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-sm leading-8 text-white/75 md:text-base">
        Every celebration has a story worth telling. We capture the
        emotion, beauty, and unforgettable details that make yours
        extraordinary.
      </p>

      <div className="mt-11 flex flex-wrap gap-4">
        
<a
  href="#films"
  className="group flex items-center gap-4 bg-[#d6ad66] px-8 py-5 text-[10px] font-bold tracking-[0.2em] text-black transition duration-500 hover:-translate-y-1 hover:bg-[#f0d5a0] hover:shadow-[0_12px_35px_rgba(214,173,102,0.2)]"
>
  EXPLORE OUR FILMS
  <span className="transition-transform duration-300 group-hover:translate-x-2">
    ↗
  </span>
</a>

<a
  href="#contact"
  className="border border-white/40 px-8 py-5 text-[10px] font-bold tracking-[0.2em] text-white transition duration-500 hover:-translate-y-1 hover:border-[#d6ad66] hover:bg-[#d6ad66]/10 hover:text-[#d6ad66]"
>
  BOOK YOUR EXPERIENCE
</a>

      </div>

      <div className="mt-20 flex flex-wrap items-center gap-5 text-[9px] tracking-[0.28em] text-white/65 md:gap-8">
        <span>WEDDINGS</span>
        <span className="text-[#d6ad66]">✦</span>
        <span>BIRTHDAYS</span>
        <span className="text-[#d6ad66]">✦</span>
        <span>CELEBRATIONS</span>
        <span className="text-[#d6ad66]">✦</span>
        <span>EVENT FILMS</span>
      </div>
    </div>
  </div>

  <div className="absolute bottom-10 right-8 hidden items-center gap-4 text-[9px] tracking-[0.3em] text-white/60 lg:flex">
    <span className="h-px w-12 bg-[#d6ad66]" />
    SCROLL TO EXPLORE
  </div>
</section>


      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-[#0d0d0d] px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] tracking-[0.35em] text-[#d6ad66]">
                A COLLECTION OF STORIES
              </p>
              <h2 className="text-4xl font-semibold md:text-6xl">
                Selected <span className="font-normal italic text-[#d6ad66]">Films.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/50">
              A glimpse into the stories, people, and celebrations we have
              the privilege of capturing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {films.map((film, index) => (
              <article
                key={film.title}
className="group overflow-hidden border border-white/10 bg-[#111] transition duration-500 hover:-translate-y-2 hover:border-[#d6ad66]/60 hover:shadow-[0_25px_70px_rgba(214,173,102,0.12)]"
                
              >
                <div className="relative overflow-hidden bg-black ring-1 ring-inset ring-white/5">
                 <FilmVideo src={film.video} />
                  <span className="absolute left-4 top-4 border border-white/20 bg-black/70 px-3 py-2 text-[9px] tracking-[0.2em] text-white/80">
                    FILM 0{index + 1}
                  </span>
                </div>

                <div className="p-8 md:p-9">
                  <p className="mb-3 text-[9px] tracking-[0.3em] text-[#d6ad66]">
                    {film.category.toUpperCase()}
                  </p>
                  <h3 className="text-2xl font-medium transition group-hover:text-[#e8c991]">
                    {film.title}
                  </h3>
                  <p className="mt-4 text-xs leading-7 text-white/45">
                    Cinematic coverage, carefully captured and beautifully told.
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#d6ad66]" />
                    <span className="text-[9px] tracking-[0.25em] text-white/35">
                      RAY VISUALZ
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

         <div className="mt-16 mb-8 px-6 text-center">
  <p className="text-lg md:text-2xl font-bold text-white tracking-wide leading-relaxed">
    Want to see more of our work?{" "}
    <a
      href="https://www.instagram.com/rayvisuals.media/"
      target="_blank"
      rel="noreferrer"
      className="text-[#d6ad66] underline underline-offset-4 hover:text-white transition-colors"
    >
      Visit our Instagram page @rayvisuals.media
    </a>{" "}
    to watch more recent films and behind-the-scenes stories.
  </p>
</div>
        </div>
      </section>

           {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="mb-14">
          <p className="mb-4 text-[10px] tracking-[0.35em] text-[#d6ad66]">
            WHAT WE CREATE
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Our <span className="font-normal italic text-[#d6ad66]">Expertise.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-xs tracking-[0.3em] text-[#d6ad66]">
                  {service.number}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-lg text-[#d6ad66]">
                  ↗
                </span>
              </div>

              <div className="mb-7 h-px w-12 bg-[#d6ad66]" />

              <h3 className="mb-5 text-3xl font-semibold">
                {service.title}
              </h3>

              <p className="text-sm leading-8 text-white/50">
                {service.description}
              </p>

              <div className="mt-8 border-t border-white/10 pt-5 text-[9px] tracking-[0.25em] text-white/35">
                RAY VISUALZ
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 md:px-10 md:py-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden border border-[#d6ad66]/30 bg-[#101010] px-6 py-20 text-center md:px-16 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,173,102,0.10),transparent_65%)]" />

          <div className="relative">
            <p className="mb-6 text-[10px] tracking-[0.35em] text-[#d6ad66]">
              YOUR STORY DESERVES TO BE TOLD
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-7xl">
              Let's Make It
              <br />
              <span className="font-normal italic text-[#d6ad66]">
                Unforgettable.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/55">
              Have a wedding, birthday, or special event coming up?
              Let's create something beautiful together.
            </p>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4 text-left md:grid-cols-3">
              <a
                href="https://wa.me/2348123486338"
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 bg-black/30 p-7 transition hover:border-[#d6ad66]/70 hover:bg-[#17140f]"
              >
                <span className="text-[10px] tracking-[0.2em] text-[#d6ad66]">WHATSAPP</span>
                <h3 className="mt-5 text-xl font-semibold">Chat with us ↗</h3>
                <p className="mt-3 text-xs text-white/45">+234 812 348 6338</p>
              </a>

              <a
                href="https://www.instagram.com/rayvisuals.media/"
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 bg-black/30 p-7 transition hover:border-[#d6ad66]/70 hover:bg-[#17140f]"
              >
                <span className="text-[10px] tracking-[0.2em] text-[#d6ad66]">INSTAGRAM</span>
                <h3 className="mt-5 text-xl font-semibold">View our work ↗</h3>
                <p className="mt-3 text-xs text-white/45">@rayvisuals.media</p>
              </a>

              <a
                href="mailto:rayvisuals.media@outlook.com"
                className="border border-white/10 bg-black/30 p-7 transition hover:border-[#d6ad66]/70 hover:bg-[#17140f]"
              >
                <span className="text-[10px] tracking-[0.2em] text-[#d6ad66]">EMAIL</span>
                <h3 className="mt-5 text-xl font-semibold">Send an email ↗</h3>
                <p className="mt-3 break-words text-xs text-white/45">
                  rayvisuals.media@outlook.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
{/* ABOUT SECTION */}
<section id="about" className="py-24 px-6 md:px-16 bg-zinc-950 border-t border-zinc-900">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left Column: Headline & Story */}
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-[#d6ad66] mb-3">
        Behind The Lens
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
        Crafting <span className="italic font-light text-[#d6ad66]">Timeless</span> Visual Stories.
      </h2>
      <p className="text-zinc-400 text-base leading-relaxed mb-4">
        At <span className="text-white font-semibold">Ray Visualz</span>, we believe every event, celebration, and milestone holds a unique emotion worth preserving forever. We don&apos;t just record moments—we direct, frame, and color-grade them into cinematic films you&apos;ll relive for decades.
      </p>
      <p className="text-zinc-400 text-base leading-relaxed">
        From intimate traditional weddings and high-energy receptions to VIP forums and brand campaigns, our eye for detail and storytelling sets every frame apart.
      </p>
    </div>

    {/* Right Column: Stats / Highlights */}
    <div className="grid grid-cols-2 gap-6">
      <div className="p-6 bg-black border border-zinc-800/80 rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold text-[#d6ad66] mb-2">100%</h3>
        <p className="text-sm text-zinc-400 uppercase tracking-wider">Cinematic Quality</p>
      </div>
      <div className="p-6 bg-black border border-zinc-800/80 rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold text-[#d6ad66] mb-2">4K</h3>
        <p className="text-sm text-zinc-400 uppercase tracking-wider">Ultra HD Production</p>
      </div>
      <div className="p-6 bg-black border border-zinc-800/80 rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold text-[#d6ad66] mb-2">50+</h3>
        <p className="text-sm text-zinc-400 uppercase tracking-wider">Stories Captured</p>
      </div>
      <div className="p-6 bg-black border border-zinc-800/80 rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold text-[#d6ad66] mb-2">Fast</h3>
        <p className="text-sm text-zinc-400 uppercase tracking-wider">Reliable Delivery</p>
      </div>
    </div>

  </div>
</section>
      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center">
        <p className="text-sm font-bold tracking-[0.2em]">
          RAY <span className="text-[#d6ad66]">VISUALZ.</span>
        </p>
        <p className="mt-3 text-[9px] tracking-[0.2em] text-white/35">
          © 2026 RAY VISUALZ. ALL RIGHTS RESERVED.
        </p>
      </footer>
   {/* FLOATING INSTAGRAM BUTTON */}
<a
  href="https://www.instagram.com/rayvisuals.media/"
  target="_blank"
  rel="noreferrer"
  aria-label="Follow Ray Visualz on Instagram"
  className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#ffdc80] via-[#fc3b72] to-[#833ab4] text-white shadow-lg transition duration-300 hover:scale-110"
>
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
</a>

{/* FLOATING WHATSAPP BUTTON */}
<a
  href="https://wa.me/2348123486338"
  target="_blank"
  rel="noreferrer"
  aria-label="Chat with Ray Visualz on WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110"
>
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9a11.83 11.83 0 0 0-3.45-8.42ZM12.07 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92a9.84 9.84 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Z" />
  </svg>
</a>
    </main>
  );
}
