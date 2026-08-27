# What to do with cross-functional data

> #36 Everyone uses it, no one owns it

- **Author:** Charlotte Ledoux
- **Published:** 2025-10-02
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/what-to-do-with-cross-functional
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😀

I’ve been working on “ Golden Data ” for one of my customer, and it’s been very… interesting ! As cross-functional data, they bring a lot of questions 😈

- Checkout my [Media Kit](https://charlotteledoux.ai/sponsors) to promote your product/service to my audience
- Play the [Chief Data Officer game](https://whoisthebestcdo.com/)
- Join my [online Data Governance Training](https://charlotteledoux.ai/training)
- Get my [Data Governance templates](https://charlotteledoux.ai/templates)
- Discover [how we can work together](https://charlotteledoux.ai/)
- Build [games for Data Governance with our studio](https://maketools.ai/)
- Join +350 readers of [“Data Governance : where to start?”](https://charlotteledoux.ai/ebooks)
---

## ✨ Level Up Your Data Literacy!

I’ve been working on something exciting : turning data literacy into a game! You’ve probably seen it through the Chief Data Officer game ;) Well now with [Maketools](https://maketools.ai/) , we’re building interactive e-learning games for companies to upskill all employees on Data & AI .

Think : 🕹️ mini-quests instead of lectures, 🎯 challenges instead of checklists, and 🏆 wins for data events you actually want to brag about.

[Learn more](https://maketools.ai/)

---

## Upcoming Event: Snowflake World Tour Paris

You can meet (for the very first time!) Collate at their booth at the upcoming Snowflake World Tour in Paris. The event is coming to Paris to showcase the latest innovations that are transforming businesses through data, AI, and collaboration .

Explore new advances covering the entire data lifecycle : from a secure, scalable platform to smarter analytics, faster pipelines, and enterprise-ready AI.

And network with data leaders to exchange new ideas !

📆 When : October 7, 2025 - 9:00-05:00PM GMT

[Register free](https://www.snowflake.com/en/world-tour/paris/?utm_source=collate&utm_medium=partner&utm_campaign=em--fr-all-all-no-ind-all-swtfy26-paris&utm_content=evp&utm_cta=swtfy26-evp-no-ind-all-paris)

---

Let’s see what to do👇

## Agenda

- What is cross-functional data
- The truth about cross-functional data
- The coordination Master
---

## What is cross-functional data

It’s the transverse data.

Everybody needs it but no one really wants to own it …

And data is organic : it spreads, mutates, and takes different shapes depending on which team interacts with it. I always say it’s a living material .

Usually as “cross-functional data” we find :

- Master Data → the core business entities that every department relies on : Customers (Sales’ CRM vs. Finance’s billing records vs. Support’s helpdesk)
- Products (ERP codes vs. e-commerce catalogs vs. marketing brochures)
- Suppliers (Procurement’s database vs. Finance’s vendor files)
- Reference Data → standard codes and controlled vocabularies that keep systems aligned : Country codes (US vs. USA vs. United States)
- Currencies (USD vs. $)
- Industry classifications (NAICS, SIC)
- Internal categories (regions, cost centers, product families)
- Golden Data → the reconciled, “single source of truth” version, agreed upon across functions : The official customer record with correct legal entity, addresses, and identifiers
- The authoritative product catalog used by every channel
- The validated supplier entry used for contracts, payments, and compliance
> Cross-functional data is the connective tissue of the enterprise. It’s basically what we should take care of the most…

---

## The truth about cross-functional data

Remember the [Data Domains map](https://thedatagovernanceplaybook.substack.com/p/the-data-domains-map-enigma) ?

We said that the Customer Domain needs a “ Data Owner or Data Sponsor or Data Domain Leader ” - depends on the different levels of your organization.

There is a high chance that it is going to be Marketing or Sales team that will become the owner of Customer data. But then when you’ll ask to the Owner to get the official definition of a customer for the data catalog, it will slap you in the face :

- I can’t decide alone
- There’s like 10 different definitions only in our team
- I think prospects should be included in “customer”
- There are 25 attributes but many more after other teams use it
- I don’t know by the way what other teams are adding
- If I’m the owner, others won’t care anymore
👉 See the psychological level of being a “Data Owner” mixed with the complexity of handling cross-functional data ?

We’ve been working in silos for so long that we just don’t realize that we’re not 10 teams, we’re actually ONE team. We should think collectively , not as individuals that will inherit the burden for others.

> But breathe, having an owner or sponsor is still going to be better than doing nothing for these cross-functional data.

## By the way, which pains usually exist?

At one of my current customer, here are the 3 main types of problems we’re dealing with regarding cross-functional data :

1️⃣ Completeness of records : Critical fields are often missing or inconsistently filled : a customer without a VAT number, a supplier without a banking detail, a product without proper dimensions.

2️⃣ Conflict between systems (and the need for new data flows) : Different systems store different versions of the same data : CRM, ERP, e-commerce, finance tools. Without proper integration and flows, numbers diverge, reports clash, and teams waste tons of time reconciling them.

3️⃣ Deduplication : The same record exists multiple times in a system under slightly different names or IDs. Duplicate customers are very frequent, as they might have several addresses for example.

---

## The coordination “Master”

Let’s find solutions.

> See the joke here? “Master” the coordination for “Master Data”.. Okay I’m out.

The coordination Master : that’s YOU !

First, acknowledge the fact that the cross-functional data cannot really be handled by ONE person . That’s fine.

Say you have : the data sponsors of Marketing, Sales and Customer service that really need the Customer data to be cleaned.

You’ll force them to actually TALK together . It is that simple, I’m not kidding. And this means you have to :

Organize a workshop with the 3 Data Owners concerned the most by the quality issues on Customer Data .

They’ll realize that they must co-own and help each other if they expect any quality on it. You’ll probably need to rework completely the process with them:

- Who’s creating it? Define which team is the official entry point for new records
- Decide what fields are mandatory at creation (e.g., legal name, VAT, address)
- Share which new fields must be added as other teams need the information
- Who’s updating it? Clarify which roles are allowed to modify existing records and under what conditions
- Introduce a status field (e.g., draft, validated, obsolete) so everyone knows whether the record can be trusted
- Check that all necessary status exist in the system
- Who’s reading it? Identify the consumers of the data (could be also outside the 3 data owners you picked!)
- Discuss the guarantees they need on accessibility and completeness as consumers of the data
- Sets expectations for data quality checks
The outcome of such a workshop is a shared contract between functions. Everyone knows their role, the process is transparent, and accountability is no longer optional.

See you soon,

Charlotte

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

I’m Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
