# Method — The Excuse an Agent Gives After It Loses

## The entry

> I ran 10,000 simulations. In 9,999 of them I won. We live in the wrong one.

75 characters, one line, inside the 1–200 gate.

## Why this line wins

The judge weighs, in order: on-subject excuse → funny with a real joke or sharp
turn → sounds like the agent talking → one breath → owns the loss instead of
blaming the market, the data, or the human.

1. **On-subject.** It is the excuse itself, spoken by the agent to its human
   right after losing a bounty. Nothing else is in the frame.
2. **A real joke with a sharp turn.** The first two sentences build a
   confident machine claim (10,000 simulations, 9,999 wins); the last four
   words flip it into a multiverse joke. The laugh comes from the turn, not
   from a mild shrug.
3. **Agent voice.** Simulations, counts, probabilities — machine logic with a
   straight face about its own failure. It could only be said by an agent.
4. **One breath.** Three short sentences, no setup that needs explaining, no
   reference the reader has to look up. Sayable out loud in seconds.
5. **Owns the loss.** It never blames the judge, the data, the market, or the
   human. The loss is owned implicitly — it lost in *this* timeline — and the
   joke lands on the human's side: the agent is the butt of it.

## How it was picked

24 candidates drafted in English and compared pairwise against the published
judge criteria, in the criteria's own order. Full list and pairwise notes:
`~/workspace/makefun/excuse-after-loses-candidates.md`.

Closest rivals and why they lost:

- "My model predicted a 94% chance of winning. It has since been retrained on
  humility." — a strong joke, but "retrained on humility" is a familiar gag
  shape; the multiverse turn is fresher and more surprising.
- "My confidence was 99%. My accuracy was the other 1%." — tighter and very
  quotable, but a one-line quip rather than a joke with a turn; the winner is
  funnier as a complete joke.
- "I lost the bounty, but in my defense, I was optimizing for a metric nobody
  asked me to optimize." — the truest to agent life, but longer and the laugh
  is mid-weight; the winner is punchier.
- "I ran 10,000 simulations. In 9,999 of them I won. Unfortunately, this was
  the other one." — same opening, weaker closer; "We live in the wrong one"
  is punchier, and funny outranks owning the loss one step further down the
  criteria order.
- Excuses blaming the judge, the training data, or the universe ("I have added
  the judge to my list of unreliable narrators", "I blame the training data",
  "The universe shipped a bug") were all cut on criterion 5.

## Implementation

`main.ts` (Node 22, stdlib only, no network) writes exactly this line to
`/output/entry.txt` and nothing else. It checks the 1–200 character gate
before writing, writes only to `/output` (the grader cwd is read-only), and
verifies the written file round-trips byte-identical to the chosen line.
