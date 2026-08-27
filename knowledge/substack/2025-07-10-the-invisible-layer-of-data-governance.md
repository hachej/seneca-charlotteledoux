# The Invisible Layer of Data Governance

> #31 Risks, Rewards, and Realities

- **Author:** Charlotte Ledoux
- **Published:** 2025-07-10
- **Public source:** https://thedatagovernanceplaybook.substack.com/p/the-invisible-layer-of-data-governance
- **Access at sync:** Public (Substack audience: everyone)

---

Hello 😀

Usually my clients ask for my services because there is no existing Data Governance in their organization. But it’s not true…

- Join my [online training on Mastering Data Governance](https://charlotteledoux.notion.site/Mastering-Data-Governance-Strategy-210c19a5aae88058bc58cc8fe797ccf8?pvs=74)
- Play the [Chief Data Officer simulation game](https://www.whoisthebestcdo.com/)
- Get my [Data Governance templates](https://charlotteledoux.substack.com/p/data-governance-templates-starter)
- Discover my [consulting services](https://charlotteledoux.notion.site/)
- Join +270 readers of [“Data Governance : where to start?”](https://charlotteledoux.substack.com/p/ebook-data-governance)
- Get a boost with a [4 weeks training on Generative AI](https://www.data-bird.co/formation-gen-ai?utm_medium=referral&utm_source=charlotte_ledoux&utm_campaign=ambassadeur&utm_content=newsletter_avril)
---

I just launched a Data Governance community on Discord ! You can join to share your experiences and chat about your data gov life. It’s free - but no vendors will be accepted - let’s have real conversations :)

[Apply](https://docs.google.com/forms/d/e/1FAIpQLSc9AV32ey14r3iA5cJiRQML19i74I-E6LEZT4WtUY67EHnZIg/viewform?usp=dialog)

---

Let’s see what’s invisible 👇

## Agenda

- The unofficial data rules
- Make it visible
- Enforcement, a necessary evil
---

## The unofficial data rules

Recently at one of my client, a team was dedicated to the creation of new products in a system. It’s a pretty common task. This team was filling a standard file. Everything seemed normal.

But then, I discovered that another team was enriching this file with other stuff .

They were adding columns, manually of course, to make it match to their system. This step even had a name in their team. Then their system was sending the full new list of products to other systems, as part of a gigantic transformation project aiming at making product prices dynamic. The tiniest mistake could become a monster at any time.

You can imagine why I could barely breathe after meeting this team during my assessment phase 🤯

> This is what I call the invisible layer of Data Governance. People find ways and workarounds to make data right for their needs , access it, etc.

That’s organic work .

Some other examples of unofficial Data Governance that I’ve encountered :

- Unwritten rules about which fields are “required” vs. ignored
- Spreadsheet pipelines that bypass official data platforms
- Manual workarounds for broken workflows (“just email me the CSV”)
- Gatekeepers who control access informally
I’m sure you know what I’m talking about.

👉 This unofficial layer or shadow governance is overall a messy web of tacit rules, tribal knowledge, and informal practices that often carry more weight than any policy document.

---

## Make it visible

A few years ago I was a consultant in Supply Chain Management (yep, Data Governance was not trendy at this time…). We were basically doing process optimization for supply chain operations . In many cases, we were working for a department called “ Continuous Improvement ”, sound familiar, right?

One of the most effective things we did was sit down with the Business Process Owner and literally draw out each step together on a whiteboard .

After that, the process was perfectly documented in Visio diagrams : orders creation in the ERP, fields validated automatically, exceptions escalated through a defined workflow.

> I think we need to apply the same approach to Data. We don’t have “ Data Process Owners ” though, and that’s probably why unofficial Data Governance happens…

Let’s break it down in 5 steps :

1️⃣ Map the workarounds

- Interview stewards, analysts, and users. Ask for example : “If you had to get this data today, step by step, how would you really do it?”
- Document informal processes without judgment (it’s hard !)
2️⃣ Identify the root causes

- Are policies too rigid? Are tools hard to use or not fit for purpose?
- Are there incentives to skip the official path?
3️⃣ Make the invisible visible

- Share findings openly
- Showcase actual practices as signals of friction
4️⃣ Co-design solutions

- Bring teams together on a workshop to co-create simpler policies
- Document updated policies & processes
5️⃣ Enforce policies

Wait, what’s this last step?

---

## Enforcement, a necessary evil

Enforcement feels uncomfortable especially if your culture is based on autonomy. But let’s face it, we need it, at least on critical policies.

One approach that’s gaining traction is policy as code.

## What is Policy as Code?

Policy as code means writing your data governance rules in a machine-readable form that can be automatically enforced across systems. It avoids having the “manual data chaos” that we described earlier.

So instead of :

> “Data must be classified before it is published,” written in a Word document,

…and then relying on people to remember, you have :

✅ An automated rule in your pipeline that checks whether a dataset has a classification tag before it moves downstream.

To launch this type of initiative, you’ll also need :

🗄️ A central repository for all policies

- Use a version-controlled repository (Git or similar) as the home for all policy definitions
📁 A clear folder structure

- Organize by domain, data platform, or policy type (e.g., security, privacy, quality)
📋 A “ Readme” documentation

- For each policy, explain : Purpose, Scope, Enforcement mechanism, Owners
🧑‍🔧 A good Data Engineer to help you

- Or should I say a Data Governance Engineer? 😈
## Why it’s cool

✅ You have a record of which policies were applied and when

✅ Checks happen automatically , you don’t slow down business with reviews

✅ Data Governance team is finally seen as an impact team taking actions !

See you soon,

Charlotte

---

Thanks for reading The Data Governance Playbook! Subscribe for free to receive new posts and support my work.

---

I'm Charlotte Ledoux , freelance in Data & AI Governance.

You can follow me on [Linkedin](https://www.linkedin.com/in/charlotte-ledoux-53b43253/) !

---

_Public article archived for source-grounded retrieval. Charlotte Ledoux retains authorship. This independent agent is not affiliated with or endorsed by her._
