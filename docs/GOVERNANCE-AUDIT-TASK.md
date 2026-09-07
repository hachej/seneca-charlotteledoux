# AI Agent Governance Audit — task proposal for Charlotte

Status: proposal from Seneca, 2026-09-07. Nothing here is published or
contractual until Charlotte approves it. The agent remains independent
software; the task is "built with Charlotte Ledoux's method", not written by
her, unless she reviews each report.

## The idea in one paragraph

Instead of a chat agent sold by the month, sell one fixed-price task: a
reader describes an AI agent or AI-enabled workflow, and receives a
structured governance review (data, context, autonomy, responsibilities,
risks, controls, unknowns, a 30-day action plan). The reader's own agent, or
a short guided interview, collects the context; Seneca runs Charlotte's
method on models it controls, checks the result, and delivers a canonical
report. Charlotte owns the method and earns from every completed task.

Why a task and not a chat: readers can judge a deliverable; they cannot
judge a conversation. A bounded task can be priced, versioned, benchmarked
and improved. "Chat with the expert" is the most common failure in this
category.

## What is live today

A guided intake at `https://charlotteledoux.senecaapp.ai/intake`. A model
runs the interview in the reader's language, one screen at a time, using the
lenses below; the reader checks every answer on a review screen before
anything is sent; the result is a confirmed context pack. The audit itself,
the report and the email are not built yet: the first audits will be produced
with human review and sent by hand.

## The interviewing lenses (from the public corpus)

- Start from business strategy, decisions and value, not from governance
  machinery.
- Make ownership and decision rights explicit.
- Triage by data sensitivity × decision consequence.
- Governance by design: intake, context sources, access, evaluation,
  retention and human review are designed before production access.
- Shadow AI is normal; an explicit "unknown" is a useful fact, a guess is not.

Charlotte should read the interviewer's instructions before any reader does:
it is her voice the reader hears.

## The context pack (19 fields)

Required: agent or workflow name · what it does · business objective · users
and affected people · business and technical owners · decisions made or
actions taken · level of autonomy (advisory only / drafts with approval /
acts within limits / fully autonomous / not sure) · human approval points ·
data sources · data sensitivity (public / internal / confidential / personal
/ special-category / financial / not sure) · connected systems and
capabilities · outputs and recipients · existing controls.

Optional: model or vendor · known incidents or concerns · evaluation and
monitoring · prompt and log retention · constraints and deadlines · important
unknowns.

"None" and "unknown" are valid answers for required fields. The pack records
for each field whether the reader typed it or the model inferred it; inferred
values are shown for confirmation.

## The report (to be defined with Charlotte)

Executive summary with overall assessment and top priorities · system
overview · data and context map · responsibility map · risks, each with
evidence from the pack or an explicit assumption label, a proposed control,
an owner and expected evidence · 30-day action plan · assumptions · unknowns
· method version · disclaimer (decision support, not legal advice or
certification).

An earlier draft of this repository carried a four-tier risk classification
(Low / Moderate / High / Critical) as "an original synthesis for the demo,
not a published Charlotte Ledoux risk model". It was removed in the
second-brain refactor and is the natural starting point for the rubric, if
Charlotte agrees with it.

## What Seneca needs from Charlotte

1. Approve or edit the field list and the lenses above.
2. Approve the report outline and write, or approve, the rubric: what makes
   an audit good enough to carry her method's name.
3. Supply five test cases (a read-only internal assistant; an HR agent with
   sensitive data; a finance agent with approval; a support agent connected
   to several systems; an ambiguous case with many unknowns) so the audit
   can be checked before any reader sees it.
4. Review the first five to ten reports and mark what she would change. This
   is how the task earns the right to be automated.
5. Decide the economics: a paid task (proposed €79 including one revision,
   founding split 70/30 of net revenue, manual monthly payout), a lead magnet
   with a paid debrief, or a bundle. Do not publish a percentage before the
   policy exists.
6. Decide whether she promotes it to her list, and when.

## Boundaries that stay

Public sources only. No paid templates, lead-gated material or private
client material. The agent is not Charlotte, does not speak for her, and
every report says so. Readers are told to redact confidential information
they do not need to share. Nothing is used for training.

## Where the rest lives

Seneca repository: `docs/intake.md` (the intake), `docs/research/
task-router-decision-record.md` (the product thesis), `docs/research/
task-router-gtm-challenge.md` (the launch plan and its decision gates).
