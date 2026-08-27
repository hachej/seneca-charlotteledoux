# The Data Quality Maturity Toolkit

> #48 Actions to start asap to actually control data quality

- **Author:** Charlotte Ledoux
- **Published:** 2026-05-21
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/the-data-quality-maturity-toolkit
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😃

I’ve seen lots of data engineers who had built solid data quality frameworks, setting up Great Expectations ([acquired by Fivetran recently!](https://www.fivetran.com/press/fivetran-to-become-steward-of-the-great-expectations-open-source-community-and-gx-core-project)), and writing custom DBT tests. But still, at the end of the day, they keep receiving tons of data quality issues , why?

- Checkout my [Media Kit](https://charlotteledoux.ai/sponsors) to promote your product/service to my audience
- Play the [Chief Data Officer game](https://whoisthebestcdo.com/)
- Join my [online Data Governance Training](https://charlotteledoux.ai/training)
- Get my [Data Governance templates](https://charlotteledoux.ai/templates)
- Discover [how we can work together](https://charlotteledoux.ai/)
- Build [games for Data Governance with our studio](https://maketools.ai/)
- Join +350 readers of [“Data Governance : where to start?”](https://charlotteledoux.ai/ebooks)
---

## The Data Quality Maturity Model by Qualytics

Qualytics published a 6-level data quality maturity model . The part worth stealing : they split detection from governed control , which explains why most Data Quality tools look mature on paper and still let bad data through.

[Read it](https://qualytics.ai/resources/in/data-quality-maturity-model#level-5-ai-augmented-data-quality)

---

## Agenda

- Why we still have data quality issues
- The 6 levels of Data Quality
- Your toolkit : questions, actions, refusal
---

## Why we still have data quality issues

Let’s be honest : every organization has run a one-off “Data Quality project” at least once. With 6 months of cleaning and a celebration at the end.

And then, slowly, the data gets dirty again.

## But whyyy?

Because the faucet never stops. If nobody owns the filter, nobody maintains the filter. Full credit to Jan Meskens for the metaphor : it’s the cleanest articulation of what I’ve seen go wrong on dozens of programs :

Here’s what happens usually :

- Data engineers build systems in which they copy the encapsulated schemas from source systems into their warehouse to then transform them.
- Data engineers build almost no quality-control tests , no unit testing, no reconciliation checks, no anomaly-detection, and no field transform audits to track changes over time.
- Product managers, given zero push from engineering, leave out all considerations of data quality (no SLOs, no dashboards, no specific investment).
👉 Which means it falls 100% on the engineer’s heads.

> 🔍 Tip #1 : Before you scope the cleanup, scope the ownership. Who will receive issues and be cleaning when the project is over? What’s their authority when the upstream team breaks something again?

---

## The 6 levels of Data Quality

Qualytics recently published [a 6-level model](https://qualytics.ai/resources/in/data-quality-maturity-model#level-5-ai-augmented-data-quality) that I think is the cleanest map of where Data Quality programs actually sit.

Let’s go deeper on the levels : Level 0️⃣ — No formal Data Quality

“This number can’t be right” → someone investigates. Pure reactive, most companies start here.

Level 1️⃣ — Distributed

Tests in dbt, Python, SQL : written after each incident. Reactive at a higher resolution. Coverage grows incident-by-incident.

Level 2️⃣ — Centralized

A platform with thousands of rules, all hand-written. It’s the maintenance trap, your team spends 80% of its time keeping rules alive.

Level 3️⃣ — Data Observability

Freshness, schema, row counts. ⚠️ This is not the same as quality. It tells you the pipeline ran. It doesn’t tell you if the KPI is right.

Level 4️⃣ — AI-only anomaly detection

A model flags statistical deviations, so detection becomes scalable. But the alert fatigue trap is right around the corner.

Level 5️⃣ — AI-Augmented data quality

Quality signals queryable at the moment data is consumed : by humans, BI tools, and AI agents. At this level, organizations move beyond automated detection and :

- Establish an operating model where automation and human oversight work together to define, enforce, and continuously refine explicit data standards across the enterprise
- Rules are versioned, explainable, and treated as durable governance artifacts .
- Each rule has defined ownership, documented purpose, and an associated remediation pathway.
Two reads I want you to walk away with :

🔥 Observability ≠ Quality . Most teams jump from Level 1 to Level 3 and call themselves “mature.” You’re not. You can know the data arrived on time and still have your CFO presenting the wrong revenue number.

🔥 Level 5 is a real shift in where quality is checked . Instead of running a batch of tests at 6 am and emailing a report, the data carries its own trust signal. A dashboard, a Python notebook, or an AI agent can ask the data “are you fit for this decision, right now?” and act accordingly (proceed, flag, or block).

> 🔍 Tip #2 : Place yourself honestly on this ladder this week. Most readers will recognize Level 2 or 3 and convince themselves it’s Level 4. It usually isn’t.

---

## Your toolkit : questions, actions, refusal

The whole point of this newsletter : you should be able to act on Monday. Let’s go !

## 🔍 3 questions → 3 actions to move up

- If our Data Quality lead leaves tomorrow, what happens to our quality rules in 6 months? (Are they owned, or maintained by one heroic Bob?)
♟️ On the maturity ladder : this is not a level jump but the prerequisite for all of them. Without ownership, every level decays back to L0 within 18 months.

📌 Action : Pick ONE data product (an executive dashboard, a forecasting model, a P1 pipeline). Assign a real, named owner with the budget and authority to maintain rules after the project closes.

- For our top data products, do we have signed-off acceptance criteria and an explicit enforcement path when those criteria are violated, not just a Slack ping to the owner previously assigned?
♟️ On the maturity ladder : not a level jump either but what turns L2/L3/L4 from noise into action.

📌 Action : Write the acceptance criteria and the enforcement path. With the owner you just named, document the actual standard (see below the refusal section!). Then write what happens when a check fails : who has the authority to block, escalate, or accept the risk, and on what timeline. Route control alerts via metadata (owner : ‘finance_team’) so a violation lands on a desk. This is what turns a `dbt test` from detection into control.

- Can an AI agent query our data and know whether it’s fit for use right now? (Validate-at-use, or static documentation?)
♟️ On the maturity ladder : it will make you go from L4 → L5.

📌 Action : Move quality to the point of use. Quality should travel with the data to the consumer . 2 channels that matter today :

- Humans / BI → Pick a high-stakes dashboard. Pull the latest DQ test results for the models behind it and show a banner : "⚠️ 2 of 12 quality checks failed at 06:14 → review before sharing."
- AI agents / LLMs → When an agent pulls data through MCP straight from a system, that data is never stored but it still needs to pass Data Quality checks before being presented as fact. Expose your rules as a runtime API the agent can call inline : "Before I cite this number, is the underlying data fit for use right now?" Without this, the agent's answer is the first place anyone sees the bad data and it's already in front of a stakeholder 😅
## 🛑 1 refusal you should start doing

A product manager wouldn’t launch a feature without defining what quality means. Why do we accept this for data products?

Refuse to build pipelines until acceptance criteria for data quality are signed off. This isn’t a power play.

It’s how every other engineering discipline already works.

## Mmh, but it’s rude, isn’t it?

It doesn’t have to. It’s a clarifying question dressed as a no. Try this the next time a request lands :

“Happy to build this. Before I start, three questions so we don’t end up here again in 6 months :

- Which fields must be non-null / complete / etc. , and within what range?
- What’s the freshness SLA for the downstream consumer?
- Who owns the rule after we ship, I need a name, not a team?
If we don’t agree on these now, I’ll be cleaning this up instead of building the next thing. 30 minutes this week to lock it down?”

> 🔍 Tip #3 : Refusal is not the same as resistance. A clear “no, until we have X” is the trust mechanism. It’s how you stop being the janitor.

See you soon,

Charlotte

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

---

I’m Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
