# Validation

Checked in Chromium with desktop (1440 × 1080) and mobile (390 × 844) viewports.

- All three boards have five categories and five clues per category: 75 distinct questions.
- Complete 75-clue playthrough reaches the finale; no JavaScript errors occurred.
- Awarding a correct answer, optional negative scoring, undoing deductions, and undoing a completed clue restore expected scores.
- Reloading during a revealed clue preserves the answer and deductions without awarding twice.
- Returning from an unrevealed clue leaves it available.
- Countdown expiration does not expose the answer; keyboard Space reveals and Escape returns.
- New-game cancellation retains progress; confirmation resets progress and scores.
- Team names containing quotes, angle brackets, and ampersands remain text.
- Mobile home, board container, and clue view have no page-level horizontal overflow. The five-column board scrolls within its container, with an explicit swipe hint.
- Desktop and mobile screenshots inspected. Custom inline SVG icons do not depend on emoji font support.

Run the content check with `node tests/data.test.cjs`. For the browser tests, install Playwright in your development environment and run `node tests/gameplay.cjs`. If using an existing Chromium binary, set `CHROMIUM_PATH` to its location. The browser test starts its own temporary HTTP server.

GitHub Pages deployment is independently gated by the repository's Pages source setting. Passing these tests does not itself establish that the live site has deployed.
