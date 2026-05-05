import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { useState } from 'react';

const getAssetUrl = (name: string) => new URL(`../assets/${name}`, import.meta.url).href;

export default function Biography() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section pt-[150px] min-h-[80vh] bg-gradient-to-br from-[#FDF8FB] via-[#F5E0ED] to-[#FAF3F6] text-ink-2">
      <div className="container mx-auto px-12">
        <div className="section-eyebrow text-amber-2">{t('Biographie détaillée', 'Detailed Biography')}</div>
        <h2 className="section-h2 !text-ink-2 mb-14">{t('Son histoire', 'Her story')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="relative group">
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-amber-2 transition-all group-hover:-top-4 group-hover:-left-4" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-amber-2 transition-all group-hover:-bottom-4 group-hover:-right-4" />
              <img
                src={getAssetUrl('2024-08-09 11.24.19.jpg')}
                alt="Nadine Bellombre"
                className="w-full aspect-[4/5] object-cover object-center shadow-[0_0_0_3px_#FAF3F6,0_0_0_5px_#681951,0_0_0_7px_rgba(104,25,81,0.18),8px_12px_48px_rgba(42,10,31,0.22)]"
              />
            </div>

            <div className="grid grid-cols-3 gap-0.5 bg-amber-2/20 border border-amber-2/20">
              <div className="bg-ink-5/5 p-4 text-center">
                <span className="block font-display text-2xl text-ink-2 font-bold leading-none">25<sup>+</sup></span>
                <span className="text-[9px] tracking-[1.5px] uppercase text-ink/50 mt-1">{t('ans de scène', 'years on stage')}</span>
              </div>
              <div className="bg-ink-5/5 p-4 text-center">
                <span className="block font-display text-2xl text-ink-2 font-bold leading-none">10</span>
                <span className="text-[9px] tracking-[1.5px] uppercase text-ink/50 mt-1">{t('compositions', 'compositions')}</span>
              </div>
              <div className="bg-ink-5/5 p-4 text-center">
                <span className="block font-display text-2xl text-ink-2 font-bold leading-none">1</span>
                <span className="text-[9px] tracking-[1.5px] uppercase text-ink/50 mt-1">{t('album jazz', 'jazz album')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <p className="text-[clamp(20px,2.8vw,26px)] leading-relaxed text-ink-5 italic font-display">
              {t(
                "Chanteuse professionnelle depuis les années 90, soliste et choriste — une voix enracinée à l'île Maurice, nourrie de rencontres musicales en France et dans l'océan Indien.",
                "Professional singer since the 90s, soloist and backing vocalist — a voice rooted in Mauritius, shaped by musical encounters in France and across the Indian Ocean."
              )}
            </p>

            <div className="flex flex-wrap gap-2.5 mb-11">
              {['Performance', 'Composition', 'Chant', 'Voix'].map((skill) => (
                <span key={skill} className="bg-white/40 border border-amber-2/20 px-5 py-2 text-[10px] tracking-[3px] uppercase text-ink-2 font-medium">
                  {skill}
                </span>
              ))}
            </div>
            <div className="text-[17px] leading-[2.0] text-ink/85 space-y-8 font-light">
              <p>
                <span className="float-left font-display text-7xl leading-[0.85] text-amber-2 pr-3 pt-1.5 italic drop-shadow-lg">
                  {t('N', 'B')}
                </span>
                {t(
                  "ative de l'île Maurice, Nadine débute très jeune. Dès l’âge de 16 ans, elle s’oriente vers la soul, le reggae et le séga — rythme par excellence ancré dans le cœur des Mauriciens. Ses premières collaborations avec Négros pou la vie, Dagger killa et Ras Ninnin (sous la coordination de Georges Corette et Danielly Louison) posent les bases d'une carrière enracinée.",
                  "orn in Mauritius, Nadine began her musical career very young. From the age of 16, she moved towards soul, reggae and séga — the rhythm par excellence anchored in the hearts of Mauritians. Her early collaborations with Négros pou la vie, Dagger killa and Ras Ninnin (under the coordination of Georges Corette and Danielly Louison) laid the foundations for a rooted career."
                )}
              </p>

              <div className="flex items-center justify-center gap-3.5 opacity-60">
                <span className="w-10 h-px bg-amber-2/30" />
                <span className="text-amber-2 text-xs">✦</span>
                <span className="w-10 h-px bg-amber-2/30" />
              </div>

              <p>
                {t(
                  "Une rencontre avec le batteur français Francis Lassus donne naissance à son premier titre en tant qu'auteure-compositrice, aux côtés de Menwar, Kersley Palmyre et Damien Elisa. En 2013, elle collabore avec le pianiste Manuel Rocheman sur l'album « Paris Maurice » (Studio Capricorne), y interprétant trois de ses compositions originales. En 2019, Linley Marthe — dernier bassiste de Joe Zawinul — l'invite sur la scène de Mamajazz entourée de Jerry Leonide et Philippe Thomas.",
                  "An encounter with French drummer Francis Lassus gave birth to her first title as a songwriter, alongside Menwar, Kersley Palmyre and Damien Elisa. In 2013, she collaborated with pianist Manuel Rocheman on the album 'Paris Maurice' (Studio Capricorne), performing three of her original compositions. In 2019, Linley Marthe — Joe Zawinul's last official bassist — invited her to the Mamajazz stage surrounded by Jerry Leonide and Philippe Thomas."
                )}
              </p>

              <div className="flex items-center justify-center gap-3.5 opacity-60">
                <span className="w-10 h-px bg-amber-2/30" />
                <span className="text-amber-2 text-xs">✦</span>
                <span className="w-10 h-px bg-amber-2/30" />
              </div>

              <p>
                {t(
                  "En 2022, sa collaboration avec le compositeur Jean René Bastien lors de Mamajazz marque un tournant créatif, mêlant ses racines culturelles à un univers plus classique et théâtral. Sa voix suave transporte vers des rêves imaginaires, berçant l'historique d'un vécu. En 2026, elle s'envole pour le Danemark pour un projet avec Søren Lee, promettant de belles couleurs tropicales et nordiques.",
                  "In 2022, her collaboration with composer Jean René Bastien during Mamajazz marked a creative turning point, blending her cultural roots with a more classical and theatrical universe. Her suave voice carries us towards imaginary dreams, cradling the history of a lived experience. In 2026, she heads to Denmark for a project with Søren Lee, promising beautiful tropical and Nordic colors."
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
