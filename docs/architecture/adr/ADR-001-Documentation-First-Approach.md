# ADR-001: Documentation-First Approach with Comprehensive Architecture Knowledge Base

**تاریخ**: ۲۰۲۶-۰۷-۲۰  
**وضعیت**: Accepted  
**تصمیم‌گیرندگان**: یوسف رضایی (مالک پروژه) + مشاوران معماری  

## زمینه (Context)
پروژه MetalHub/SideroHub قبلاً بر پایه prototype سریع (Turborepo + Next.js + Strapi) پیش می‌رفت. با رشد پیچیدگی (multi-language SEO، AI Matching، Supplier Portal، VoIP، hybrid marketplace و زنجیره تأمین ایران-اروپا)، نیاز به مستندات عمیق‌تر و ساختارمند احساس شد تا:
- از تکرار تصمیمات اشتباه جلوگیری شود.
- onboarding تیم توسعه جدید سریع‌تر شود.
- ارزش IP پروژه برای سرمایه‌گذاران افزایش یابد.
- پیاده‌سازی آینده (Phase 9+) دقیقاً با vision همخوان باشد.

## تصمیم (Decision)
- **رویکرد Documentation-First** اتخاذ شد.
- تمام دانش معماری در فولدر `docs/architecture/` با ساختار C4 Model سازماندهی گردید (۱۳ فولدر از 00-foundation تا ADR).
- منطق اصلی بیزینس و دامنه به صورت ۱۲ جلد کتاب روایی در `docs/md/books/` مستند شد.
- README.md اصلی به‌روزرسانی شد و legacy stack را به‌عنوان "Deprecated" علامت زد.

## گزینه‌های بررسی‌شده (Alternatives Considered)
1. **ادامه سبک قبلی (Code-First)**: سریع اما پرریسک در مقیاس بزرگ.
2. **استفاده از ابزارهای خارجی (Confluence/Notion)**: وابستگی خارجی و هزینه.
3. **مستندات داخل کد (Comments + Wiki)**: ناکافی برای سطح enterprise.

**تصمیم انتخابی**: گزینه Documentation-First داخل مخزن Git (Markdown + C4).

## عواقب (Consequences)
### مثبت
- شفافیت بالا برای تیم توسعه، سرمایه‌گذاران و مشاوران.
- کاهش Technical Debt در بلندمدت.
- قابلیت traceability تصمیمات از طریق ADR.
- افزایش ارزش پروژه برای خروج (Exit) یا جذب سرمایه.

### منفی / ریسک‌ها
- زمان اولیه برای تکمیل docs (جبران‌شده با سرعت بالاتر پیاده‌سازی).
- نیاز به نگهداری مداوم مستندات (راهحل: ADR + Pull Request review).

## لینک‌های مرتبط
- [00-foundation](../00-foundation/)
- [03-system](../03-system/) (C4 Models)
- [12 Volumes](../../md/books/) (۱۲ جلد روایی)
- [ADR-002: Knowledge First](ADR-002-Knowledge-First.md)
- [ADR-003: Silent Advisor](ADR-003-Silent-Advisor.md)

**تصویب‌شده توسط**: [نام‌ها]
