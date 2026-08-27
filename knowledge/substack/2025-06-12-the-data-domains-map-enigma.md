# The Data Domains map enigma

> #29 Or how to travel ambiguity and negotiation

- **Author:** Charlotte Ledoux
- **Published:** 2025-06-12
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/the-data-domains-map-enigma
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😀

Mapping your data domains is probably the most underestimated task in terms of complexity . Because what could be simpler than drawing boxes on a slide representing your big groups of data?

- Checkout my [Media Kit](https://charlotteledoux.ai/sponsors) to promote your product/service to my audience
- Play the [Chief Data Officer game](https://whoisthebestcdo.com/)
- Join my [online Data Governance Training](https://charlotteledoux.ai/training)
- Get my [Data Governance templates](https://charlotteledoux.ai/templates)
- Discover [how we can work together](https://charlotteledoux.ai/)
- Build [games for Data Governance with our studio](https://maketools.ai/)
- Join +350 readers of [“Data Governance : where to start?”](https://charlotteledoux.ai/ebooks)
---

The Data Governance Training Day is back ! You can already apply for the next edition that will be on July 17th .

Full remote. Paris time. Fun and engaging discussions on Data Governance from strategy, buy-in to operationalisation and culture change.

Only 6 people by edition.

[Apply](https://charlotteledoux.notion.site/Data-Governance-Training-Day-1dec19a5aae8808b8631c913a4d929be?pvs=74)

---

Let’s see how to handle it 👇

## Agenda

- The beautiful idea
- Cracking the code
- The cheatsheet
---

## The beautiful idea

When you start your Data Governance program, there's always a moment of paralysis at the beginning, a mountain to climb . Because you don’t know where to start among the tons of data stored in the warehouse, in various systems, or even at third-parties.

That’s where the idea of data domain is great.

A data domain is a logical grouping of data , owned and managed by a specific part of the business. Each domain has its own data, processes and experts.

It gives a clear structure in your big data library, like having large sections.

And this means that you can prioritize some data domains to start your governance initiatives with a smaller scope .

> It’s elegant, manageable, reassuring for the mind. But let me tell you it’s far from being an easy exercise … usually takes months.

👉 Let’s take an example to understand the complexity.

Taking “Customers,” many questions will pop up :

- Is it part of Sales, or is it a separate domain?
- Who owns the data about customer behaviors? Marketing or Sales?
- Should it be a “master data” as every team claims to own it?
Suddenly, you find overlaps, data that fits in multiple places, or worse, data that doesn’t clearly belong anywhere. Teams have different definitions for the same thing. Ownership debates begin.

And that’s how a beautiful idea on paper can get ugly in reality 😅

---

## Cracking the code

I’ve refined some kind of method, but needless to say that I don’t have the magic recipe . And if I did, I would [never give it publicly](https://www.linkedin.com/posts/charlotteledoux_the-day-i-find-the-magic-formula-for-defining-activity-7327943228270272513-b3Jw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAtGo38By2Axj3fRRcSeqaCGK6MBTXL3wg0)…

So this is it, there are 3 ways to do a data domain mapping :

1️⃣ Functions-based data domains : organizes data domains based on business functions or departments.

Why? It aligns with existing team structures , making it easier to assign data owners and stewards.

🔍 Use this method to start your mapping. Your Comex members should find easily their domain . You have a VP of Sales? Create a Sales domain. A CFO? Create a Finance domain. Keep in mind that these can be your macro domains, you might split them in domains and sub domains after.

2️⃣ Data-value based domains : organizes data based on its strategic value, focusing on critical assets that drive business decisions.

Why? It helps prioritize governance efforts on high-value data and enables better cross-functional decision-making.

🔍 If there is already a data team, you can start by checking how they’ve organized data during storage and transformations : is it datamarts? domain repos? Bronze/Silver/Gold zones? But like mentioned above, you will find it hard to assign a data owner to these domains at first.

3️⃣ Process-based data domains : organizes data based on business processes and workflows rather than departments.

Why? It supports cross-functional integration , enabling better efficiency and workflow automation.

🔍 This works well if you’ve gone through major transformations like ERP integration and already have Business Process Owners . Or at least some documentation about your business processes…

## Guess what, you can do hybrid too

A little bit of functions-based and value-based :

- Define core value‐based subdomains Start by identifying the principal business “nouns” or data centers of gravity : Customer, Order, Product, Invoice, etc. For each, agree on a data model (the attributes, types, lifecycles) that every team references. This ensures everyone’s speaking the same language about, say, what a Customer’s “status” or “segment” means.
- Overlay function‐based domains Next, carve these value domains into functional responsibilities : Order Processing owns the lifecycle transitions (create, validate, ship) of Order. And it is part of Sales domain.
- Billing owns invoice generation and payment reconciliation. And Billing is part of Finance domain.
👉 Or you could go the other way around : start with big function-based domains and then add value-based subdomains inside.

> As you can see, with these 3 methods in mind, you’ll still have to crack the code according to your organization and constraints . For data that belong anywhere (list of countries, currencies, calendar, etc.), you can have a “Transversal” domain. Be creative for the owner of this domain 😅

---

## The cheatsheet

As this method is not magic nor easy to implement, let’s review some tips to make it less painful.

✅ DO’S

- Write the why and vision
- Explain the need for your domain framework , take feedback from data team members first - you can use [my templates](https://charlotte-ledoux.typedream.app/templates) to start your domain framework ;)
- Build a first draft of the mapping based on your organization chart (the functions-based method!)
- Use available documentation on your business process and data sources to improve your first draft
- Do 1-1 sessions with each data owner identified so they can help you with the validation of domains and the mapping of sub-domains
- Adjust your draft after each session
- Challenge the mapping globally to add value-based domains like Customers or Products, especially if these are master data for your company
- Have each data owner assign their domain’s data stewards
❌ DON’TS

- Don’t do it for the sake of doing it, it should serve a purpose
- Don’t do the mapping at data element level that’s a waste of time
- Don’t listen to only one executive, you need a holistic vision
- Don’t take 6 months before showing your mapping, do it iteratively
- Don’t start with the systems layer, it’s not the point - applications owners already exist in IT department, what you want is business/data owner
- Don’t let domains overlap or compete : clarify meaning, assign attributes to different domains if necessary
- Don’t think that there is an ideal number of domains that you should not exceed, there is absolutely no rules !
On the last one, fine, I’ll give a rough number : you should have around 15-25 domains depending on the size and complexity of your company.

See you soon,

Charlotte

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

---

I'm Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
