import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { useEffect, useState } from 'react';

const getAssetUrl = (name: string) => new URL(`../assets/${name}`, import.meta.url).href;

export default function Home() {
  const { language, t } = useLanguage();
  const [concertLang, setConcertLang] = useState<'current' | 'dk'>('current');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(useTransform(mouseX, [0, window.innerWidth], [-100, 100]), { stiffness: 50, damping: 20 });
  const spotlightY = useSpring(useTransform(mouseY, [0, window.innerHeight], [-50, 50]), { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Concert Section Translations
  const ct = (fr: string, en: string, dk: string) => {
    if (concertLang === 'dk') return dk;
    return language === 'fr' ? fr : en;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen bg-ink flex items-center justify-center relative overflow-hidden px-8 pt-24 pb-20">
        {/* Ambient Background Layers */}
        <div className="absolute inset-0 z-0">
          {/* Animated Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-amber-accent/5 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-2/5 rounded-full blur-[100px]"
          />

          {/* Interactive Glow */}
          <motion.div 
            style={{ x: spotlightX, y: spotlightY, left: '50%', translateX: '-50%' }}
            className="absolute top-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_50%_50%,rgba(192,32,92,0.12)_0%,rgba(192,32,92,0.05)_30%,transparent_70%)] blur-[80px] pointer-events-none" 
          />

          {/* Grain Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
        </div>

        <div className="relative z-10 text-center max-w-[740px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[9px] tracking-[7px] uppercase text-ivory/35 mb-9 font-light"
          >
            {t('Rose Hill · Île Maurice · Océan Indien', 'Rose Hill · Mauritius · Indian Ocean')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35 }}
            className="font-display text-[clamp(68px,13vw,140px)] leading-[0.86] font-black tracking-[-2px]"
          >
            <span className="block font-normal italic text-[0.52em] tracking-[6px] text-amber-pale mb-1">Nadine</span>
            <span className="block bg-gradient-to-br from-ivory via-amber-pale to-ivory bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(192,32,92,0.25)]">Bellombre</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-4.5 mt-7"
          >
            <span className="flex-1 max-w-[100px] h-px bg-amber-2/28" />
            <span className="text-lg">🎤</span>
            <span className="flex-1 max-w-[100px] h-px bg-amber-2/28" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center flex-wrap gap-0 my-7"
          >
            <span className="font-display italic text-[clamp(20px,3.5vw,32px)] text-amber-2 px-4">Jazz</span>
            <span className="text-amber-2/28 text-2xl leading-none">·</span>
            <span className="font-display italic text-[clamp(20px,3.5vw,32px)] text-amber-2 px-4">Soul</span>
            <span className="text-amber-2/28 text-2xl leading-none">·</span>
            <span className="font-display italic text-[clamp(20px,3.5vw,32px)] text-amber-2 px-4">Séga</span>
            <span className="text-amber-2/28 text-2xl leading-none">·</span>
            <span className="font-display italic text-[clamp(20px,3.5vw,32px)] text-amber-2 px-4">Reggae</span>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-display italic text-[clamp(15px,2.2vw,19px)] text-ivory/65 leading-[1.65] font-normal mb-9"
          >
            {t('« Une voix qui transporte vers des rêves imaginaires »', '« A voice that carries you into imaginary dreams »')}
          </motion.blockquote>

          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="inline-flex items-center gap-3 text-[10px] tracking-[4px] uppercase font-normal text-amber-2 border border-amber-2/28 px-8 py-3.5 hover:bg-amber-2 hover:text-ink transition-all duration-300 group"
          >
            <span>{t('Découvrir son univers', 'Discover her world')}</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </motion.a>
        </div>

        {/* Vinyl Deco with Parallax effect */}
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            perspective: 1000
          }}
          className="absolute right-[-80px] bottom-[-100px] w-[440px] h-[440px] rounded-full bg-[repeating-radial-gradient(circle_at_50%_50%,rgba(30,25,16,1)_0px,rgba(22,18,12,1)_3px,rgba(30,25,16,1)_6px)] opacity-45 shadow-[0_0_120px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(192,32,92,0.08)_0%,transparent_35%,rgba(192,32,92,0.04)_50%,transparent_60%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-ink flex items-center justify-center shadow-[0_0_0_2px_rgba(192,32,92,0.15),0_0_0_6px_rgba(192,32,92,0.05)] text-[11px] tracking-[3px] text-amber-2/40 font-light">
            N·B
          </div>
        </motion.div>
      </section>

      {/* Ribbon Band */}
      <div className="bg-amber-2 overflow-hidden py-3 relative z-10 border-y border-ink/10">
        <div className="flex items-center gap-0 whitespace-nowrap animate-[scroll_18s_linear_infinite] w-max">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center">
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">Jazz</span>
              <span className="text-[10px] text-ink/40">✦</span>
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">Soul</span>
              <span className="text-[10px] text-ink/40">✦</span>
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">Séga</span>
              <span className="text-[10px] text-ink/40">✦</span>
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">Reggae</span>
              <span className="text-[10px] text-ink/40">✦</span>
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">{t('Île Maurice', 'Mauritius')}</span>
              <span className="text-[10px] text-ink/40">✦</span>
              <span className="text-[11px] tracking-[3px] uppercase text-ink font-medium px-6">{t('25+ ans de scène', '25+ years on stage')}</span>
              <span className="text-[10px] text-ink/40">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section bg-gradient-to-br from-[#FDF8FB] via-[#F5E0ED] to-[#FAF3F6] relative py-24 text-ink-2">
        <div className="container mx-auto px-12">
          <div className="section-eyebrow text-amber-2">{t('À propos', 'About')}</div>
          <h2 className="section-h2 !text-ink-2">Nadine Bellombre</h2>

          <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-20">
            <div className="flex flex-col gap-0">
              <div className="relative mb-5 group">
                <div className="absolute -top-2 -left-2 w-7 h-7 border-t-2 border-l-2 border-amber-2 opacity-80 transition-all group-hover:-top-3 group-hover:-left-3" />
                <div className="absolute -bottom-2 -right-2 w-7 h-7 border-b-2 border-r-2 border-amber-2 opacity-80 transition-all group-hover:-bottom-3 group-hover:-right-3" />
                <img
                  src={getAssetUrl('2024-08-09 11.24.19.jpg')}
                  alt="Nadine Bellombre"
                  className="w-full aspect-[4/5] object-cover object-center border border-amber-2/20 shadow-[0_0_80px_rgba(0,0,0,0.1),6px_6px_0_rgba(104,25,81,0.15)] grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex flex-row gap-0.5">
                {[
                  { n: '25+', l: t('ans de scène', 'years stage') },
                  { n: '10', l: t('compositions', 'compositions') },
                  { n: '1', l: t('album', 'album') }
                ].map((s, i) => (
                  <div key={i} className="flex-1 bg-white/40 border border-amber-2/15 py-4 px-3 flex flex-col items-center hover:bg-white/60 transition-colors">
                    <span className="font-display text-2xl text-ink-2 font-bold leading-none">{s.n}</span>
                    <span className="text-[9px] text-ink/40 tracking-wider mt-1.5 uppercase font-light text-center">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <p className="font-display italic text-[22px] md:text-[30px] text-ink-5 leading-[1.55] mb-6 font-normal">
                {t(
                  "Chanteuse professionnelle depuis les années 90, soliste et choriste — une voix enracinée à l'île Maurice, nourrie de rencontres musicales en France et dans l'océan Indien.",
                  "Professional singer since the 90s, soloist and backing vocalist — a voice rooted in Mauritius, shaped by musical encounters in France and across the Indian Ocean."
                )}
              </p>
              <p className="text-lg leading-[2.0] text-ink/70 mb-9 font-light">
                {t(
                  "Native de l'île Maurice, Nadine Bellombre débute à 16 ans, portée par la soul, le reggae et le séga — le rythme ancré dans l'âme mauricienne.",
                  "Born in Mauritius, Nadine began at 16, carried by soul, reggae and séga — the rhythm rooted in the Mauritian soul."
                )}
              </p>
              <div className="flex flex-col gap-3.5">
                <Link to="/biographie" className="inline-flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-amber-2 border-b border-amber-2/28 pb-1 hover:text-amber-accent hover:gap-5 hover:border-amber-accent transition-all font-medium">
                  <span>{t('Lire sa biographie', 'Read her biography')}</span>
                  <span>→</span>
                </Link>
                <Link to="/galerie" className="inline-flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-amber-2 border-b border-amber-2/28 pb-1 hover:text-amber-accent hover:gap-5 hover:border-amber-accent transition-all font-medium">
                  <span>{t('Voir la galerie', 'View gallery')}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concert Section */}
      <section className="section bg-gradient-to-br from-[#FAF3F6] via-[#F5E0ED] to-[#FDF8FB] relative py-24 overflow-hidden text-ink-2">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-amber-2/30 to-transparent" />
        <div className="container mx-auto px-12">
          <div className="section-eyebrow text-amber-2">{t('Prochain Concert', 'Upcoming Concert')}</div>

          <div className="bg-white/60 backdrop-blur-md border border-amber-2/15 p-10 md:p-14 relative overflow-hidden shadow-[0_20px_60px_rgba(42,10,31,0.08)]">
            <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-7 relative z-10">
              <div className="inline-flex items-center gap-2.5 border border-amber-2/20 px-4 py-2 text-[10px] tracking-[3px] text-ink/50 font-light">
                <span>📍</span>
                <span>{ct('Ishøj Teater, Tranegilde — Danemark', 'Ishøj Teater, Tranegilde — Denmark', 'Ishøj Teater, Tranegilde — Danemark')}</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setConcertLang('current')}
                  className={`text-xl p-1.5 transition-all grayscale hover:grayscale-0 ${concertLang === 'current' ? 'grayscale-0 scale-110 border-b border-amber-2' : 'opacity-40'}`}
                >
                  {language === 'fr' ? '🇫🇷' : '🇬🇧'}
                </button>
                <button 
                  onClick={() => setConcertLang('dk')}
                  className={`text-xl p-1.5 transition-all grayscale hover:grayscale-0 ${concertLang === 'dk' ? 'grayscale-0 scale-110 border-b border-amber-2' : 'opacity-40'}`}
                >
                  🇩🇰
                </button>
              </div>
            </header>

            <h2 className="font-display italic text-[28px] md:text-[50px] text-ink-2 font-normal mb-2 tracking-tight">
              Søren Lee & Emil Hess Quartet
            </h2>
            <p className="text-sm text-ink/40 mb-8 tracking-wide font-light">
              {ct('avec la voix invitée de', 'featuring guest vocals by', 'med gæstevokal af')} <strong className="text-amber-2 font-medium">Nadine Bellombre</strong>
            </p>

            <div className="max-w-[740px] text-base leading-[1.8] text-ink/80 mb-11 font-light space-y-6">
              <p>
                {ct(
                  "Une soirée de jazz avec quelques-uns des musiciens les plus marquants du Danemark. Le guitariste Søren Lee et le saxophoniste Emil Hess conduisent un quartet puissant avec le bassiste Jesper Bodilsen et le batteur Jacob Roved. Ensemble, ils créent un univers musical vivant et intime où tradition et renouveau se fondent.",
                  "An evening of jazz with some of Denmark's most prominent musicians. Guitarist Søren Lee and saxophonist Emil Hess lead a powerful quartet with bassist Jesper Bodilsen and drummer Jacob Roved. Together, they create a vibrant and intimate musical universe where tradition and renewal merge.",
                  "En aften i jazzens tegn med nogle af Danmarks mest markante musikere. Guitaristen Søren Lee og saxofonisten Emil Hess står i spidsen for en stærk kvartet med bassist Jesper Bodilsen og trommeslager Jacob Roved. Sammen skaber de et levende og nærværende musikalsk univers, hvor tradition og fornyelse smelter sammen."
                )}
              </p>
              <p>
                {ct(
                  "La musique sera composée de compositions originales ainsi que de standards jazz classiques choisis, interprétés avec personnalité, chaleur et un fort sens de l'improvisation — entre le ton nordique et la tradition jazz américaine.",
                  "The music will consist of original compositions as well as selected classic jazz standards, performed with personality, warmth, and a strong sense of improvisation — between the Nordic tone and the American jazz tradition.",
                  "Musikken vil bestå af originale kompositioner samt udvalgte klassiske jazzstandards, fortolket med personlighed, varme og improvisatorisk overskud — i spændingsfeltet mellem den nordiske tone og den amerikanske jazztradition."
                )}
              </p>
              <p>
                {ct(
                  "La soirée est sublimée par la voix invitée de Nadine Bellombre, dont la voix chaude et expressive sera mise en valeur sur des titres sélectionnés.",
                  "The evening is enhanced by the guest vocals of Nadine Bellombre, whose warm and expressive voice will be highlighted on selected tracks.",
                  "Aftenen får et ekstra løft med gæstevokal af Nadine Bellombre, der med sin varme og personlige stemme medvirker på udvalgte numre."
                )}
              </p>
            </div>

            <div className="mb-10">
              <h4 className="text-[9px] tracking-[5px] uppercase text-amber-2/40 mb-4 font-normal">Line-up</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-amber-2/10 border border-amber-2/15">
                {[
                  { n: 'Søren Lee', r: ct('Guitare', 'Guitar', 'guitar') },
                  { n: 'Emil Hess', r: ct('Saxophone', 'Saxophone', 'saxophone') },
                  { n: 'Jesper Bodilsen', r: ct('Contrebasse', 'Double Bass', 'bas') },
                  { n: 'Jacob Roved', r: ct('Batterie', 'Drums', 'trommer') },
                  { n: 'Nadine Bellombre', r: ct('Voix (invitée)', 'Vocals (guest)', 'vokal (gæst)'), star: true }
                ].map((p, i) => (
                  <div key={i} className={`flex items-center justify-between p-4 px-6 ${p.star ? 'bg-amber-2/5' : 'bg-white/80'} hover:bg-white transition-colors`}>
                    <span className={`text-[15px] ${p.star ? 'text-amber-2 font-medium' : 'text-ink/80 font-normal'}`}>{p.n}</span>
                    <span className={`text-[11px] tracking-wider ${p.star ? 'text-amber-3' : 'text-ink/40'}`}>{p.r}</span>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="border-l-2 border-amber-2/30 pl-6 my-10 italic text-ink/50 text-base md:text-lg">
              {ct(
                "« Un concert d'intensité, de présence et de classe internationale »",
                "« A concert of intensity, presence, and international class »",
                "« En koncert med intensitet, nærvær og international klasse »"
              )}
            </blockquote>

            <a href="https://jazz.dk/en/copenhagen-jazz-festival-2026/concerts/5356/" target="_blank" rel="noopener" className="inline-flex items-center gap-4 bg-amber-2 border border-amber-2 px-6 py-4 hover:bg-amber-accent transition-all group text-white">
              <span className="w-9 h-9 flex items-center justify-center border border-white/30 rounded-full text-white text-xl">♪</span>
              <div className="flex flex-col">
                <span className="text-[9px] tracking-[4px] uppercase text-white/70 font-normal">{ct('Événement officiel', 'Official Event', 'Officiel begivenhed')}</span>
                <span className="font-display text-base font-bold text-white tracking-tight">Copenhagen Jazz Festival 2026</span>
              </div>
              <span className="ml-8 text-white text-lg transition-transform group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
