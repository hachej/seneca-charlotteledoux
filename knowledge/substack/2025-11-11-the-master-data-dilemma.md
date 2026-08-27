# The Master Data dilemma

> #38 It's not for everyone

- **Author:** Charlotte Ledoux
- **Published:** 2025-11-11
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/the-master-data-dilemma
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😀

I feel like a lot of companies are *at some point* asking themselves (or me!) : should we start a Master Data initiative ?

- Checkout my [Media Kit](https://charlotteledoux.ai/sponsors) to promote your product/service to my audience
- Play the [Chief Data Officer game](https://whoisthebestcdo.com/)
- Join my [online Data Governance Training](https://charlotteledoux.ai/training)
- Get my [Data Governance templates](https://charlotteledoux.ai/templates)
- Discover [how we can work together](https://charlotteledoux.ai/)
- Build [games for Data Governance with our studio](https://maketools.ai/)
- Join +350 readers of [“Data Governance : where to start?”](https://charlotteledoux.ai/ebooks)
---

## Building the Context Layer for the AI Era

re:Govern 2025 On-Demand

In the internet era, content was king. In the AI era, context will be sovereign. The discussions shaping the future of data and AI are now live. If you missed re:Govern 2025, catch insights from leaders at Mastercard, Workday, DigiKey, Gitlab and others.

The takeaway : Governance isn’t about control anymore . It’s about context.

Forward-thinking organizations are rebuilding their data foundations to make information not just available, but understandable. Context is becoming the infrastructure for trust, scale, and speed.

## Watch to Learn :

• Joe DosSantos (Workday) on Context as Culture : How Workday’s Semantic Layer Builds Trust in AI

• Andrew Reiskind (Mastercard) on Context by Design : How Mastercard is Building Responsible Agentic Commerce

• Kiran Panja (CME Group) on Context at Speed : How CME Delivers AI-Ready Data in Seconds

• Sridher Arumugham (Digi-Key) on Context Readiness : How Digi-Key is Pioneering AI’s Impact on Supply Chains

• Mauro Flores (Virgin Media O2) on Context for All : How VMO2 Scales Data & AI Self-Service for 16,000 People

📺 [Watch re:Govern 2025 On Demand](https://atlan.com/regovern-watch-center/?utm_source=substack&utm_medium=web&utm_campaign=regoverncharlotte) 📘 [Explore the Modern Data & AI Governance Blueprint](https://atlan.com/blueprint/?utm_source=substack&utm_medium=web&utm_campaign=regoverncharlotte)

---

Let’s see how to deal with it

## Agenda

- Master Data or not
- The tooling problem
- When to actually start
---

## Master Data or not

Do I need to remind you what is a “Master Data”?

- Master Data → the core business entities that every department relies on : Customers (Sales’ CRM vs. Finance’s billing records vs. Support’s helpdesk)
- Products (ERP codes vs. e-commerce catalogs vs. marketing brochures)
- Suppliers (Procurement’s database vs. Finance’s vendor files)
Please, don’t confuse them with Reference Data and Golden Data, [as explained in a previous edition of this newsletter](https://thedatagovernanceplaybook.substack.com/p/what-to-do-with-cross-functional) 😈

> → Want something fun? [Watch the Super Hero of Master DATAAAA](https://www.youtube.com/watch?v=-ad-BMkidKw&list=PLashWxBySOAOKUtvn2NTBQeENJTLB8NoS) 🤯

## Mhh ok, what’s the problem with Master Data?

First, it has a cost : Master Data Management tools are expensive. But we’ll come back to that later.

Here are some key topics that people tend to forget when they want to start a Master Data initiative :

- Data Modeling : you’ll have to decide what your core entities are (like Customers, Products, Suppliers), what info describes them, and how they connect. It includes defining data attributes, and relationships using [conceptual, logical, and physical models](https://www.couchbase.com/blog/conceptual-physical-logical-data-models/).
- Data Quality : it’s about keeping your information accurate, complete, and up to date. Duplicates, typos, and missing info? Gone. No tool will do the cleaning magically for you.
- Data Integration : a unified view of master data into a centralized repository will come from the ultimate combination of data from different sources , formats and systems.
- Data Governance : your Master Data will have to be managed clearly through policies, processes and standards. You’ll need to define roles, responsibilities, and decision-making authority (who creates, updates, gets access?)
It’s actually so much more complicated than we think to setup.

---

## The tooling problem

🤯 The reality is that many businesses still use Excel files to share Master Data (site locations, suppliers, etc...).

In the long term, it will cause some synchronisation issues especially for BIs or when used for business apps. Say a file that was “standardized” had been modified by one of its owners (adding new columns) due to a totally legitimate need. This typically would impact your BI tool…

👉 This is when companies start to see it as a tooling problem , and look for appropriate tools - meaning MDM tools like Informatica, Profisee, Semarchy, etc.

These MDM platforms promise a “ single source of truth ”. I must admit it sounds great : avoid duplicates, ensure correct fields, streamline interactions, fewer manual corrections, access consolidated and reliable indicators. You can even improve consent management and auditability in case of Customers.

> 🔍 Side Note : In reality, they’re just another system that needs to connect to all your other systems. Without proper governance, data quality rules, and ownership, your shiny MDM becomes just another silo .

## The governance trap is waiting for you

But the real challenge isn’t the tool, it’s people and processes.

Let’s take an example :

- Who owns the customer record? Is it Sales? Finance? Marketing?
Everyone wants a piece of the truth… until someone needs to fix duplicates or merge conflicts . This means that once you have a clear business owner, you’ll also need some escalation paths to make sure that everything doesn’t rely only on this owner :

- Operational issue - update of a data quality rule : → Resolved by Data Steward or Custodian.
- Cross-domain issue - adding a new field to the Customers : → Escalated to Data Domain Committee.
- Strategic or Resource Conflict - assigning someone to collect new data : → Escalated to Data Governance Council.
👉 Without a clear governance model , your MDM project can turn into a political battlefield…

---

## When to actually start

Do you really need it? Good question.

Some businesses never really need to manage their Customers base as Master Data. They can survive with their Excel files .

💡 If you’re wondering whether to start a Master Data initiative, try this checklist :

- Pain points : Are different teams constantly fighting over inconsistent data? And I mean at least 3 teams.
- Scale : Do you manage enough entities (customers, products, suppliers) to justify the effort?
- Integration : Do your systems already talk to each other efficiently? Nothing too manual for sure…
- Governance readiness : Do you have people who can own the management of master data, including CRUD and quality processes?
- Budget & patience : MDM takes time and money. Be sure you can sustain both.
If you tick at least three boxes :

🎊 Congratulations , you might actually need Master Data . Otherwise, keep your systems simple, and focus on building reliable integrations instead.

See you soon,

Charlotte

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

I’m Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
