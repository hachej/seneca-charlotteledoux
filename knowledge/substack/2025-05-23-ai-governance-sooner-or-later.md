# AI Governance, sooner or later

> #28 Or how to get on the train

- **Author:** Charlotte Ledoux
- **Published:** 2025-05-23
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/ai-governance-sooner-or-later
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😀

The argument I've seen most used in favor of Data Governance is that you will be able to “ do AI with good data” . And I plead guilty… But does it mean that Data Governance teams should start governing AI too ?

- Join my online [training on Mastering Data Governance](https://charlotte-ledoux.typedream.app/training)
- Get my [Data Governance templates](https://charlotteledoux.substack.com/p/data-governance-templates-starter)
- Discover my [consulting services](https://charlotteledoux.notion.site/)
- Join +270 readers of [“Data Governance : where to start?”](https://charlotteledoux.substack.com/p/ebook-data-governance)
- Get a boost with a [4 weeks training on Generative AI](https://www.data-bird.co/formation-gen-ai?utm_medium=referral&utm_source=charlotte_ledoux&utm_campaign=ambassadeur&utm_content=newsletter_avril)
---

🚀 Help required to shape the future of automated Data Governance !

We're building a tool that translates your prompts into repeatable automation scripts . Your data governance tasks could be automated : data quality checks, consistent formatting enforcement, metadata extraction, access request analysis, dataset enrichment, frequency of usage reporting, etc.

If you work with structured data (like CSVs or databases), we’d love your input.

👉 Take 3 minutes to tell us what you need most in a chatbot-driven scripting tool .

[Take the Survey](https://docs.google.com/forms/d/e/1FAIpQLSd52pwfCKM5YctGsijbhiQnPel_mQz-a7wOYAXONamOtA_4OQ/viewform?usp=header)

---

Let’s see what to do about it 👇

## Agenda

- What for?
- Where to start
- The future you (might) want
---

## What for?

AI is not dangerous by nature. It can be when people treat it like a magic tool without understanding the underlying concepts .

So yes, Data Governance teams should expand their scope to AI Governance .

## What if I don’t do AI?

That’s what many companies tell me. They are still struggling with building a simple data warehouse to do BI properly. AI is not even on the roadmap yet ! They think it’s something that will come in 5-10 years.

Sure they don’t do AI . But I’m sure they already use AI .

## Really?

Yes ! Employees are already using AI tools to generate code, summarize documents, create analysis and write emails. ALL. DAY. LONG.

👉 And they’re doing it without any guardrails .

It’s called “Shadow AI” . And it is the worst thing that could happen to your company right now.

Not because it’s bad. But because it’s invisible, unmanaged, and moving faster than your governance.

That means : ❌ No oversight on where the data goes ❌ No controls on what the AI says ❌ No accountability if things go wrong

---

## Where to start

Here are some very pragmatic steps you could start as Data Governance team :

1️⃣ Create an AI use inventory

- Action : Ask department heads to list all AI tools their teams use, including any browser-based tools (like ChatGPT, Grammarly, or Notion AI).
- Example : The marketing team might reveal they’re using ChatGPT for campaign drafts, while HR may use resume-screening tools with embedded AI. This provides a snapshot of unapproved usage and a starting point for governance.
2️⃣ Create a simple “AI Use Request” form

- Action : Use a basic Google Form or Microsoft Form to let employees request permission to use new AI tools. Include fields for purpose, data or file inputs if any, and expected outputs.
- Example : A customer support manager fills out the form to get approval to use an AI summarizer for ticket logs.
3️⃣ Assign an AI contact person in each department

- Action : Appoint one “AI referent” per team who helps identify risky AI use and guides colleagues on policy. Who wouldn’t be an AI referent? It’s fancy !
- Example : In Sales, the referent might help review prompts before someone uses customer data in ChatGPT or Claude.
4️⃣ Draft and share a simple “Acceptable AI Use” guide

- Action : Write a 1-page internal document outlining do’s and don’ts, such as: Do not input confidential data into public AI tools.
- Do cite sources if AI content is used in external materials.
- Do notify your manager if you’re testing an AI tool.
- Example : This guide is posted on your company intranet and is included in onboarding materials. It serves as a clear reference for the whole organization.
---

## The future you (might) want

Let’s recap. Of course first, you’ll work on quality of data. But then you need to take on the quality of AI meaning drift monitoring, explainability for key outputs, models versioning, etc.

> In any case : be the quality guard in a broad sense.

You want to influence behaviors towards respecting the guardrails . (These guardrails should be defined and validated by an AI committee, it's not up to the data governance team to impose its dictatorship 😅)

## A bright future?

Soon AI agents will be everywhere and your company will use them, custom and fine-tune the open source ones, and integrate them into workflows to automate tasks.

I know some companies are [going backward on the topic](https://content.techgig.com/technology/klarnas-ai-experiment-the-cost-of-replacing-humans-with-bots-revealed/articleshow/121161395.cms), realizing they moved too fast and fired an entire customer service department as AI agents were taking over the work.

I think it shows that we don’t take the problem under the right angle. AI is not here to replace us all ( at least not right now ).

> Saying “ AI won’t take your job but someone using AI will ” is like telling a film developer in the early 2000s that digital cameras won’t take your job, but a photographer using them will.

It wasn’t just that some photographers switched to digital, it was that the entire ecosystem changed. Film labs shut down, the economics of photography shifted, and millions of new creators emerged. The old job didn’t get automated : it became irrelevant.

People will still be needed to take decisions and direct the AI to do this or that task.

## Think AI agent governance

This means you need to prepare for governing AI agents . Your actions will change as Data Governance team. You’ll need to consider the following :

🏷️ Tag and classify AI use cases

🛠️ Use an AI use case inventory with risk tiering, Business owner & technical owner, Model type, data sources, output visibility

🔍 Monitor for hallucinations and wrong outputs

Just like you monitor dashboards for broken KPIs, monitor AI agents outputs .

Use synthetic prompts to test hallucination rates, feedback collection from real users (thumbs up/down, flagged outputs) and shadow deployments before going live.

🔐 Implement guardrails

- Use PII redaction before passing prompts to LLMs
- Limit AI access to appropriate documents/data sources
- Implement “prompt hygiene” rules to block risky user inputs
- Establish retention policies for logs and prompts
📜 Define which decisions require human-in-the-loop reviews

For high-risk decisions (hiring, pricing, compliance) : have a steward or reviewer validate the output before it gets acted upon.

> 💡 If you have already built a data governance foundation, meaning ownership, quality checks, access control, documentation, then AI governance is just the next layer !

See you soon,

Charlotte

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

I'm Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
