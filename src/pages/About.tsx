import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { config } from '@/lib/config';
import interior1 from '@/assets/interior-1.jpg';
import interior2 from '@/assets/interior-2.jpg';
import interior3 from '@/assets/interior-3.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => {
  const { t } = useLanguage();
  const bizName = t(config.business.name_ar, config.business.name_en);

  return (
    <div>
      <section className="bg-gradient-cta py-20 text-primary-foreground text-center">
        <div className="container mx-auto px-4 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('من نحن', 'About Us')}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">{t(config.about.subtitle_ar, config.about.subtitle_en)}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('قصتنا', 'Our Story')}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {config.about.story.map((p, i) => (
                  <p key={i}>{t(p.ar, p.en)}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={interior1} alt={t('داخل المطعم', 'Inside the restaurant')} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t('أجواء المطعم', 'Restaurant Atmosphere')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[interior1, interior2, interior3].map((img, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={img} alt={`${t('أجواء', 'Atmosphere')} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-gradient-cta border-0 text-primary-foreground hover:opacity-90 px-8">
              <Link to="/reserve">{t('احجز طاولتك الآن', 'Reserve Your Table Now')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
