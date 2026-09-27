const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const context={window:{}};vm.runInNewContext(fs.readFileSync('boards.js','utf8'),context);
const boards=context.window.BOARDS;assert.equal(boards.length,3);const questions=new Set();
for(const b of boards){assert.equal(b.categories.length,5);for(const c of b.categories){assert.equal(c.clues.length,5);for(const clue of c.clues){assert.ok(clue.question.trim());assert.ok(clue.answer.trim());assert.ok(!questions.has(clue.question),'Duplicate clue');questions.add(clue.question);}}}
assert.equal(questions.size,75);
for(const name of ['index.html','app.js','boards.js','styles.css'])assert.ok(!/vrin|birthday/i.test(fs.readFileSync(name,'utf8')),`Personal reference in ${name}`);
console.log('75 unique clues; 3 complete boards; personal references absent.');
