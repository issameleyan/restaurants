import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { wa } from '@/lib/config';

import imgHummus from '@/assets/menu/hummus.jpg';
import imgKibbeh from '@/assets/menu/kibbeh.jpg';
import imgFattoush from '@/assets/menu/fattoush.jpg';
import imgKabsa from '@/assets/menu/kabsa.jpg';
import imgMandi from '@/assets/menu/mandi.jpg';
import imgMixedGrill from '@/assets/menu/mixed-grill.jpg';
import imgKunafa from '@/assets/menu/kunafa.jpg';
import imgKarak from '@/assets/menu/karak.jpg';
import imgLemonMint from '@/assets/menu/lemon-mint.jpg';
import imgFamilyDeal from '@/assets/menu/family-deal.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  popular?: boolean;
  img?: string;
}

const MenuPage = () => {
  const { t } = useLanguage();

  const categories: Record<string, MenuItem[]> = {
    [t('المقبلات', 'Appetizers')]: [
      { name: t('حمص بالطحينة', 'Hummus'), desc: t('حمص كريمي مع طحينة وزيت زيتون بكر وبابريكا', 'Creamy hummus with tahini, olive oil, and paprika'), price: t('١٥ د.إ', '15 AED'), popular: true, img: imgHummus },
      { name: t('متبل باذنجان', 'Mutabbal'), desc: t('باذنجان مشوي على الفحم مع طحينة وثوم ورمان', 'Charcoal-roasted eggplant with tahini, garlic, and pomegranate'), price: t('١٨ د.إ', '18 AED'), img: imgHummus },
      { name: t('ورق عنب', 'Grape Leaves'), desc: t('ورق عنب محشي أرز ولحمة مفرومة — طري ومتبل', 'Stuffed grape leaves with rice and minced meat — tender and seasoned'), price: t('٢٠ د.إ', '20 AED'), img: imgHummus },
      { name: t('كبة مقلية', 'Fried Kibbeh'), desc: t('كبة لحم مع برغل ناعم مقلية مقرمشة من برا وطرية من جوا', 'Lamb kibbeh with fine bulgur — crispy outside, tender inside'), price: t('٢٢ د.إ', '22 AED'), popular: true, img: imgKibbeh },
      { name: t('فول مدمس', 'Ful Medames'), desc: t('فول مدمس بالليمون والثوم وزيت الزيتون — وجبة تشبع', 'Fava beans with lemon, garlic, and olive oil — a hearty dish'), price: t('١٢ د.إ', '12 AED'), img: imgHummus },
    ],
    [t('السلطات', 'Salads')]: [
      { name: t('فتوش بالرمان', 'Fattoush'), desc: t('سلطة مقرمشة بدبس الرمان وخبز محمص وخضار طازجة', 'Crispy salad with pomegranate molasses and toasted bread'), price: t('١٨ د.إ', '18 AED'), popular: true, img: imgFattoush },
      { name: t('تبولة', 'Tabbouleh'), desc: t('بقدونس طازج مع برغل ناعم وطماطم وليمون ونعناع', 'Fresh parsley with fine bulgur, tomato, lemon, and mint'), price: t('١٥ د.إ', '15 AED'), img: imgFattoush },
      { name: t('سلطة عربية', 'Arabic Salad'), desc: t('خيار وطماطم وبصل وفلفل بزيت الزيتون والليمون', 'Cucumber, tomato, onion and pepper with olive oil and lemon'), price: t('١٢ د.إ', '12 AED'), img: imgFattoush },
    ],
    [t('الأطباق الرئيسية', 'Main Courses')]: [
      { name: t('كبسة لحم', 'Lamb Kabsa'), desc: t('أرز بسمتي مع لحم غنم مطبوخ على نار هادية ساعات — الطبق الأكثر طلباً', 'Basmati rice with lamb slow-cooked for hours — our most ordered dish'), price: t('٨٥ د.إ', '85 AED'), popular: true, img: imgKabsa },
      { name: t('مندي دجاج', 'Chicken Mandi'), desc: t('دجاج كامل مدخن على الحطب مع أرز مندي بالبهارات', 'Whole wood-smoked chicken with spiced mandi rice'), price: t('٦٥ د.إ', '65 AED'), popular: true, img: imgMandi },
      { name: t('منسف أردني', 'Jordanian Mansaf'), desc: t('لحم غنم بلبن الجميد على أرز بالسمنة والمكسرات', 'Lamb in jameed yogurt on ghee rice with nuts'), price: t('٩٥ د.إ', '95 AED'), img: imgKabsa },
      { name: t('مقلوبة دجاج', 'Chicken Maqluba'), desc: t('أرز مقلوب مع دجاج وباذنجان مقلي وبهارات مشكلة', 'Upside-down rice with chicken, fried eggplant, and spices'), price: t('٧٠ د.إ', '70 AED'), img: imgMandi },
      { name: t('صيادية سمك', 'Fish Sayadieh'), desc: t('سمك هامور طازج مع أرز بالبصل المكرمل والبهارات', 'Fresh hammour fish with caramelized onion rice'), price: t('٩٠ د.إ', '90 AED'), img: imgKabsa },
    ],
    [t('المشاوي', 'Grills')]: [
      { name: t('مشاوي مشكلة', 'Mixed Grill'), desc: t('شيش طاووق ولحم وكفتة على الفحم مع خضار مشوية وخبز', 'Chicken, lamb & kofta on charcoal with grilled veggies and bread'), price: t('٧٥ د.إ', '75 AED'), popular: true, img: imgMixedGrill },
      { name: t('شيش طاووق', 'Shish Tawook'), desc: t('صدور دجاج متبلة مشوية على الفحم — طرية ومشبعة', 'Marinated chicken breast grilled on charcoal — tender and satisfying'), price: t('٥٥ د.إ', '55 AED'), img: imgMixedGrill },
      { name: t('كباب لحم', 'Lamb Kebab'), desc: t('لحم مفروم متبل مشوي على أسياخ — نكهة الفحم الحقيقي', 'Seasoned minced lamb grilled on skewers — real charcoal flavor'), price: t('٦٠ د.إ', '60 AED'), img: imgMixedGrill },
      { name: t('ريش غنم', 'Lamb Chops'), desc: t('ريش غنم طرية متبلة مشوية على الفحم — للعزايم المميزة', 'Tender seasoned lamb chops grilled on charcoal — for special occasions'), price: t('١١٠ د.إ', '110 AED'), img: imgMixedGrill },
    ],
    [t('الأرز والمناسف', 'Rice & Platters')]: [
      { name: t('أرز بالدجاج (عائلي)', 'Chicken Rice (Family)'), desc: t('أرز بسمتي مع دجاج كامل ومكسرات — يكفي ٤-٥ أشخاص', 'Basmati rice with whole chicken and nuts — serves 4-5'), price: t('١٢٠ د.إ', '120 AED'), img: imgMandi },
      { name: t('كبسة لحم عائلي', 'Family Lamb Kabsa'), desc: t('كبسة لحم كبيرة مع سلطات ومقبلات — يكفي ٥-٦ أشخاص', 'Large lamb kabsa with salads and appetizers — serves 5-6'), price: t('١٨٠ د.إ', '180 AED'), popular: true, img: imgKabsa },
    ],
    [t('المشروبات الباردة', 'Cold Drinks')]: [
      { name: t('ليمون بالنعناع', 'Lemon Mint'), desc: t('ليمون طازج مع نعناع وثلج — منعش', 'Fresh lemon with mint and ice'), price: t('١٢ د.إ', '12 AED'), img: imgLemonMint },
      { name: t('عصير برتقال طازج', 'Fresh Orange'), desc: t('برتقال معصور طازج — بدون سكر مضاف', 'Freshly squeezed orange — no added sugar'), price: t('١٥ د.إ', '15 AED'), img: imgLemonMint },
      { name: t('جلاب', 'Jallab'), desc: t('عصير جلاب بالزبيب والصنوبر — مشروب تقليدي', 'Jallab with raisins and pine nuts — traditional drink'), price: t('١٤ د.إ', '14 AED'), img: imgLemonMint },
    ],
    [t('المشروبات الساخنة', 'Hot Drinks')]: [
      { name: t('شاي كرك', 'Karak Tea'), desc: t('شاي بالهيل والزعفران على الطريقة الإماراتية', 'Cardamom and saffron tea, Emirati style'), price: t('٨ د.إ', '8 AED'), popular: true, img: imgKarak },
      { name: t('قهوة عربية', 'Arabic Coffee'), desc: t('قهوة بالهيل مع تمر — ضيافة أصلية', 'Cardamom coffee with dates — authentic hospitality'), price: t('١٠ د.إ', '10 AED'), img: imgKarak },
      { name: t('شاي مغربي', 'Moroccan Tea'), desc: t('شاي أخضر مع نعناع طازج — منعش ودافي', 'Green tea with fresh mint — refreshing and warm'), price: t('١٠ د.إ', '10 AED'), img: imgKarak },
    ],
    [t('الحلويات', 'Desserts')]: [
      { name: t('كنافة نابلسية', 'Nabulsi Kunafa'), desc: t('كنافة مقرمشة بالجبن الحلو والقطر والفستق', 'Crispy kunafa with sweet cheese, syrup, and pistachios'), price: t('٣٥ د.إ', '35 AED'), popular: true, img: imgKunafa },
      { name: t('لقيمات بالدبس', 'Luqaimat'), desc: t('كرات عجين مقلية مقرمشة بدبس التمر والسمسم', 'Crispy fried dough balls with date syrup and sesame'), price: t('٢٠ د.إ', '20 AED'), img: imgKunafa },
      { name: t('بسبوسة بالقشطة', 'Basbousa'), desc: t('بسبوسة طرية بالقشطة والقطر — حلاوة عربية أصلية', 'Soft basbousa with cream and syrup — authentic Arab sweet'), price: t('٢٥ د.إ', '25 AED'), img: imgKunafa },
      { name: t('أم علي', 'Um Ali'), desc: t('حلوى دافية بالعجين والحليب والمكسرات — تدفيك بالشتا', 'Warm pastry with milk and nuts — perfect for cold nights'), price: t('٢٨ د.إ', '28 AED'), img: imgKunafa },
    ],
    [t('عروض العائلة', 'Family Deals')]: [
      { name: t('عرض العائلة الصغيرة', 'Small Family Deal'), desc: t('كبسة دجاج + سلطتين + مقبلتين + مشروبات — يكفي ٣-٤ أشخاص', 'Chicken kabsa + 2 salads + 2 appetizers + drinks — serves 3-4'), price: t('١٤٩ د.إ', '149 AED'), popular: true, img: imgFamilyDeal },
      { name: t('عرض العائلة الكبيرة', 'Large Family Deal'), desc: t('كبسة لحم + مشاوي مشكلة + سلطات + مقبلات + حلويات + مشروبات — يكفي ٦-٨', 'Lamb kabsa + mixed grill + salads + appetizers + desserts + drinks — serves 6-8'), price: t('٢٩٩ د.إ', '299 AED'), img: imgFamilyDeal },
    ],
  };

  const categoryNames = Object.keys(categories);
  const [activeCategory, setActiveCategory] = useState(categoryNames[0]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-cta py-20 text-primary-foreground text-center">
        <div className="container mx-auto px-4 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('المنيو', 'Menu')}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">{t('اكتشف كل أطباقنا — مكونات طازجة يومياً وطبخ على الأصول', 'Discover all our dishes — daily fresh ingredients and traditional cooking')}</p>
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-[57px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu items */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">{activeCategory}</h2>
          <div className="space-y-4">
            {categories[activeCategory]?.map((item, i) => (
              <motion.div key={i} initial="hidden" animate="visible" variants={fadeUp} custom={i}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all group cursor-default"
              >
                {/* Thumbnail */}
                <div className="shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground truncate">{item.name}</h3>
                    {item.popular && (
                      <span className="bg-accent/20 text-accent text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                        <Star className="h-3 w-3 fill-accent" />
                        {t('الأكثر طلباً', 'Popular')}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.desc}</p>
                </div>

                {/* Price */}
                <span className="text-primary font-bold text-lg whitespace-nowrap shrink-0">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-20 lg:bottom-8 left-1/2 -translate-x-1/2 z-40">
        <Button asChild size="lg" className="bg-gradient-cta border-0 text-primary-foreground hover:opacity-90 shadow-lg px-8">
          <a href={wa('أبغى أطلب')} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="h-5 w-5 me-2" />
            {t('جاهز تطلب؟ تواصل عبر واتساب', 'Ready to order? Chat on WhatsApp')}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MenuPage;
