# The Governance by Design Starter Kit

> #44 Embedding data governance

- **Author:** Charlotte Ledoux
- **Published:** 2026-02-26
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/the-governance-by-design-starter
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😃

I think what I hate about Data Governance is when you have to do it as an afterthought . A layer applied after the data was already flowing, the dashboards already built, the models already trained.

- Checkout my [Media Kit](https://charlotteledoux.ai/sponsors) to promote your product/service to my audience
- Play the [Chief Data Officer game](https://whoisthebestcdo.com/)
- Join my [online Data Governance Training](https://charlotteledoux.ai/training)
- Get my [Data Governance templates](https://charlotteledoux.ai/templates)
- Discover [how we can work together](https://charlotteledoux.ai/)
- Build [games for Data Governance with our studio](https://maketools.ai/)
- Join +350 readers of [“Data Governance : where to start?”](https://charlotteledoux.ai/ebooks)
- Get a boost with a [4 weeks training on Generative AI](https://www.data-bird.co/formation-gen-ai?utm_medium=referral&utm_source=charlotte_ledoux&utm_campaign=ambassadeur&utm_content=newsletter_avril)
---

## Europe finally has sovereign AI built for the agentic era

Agentic AI is redefining how we build applications : autonomous agents that reason, plan, and execute multi-step tasks. But agents are only as good as the infrastructure they run on. Every reasoning loop, every tool call, every chain-of-thought step requires fast, reliable inference . Latency kills agent performance.

👉 That’s where Infercom comes in. They’ve launched a sovereign AI inference platform hosted in Munich , operating entirely under EU jurisdiction. Powered by SambaNova’s custom RDU chips and Dataflow architecture, the platform is purpose-built for the kind of sustained, high-throughput inference that agentic workloads demand. Zero prompt retention : your data is never logged, stored, or used for training. Full GDPR compliance, no Cloud Act exposure, and AI Act ready from day one.

With an OpenAI-compatible API , switching is as simple as changing a base URL. Sovereign, fast, and agent-ready. Worth a look :

[Check it out](https://fandf.co/4kAihSE)

Sponsored by Infercom, powered by SambaNova

---

## When data trust breaks down, business performance follows

It’s been long since I’ve read such a good guide on Data Observability ! It gives you all the reasons and key numbers to convince your CEO.

As you know, data issues rarely stay confined to dashboards. They surface as missed targets, inefficient spend, delayed decisions, and eroding confidence across teams. The Chapter 1 of [Sifflet’s Buyer’s Guide to Data Observability](https://24383351.fs1.hubspotusercontent-na1.net/hubfs/24383351/Sifflet%20Buyers%20Guide%20Part%201.pdf) examines how poor data reliability translates into real business consequences, from flawed forecasts to misallocated budget, and why monitoring alone isn’t enough.

Learn how leading organizations are reframing data health as a business risk and building observability practices that connect technical signals to operational and financial impact :

[Read Chapter 1](https://hubs.ly/Q043P2NN0)

---

Let’s see what this concept is about 👇

## Agenda

- What is Governance by Design
- 5 checkpoints to embed governance
- Your starter checklist
---

## What is Governance by Design

It’s the ultimate goal for a lot of companies. It’s in each Data Governance team’s long term vision. But would you be able to explain it to the Top Management? In one sentence?

Let’s try !

> Governance by Design means that governance rules are applied at the moment data is created, transformed, or consumed .

Still not clear? Ok, fine I’ll do an analogy 😁

## 🚧 Governance by Policy (1.0) is like a sign on the road.

The big red sign says : “DANGER, Slow down.”

Then they hire someone to stand at the corner and write reports on how many cars ran the stop. Every month, a committee meets to review the accident stats. They publish a new policy : “All drivers must reduce speed by 20% in this zone.”

Result? Some people read the sign. Most don’t. The accidents continue. And the committee keeps meeting.

## 🔁 Governance by Design (2.0) is like a roundabout.

Instead of adding signs, the city decides to redesign the road :

- They build a roundabout : you physically can’t go fast
- They add speed bumps before the crossroad : you slow down
- They paint visual texture on the road surface : you feel the change under your wheels
The road itself makes you drive safely. It made you CHANGE your BEHAVIOR. And that’s literally the hardest thing to do in an organization…

It’s the same shift that happened in software engineering with “security by design” or DevOps. Nobody waits until production to think about testing anymore.

So why do we still wait until data is in the warehouse to think about its quality, ownership, and definition?

---

## 5 checkpoints to embed governance

There are 5 moments in your data lifecycle where you can embed governance before things go wrong. I’d say you can start with any of these, as long as it answers a real pain point !

## Checkpoint 1 : At data creation 🏗️

When a new data source, table, field or report is created :

- Who is the [data owner](https://thedatagovernanceplaybook.substack.com/p/the-big-confusion-in-data-governance)? Tag it immediately. No orphan data.
- What’s the business definition? Write it now [with the data steward](https://thedatagovernanceplaybook.substack.com/p/onboarding-your-data-stewards).
- What quality rules apply? Nullability, format, expected range - define them at creation with the data steward.
👉 If it’s cross-functional data, [please check this previous article to handle it properly](https://thedatagovernanceplaybook.substack.com/p/what-to-do-with-cross-functional).

How to do it : An automated gate in your deployment pipeline : if metadata fields are empty, the pipeline simply won't deploy.

## Checkpoint 2 : At data transformation 🔄

When data is transformed (ETL, dbt models, scripts) :

- Are business rules documented inline? Not in a Confluence page nobody reads, but in the code itself.
- Are quality tests part of the pipeline? Run them automatically, not manually.
- Is lineage tracked? Know where data comes from and where it goes.
How to do it : If you use dbt, add schema tests and descriptions directly in your .yml files. If you use other tools, integrate quality checks as pipeline steps that block if they fail.

## Checkpoint 3 : At data consumption 📊

When someone builds a dashboard or a report :

- Is the data source certified? Don’t let people build on unvalidated data.
- Are the metrics using the official definitions? Cross-reference with your metrics base.
How to do it : Create a “certified datasets” catalog. Mark sources as bronze/silver/gold. Only gold sources should feed executive dashboards.

## Checkpoint 4 : At access request 🔑

When someone requests access to data :

- Is there a classification? Public, internal, confidential, restricted.
- Is the purpose documented? Why do they need it?
- Is there an expiration date? Access shouldn’t be forever.
How to do it : A simple form with 3 fields (dataset, purpose, duration) routed to the [data owner](https://thedatagovernanceplaybook.substack.com/p/the-big-confusion-in-data-governance) for approval. Automate the expiration.

## Checkpoint 5 : At project kickoff 🚀

When a new data project starts (AI model, migration, new product) :

- Is governance part of the project plan? Not as a separate workstream.
- Is a [data steward](https://thedatagovernanceplaybook.substack.com/p/onboarding-your-data-stewards) assigned? They should be at the kickoff.
- Are data contracts defined? What does the producer commit to deliver?
How to do it : Add a “Data Governance” section to your project template. 3 questions : What data do we need? Who owns it? What quality level do we need?

---

## Your starter checklist

Breathe, it’s normal to not be able to change everything in one week. Especially in large organizations highly siloed 😈

Before changing anything, look at how things work today. Grab a coffee and investigate with people from the Data team :

1️⃣ Pick ONE data pipeline or report that your team uses every day

2️⃣ Ask the team : “Who created this data? Who is responsible for it?” → If nobody knows, you’ve found your first problem. Ask a business user : “Where do you go when you need to understand a metric?” → If the answer is “I ask Pierre” or “I check the old Excel”, you’ve found your second problem.

3️⃣ Write down 3 moments where data governance is applied after the fact in your organization and identify at which checkpoint it belongs to (creation, transfo…)

4️⃣ Define one simple rule to embed governance at that checkpoint. Examples :

- “From now on, every new table needs a 3-line description before it’s published”
- “Every dashboard must mention its data source and last refresh date”
- “Every new project must name a data steward at kickoff”
5️⃣ Talk to 2-3 people who are directly impacted by your new rule (the data engineer, the business analyst, the Data Owner...)

6️⃣ Explain what pain it solves in 2 sentences

7️⃣ Adjust the rule based on their feedback

8️⃣ Write it down in a place your team actually uses (Slack channel, Confluence)

9️⃣ Measure : how many new datasets/projects followed the rule this week vs. didn’t?

🔟 Share one small win with your sponsor or manager : “This month, 100% of new dashboards have a documented data source. Last month it was 0%.”

See you soon,

Charlotte

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

I’m Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
