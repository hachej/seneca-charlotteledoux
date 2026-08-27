# How to turn Data Quality into Business Value

> #26 Decide, measure, act

- **Author:** Charlotte Ledoux
- **Published:** 2025-04-29
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/how-to-turn-data-quality-into-business
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😀

If you're leading a Data Governance team or even just trying to keep your dashboards from breaking every other week, you've probably said this before:

> "We need better data quality ."

- Join my online [training on Mastering Data Governance](https://charlotte-ledoux.typedream.app/training)
- Get my [Data Governance templates](https://charlotteledoux.substack.com/p/data-governance-templates-starter)
- Discover my [consulting services](https://charlotteledoux.notion.site/)
- Join +250 readers of [“Data Governance : where to start?”](https://charlotteledoux.substack.com/p/ebook-data-governance)
- Follow me on [Linkedin](https://www.linkedin.com/in/charlotteledoux/) and [Twitter](https://x.com/LedouxCharlotte)
---

I'm opening the Beta of my [Data Governance Training Day](https://charlotteledoux.notion.site/Data-Governance-Training-Day-1dec19a5aae8808b8631c913a4d929be) !

This is it, the big day : I've been working on a full Data Governance training day to help you with operationalisation . It will be a mixed of theory, lots of exercises and workshops to all grow together.

You can apply now for the first session on June 5th (max. 6 participants!) :

[Apply](https://docs.google.com/forms/d/e/1FAIpQLSf8gl76a46syMpogHmzEGNYWWa2Nvl1Xn3kC4me6pWOg5X7Xg/viewform?usp=dialog)

---

Let’s see how to operate 👇

## Agenda

- What "Data Quality" Means
- Make Data Quality measurable
- Embed actions into the flow
---

## What “Data Quality” means

But first, what does GOOD data quality really mean?

Does it mean adding more tests? More dashboards? More alerts? Or maybe naming and shaming the team that broke the pipeline again? 😅

Here’s the thing : everyone wants better data quality , but very few teams have a playbook for putting that into practice. Most have a bunch of disconnected pieces : tests in dbt, Slack alerts from Airflow, a “data quality” policy in Word that no one ever opened, and an endless sea of freshness checks that get ignored.

> Let’s be clear : Data Quality is about trust and decision readiness. But big $ may be on the line : an uncaught data quality issue in a machine learning pipeline for determining who can sign up for your product could cost you millions .

It’s the ability to answer :

- “Can I make a decision based on this indicator?”
- “Will someone catch that the data seems wrong?”
- “Do I know who consumes this data flow and will they care if it breaks?”
- “Why these two dashboards show different numbers?”
## Cool, but on which data?

You can’t have clean data on ALL data of your organization.

You should focus on what matters most : your data products , not every last column.

👉 Start by identifying :

- Your most important assets (e.g. executive dashboards, forecasting models, P1 pipelines)
- What decisions rely on them
- Who’s accountable for them
These are your data products. By the way : stop spending too much time on defining a “Data Product” , again it’s just your important assets.

Here are example of data products : - A set of dbt models and metrics within a specific dbt folder, like a finance mart - A group of dbt models used by a CLTV model that powers marketing automation - A selected collection of dashboards in a BI tool, such as core KPI reporting - A customer 360 dataset used across departments 👉 And then, do this :

- Tag priority assets using metadata (P1, core, finance, etc.) → super easy with dbt > Example: A “CLTV prediction model” used for marketing automation is far more critical than a one-off ad spend report. Treat it that way.
- Define them as data products with owners and SLAs
- Document their intended usage and downstream impact → [SYNQ](https://www.synq.io?utm_source=Sponsored+newsletter&utm_medium=Email&utm_campaign=charlotte_ledoux_newsletter&utm_id=charlotte-ledoux) makes this easy :
🔍 Here you have a [full Data Product overview](https://www.synq.io?utm_source=Sponsored+newsletter&utm_medium=Email&utm_campaign=charlotte_ledoux_newsletter&utm_id=charlotte-ledoux) [in SYNQ](https://www.synq.io?utm_source=Sponsored+newsletter&utm_medium=Email&utm_campaign=charlotte_ledoux_newsletter&utm_id=charlotte-ledoux).

It gives you priority, description and data assets and data products up and downstream of the data product. You can see dependencies on a data product level , helping you understand what’s going on at a higher granularity than at a table level.

---

## Make Data Quality measurable

Stop measuring data quality with abstract scores. Instead, measure how well your data serves its intended purpose.

3 high-leverage metrics you should use :

- Freshness : Is the data updated when expected? “This model is > 24h stale and powers our KPI dashboards.”
- Completeness : Are the fields most used actually populated? “95% of rows missing email in user_dim means marketing can’t segment properly.”
- Change stability : Are the schemas or definitions changing without communication? “Finance's dashboard broke because the ‘revenue’ metric changed last Friday.”
> Bonus : Add usage as a proxy signal for importance. If no one’s querying the table… maybe it doesn’t need to be your top priority in terms of data quality.

You can also checkout [this article from Airbnb](https://medium.com/airbnb-engineering/data-quality-score-the-next-chapter-of-data-quality-at-airbnb-851dccda19c3) about their data quality score and the dimensions they used : super inspiring !

👉 Your tasks at this stage :

- Track these metrics per product or tag (e.g. all P1 models)
- Use tools like SYNQ or Elementary to automate alerts
- Monitor change events with SYNQ to detect schema shifts before they hit dashboards
---

## Embed actions into the flow

Let’s be honest : most data quality alerts go nowhere .

🤯 They fire. They ping a Slack channel. And then… they float off into the void. No follow-up. No ticket. No fix. No learning.

That’s the difference between monitoring and governance in action .

If your team isn’t set up to take structured, timely action after an alert , then even the best quality metrics become noise.

Real governance isn’t reactive. It’s embedded.

Here’s how :

## 1️⃣ Route alerts to the right owner before hitting dashboards

Route alerts based on ownership metadata like “owner: finance_team”.

> Pro tip : Tools like [SYNQ](https://www.synq.io?utm_source=Sponsored+newsletter&utm_medium=Email&utm_campaign=charlotte_ledoux_newsletter&utm_id=charlotte-ledoux) can automate this using model-level metadata or Git-based ownership configs.

## 2️⃣ Log incidents with context

Not every alert needs a Jira ticket. But critical ones should be tracked : What broke? What was the impact? Who resolved it? How long did it take?

## 3️⃣ Make response part of the culture

Treat quality issues like bugs : prioritize, assign, solve, learn. Celebrate fast recovery as it’s always a collective effort !

> Bonus : Create a feedback loop to improve coverage, testing, and prioritization. You should ask “was the alert actionable?”, “could we have prevented this earlier?”, “do we need better tests, docs, or lineage visibility?”

## And now… foster business value !

💡 You need to show that data quality makes the business run better, faster, and safer by :

- Tracking quality metrics alongside business metrics (e.g. % freshness vs dashboard usage) —> faster decisions
- Monitoring incidents and resolution time (pre vs. post quality efforts) —> reduced costs of incidents
- Visualizing adoption of quality-related tooling for sensitive data —> reduced compliance risks
See you soon,

Charlotte

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

I'm Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
