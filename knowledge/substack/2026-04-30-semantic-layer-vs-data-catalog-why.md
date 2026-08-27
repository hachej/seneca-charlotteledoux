# Semantic Layer vs. Data Catalog : why it matters for AI

> #47 What's the real difference

- **Author:** Charlotte Ledoux
- **Published:** 2026-04-30
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/semantic-layer-vs-data-catalog-why
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😃

I’m sure you’ve seen the concept of universal Semantic Layer becoming a structural piece of the data stack. Last week, I woke up and couldn’t stop asking myself (so I [asked it on Substack Notes](https://substack.com/@thedatagovernanceplaybook/note/c-216125840?r=hv5su&utm_source=notes-share-action&utm_medium=web)!) : " What's the difference with a Data Catalog? Don't they do the same thing? "

Short answer : no. They solve different problems. And confusing the two is one of the reasons many AI initiatives are stuck.

- Checkout my [Media Kit](https://charlotteledoux.ai/sponsors) to promote your product/service to my audience
- Play the [Chief Data Officer game](https://whoisthebestcdo.com/)
- Join my [online Data Governance Training](https://charlotteledoux.ai/training)
- Get my [Data Governance templates](https://charlotteledoux.ai/templates)
- Discover [how we can work together](https://charlotteledoux.ai/)
- Build [games for Data Governance with our studio](https://maketools.ai/)
- Join +350 readers of [“Data Governance : where to start?”](https://charlotteledoux.ai/ebooks)
---

## Upcoming webinar “Why Data Governance must work with the Semantic Layer?”

I’m so happy to be part of this webinar with HF Chadeisson from Strategy ! We’ll talk about what governance needs to become to operate effectively alongside a semantic layer : new roles, new ownership models, and new processes for governing meaning, not just data.

📆 When? Thursday, May 21st, 2026 , at 10:00 AM BST / 11:00 AM CEST

[Register](https://www.strategy.com/software/webinar/why-data-governance-must-work-with-the-semantic-layer?utm_source=charlotte&utm_medium=newsletter&utm_campaign=2026Q2_Charlotte_Ledoux_Webinar_(EMEA)_Registration)

---

## Agenda

- What a Data Catalog does well
- What a Semantic Layer does differently
- Why the distinction matters now
- The cost angle
---

## What a Data Catalog does well

I’ve tried and used many data catalog solutions : Collibra, DataGalaxy, OpenMetaData, CastorDoc…

What I can say is that they all give a good answer to the discovery issue . The search bar is always the main feature you see on the home page (some have plugins or chatbot integrated directly to Teams / Slack) - but overall you’ll find a way to search data assets with many advanced filters.

🔍 Usually companies look for data catalogs when there is confusion in the business language and identifying where data assets are used is getting difficult .

## Just an inventory then?

Last year, a big retail company contacted me to help them with the choice and setup of a data catalog.

I did a study and launched a POC phase as that’s what they requested. We selected 2 solutions ( that I won’t reveal here, it’s a secret! ). I brought in a room the Finance team, who had some use cases about handling metrics definitions. Everything went smoothly until…

Until they tested both tools and rejected them. They simply preferred their big Excel file that was listing all metrics across all reports.

It’s like we came with a fancy bonbon and they didn’t want it - crazy, huh?

👉 That’s when I realized that a Data Catalog is more for technical people . We see the utility of it because we’re at ease with managing tables, columns, lineage. We find it incredible to get the overview of the data patrimony and flows. But Business teams… well most of them don’t really care.

> Because the Data Catalog won’t do anything when the definition of the metric will change. Nothing will happen in their dashboard.

---

## What a Semantic Layer does differently

Data catalogs are primarily documentation , whereas semantic layers are executable calculation .

> A semantic layer translates raw data into governed, executable business logic.

Data catalogs and semantic layers share business definitions, but they operate under very different constraints. The validation logic, permission models and operational risks are not the same :

- Updating a definition in a catalog changes documentation.
- Updating it in a semantic layer can alter dashboards, financial reporting or regulatory metrics .
👉 In large organizations, an agnostic semantic layer, that sits across every BI tool, every AI agent, and every cloud , is one of the most effective ways to enforce standardized calculations across the business.

Without one, Todd in Finance might define retention rate one way while Bob in HR calculates it differently. When the C-suite sees two conflicting numbers for what should be the same metric, the outcome is predictable : they either default to whoever has the stronger reputation, or lose trust in both.

An agnostic semantic layer eliminates this problem at the source . Because it sits between the data warehouse and any downstream tool (you probably have Power BI, Tableau, Looker, etc), Bob and Todd are both pulling from a single, governed definition. The tool doesn’t matter : the metric is the same everywhere !

And when there is a legitimate disagreement about which calculation is correct, the semantic layer gives you a structured process for resolving it, ideally with a full audit trail of who changed what definition, when, and why. That's where governance intelligence built into the semantic layer itself becomes critical :

- one definition gets validated, approved,
- and becomes the single source of truth,
- rather than two people retreating to their silos and quietly maintaining competing versions…
---

## Why the distinction matters now

80% of large European companies are currently stuck in the “ AI Gateway ” phase. You know what it is : it’s when you have a Center of Excellence, a standard LLM provider, and models in production. Looks like you’re doing great.

🤯 But when an AI agent connects directly to a database, it sees tables named “ rev_final_v3_2024 ”. It doesn’t know your business rules. It doesn’t know that “active customer” means something different in marketing versus finance. It guesses !

> AI agents don’t have institutional knowledge.

## So, we’ll be blocked when scaling AI?

In practice, yes… you’ll hit one of the 6 concrete blockers :

1️⃣ The logical context gap . Models don't know your "Churn Rate" or "Net Margin." Without formalized business logic, they make up plausible answers…

2️⃣ The integration tax . Writing custom wrappers for every agent creates a spaghetti codebase that's impossible to maintain.

3️⃣ Sovereignty & GDPR . Between the AI Act and data sovereignty requirements, sending sensitive data to a US-based LLM is risky. You need the flexibility to run models on-premise, switch between OpenAI, Claude, or others, and keep sensitive data from ever leaving your perimeter , without rebuilding everything each time.

4️⃣ The trust deficit . A CFO needs to justify every AI-generated calculation instantly before acting on it. That means one click "justify this calculation" leading to a governed metric.

5️⃣ Compute costs . The token and compute costs from agent usage can quickly eat up whatever productivity gains you hoped for (see next section of this newsletter 😁).

6️⃣ Write-back & action capability . Most stacks are read-only but agents need to write back securely to the ERP or CRM.

## Which means that…

A Data Catalog doesn't solve any of these. It documents the chaos, but doesn't resolve it. A Semantic Layer does by encoding the certified business logic that AI agents need to give accurate answers, independently from any LLM .

---

## The cost angle

If you're already spending ~€80K/year on a Data Catalog, you might wonder why you'd add anything else.

The catalog does its job : inventory, classification, lineage, ownership.

👉 But it doesn't reduce your compute bill . Documentation doesn't run queries.

## Wait, the semantic layer reduces compute costs?

Oh yes, it does. More than you think.

Without a Semantic Layer, every BI tool, every AI agent, every dashboard runs its own calculations against the warehouse. Twelve tools calculating margin twelve different ways, and your warehouse billing you for all twelve. The semantic layer solves an infrastructure cost due to redundant compute .

> According to [Strategy's third-party ROI study](https://www.strategy.com/software/blog/how-one-semantic-layer-delivered-over-500-roi), customers see $3.4M average net impact, 551% ROI with a 2-month payback , and those with $1M-$5M Snowflake or Databricks bills saved roughly $609K annually.

Strategy Mosaic, their universal semantic layer, caches at the semantic level, not the SQL level, and because it connects to all your data assets, that cache benefit compounds across your entire stack, not just one platform. Two queries asking for revenue in different regions reuse the same cached calculation logic. That means 78% cache hit rates vs. 15-20% for traditional SQL-level caching.

## Finally, don’t worry…

If you already have a catalog in place, the semantic layer is faster to implement.

You've done the inventory work. The definitions and ownership from your catalog feed directly into governed metrics.

> You'll be building the execution layer on top of the documentation layer you already have.

## What you should remember

Stop treating your catalog as a semantic layer. It's not. And the gap between the two is exactly where AI hallucinations come from.

If your AI strategy depends on "we have a catalog," you have a documentation strategy, not a meaning strategy.

See you soon,

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

Charlotte

---

I’m Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
