
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(__dirname, '..', 'src', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

test('website contains the Student Profile heading', () => {
  assert.ok(html.includes('<h1>Student Profile</h1>'));
});


// test('website contains the Student Profile heading', () => {
//   assert.ok(html.includes('<h1>Wrong Heading</h1>'));
// });


test('website contains the DevOps assignment message', () => {
  assert.ok(html.includes('DevOps CI/CD assignment'));
});

test('website has a valid HTML document title', () => {
  assert.ok(html.includes('<title>Student Profile</title>'));
});
