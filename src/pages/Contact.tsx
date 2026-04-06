import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaSnapchatGhost, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { config, wa, tel } from '@/lib/config';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contact = () => {
  const { t } = useLanguage();
  const biz = config.business;

  return (
    <div>
      <section className="bg-gradient-cta py-20 text-primary-foreground text-center">
        <div className="container mx-auto px-4 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('تواصل معنا', 'Contact Us')}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">{t('نحب نسمع منك — اتصل أو راسلنا أو زورنا مباشرة', 'We\'d love to hear from you — call, message, or visit us directly')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <motion.a href={tel()} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-card border border-border/50 hover:border-primary/30 transition-all group cursor-pointer">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors"><Phone className="h-6 w-6 text-primary" /></div>
                <div><p className="font-bold text-foreground">{t('اتصل فينا', 'Call Us')}</p><p className="text-muted-foreground" dir="ltr">{biz.phone_display}</p></div>
              </motion.a>

              <motion.a href={wa()} target="_blank" rel="noopener noreferrer" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-card border border-border/50 hover:border-[#25D366]/30 transition-all group cursor-pointer">
                <div className="p-3 bg-[#25D366]/10 rounded-full group-hover:bg-[#25D366]/20 transition-colors"><FaWhatsapp className="h-6 w-6 text-[#25D366]" /></div>
                <div><p className="font-bold text-foreground">{t('واتساب', 'WhatsApp')}</p><p className="text-muted-foreground">{t('رد فوري — راسلنا أي وقت', 'Instant reply — message anytime')}</p></div>
              </motion.a>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="p-6 bg-card rounded-2xl shadow-card border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full"><MapPin className="h-6 w-6 text-primary" /></div>
                  <div><p className="font-bold text-foreground">{t('العنوان', 'Address')}</p><p className="text-muted-foreground">{t(biz.address_ar, biz.address_en)}</p><p className="text-xs text-muted-foreground mt-1">🅿️ {t(biz.parking_ar, biz.parking_en)}</p></div>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="p-6 bg-card rounded-2xl shadow-card border border-border/50">
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

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4} className="p-6 bg-card rounded-2xl shadow-card border border-border/50">
                <p className="font-bold text-foreground mb-3">{t('مناطق التوصيل', 'Delivery Areas')}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(config.delivery.areas_ar, config.delivery.areas_en)}</p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5} className="flex gap-3">
                {[
                  { icon: <FaInstagram className="h-5 w-5" />, href: config.social.instagram, label: 'Instagram' },
                  { icon: <FaSnapchatGhost className="h-5 w-5" />, href: config.social.snapchat, label: 'Snapchat' },
                  { icon: <FaTiktok className="h-5 w-5" />, href: config.social.tiktok, label: 'TikTok' },
                ].filter(s => s.href).map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                    className="p-3 bg-card rounded-full shadow-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all">{social.icon}</a>
                ))}
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="rounded-2xl overflow-hidden shadow-card h-[500px] lg:h-full min-h-[400px]">
              <iframe src={biz.google_maps_embed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
