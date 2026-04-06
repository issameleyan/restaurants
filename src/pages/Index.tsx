import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Star, Leaf, Flame, Clock, Truck, ShieldCheck, Users, UtensilsCrossed, Quote } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { config, wa, tel } from '@/lib/config';
import heroImg from '@/assets/hero-restaurant.jpg';
import dishKabsa from '@/assets/dish-kabsa.jpg';
import dishMashawi from '@/assets/dish-mashawi.jpg';
import dishMansaf from '@/assets/dish-mansaf.jpg';
import dishKunafa from '@/assets/dish-kunafa.jpg';
import interior1 from '@/assets/interior-1.jpg';
import interior2 from '@/assets/interior-2.jpg';
import interior3 from '@/assets/interior-3.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const dishImages: Record<string, string> = { 'dish-kabsa': dishKabsa, 'dish-mashawi': dishMashawi, 'dish-mansaf': dishMansaf, 'dish-kunafa': dishKunafa };
const iconMap: Record<string, React.ReactNode> = { Leaf: <Leaf className="h-6 w-6" />, Flame: <Flame className="h-6 w-6" />, ShieldCheck: <ShieldCheck className="h-6 w-6" />, Truck: <Truck className="h-6 w-6" />, Users: <Users className="h-6 w-6" />, UtensilsCrossed: <UtensilsCrossed className="h-6 w-6" /> };

const Index = () => {
  const { t } = useLanguage();
  const biz = config.business;
  const bizName = t(biz.name_ar, biz.name_en);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt={bizName} className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-primary-foreground pt-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="text-sm font-medium">{t(config.hero.badge_ar, config.hero.badge_en)}</span>
            </div>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {t(config.hero.headline_ar, config.hero.headline_en)}
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-lg md:text-xl max-w-2xl mx-auto mb-4 text-primary-foreground/90">
            {t(config.hero.subheadline_ar, config.hero.subheadline_en)}
          </motion.p>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2.5} className="text-sm md:text-base max-w-xl mx-auto mb-8 text-primary-foreground/70">
            {t(config.hero.subtitle_ar, config.hero.subtitle_en)}
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 text-base px-8">
              <Link to="/menu">{t('شوف المنيو', 'View Menu')}</Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-base px-8 transition-colors">
              <a href={wa('أبغى أطلب')} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-5 w-5 me-2" />{t('اطلب عبر واتساب', 'Order via WhatsApp')}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('أطباقنا المميزة', 'Our Signature Dishes')}</h2>
            <p className="text-muted-foreground text-lg">{t('اللي يجربها يرجع — مضمونة', 'Try them once and you\'ll be back — guaranteed')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.dishes.map((dish, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ y: -6 }} className="bg-card rounded-2xl overflow-hidden shadow-card group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={dishImages[dish.image] || dishKabsa} alt={t(dish.name_ar, dish.name_en)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={300} />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-foreground">{t(dish.name_ar, dish.name_en)}</h3>
                    <span className="text-primary font-bold">{t(dish.price_ar, dish.price_en)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{t(dish.desc_ar, dish.desc_en)}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-gradient-cta border-0 text-primary-foreground hover:opacity-90 px-8">
              <Link to="/menu">{t('شوف المنيو كامل', 'See Full Menu')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('ليش تختارنا؟', 'Why Choose Us?')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.why_us.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ y: -4 }} className="p-6 bg-background rounded-2xl shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{iconMap[item.icon] || <Star className="h-6 w-6" />}</div>
                  <h3 className="font-bold text-foreground">{t(item.title_ar, item.title_en)}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(item.desc_ar, item.desc_en)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">{t('أجواء المطعم', 'Restaurant Atmosphere')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[interior1, interior2, interior3].map((img, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={img} alt={`${t('أجواء', 'Atmosphere')} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('آراء عملائنا', 'Customer Reviews')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.testimonials.slice(0, 3).map((review, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 bg-background rounded-2xl shadow-card relative">
                <Quote className="absolute top-4 end-4 h-8 w-8 text-primary/10" />
                <div className="flex gap-1 mb-3">{Array.from({ length: review.rating }).map((_, s) => <Star key={s} className="h-4 w-4 text-accent fill-accent" />)}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t(review.text_ar, review.text_en)}</p>
                <p className="font-bold text-foreground">{t(review.name_ar, review.name_en)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t('اطلب وإحنا نوصلك', 'Order and We Deliver')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <motion.a href={wa('أبغى أطلب')} target="_blank" rel="noopener noreferrer" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-card border border-border/50 hover:border-accent/50 transition-all cursor-pointer">
              <FaWhatsapp className="h-12 w-12 text-[#25D366] mb-4" />
              <span className="font-bold text-foreground text-lg">{t('واتساب', 'WhatsApp')}</span>
              <span className="text-sm text-muted-foreground mt-1">{t('رد فوري', 'Instant reply')}</span>
            </motion.a>
            <motion.a href={tel()} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-card border border-border/50 hover:border-accent/50 transition-all cursor-pointer">
              <Clock className="h-12 w-12 text-accent mb-4" />
              <span className="font-bold text-foreground text-lg">{t('اتصل مباشرة', 'Call Directly')}</span>
              <span className="text-sm text-muted-foreground mt-1" dir="ltr">{biz.phone_display}</span>
            </motion.a>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="flex flex-col items-center p-8 bg-background rounded-2xl shadow-card border border-border/50 hover:border-accent/50 transition-all cursor-pointer">
              <Truck className="h-12 w-12 text-accent mb-4" />
              <span className="font-bold text-foreground text-lg">{t('تطبيقات التوصيل', 'Delivery Apps')}</span>
              <span className="text-sm text-muted-foreground mt-1">{t(config.delivery.apps_ar, config.delivery.apps_en)}</span>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">{t('مناطق التوصيل:', 'Delivery areas:')} {t(config.delivery.areas_ar, config.delivery.areas_en)}</p>
          </div>
        </div>
      </section>

      {/* STRONG CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cta" />
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-bold mb-4">
            {t(config.cta.hungry_ar, config.cta.hungry_en)}
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {t(config.cta.subtitle_ar, config.cta.subtitle_en)}
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 text-base px-8">
              <a href={wa('أبغى أطلب')} target="_blank" rel="noopener noreferrer"><FaWhatsapp className="h-5 w-5 me-2" />{t('اطلب عبر واتساب', 'Order via WhatsApp')}</a>
            </Button>
            <Button asChild size="lg" className="border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-base px-8 transition-colors">
              <Link to="/reserve">{t('احجز طاولة', 'Reserve a Table')}</Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-base px-8 transition-colors">
              <a href={tel()}>{t('اتصل فينا', 'Call Us')}</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* MAP + CONTACT */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('موقعنا', 'Our Location')}</h2>
            <p className="text-muted-foreground text-lg">{t('تعال زورنا — ننتظرك', 'Come visit us — we\'re waiting')}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-card h-[400px]">
              <iframe src={biz.google_maps_embed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location" />
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-2xl shadow-card">
                <h3 className="font-bold text-foreground text-lg mb-4">{t('معلومات التواصل', 'Contact Info')}</h3>
                <div className="space-y-3 text-sm">
                  <p className="flex items-center gap-3"><span className="text-primary">📍</span> {t(biz.address_ar, biz.address_en)}</p>
                  <p className="flex items-center gap-3"><span className="text-primary">📞</span> <a href={tel()} dir="ltr" className="hover:text-primary transition-colors">{biz.phone_display}</a></p>
                  <p className="flex items-center gap-3"><span className="text-primary">💬</span> <a href={wa()} className="hover:text-primary transition-colors">{t('واتساب', 'WhatsApp')}</a></p>
                </div>
              </div>
              <div className="p-6 bg-card rounded-2xl shadow-card">
                <h3 className="font-bold text-foreground text-lg mb-4">{t('ساعات العمل', 'Working Hours')}</h3>
                <div className="space-y-2 text-sm">
                  {config.working_hours.map((wh, i) => (
                    <div key={i} className="flex justify-between"><span>{t(wh.day_ar, wh.day_en)}</span><span dir="ltr">{wh.hours}</span></div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-secondary rounded-xl text-sm text-center text-muted-foreground">
                🅿️ {t(biz.parking_ar, biz.parking_en)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
