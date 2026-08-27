# Your Data Stewards waste 30% of their time on this

> #51 A semantic layer field guide

- **Author:** Charlotte Ledoux
- **Published:** 2026-07-09
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/your-data-stewards-waste-30-of-their
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😃

Recently I’ve talked a lot about the semantic layer . But I’ve realized that it’s actually hard to imagine what it is, where it sits in your existing stack, which impacts it will have on your Data Stewards…

- Checkout my [Media Kit](https://charlotteledoux.ai/sponsors) to promote your product/service to my audience
- Play the [Chief Data Officer game](https://whoisthebestcdo.com/)
- Join my [online Data Governance Training](https://charlotteledoux.ai/training)
- Get my [Data Governance templates](https://charlotteledoux.ai/templates)
- Discover [how we can work together](https://charlotteledoux.ai/)
- Build [games for Data Governance with our studio](https://maketools.ai/)
- Join +350 readers of [“Data Governance : where to start?”](https://charlotteledoux.ai/ebooks)
---

## Community Survey : The State of Data Governance 2026

This year I’ve decided to ask this community where data governance actually stands. Not where vendors say it should be, but where it really is !

The 2026 edition is open. 17 questions, 6 minutes , nothing required.

I’ll publish the full results to everyone who answers, broken down by company size and industry. So you get a real benchmark to compare yourself against !

Where do you stand in 2026?

[Take the survey](https://docs.google.com/forms/d/e/1FAIpQLSfp1jy8UlvHJy5QfjwJab-fRuwM-qp8pm3cEf99pfJDE_dQOA/viewform?usp=publish-editor)

---

## Upcoming webinar : “Securing Leadership Buy-In : the Business Case for a Universal Semantic Layer”

I’m so happy to be part of this webinar with HF Chadeisson from Strategy ! We'll go through the numbers that move a budget decision , the objections you'll hit, and how to frame a universal semantic layer as an investment with a payback date instead of another infrastructure line item.

📆 When? Thursday, September 17th, 2026 , at 10:00 AM BST / 11:00 AM CEST

[Register](https://software.strategy.com/webinar/securing-leadership-buy-in-the-business-case-for-a-universal-semantic-layer?utm_medium=social&utm_source=linkedin&utm_cid=charlotte701PY00001jzj2bYAA)

---

## Agenda

- The problem to solve
- What it looks like in practice
- Where it sits
- When you actually need it
- What changes
[Subscribe now](https://thedatagovernanceplaybook.substack.com/subscribe?)

---

## The problem to solve

In my last newsletter I made the concept clear : [a semantic layer is executable, it computes your metrics, while a data catalog only documents them](https://thedatagovernanceplaybook.substack.com/p/semantic-layer-vs-data-catalog-why).

So you get the concept. Here’s what you still don’t get.

🧑‍🔧 Your Data Stewards spend around 30% of their time checking business rules, making sure a KPI is defined once, that there are no duplicates, that the number is right . And when two dashboards use the same KPI but show different figures, they’re the ones who go hunting for why.

🧑‍💻 Then you have the developers and data engineers, modelling data a bit everywhere : in the warehouse, in a datamart, sometimes straight inside Power BI or Tableau. And that’s where it really breaks. They model in isolation from each other, so they rebuild logic that already exists. Nothing gets capitalized on. And you end up with several versions of the same data model, none of them agreeing.

---

## What it looks like in practice

I’m pretty sure you’re all familiar with the medallion architecture. If not, here is a [good read about it](https://medium.com/the-software-frontier/medallion-architecture-a-comprehensive-overview-f4ef3e8b9974).

Your medallion ends in a gold layer : clean, business-ready tables . Good. That modelling is the foundation of the semantic layer . But a gold table named “fct_orders” stops at clean rows. It doesn’t carry the part that actually breaks AI :

- that “revenue” counts only “recognized” status, not paid + unpaid + refunded
- that amounts in EUR/GBP/CHF must convert before they sum
- that the German VAT table has three rows (the rate changed twice), so the join needs a date filter or every German invoice counts 3×
None of these rules live in the gold table. Today they live in a Power BI measure, in an analyst’s SQL, or in someone’s head 😅

The semantic layer is where that logic moves out of those 3 fragile places and into one governed, executable definition sitting on top of your gold tables. Gold gives you clean tables, the semantic layer gives you what the numbers mean .

🚨 Another issue that you encounter with your gold layer is how to handle metrics that cannot be aggregated like distinct counts, averages . These cannot be calculated in the gold layer, or only as a fixed aggregate (e.g., “Count distinct customers by Store”). If you want to add the “Product Category” dimension, you need a new table hence data engineers taking care of it…

The semantic layer can virtualize the definition or calculation rule of aggregated metrics , without storing the result, and recalculate it on the fly across all axes, regardless of context, while systematically enforcing security.

## But what does it look like?

Here’s the part people never picture : the user interface .

Let’s take the example of [Strategy Mosaic](https://software.strategy.com/strategymosaic) . You work in a modelling studio , and the point is that both your IT team and your business people work in the same one : not engineers in the warehouse and analysts in Power BI, each redoing the other’s work.

You define a metric the way you’d describe it to a colleague : this is revenue, it’s this calculation, it counts only recognized amounts, it converts currencies, it joins these tables. You attach the business rule and the security right there , on the object.

👉 And you’re not doing 100% of it : the AI does up to 90% of the modelling for you. You describe the intent, it proposes the model, you correct and validate.

---

## Where it sits

So where does this thing live?

The semantic layer is currently fragmented across all layers : BI (semantic models, table extracts, QVD), but also within the data platform (views) and in ETL/ELT/Data Integration (calculations and aggregations in the T layer).

> A major challenge today is to consolidate it back into a single layer , not across the entire stack.

It should sit right on top of the gold tables your engineers already build. One layer above the warehouse, between your clean data and everything that consumes it :

The point that changes everything : nothing queries the raw tables anymore . They all go through the semantic layer, and they all get the same answer.

Two things make that work, and they’re where most people get it wrong :

1️⃣ First, it has to be tool-agnostic . If you define “revenue” inside Power BI, then revenue only means something inside Power BI. Open Tableau, or a Python notebook, or Claude, and you’re back to square one : everyone redefining the same metric in their own corner. The whole value is that “revenue” means one thing, and it means it everywhere.

2️⃣ Second, it’s bounded . The semantic layer holds the metrics you’ve actually defined. It’s also why the semantic layer isn’t the same thing as the context layer everyone’s now talking about : the context layer is built for the open-ended world of AI agents asking anything, and it contains the semantic layer rather than replacing it. But that’s a subject for another newsletter!

## Now, who actually uses it?

3 different people :

- Your data stewards can add the business rule for a KPI, in the semantic layer, and it's enforced everywhere from then on.
- Your analytics engineers do the data modelling and build the metrics once, in one place, and everyone else capitalizes on it.
- Your data engineers can build as code with the Git integration and YAML import, as well as OSI-compatible YAML import.
💡 Note that for consumers, it doesn’t change anything :

- Your data analysts just connect their BI tool to it and drag the ready-made number into a dashboard.
- Your executives , through an AI agent : they ask a question in plain language and get a number back.
- Your applications , through the API.
Consumers don’t have to learn a new interface or change their habits. The only difference is what comes back : a governed number instead of a homemade one. The change happens underneath them, not in front of them.

> That’s why the effort never lands on the consumer side. It lands on the people building and owning the layer .

---

## When you actually need it

Not always . That’s the honest answer most vendors won’t give you 😈

If you have one simple data model and one tool reading from it, a good AI agent can already get you to ~86% accuracy without any semantic layer on top. Below a certain complexity, the layer just adds cost, latency, and one more thing to maintain.

You need a semantic layer when 3 things start piling up :

- several tools consuming the same metric,
- teams that define that metric differently,
- and an AI agent answering business questions directly instead of a human reading a dashboard.
> Start from the gold tables you already have , add the descriptions, then the business rules, then the metrics. You can do it one critical KPI at a time.

---

## What changes

Here’s the impact nobody puts on the slide : it’s a new tool !

🧑‍💻 For your developers and engineers , it’s a new place to model . They’ve spent years building logic in the warehouse, in data marts, sometimes straight in Power BI. Now the modelling moves into the semantic layer.

🧑‍💼 For your analysts , it’s a new source of truth . They stop rebuilding metrics in their corner of the BI tool and start pulling from a definition someone else already governed. That’s a relief and a loss of control at the same time, and you’ll hear about the second part…

🧑‍🔧 For your data stewards , it’s a new tool too. Their business rules stop living in a document nobody opens and move into the layer, where they’re actually enforced . The 30% of their time spent chasing broken KPIs turns into defining and owning them upfront.

And that’s the part I’ll keep repeating : the semantic layer is not a tooling problem, it’s a change problem . Someone has to own each metric now : a name, an SLA, a business rule.

The tech is the easy 20%. The 80% is getting your people to actually work in it.

See you soon,

Charlotte

The Data Governance Playbook is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.

I’m Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
