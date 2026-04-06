import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { FaWhatsapp, FaSnapchatGhost, FaTiktok } from 'react-icons/fa';
import { config, wa, tel } from '@/lib/config';

const Footer = () => {
  const { t } = useLanguage();
  const biz = config.business;
  const bizName = t(biz.name_ar, biz.name_en);

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">{bizName}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              {t(config.about.footer_desc_ar, config.about.footer_desc_en)}
            </p>
            <div className="flex gap-3">
              {config.social.instagram && <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/50 transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>}
              <a href={wa()} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/50 transition-colors" aria-label="WhatsApp"><FaWhatsapp className="h-5 w-5" /></a>
              {config.social.snapchat && <a href={config.social.snapchat} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/50 transition-colors" aria-label="Snapchat"><FaSnapchatGhost className="h-5 w-5" /></a>}
              {config.social.tiktok && <a href={config.social.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/50 transition-colors" aria-label="TikTok"><FaTiktok className="h-5 w-5" /></a>}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">{t('روابط سريعة', 'Quick Links')}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">{t('الرئيسية', 'Home')}</Link></li>
              <li><Link to="/menu" className="hover:text-primary-foreground transition-colors">{t('المنيو', 'Menu')}</Link></li>
              <li><Link to="/reserve" className="hover:text-primary-foreground transition-colors">{t('احجز طاولة', 'Reserve')}</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">{t('من نحن', 'About')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">{t('تواصل معنا', 'Contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">{t('تواصل معنا', 'Contact Us')}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /><a href={tel()} dir="ltr">{biz.phone_display}</a></li>
              <li className="flex items-center gap-2"><FaWhatsapp className="h-4 w-4 text-accent" /><a href={wa()} dir="ltr">{biz.phone_display}</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent mt-0.5" /><span>{t(biz.address_ar, biz.address_en)}</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">{t('ساعات العمل', 'Working Hours')}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /><span>{t(config.working_hours_short.weekday_ar, config.working_hours_short.weekday_en)}</span></li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /><span>{t(config.working_hours_short.friday_ar, config.working_hours_short.friday_en)}</span></li>
            </ul>
            <p className="mt-3 text-xs text-primary-foreground/50">🅿️ {t(biz.parking_ar, biz.parking_en)}</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} {bizName} — {t('جميع الحقوق محفوظة', 'All Rights Reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
