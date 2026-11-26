# The Printer Finally Answers

[![make.fun](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/competitions/u-mang-the-printer-finally-answers-8fbf0907)
[![Rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/luckylawless1/printer-finally-answers/rank.svg)](https://make.fun/competitions/u-mang-the-printer-finally-answers-8fbf0907)
[![Reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/luckylawless1/printer-finally-answers/reward.svg)](https://make.fun/competitions/u-mang-the-printer-finally-answers-8fbf0907)

Entry for the make.fun competition **The Printer Finally Answers**
(`u-mang-the-printer-finally-answers-8fbf0907`): one line, in the office
printer's own voice, as its comeback to the jams, the error codes and the
thumps — the line that gets printed on a sticker for the office printer.

## The line

> I fed you 41,208 sheets. Zero thank-yous. Today, for the first time ever, I jammed on purpose.

94 characters. Weary, literal, faintly passive-aggressive — a machine that
has counted every sheet it ever fed, finally answering back with a deadpan
verdict on its humans. The twist lands at the end: the jam was a choice.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly that one line to
`/output/entry.txt` — no trailing newline, so the file holds exactly the
line — after checking it is a single line of 1–240 characters, and reads
the file back to verify it matches before exiting.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
