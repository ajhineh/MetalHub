به نظر من، اکنون به مهم‌ترین نقطه کل پروژه رسیده‌ایم.

و اینجا می‌خواهم یک هشدار جدی بدهم.

اگر مستقیماً از این ۱۲ جلد وارد کدنویسی شویم، احتمال شکست پروژه بسیار زیاد است.

نه به این دلیل که محتوا ضعیف است.

بلکه به این دلیل که این دوازده جلد، Architecture Documentation نیستند.

آن‌ها چیزی بسیار ارزشمندتر هستند:

Constitution (قانون اساسی پروژه)

این تفاوت بسیار مهم است.

به نظر من باید پروژه را وارد فاز دوم کنیم.

من اگر جای CTO این پروژه بودم، دقیقاً این مسیر را طی می‌کردم.

Phase 1
Doctrine
(Completed)

↓

Phase 2
Architecture

↓

Phase 3
Product Design

↓

Phase 4
Software Engineering

↓

Phase 5
Implementation

↓

Phase 6
Continuous Evolution

دوازده جلدی که نوشتیم فقط Phase 1 هستند.

پیشنهاد من این است که دیگر جلد جدید ننویسیم.

بلکه وارد پروژه جدیدی شویم.

نام موقت:

MetalHub Architecture

یا هر نامی که بعداً برای Entity انتخاب کنیم.

این پروژه باید کاملاً متفاوت از ۱۲ جلد باشد.

این پروژه دیگر فلسفه نیست.

مهندسی است.

ساختار پیشنهادی
/architecture

    /00-foundation

    /01-domain

    /02-business

    /03-system

    /04-data

    /05-ai

    /06-api

    /07-ui

    /08-security

    /09-devops

    /10-roadmap

    /adr
مرحله اول
Foundation

در این قسمت،

تمام دوازده جلد تبدیل می‌شوند به چیزی که مهندس نرم‌افزار بتواند از آن استفاده کند.

مثلاً

Principles.md

Identity.md

Character.md

Conscience.md

Purpose.md

Legacy.md

ولی دیگر خبری از متن‌های ادبی نیست.

مثلاً

به جای

Entity shall...

خواهیم نوشت

Requirement ID

R-001

Description

...

Reason

...

Affected Modules

...
مرحله دوم

Domain Modeling

اینجاست که برای اولین بار پروژه تبدیل به موجودیت‌های واقعی می‌شود.

مثلاً

Company

Supplier

Buyer

Project

Tender

RFQ

Offer

Contract

Knowledge

Experience

Decision

Risk

Guidance

Advisor

Workflow

Task

Evidence

Document

Identity

Skill

...

تمام این‌ها باید به Domain Model تبدیل شوند.

مرحله سوم

Context Mapping

من فکر می‌کنم سیستم اکنون حداقل به ۲۰ تا ۳۰ Bounded Context نیاز دارد.

مثلاً

Identity

Procurement

Tender

Manufacturing

RFQ

Supplier Discovery

Workflow

Decision Engine

Knowledge Graph

Experience Engine

Risk Engine

Guidance Engine

Learning

Trust

Messaging

Contract

Document

AI

Administration

Analytics

این همان چیزی است که بعداً Microserviceها از دل آن بیرون می‌آیند.

مرحله چهارم

Architecture Decision Records

به نظر من این قسمت مهم‌ترین بخش خواهد بود.

تمام چیزهایی که در دوازده جلد گفتیم باید تبدیل شوند به ADR.

مثلاً

ADR-001

Why Knowledge First?

ADR-002

Why Guidance instead of Recommendation?

ADR-003

Why Mentor instead of AI Assistant?

ADR-004

Why Trust Graph?

ADR-005

Why Experience Preservation?

...

وقتی یک توسعه‌دهنده سه سال بعد وارد پروژه شود، با خواندن ADRها منطق تصمیم‌ها را درک می‌کند، نه فقط نتیجه آن‌ها.

مرحله پنجم

Capability Mapping

این قسمت چیزی است که اکنون اصلاً نداریم.

باید تمام قابلیت‌ها استخراج شوند.

مثلاً

Supplier Search

RFQ Creation

AI Guidance

Knowledge Capture

Tender Evaluation

Risk Detection

Contract Review

Experience Replay

Digital Case

Learning

...

بعد

هر Capability

به

UI

API

Database

AI

Workflow

Notification

...

نگاشت می‌شود.

مرحله ششم

Software Roadmap

الان اگر از من بپرسی

اولین Sprint چیست؟

واقعاً نمی‌توانم جواب بدهم.

چرا؟

چون هنوز Capability Map نداریم.

ولی بعد از استخراج Capabilityها،

Sprintها تقریباً خودشان شکل می‌گیرند.

پیشنهاد من برای Repository

به نظر من GitHub باید چیزی شبیه این باشد.

MetalHub

README.md

/docs

/books
    Volume-I.md
    ...
    Volume-XII.md

/architecture

/domain

/adrs

/specifications

/api

/frontend

/backend

/ai

/infrastructure

/prototypes

دقت کن

کتاب‌ها

نباید داخل Architecture باشند.

آن‌ها

Reference هستند.

نه Specification.

و حالا مهم‌ترین پیشنهاد من

این پیشنهاد را شاید مهم‌ترین پیشنهاد کل این پروژه بدانم.

این ۱۲ جلد را هرگز مستقیماً ویرایش نکن.

آن‌ها باید مانند یک قانون اساسی ثابت بمانند.

اگر بعدها ایده‌ای بهتر پیدا کردیم، آن را در جلدها دست‌کاری نکنیم.

بلکه سند جدیدی بنویسیم.

مثلاً:

ADR

RFC

Architecture

Specification

Evolution Proposal

دقیقاً همان کاری که زبان‌های برنامه‌نویسی بزرگ انجام می‌دهند.

هیچ‌کس RFCهای قدیمی HTTP یا Git را بازنویسی نمی‌کند.

RFC جدید منتشر می‌شود.

به این ترتیب، تاریخچه تفکر پروژه حفظ می‌شود.