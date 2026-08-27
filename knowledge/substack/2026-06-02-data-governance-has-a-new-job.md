# Data Governance has a new job

> #49 And it's a good one

- **Author:** Charlotte Ledoux
- **Published:** 2026-06-02
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/data-governance-has-a-new-job
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😃

Among the years of writing this newsletter, I've asked you to do a lot of things : launch domains, hire stewards, build catalogs, write playbooks. But.. don’t know if you noticed, something changed : AI agents are everywhere (you didn’t know?! Even my Dad knows…).

We’re about to live the biggest reposition of Data Governance , and the most positive one. Because the job didn't get smaller : it got bigger, more leveraged, and a lot more interesting.

- Checkout my [Media Kit](https://charlotteledoux.ai/sponsors) to promote your product/service to my audience
- Play the [Chief Data Officer game](https://whoisthebestcdo.com/)
- Join my [online Data Governance Training](https://charlotteledoux.ai/training)
- Get my [Data Governance templates](https://charlotteledoux.ai/templates)
- Discover [how we can work together](https://charlotteledoux.ai/)
- Build [games for Data Governance with our studio](https://maketools.ai/)
- Join +350 readers of [“Data Governance : where to start?”](https://charlotteledoux.ai/ebooks)
---

## KTX : an open-source context layer that helps AI agents use governed data

AI agents are only as good as the context they can use.

KTX is Kaelio’s open-source context layer for AI data agents. It connects to your data stack and organizes the knowledge agents need into a governed, reviewable context layer :

- a wiki for business knowledge : definitions, caveats, ownership, policies, dashboard notes, reporting conventions.
- a semantic layer for structured knowledge : tables, columns, grains, joins, measures, dimensions, segments, validation rules.
- source evidence : snapshots, provenance, and artifacts that help teams understand why a definition exists and where it came from.
For technical teams, KTX is open source and can run locally. For governance and data leaders who want the outcome without managing a CLI, Kaelio also offers a hosted KTX product : your team connects the stack, reviews the context, and gives all AI agents a trusted foundation for analytics.

In other words : KTX helps turn your data governance work into something agents can actually use.

[Checkout KTX](https://www.kaelio.com/products/ktx-cloud?utm_source=the_data_governance_playbook&utm_medium=newsletter&utm_campaign=partner_newsletter_may_2026&utm_content=ktx_cloud_product_page)

---

## CDO Academy : are you ready to govern AI agents?

AI agents are only as powerful as the data behind them. And as a CDO, you’re the one who makes them trustworthy, auditable, and ready to act at scale.

Join fellow Chief Data Officers (CDOs) at the Informatica CDO Academy - now part of Salesforce - for two focused, live sessions where data leadership meets the Agentic Enterprise.

📆 Date: June 9 & 11, 2026

🕝 Time: 3:00 PM CET | 2:00 PM GMT

[Join for free](https://now.informatica.com/cdo-academy-09jn26-regpage.html)

---

## Agenda

- The shift no one's named yet
- Why "governing data" is the wrong job description now
- The reposition : same people, different artifact
- What to do Monday morning
---

## The shift no one’s named yet

It’s everywhere if you look around :

- Sales → drafts outreach from the last 3 calls logged in the CRM
- Finance → writes variance commentary for the monthly close
- Marketing → creates ad copy variants and campaign-brief-to-landing-page
- Data team → writes SQL against the warehouse
These agents just show up. And they're all running on something.

## What are they using to give answers?

They run on CONTEXT : system prompts, retrieval scope, tool catalogs, agent memory, workflow rules, business definitions, validation policies.

Think of everything that reaches the model on the way to producing an answer, then set the raw data itself to one side : the actual values in your tables, the rows and numbers, the literal cell contents. Everything that's left is context.

## 👉 Right now, in most companies, that layer is wild west…

Who owns the system prompt for the sales agent? Nobody really knows 🤯. Which documents is the finance copilot allowed to retrieve from? Whatever was easiest to plug in 🤯. Are the metric definitions the agent uses the same as the ones in the BI tool? Probably not 🤯.

---

## Why "governing data" is the wrong job description now

Data governance was framed in a world where humans did the analysis. We governed datasets, schemas, lineage. We wrote definitions in prose, in glossaries, in Confluence pages because a human would read them , apply judgment, and decide whether to trust the column.

😅 Note that documentation didn't have to be complete because humans compensated.

## But AI agents don't read data the way humans do

They read context. They read instructions, retrieved snippets, tool outputs, memory, permissions, and metric definitions.

A perfectly governed warehouse can still produce garbage outputs if the context layer is wrong and an imperfectly governed warehouse can produce great outputs if the context layer is rich, structured, and machine-readable .

Here's the honest reframe : we've been governing data aka the raw material . We weren't governing what actually reaches the decision-maker . With humans, that was fine : they brought the judgment. With agents, it’s just different.

So here's the job description for your Data Governance team, restated in one line :

Give the company the structure and standards so that every decision, taken by a human or an agent, runs on context with a clear owner who can vouch for it : the data, and everything that turns data into an answer.

And as you know I love analogies, here’s one :

Old Data Governance built the pantry. New Data Governance builds the pantry and writes the cookbook the chef reads before every meal .

Some teams will give the function a name, like “ Context governance ”. The steward becomes a context steward. The label matters less than the scope, but naming it helps, because you can't put a thing in a charter or a RACI until it has a word. I'll use context steward for the rest of this piece.

> 🔍 Tip #1 : If your data governance charter still says “we govern data assets”, you need to update it. Which means, concretely : change the scope sentence to something like "we govern data and the context that agents and people use to produce decisions" .

---

## The reposition : same people, different artifact

Here's the part I'm genuinely excited about. I know you’ve spent a lot of time defining roles, responsibilities and processes.

Don’t worry, none of it will end up in the bin.

👉 What this means for data stewards : same people, same accountability, different artifact. Less time writing a paragraph that approves a glossary entry. More time validating, with the analytics team, what an agent is allowed to use : which business concept a column maps to, which joins are trusted, which metric definition is official, which caveats must always follow the answer, over which time window the definition applies, and who owns the answer when an agent uses it.

I know what you’ll say. Your Data Stewards are business people, they don’t have all these technical answers…

> 🔍 Tip #2 : Don't hire context engineers, train the data stewards you already have. Block time this quarter to teach them what a structured context declaration looks like, how an agent reads it, how MCP serves it up. Pair them with BI / Data analysts so they do it together.

## What about other roles and streams?

The skills your Data Governance team already has (ownership clarity, quality monitoring, access control, lineage, judgment about what's correct) map onto context perfectly. The artifacts change. The roles and streams expand :

- 🧑‍💼 Data Owner → owns the approval standard for agent context in their domain. If sales runs an agent that pulls from CRM data, the sales data owner should know which definitions, documents, tools, and policies that agent can use, and which ones still need review.
- 🧑‍🔧 Data Steward → as above. The definition of “Active Customer” stops being only a Confluence paragraph and becomes a reviewed context artifact: the source evidence, the proposed column mapping, the valid joins, the risky aggregations, the time window, the caveats, and the owner.
- ✅ Data Quality → extends to context and agent output quality. Wrong metric usage is a quality issue. Missing caveats are a quality issue. A generated context draft that needs approval is not a failure; it is the new review queue.
- 🗄️ Data Catalog → becomes source material for agent context, not only a shelf humans browse. The catalog, semantic layer, dashboards, warehouse metadata, and documentation all help build the context layer that stewards can review and agents can use.
👉 The work becomes so much more strategic !

A data steward who used to approve one glossary entry at a time now declares something an agent reads a million times a day. The same hour of stewardship has 10x, 100x, 1000x the impact. Your work stops being a document someone might read. It becomes infrastructure.

> 🔍 Tip #3 : Don't ask for a new team. Ask for a new column in your RACI: “agent context owner”.

---

## What to do Monday morning

3 concrete moves :

1️⃣ Inventory the agents and automated workflows in your company. Most Data Governance teams have never done this. Start with a list. Which teams have deployed agents? What do they do? What data do they touch? Who owns their context?

2️⃣ Pick one agent and trace its context . Just one. What's in its system prompt? Which documents can it retrieve? Which tools can it call? Which metric definitions does it use? What does it remember? Document it like you’d document a dataset. You’ll find gaps. That’s the point.

3️⃣ Declare the rules in a machine-readable form , not a Word doc. But… you are not going to hand-write a structured declaration for every metric, every join, every table, every caveat. That needs tooling: something that ingests your stack, proposes the structure, and gives your team a context layer to review and govern.

And that’s exactly what the team at Kaelio has built. Even better, they open-sourced the foundation !

[KTX by Kaelio](https://docs.kaelio.com/ktx/docs/getting-started/introduction) turns the scattered knowledge around your data stack into an agent-ready governable context layer . It ingests databases (BigQuery, Snowflake, & many more); modeling and semantic layer tools (dbt, MetricFlow, LookML); BI tools (Looker, Metabase, & many more); and documentation sources (Confluence, Notion, & many more). Then it organizes the result into :

- A wiki for business knowledge : business definitions, metric caveats, reporting policies, dashboard notes, team conventions.
- A semantic layer for structured knowledge : tables, columns, grains, joins, measures, dimensions, segments, validation rules.
For data engineering teams, this means agents get schema, semantics, BI patterns, and human documentation in one place. They write better SQL. They use the right metrics. They respect joins, grain, and permission.

For data governance teams, this is the important part : KTX gives you an artifact to govern . A reviewable context layer where definitions, caveats, ownership, and rules can be inspected, improved, and served to agents.

> And… it’s exactly the shape a context steward needs to do this new job : governing data agents.

If you want to see how this fits into your Data Governance practice, you can grab 15 minutes with the Kaelio team here.

[Chat with Kaelio team](https://www.kaelio.com/book-demo?utm_source=the_data_governance_playbook&utm_medium=newsletter&utm_campaign=partner_newsletter_may_2026&utm_content=book_demo)

## You're not “behind”

Nobody knows how to do this yet. There is no certification, no maturity model, no Gartner quadrant, at least not yet.

The teams that start treating context as a first-class governed artifact , will own the most important function in their company in 18 months.

> Data governance didn't get replaced by AI. AI just gave data governance its most important job yet .

See you soon,

Charlotte

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

---

I’m Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
