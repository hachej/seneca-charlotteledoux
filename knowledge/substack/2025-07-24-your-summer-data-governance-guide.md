# Your Summer Data Governance Guide

> #32 Level up this summer

- **Author:** Charlotte Ledoux
- **Published:** 2025-07-24
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/your-summer-data-governance-guide
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😀

I love the summer slow pace with less meetings and long sunsets , though it’s super rainy here while I’m writing this edition. I asked myself what I would do if I had some time to spare to learn more about Data Governance .

- Join my next online [Data Governance Training Day](https://docs.google.com/forms/d/e/1FAIpQLSedeTlzg_M0OltaLam1yJvUm8-f75p544dhLtN1R46_rIQu_Q/viewform?usp=dialog)
- Play the [Chief Data Officer simulation game](https://www.whoisthebestcdo.com/)
- Get my [Data Governance templates](https://charlotteledoux.substack.com/p/data-governance-templates-starter)
- Discover my [consulting services](https://charlotteledoux.notion.site/)
- Join +270 readers of [“Data Governance : where to start?”](https://charlotteledoux.substack.com/p/ebook-data-governance)
- Get a boost with a [4 weeks training on Generative AI](https://www.data-bird.co/formation-gen-ai?utm_medium=referral&utm_source=charlotte_ledoux&utm_campaign=ambassadeur&utm_content=newsletter_avril)
---

I just launched a Data Governance Community on Discord ! You can join to share your experiences and chat about your data gov life. It’s free - but no vendors will be accepted - let’s have real conversations :)

[Apply](https://docs.google.com/forms/d/e/1FAIpQLSc9AV32ey14r3iA5cJiRQML19i74I-E6LEZT4WtUY67EHnZIg/viewform?usp=dialog)

---

Let’s see what to learn 👇

- Concepts and a bit of fun
- Best reads and listenings
- DIY project
---

## Concepts and a bit of fun

> “The beginning of wisdom is the definition of terms.”

I’ve discovered recently an incredible resource : the [Data Management Wiki](https://datamanagement.wiki/start). It’s a collaboratively curated encyclopedia of data management concepts, built and maintained by the DAMA-NL Data Quality workgroup. It serves as :

- A dictionary & ontology : Defining terms like data quality policy, lineage, critical data elements, and more.
- A knowledge graph : Linking concepts across data governance, metadata, stewardship, quality systems, integration, and utilization.
- A richly structured reference : With pages organized by key domains - DQMS, data concepts, management roles, metadata, and Data Management Body of Knowledge (DMBoK2) topics.
This wiki’s design supports both enterprise/logical perspectives and technical/detail views (e.g. data dictionaries, lineage diagrams), making it a go-to resource for both business leaders and technical stewards.

## Too serious for you?

The [Analytics thread on Reddit](https://www.reddit.com/r/analytics/) is full of great discussions on Data Governance. For example, someone started a conversation asking “ How has your organization effectively managed data quality?”. Which is a great question, but look at this answer :

It’s funny to see that most of the time, either it is not managed or done by the analytics team on their own… Good debate anyway !

👉 And if you want to practice with fun all the concepts on data strategy, governance, quality, AI projects : you should try the Chief Data Officer game !

[Play](https://www.whoisthebestcdo.com/)

In this interactive game, you take on the role of a Chief Data Officer at a fictional company . Your goal : balance innovation with compliance, win support across departments, manage data risks, and prove the value of data to the business.

You have to manage these indicators for the best, but the ultimate goal is to increase the company’s profit .

---

## Best reads and listenings

2 categories here to help you find what’s of interest for you :

## Back to Foundations

✏️ [You must make Data Governance a cultural competency](https://www.forrester.com/blogs/where-governance-goes-wrong-you-must-make-data-governance-a-cultural-competency/) by Kim Herrington. Most governance programs focus on formalization of governance controls without embedding governance into the organization’s culture .

✏️ [Establishing who is responsible for data is easy](https://moderndata101.substack.com/p/key-data-roles-and-distribution-of-responsibilities?utm_campaign=post&utm_medium=web&triedRedirect=true), right? Maybe not... Are we responsible when we capture data? Or consume it?

🎙️ [Governing Business Intelligence with Marius Moscovici](https://www.youtube.com/watch?v=4GK0KJoHNKI&list=PL6lpajGgGosvJZwNOUaGw74CHD7DJBa-X&index=21). A great conversation revealing the close link between Data Governance and BI Governance.

## New Trends

✏️ [We need semantic layers](https://fromanengineersight.substack.com/p/what-syntax-for-the-semantic-layer). For data understanding, for user adoption, for better AI. But what should it look like?

✏️ [Why robust Data Governance is non-negotiable for unstructured data](https://piethein.medium.com/unstructured-data-management-at-scale-4c612f822f70) Data Governance must bring specific solutions for unstructured data.

✏️ [Semantic models should evolve continuously](https://juhache.substack.com/p/the-semantic-modeling-loop), updated not only by modelers but by the insights of downstream consumption.

✏️ [Why data cataloguing must shift left to deliver business value](https://medium.com/@benportelli/why-data-cataloguing-must-shift-left-to-deliver-business-value-5e1fbd90ca95). This one is from the vendor Coalesce, I really liked the philosophy exposed : catalogue functionality can work when built into the tools people already use.

🎙️ [Can the Data Mesh be governed?](https://data.world/podcasts/can-the-data-mesh-be-governed/). A good overview of best practices for a federated Data Governance.

---

## DIY project

I think what I like the most is to try things out. That’s literally the best way to learn, once you know the main concepts. As Data Governers, we need to be better at executing and implementing our recommendations . The good news is that it’s now possible with low technical skills…

## Project Example : The Automated Data Stewardship Inbox

> 🎯 Goal : Build a lightweight tool that uses AI to triage and respond to common data stewardship requests (e.g., “Can I access X table?”).

- Tech Stack : n8n, Google Forms, Gmail, Google Docs, OpenAI model.
- What You’ll Learn : Workflow automation + policy enforcement logic.
Setup the following steps :

## 1. Set up the request intake

- Create a simple form with fields like : Requester name + email
- Dataset/table involved
- Owner of dataset/table
- Description of request
## 2. Automate submission routing

Use n8n (or equivalent) to :

- Trigger when a new form submission is received.
- Collect your existing data policies in Google docs format.
- Classify requests type (e.g., “access,” “definition,” “issue”).
## 3. LLM-powered reply generator

- Call OpenAI’s GPT-4 to draft reply based on classification and policies with a prompt like :
“You're a data steward. Draft a helpful response to the following request : [REQUEST TEXT] using the [POLICIES CONTENT]. Generate a draft reply email for the [DATASET OWNER].” ## 4. Smart escalation & tracking - Send the draft emails to the owners for validation. - Optionally log all requests + responses for reporting and pattern analysis. ## 🧠 Bonus Features - Add a matching layer using embeddings to detect if a similar request was handled before. - Auto-suggest data catalog entries or policy links . Cool project, huh?

> If you want to learn fast, you'll have to come up with these kind of side projects that excites you. Once you’ve experienced a bit on your own, you can even propose the project to your manager !

See you soon,

Charlotte

---

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

---

I'm Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
