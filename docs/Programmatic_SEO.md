# اصلاح مشکلات فعلی SideroHub
1. افزونه سئوی سنگین و متصل به کلود فعلی را کاملاً از پروژه حذف کنید.

2. در عوض، کامپوننت استاندارد سئو را با افزونه strapi-plugin-seo-gemini (برای تولید متادیتای هوشمند با هوش مصنوعی) و افزونه webbycrown-strapi-advanced-sitemap (برای مدیریت sitemap.xml بدون فشار به دیتابیس) جایگزین کنند.
    لینک این افزونه ها:
    https://community.strapi.io/marketplace/strapi-plugin-seo-gemini
    https://community.strapi.io/marketplace/webbycrown-strapi-advanced-sitemap

3. همچنین برای فرم‌های RFQ، افزونه‌ strapi-plugin-country-select را جهت اعتبارسنجی دقیق لیدهای اروپایی فعال نمایند.
    https://community.strapi.io/marketplace/strapi-country-select
    بررسی کن در صورتیکه که با زبان سایت که در آخرین مرحله بروزرسانی کرده ایم تداخل دارد، از روش خودت به جای این افزونه برای ثبت در فرم RFQ استفاده کن.
    هدف ما از اینکار این است که بدانیم این فرم از چه کشور و شهری ارسالی شده است.


# پرامپت پیاده‌سازی Programmatic Local SEO برای SideroHub

**هدف**: ایجاد صفحات فرود شهری داینامیک (Programmatic SEO) برای تصاحب جستجوهای محلی در تمام شهرهای صنعتی اروپا بدون داشتن دفتر فیزیکی.

**روت پیشنهادی**:
- `/[lang]/services/steel-fabrication/[city-slug]`
- مثال: `/en/services/steel-fabrication/copenhagen`, `/fr/services/steel-fabrication/paris`

### الزامات فنی دقیق (Next.js 15 App Router):

1. **GenerateStaticParams + ISR**
   - از `generateStaticParams` برای شهرهای اصلی استفاده کنید.
   - `fallback: 'blocking'` برای شهرهای جدید.
   - ISR با revalidate: 86400 (۲۴ ساعت) یا On-Demand Revalidation از Strapi.

2. **محتوای منحصربه‌فرد (برای جلوگیری از Thin Content)**
   - هر صفحه حداقل ۱۲۰۰-۱۸۰۰ کلمه محتوای واقعی و ارزشمند داشته باشد.
   - بخش‌های اجباری:
     - Hero Section با عنوان محلی (مثلاً "Fabrication de Structures Métalliques à Paris")
     - آمار محلی (تعداد پروژه‌ها، فاصله، استانداردهای محلی)
     - Case Studies مرتبط با شهر/منطقه
     - FAQ محلی
     - فرم RFQ با پیش‌فرض شهر
     - نقشه تعاملی (Google Maps Embed) با marker شهر: از API پولی گوگل مپ استفاده نکنند تا برای شما هزینه‌تراشی نشود؛ بلکه از متد رایگان و استاندارد Google Maps Embed iframe بر اساس نام شهر استفاده کنند که ۱۰۰٪ رایگان و بدون تاخیر است.

3. **Schema.org کامل و قوی**
   - `LocalBusiness` + `Service` + `OfferCatalog`
   - `areaServed`: City + Country + Radius (مثلاً ۱۵۰ کیلومتر)
   - `hasMap`, `priceRange`, `openingHours`, `aggregateRating` (اگر داده داشتید)
   - `sameAs` برای لینک‌های اجتماعی

4. **بهینه‌سازی ضد Duplicate Content**
   - Canonical Tag دقیق به صفحه اصلی شهر.
   - hreflang کامل برای تمام زبان‌ها.
   - Noindex برای صفحات خیلی کم‌محتوا (کمتر از ۸۰۰ کلمه).

5. **عملکرد و مقیاس‌پذیری**
   - استفاده از `next/image` با remotePatterns.
   - Static Generation سنگین + ISR.
   - Caching لایه Next.js + Vercel Edge Cache.

### دستورالعمل‌های اضافی:

- حداقل ۵۰ شهر مهم اولیه را پیاده‌سازی کنید (لیست شهرها را از پیام قبلی بگیرید).
- هر صفحه باید حس "محلی بودن" قوی بدهد (نه template خالی).
- محتوای AI-generated باید توسط Human-in-the-loop بررسی و غنی شود.
- تست با Google Search Console و Rich Results Test.

**هدف نهایی**: رتبه‌گیری در Local Pack + Top ۳ ارگانیک برای جستجوهای "steel fabrication [city]" و معادل‌های محلی.

لطفاً ساختار فولدر، کامپوننت‌ها، schema نمونه و generateStaticParams را پیاده‌سازی کنید.

# کد schema تایید شده:

{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fabrication de Structures Métalliques - SideroHub {{city}}",
  "description": "Premium EN 1090 certified structural steel fabrication, manufacturing, and technical engineering solutions tailored for projects in {{city}}.",
  "url": "https://siderohub.com/fr/services/steel-fabrication/{{city-slug}}",
  "provider": {
    "@type": "Organization",
    "name": "SideroHub",
    "url": "https://siderohub.com",
    "telephone": "+33..." 
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "{{latitude}}",
      "longitude": "{{longitude}}"
    },
    "geoRadius": "150000" 
  },
  "serviceType": "Fabrication de structures métalliques",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Catalogue de structures métalliques SideroHub",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Charpente métallique industrielle {{city}}"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Découpe et soudage d'acier certifié EN 1090"
        }
      }
    ]
  }
}

# لیست تمام شهرها:

آلمان (Germany)
Berlin, Munich, Hamburg, Frankfurt, Cologne, Stuttgart, Düsseldorf, Dortmund, Essen, Leipzig

فرانسه (France)
Paris, Lyon, Marseille, Toulouse, Nice, Lille, Bordeaux, Nantes, Strasbourg, Montpellier

ایتالیا (Italy)
Rome, Milan, Naples, Turin, Palermo, Genoa, Bologna, Florence, Bari, Catania

اسپانیا (Spain)
Madrid, Barcelona, Valencia, Seville, Zaragoza, Málaga, Murcia, Palma, Las Palmas, Bilbao

هلند (Netherlands)
Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, Groningen, Tilburg, Almere

بلژیک (Belgium)
Brussels, Antwerp, Ghent, Charleroi, Liège, Bruges

لهستان (Poland)
Warsaw, Kraków, Łódź, Wrocław, Poznań, Gdańsk, Szczecin, Bydgoszcz

سوئد (Sweden)
Stockholm, Gothenburg, Malmö, Uppsala, Linköping, Västerås

دانمارک (Denmark)
Copenhagen, Aarhus, Odense, Aalborg, Esbjerg

نروژ (Norway)
Oslo, Bergen, Trondheim, Stavanger, Drammen

فنلاند (Finland)
Helsinki, Espoo, Tampere, Vantaa, Oulu

اتریش (Austria)
Vienna, Graz, Linz, Salzburg, Innsbruck

سوئیس (Switzerland)
Zurich, Geneva, Basel, Bern, Lausanne

جمهوری چک (Czech Republic)
Prague, Brno, Ostrava, Plzeň

مجارستان (Hungary)
Budapest, Debrecen, Szeged, Miskolc

رومانی (Romania)
Bucharest, Cluj-Napoca, Timișoara, Iași

پرتغال (Portugal)
Lisbon, Porto, Braga, Coimbra

ایرلند (Ireland)
Dublin, Cork, Limerick, Galway

یونان (Greece)
Athens, Thessaloniki, Patras, Heraklion

بلغارستان (Bulgaria)
Sofia, Plovdiv, Varna