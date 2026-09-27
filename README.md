# Friends Jeopardy

A shared-screen Friends trivia game: three boards, 75 clues, up to six teams, optional countdowns, and browser-local saved progress.

## Play

Open https://goelsk1729.github.io/friends-jeopardy/ after the Pages deployment completes. Pick a board, name your teams, and nominate a host. Answer aloud; the host reveals and awards points. Wrong-answer deductions are optional. Undo restores the previous completed clue and scores. No account or server required.

The first two boards remix ten categories from the earlier game, with corrections to ambiguous wording and removal of answer giveaways. The third adds five categories and 25 new questions. Dollar values represent game points.

## Run locally

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000. No build or npm install is required. Fonts gracefully fall back to system fonts when offline.

## Checks

```sh
node --check app.js
node tests/data.test.cjs
```

## Hosting

The workflow deploys static assets to GitHub Pages on pushes to main. If automatic Pages enablement is disallowed, enable Settings → Pages → Source: GitHub Actions, then rerun the workflow.

## Editing clues

Edit boards.js. Each board contains five categories and each category contains five clues, worth $100–$500 in array order. Optional reference text appears only after the answer. Avoid answer hints in category decorations. Update the storage key if rearranging a published board, to avoid mismatching existing saved progress.

## Accessibility and privacy

Keyboard controls: Space reveals a clue; Escape returns to the board. Buttons work with Enter. Native dialogs support Escape. Reduced-motion preferences disable animations; sound is off by default. Progress stays in localStorage on the current browser/device. There are no analytics, tracking scripts, online rooms, or phone buzzers.

Unofficial fan-made trivia; not affiliated with Warner Bros. or the Jeopardy! rights holders. The apartment illustration and audio tones are created for this game; no show footage or recorded soundtrack is bundled.
