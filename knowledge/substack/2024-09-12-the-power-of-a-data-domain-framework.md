# The power of a Data domain framework

> #11 Or how to scale Data Governance

- **Author:** Charlotte Ledoux
- **Published:** 2024-09-12
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/the-power-of-a-data-domain-framework
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😀

September has always a particular taste, between summer nostalgy and the gentle return to a routine filled with promise of new beginnings.

But overall, it sucks.

---

My online course “Define your Data Governance strategy” has been updated and is available in a Notion space with all lectures, videos and templates that I will update regularly, you can join it here :

[Join now](https://www.charlotte-ledoux.xyz/training)

If you haven't already, you can also :

- Discover my [coaching services](https://www.charlotte-ledoux.xyz/coaching)
- Join +170 readers of [“Data Governance : where to start?”](https://charlotte-ledoux.typedream.app/ebook)
- Follow me on [Linkedin](https://www.linkedin.com/in/charlotteledoux/) and [Twitter](https://x.com/LedouxCharlotte)
---

Remember my previous post about roles and defining respective scopes. I mentioned several times the concept of “domains” so…

Let’s dig into it 👇

## Agenda

- What is a data domain
- Why it’s great
- How it scales
---

## What is a data domain

A data domain is a way to group and organize data based on specific business functions or areas of interest.

Think of it as a category or segment of your data landscape . Each domain represents a distinct part of your organization's data.

## Great, give me examples

From what I’ve seen, you could have domains for Customer Data, Financial Data, Marketing Data or Product Data . As long as these categories make sense from a business point of view.

❌ Don’t imagine too complex domains like “the data used only by our partners”. It’s too broad and will probably cross over Product data for example.

❌ Don’t be too specific right away like the price of a sub-category of products sold during Christmas period.

2 options here :

OPTION 1️⃣ : Base your domains on the organizational structure . This approach aligns data domains with the existing business units or departments, ensuring that each team has clear ownership and responsibility over its data.

> Here’s how you can get started 👇

- Assess current organization chart . How are teams organized? What data is used by each team?
- Define clear boundaries for each data domain mapped with business units . What data seem to belong to each domain? How do they relate to one another?
OPTION 2️⃣ : Determine your data domains by following your data value stream .

> Here’s how you can get started 👇

- Understand how the company generates revenues . What are the main business processes? What data is essential for execs?
- Define clear boundaries for each group of data making sense for business. What data seem to belong to each business process?
- Establish data elements in each data domain. Ask to Business team members which data they need to compute their objectives (number of impressions or clicks, campaign costs, etc.).
- Group data elements into data families that make sense. You could have data families representing logical divisions : "Television" for data on television campaigns, "Social media" for data coming from social media, etc.
---

## Why it’s great

## It makes Data Governance small

🤯 By breaking down data into smaller, manageable domains , you reduce the complexity of Data Governance. For example, instead of managing all customer-related data as a single entity, you can have separate sub-domains for :

- customer contact information,
- customer segment,
- and customer feedback.
## And business-specific

Domains are aligned with specific business areas or processes , ensuring that the data is organized in a way that makes sense to the business.

For instance, a retail company might create separate domains for Inventory Data, Sales Data, and Marketing Campaign Data.

> Each domain will have sub-domains , allowing you to assign ownership on specific elements.

This will solve the never ending question of “ what do we do when teams are using the same concept but with different definitions? ”.

Well you do nothing, it’s fine.

👉 As long as they assign a clear owner within the domain for each definition and use different namings to avoid confusions.

## And decision-oriented

The framework will showcase important data required for decision-making.

In general, a Product Data domain include information needed to get insights on the business performance by product category, sales forecast, new product specifications, etc.

> All these use cases will rely on the Product data domain . This is incredibly powerful to show that Data Governance is a prerequisite to BI, analytics and AI use cases .

---

## How it scales

## A federated Data Governance…

The data domain framework lives within a federated model .

The idea is to keep a central governance body that establishes and enforces overarching policies, standards, and best practices.

👉 This central body ensures consistency across the organization : you don’t want to end up with 5 different definitions of a customer , one for each domain.

You should define one Data Domain Owner for each domain . In general, the Data Domain Owner is a Manager / Director who will sponsor Data Governance initiatives because they understand the business benefits behind.

> 🔍 Tip #1 : The Data Domain Manager is someone from the central body who will help to structure the domain and coordinate first initiatives until the domain is fully autonomous.

## … with interoperability and standardization…

Data domains should be designed to interoperate with one another through standardized interfaces, data formats, and integration protocols.

It is crucial that the central team takes on the responsibility of guaranteeing interoperability between domains .

## Cool, what does it mean exactly?

Many use cases will involve data from several domains . As data will be crossed, it must be done with the same formats and naming.

👛 For example, say you want to determine product pricing strategies .

The finance team will integrate manufacturing costs from the Product Data domain with profitability analysis in the Financial Data domain. This integration should be done using the same format and naming for Product data especially - you want matching products to merge the 2 tables .

## … through incremental implementation

The framework can be implemented incrementally, starting with a few key domains and gradually expanding as needed.

This approach will allow you to match your organization growth, without overwhelming your resources.

> 🔍 Tip #2 : Start with the “easiest” domain, meaning people already mature on data, and sensitive to the benefits of a good data quality. Te be honest, in general the Finance department is easier 😈

See you soon,

Charlotte

---

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

---

I'm Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
