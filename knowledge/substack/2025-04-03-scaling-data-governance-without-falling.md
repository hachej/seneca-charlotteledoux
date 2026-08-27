# Scaling Data Governance without falling into the Data Mesh trap

> #24 Beyond the Hype

- **Author:** Charlotte Ledoux
- **Published:** 2025-04-03
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/scaling-data-governance-without-falling
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😀

Like I said on LinkedIn : I love how Data people change their minds every 6 months. (and it's ok, it shows the ability to question oneself)

Data mesh was the revolution, and then... no.

- Join my [training on Mastering Data Governance](https://charlotte-ledoux.typedream.app/training)
- Get my [Data Governance templates](https://charlotteledoux.substack.com/p/data-governance-templates-starter)
- Discover my [consulting services](https://charlotteledoux.notion.site/)
- Join +230 readers of [“Data Governance : where to start?”](https://charlotteledoux.substack.com/p/ebook-data-governance)
- Follow me on [Linkedin](https://www.linkedin.com/in/charlotteledoux/) and [Twitter](https://x.com/LedouxCharlotte)
Let’s see how we can scale 👇

## Agenda

- The Data Mesh trap
- It’s all about balance
- Scale-up with a marketplace
---

## The Data Mesh trap

You all know the [founding article of Data Mesh](https://martinfowler.com/articles/data-mesh-principles.html) by Zhamak Dehghani. The promise of Data Mesh is autonomy of domains.

To reach this state, you’ll need to define your domains, create multi-disciplinary teams that can deliver data products on their own relying on infrastructure-as-a-service provided by IT. A data mesh emphasizes a domain-oriented, self-service design .

Honestly this requires super smart AND skilled people . Let’s face it, in most companies today this is strictly impossible.

What happens usually :

- Mapping of domains takes months and never ends
- Some domains are created but rely on the Data team to deliver data products
- To enable self-service and pretend the organization is doing Data Mesh, the Data team will start giving licences to dataviz tools to all business users asking for it
- IT will say stop when they realize that costs are exploding
- Everything is back to normal, meaning back to the centralized approach
## Why is this happening?

> Because without governance , autonomy turns into anarchy .

---

## It’s all about balance

It is always really hard to find the sweet spot between autonomy and control. The key is to enable teams while maintaining alignment and trust .

## Cool, but how?

Coming back to the mapping of domains. You don’t have to map ALL domains before starting. Map the most obvious ones (usually the most mature) and start from there.

A central Data Governance team will be required to do this mapping, but also to setup guardrails for all domains. I used to think that this central team could disappear over time, but this will be in a lonnnnng time 😈 when we have reached a very high degree of maturity .

With the first domains, you can :

👥 Define data ownership & stewardship – Every domain should have clear roles: Who creates? Who validates? Who maintains?

Help the domain defining these roles and responsibilities with a RACI matrix, and make sure they will be valid for all domains.

🔍 Set clear rules for critical data assets – Define the business definitions and rules for quality but allow flexibility where needed.

Example : if a data asset like a metric is used by 2 domains, allow to have 2 different definitions so they can have their own specificities.

💡 Enable self-service with guardrails – Give domain teams the autonomy to progressively use and share data assets while providing governance tools that make compliance seamless.

In an ideal world, each data asset (a dataset, a visualisation, an analysis, etc.) must be :

- shared to be reusable across domains,
- with complete metadata
- and access rules.
---

## Scale-up with a marketplace

😈 Mh ok, but helping all domains is going to require a lot of effort from the central Data Governance team , no?

Good point. Imagine a “ Data Product Marketplace” , where trusted, high-quality data is accessible and reusable across teams .

## Wait, what?

A data marketplace is a platform that enables organizations to publish, discover, and exchange data assets in a structured and governed way.

It functions like an online store for data , where users can browse, request, and access data assets whether internally within a company or externally between organizations.

You can learn more here with a guide from Opendatasoft :

[Learn more](https://www.opendatasoft.com/en/resources/data-marketplaces-ebook/?utm_source=Influence&utm_medium=paidsocial&utm_campaign=Influence-Newsletter-Charlotte-Ledoux-Odoxa)

A governed data marketplace should include :

> ✔️ Discoverable & certified data products with clear ownership ✔️ Embedded quality checks & compliance monitoring ✔️ Access control policies that ensure security without friction ✔️ Collaboration & feedback loops so data assets improves over time

## Why it can give an answer to the Data Mesh trap :

Teams can manage their own data assets in autonomy while following global governance standards set at an organizational level :

- Every business user can publish data assets as long as they complete metadata required and respect global standards.
- Different business units can discover and access trusted data assets without bottlenecks caused by excessive IT intervention.
- Access controls ensure that only authorized users can retrieve sensitive data.
- Quality indicators and usage metrics help users assess whether the data asset meets their needs.
## How’s that different from a data catalog?

Let’s see some key differences :

💡You know I love analogies when it comes to understanding concepts :

- A data catalog is like a library index : it tells you what books (data assets) exist, where to find them, and their details.
- A [data marketplace](https://www.opendatasoft.com/en/resources/data-marketplaces-ebook/?utm_source=Influence&utm_medium=paidsocial&utm_campaign=Influence-Newsletter-Charlotte-Ledoux-Odoxa) is like an online bookstore : it lets you not only browse books but also request, borrow, or even buy them.
👉 Overall the data marketplace allows self-service access with controls .

See you soon,

Charlotte

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

I'm Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
