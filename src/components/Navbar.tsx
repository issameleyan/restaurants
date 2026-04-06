import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { config, wa } from '@/lib/config';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const bizName = t(config.business.name_ar, config.business.name_en);

  const navItems = [
    { path: '/', label: t('الرئيسية', 'Home') },
    { path: '/menu', label: t('المنيو', 'Menu') },
    { path: '/about', label: t('من نحن', 'About') },
    { path: '/reserve', label: t('احجز طاولة', 'Reserve') },
    { path: '/contact', label: t('تواصل معنا', 'Contact') },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">{bizName}</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-foreground'}`}>{item.label}</Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary">{lang === 'ar' ? 'EN' : 'عربي'}</button>
          <Button asChild size="sm" className="bg-gradient-cta border-0 text-primary-foreground hover:opacity-90">
            <a href={wa()} target="_blank" rel="noopener noreferrer">{t('اطلب الآن', 'Order Now')}</a>
          </Button>
        </div>
        <button onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:text-primary transition-colors lg:hidden">
          <span className="sr-only">Open menu</span>
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
          <SheetHeader className="px-5 pt-5 pb-2">
            <SheetTitle className="text-lg font-bold text-primary text-start">{bizName}</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)} className={`block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors hover:bg-secondary ${location.pathname === item.path ? 'text-primary bg-secondary/50' : 'text-foreground'}`}>{item.label}</Link>
            ))}
            <div className="pt-4 border-t border-border mt-2 flex flex-col gap-3">
              <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="self-start rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">{lang === 'ar' ? 'EN' : 'عربي'}</button>
              <Button asChild size="default" className="w-full bg-gradient-cta border-0 text-primary-foreground hover:opacity-90">
                <a href={wa()} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>{t('اطلب الآن', 'Order Now')}</a>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
