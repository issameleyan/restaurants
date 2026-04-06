import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { Phone, Clock, Users, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';
import { config, wa, tel } from '@/lib/config';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Reserve = () => {
  const { t } = useLanguage();
  const biz = config.business;
  const bizName = t(biz.name_ar, biz.name_en);

  return (
    <div>
      <section className="bg-gradient-cta py-20 text-primary-foreground text-center">
        <div className="container mx-auto px-4 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('احجز طاولتك', 'Reserve Your Table')}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">{t('تواصل معنا عبر واتساب أو اتصل فينا مباشرة — نرتبلك كل شي', 'Contact us via WhatsApp or call us directly — we\'ll arrange everything')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="space-y-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="text-center p-8 bg-card rounded-2xl shadow-card border border-border/50">
              <CalendarDays className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">{t('الحجز عبر واتساب', 'Reserve via WhatsApp')}</h2>
              <p className="text-muted-foreground mb-6">{t('ارسلنا عدد الأشخاص والوقت المناسب ونحن نجهزلك كل شي', 'Send us the number of guests and preferred time and we\'ll prepare everything')}</p>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8">
                <a href={wa('أبغى أحجز طاولة')} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="h-5 w-5 me-2" />{t('احجز عبر واتساب', 'Reserve via WhatsApp')}
                </a>
              </Button>
            </motion.div>

            <motion.a href={tel()} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-card border border-border/50 hover:border-primary/30 transition-all cursor-pointer">
              <div className="p-3 bg-primary/10 rounded-full"><Phone className="h-6 w-6 text-primary" /></div>
              <div><p className="font-bold text-foreground">{t('أو اتصل فينا', 'Or Call Us')}</p><p className="text-muted-foreground" dir="ltr">{biz.phone_display}</p></div>
            </motion.a>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="p-6 bg-card rounded-2xl shadow-card border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full"><Clock className="h-6 w-6 text-primary" /></div>
                <div>
                  <p className="font-bold text-foreground mb-3">{t('ساعات العمل', 'Working Hours')}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    {config.working_hours.map((wh, i) => (
                      <div key={i} className="flex justify-between gap-8"><span>{t(wh.day_ar, wh.day_en)}</span><span dir="ltr">{wh.hours}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
              className="p-6 bg-secondary rounded-2xl text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">{t('عندنا أقسام عائلية خاصة وأماكن للمناسبات — خبرنا شو تحتاج', 'We have private family sections and event spaces — tell us what you need')}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reserve;
