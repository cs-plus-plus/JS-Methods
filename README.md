# CS++ JavaScript — Methods & Returns

> **Unit 8.2** | 100 Points | 9 Automated Tests

In this assignment you will learn how to use built-in **String** and **Math** methods. Methods are tools that come with JavaScript — you don't have to write them yourself.

---

## Table of Contents

1. [What Is a Method?](#what-is-a-method)
2. [String Methods](#string-methods)
3. [Math Methods](#math-methods)
4. [Parameters and Return Values](#parameters-and-return-values)
5. [Assignment](#assignment)
6. [Scoring Rubric](#scoring-rubric)
7. [Converting Strings to Numbers](#converting-strings-to-numbers)
8. [Tips for Success](#tips-for-success)
9. [FAQ](#faq)

---

## What Is a Method?

A **method** is a function that belongs to a value. When you write `"hello".toUpperCase()`, the method `toUpperCase()` belongs to the string `"hello"`. It takes the string and **returns** a new string `"HELLO"`.

The original string is not changed — methods return a **new** value:

```javascript
let word = "hello";
let upper = word.toUpperCase();  // "HELLO"
// word is still "hello"
```

---

## String Methods

Strings have many built-in methods. Here are the ones you will use in this assignment:

| Method | What it does | Example | Result |
|--------|-------------|---------|--------|
| `.charAt(i)` | Returns the character at position `i` (starts at 0) | `"Hello".charAt(0)` | `"H"` |
| `.toUpperCase()` | Returns a new string with all letters uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `.toLowerCase()` | Returns a new string with all letters lowercase | `"HELLO".toLowerCase()` | `"hello"` |
| `.indexOf(str)` | Returns the position of `str`, or -1 if not found | `"Hello World".indexOf(" ")` | `5` |
| `.substring(start)` | Returns everything from `start` to the end | `"Hello".substring(1)` | `"ello"` |
| `.substring(start, end)` | Returns from `start` up to (not including) `end` | `"Hello".substring(1, 3)` | `"el"` |
| `.length` | The number of characters (not a method — no parentheses) | `"Hello".length` | `5` |

### Chaining Methods

You can call methods one after another:

```javascript
let first = "hELLO".charAt(0).toUpperCase();  // "H"
let rest = "hELLO".substring(1).toLowerCase(); // "ello"
```

---

## Math Methods

The `Math` object has useful methods for calculations:

| Method | What it does | Example | Result |
|--------|-------------|---------|--------|
| `Math.sqrt(x)` | Returns the square root of x | `Math.sqrt(25)` | `5` |
| `Math.pow(b, e)` | Returns b raised to the power e | `Math.pow(2, 3)` | `8` |
| `Math.round(x)` | Rounds to the nearest integer | `Math.round(3.7)` | `4` |
| `Math.floor(x)` | Rounds down to the nearest integer | `Math.floor(3.9)` | `3` |
| `Math.ceil(x)` | Rounds up to the nearest integer | `Math.ceil(3.1)` | `4` |
| `Math.abs(x)` | Returns the absolute value | `Math.abs(-5)` | `5` |
| `Math.PI` | The value of π (3.14159...) — a constant, not a method | `Math.PI` | `3.14159...` |

You can also use the `**` operator instead of `Math.pow()`:

```javascript
let result = 2 ** 3;  // 8 — same as Math.pow(2, 3)
```

---

## Parameters and Return Values

A **parameter** is the input you give to a method. A **return value** is what the method gives back.

```javascript
"Hello".charAt(0)     // parameter: 0    → return value: "H"
Math.sqrt(25)          // parameter: 25   → return value: 5
"Hello".indexOf("l")  // parameter: "l"  → return value: 2
```

When we say a method **returns** something, it means the method produces a value that you can store in a variable or use in an expression:

```javascript
let position = "Hello World".indexOf(" ");  // position is 5
let letter = "Hello".charAt(position + 1);  // letter is "W"
```

---

## Assignment

Complete the four functions in `script.js`. Each function is triggered by a button in `index.html`.

### Warm-Up: titleCase() — 15 points

Write a function that:
1. Prompts for a single word
2. Returns the word with the first letter uppercase and the rest lowercase
3. Alerts the result

For example: `"hELLO"` → alert shows `"Hello"`

### getInitials() — 25 points

Write a function that:
1. Prompts for a full name: a first name, one space, and a last name
2. Gets the first letter of each name and makes it uppercase (`.indexOf(" ")` tells you where the last name starts)
3. Puts a dot after each initial
4. Alerts the result

Examples:
- `"John Doe"` → alert shows `"J.D."`
- `"ada lovelace"` → alert shows `"A.L."`

### hypotenuse() — 20 points

Write a function that:
1. Prompts for side a
2. Prompts for side b
3. Calculates the hypotenuse using `Math.sqrt(a * a + b * b)`
4. Alerts the result in this exact format: `Hypotenuse: X.XX`

The result must be rounded to **2 decimal places** using `.toFixed(2)`.

Examples:
- Sides 3, 4 → alert shows `"Hypotenuse: 5.00"`
- Sides 5, 12 → alert shows `"Hypotenuse: 13.00"`

### distance() — 25 points

Write a function that finds the distance between two points (x1, y1) and (x2, y2):
1. Prompts four times, in this order: `Enter x1`, `Enter y1`, `Enter x2`, `Enter y2`
2. Calculates the distance using the distance formula: `Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))`
3. Alerts the result in this exact format: `Distance: X.XX`

The result must be rounded to **2 decimal places** using `.toFixed(2)`.

Examples:
- (0, 0) and (3, 4) → alert shows `"Distance: 5.00"`
- (2, -1) and (-4, 7) → alert shows `"Distance: 10.00"`

### Code Quality — 15 points

- **Uses a String method** — `.charAt()`, `.toUpperCase()`, `.toLowerCase()`, `.indexOf()`, or `.substring()` (10 points)
- **Uses `Math.sqrt()`** (5 points)

Comment lines don't count for these two checks: the STEP comments in `script.js` mention these methods, so they have to appear in your actual code.

---

## Scoring Rubric

| # | Test | Points | What the autograder checks |
|---|------|--------|---------------------------|
| 1 | titleCase() — "hELLO" → "Hello" | 15 | Correct capitalization |
| 2 | Uses a String method | 10 | Your code (not a comment) calls a String method |
| 3 | getInitials() — "John Doe" → "J.D." | 15 | Correct initials |
| 4 | getInitials() — "ada lovelace" → "A.L." | 10 | Initials are uppercase even when the name is not |
| 5 | hypotenuse() — 3, 4 → 5.00 | 10 | Correct calculation and format |
| 6 | hypotenuse() — 5, 12 → 13.00 | 10 | Correct calculation and format |
| 7 | Uses Math.sqrt() | 5 | Your code (not a comment) contains `Math.sqrt(` |
| 8 | distance() — (0, 0) to (3, 4) → 5.00 | 15 | Correct distance and format |
| 9 | distance() — (2, -1) to (-4, 7) → 10.00 | 10 | Works when the differences are negative |
| | **Total** | **100** | |

---

## Converting Strings to Numbers

The `prompt()` function **always returns a string**, even when the user types a number. If you try to do math with a string, you will get unexpected results:

```javascript
let a = prompt("Enter side a:");  // user types 3 → a is "3" (a string)
let b = prompt("Enter side b:");  // user types 4 → b is "4" (a string)
```

Use `parseFloat()` to convert a string to a number:

```javascript
let a = parseFloat(prompt("Enter side a:"));  // a is 3 (a number)
let b = parseFloat(prompt("Enter side b:"));  // b is 4 (a number)
```

`parseFloat()` reads a decimal number from a string. Without it, math operations like `Math.sqrt(a * a + b * b)` will not work correctly. You will need this for the **hypotenuse()** and **distance()** functions.

---

## Tips for Success

1. **Start with titleCase()** — it's the simplest and introduces `.charAt()`, `.toUpperCase()`, `.substring()`, and `.toLowerCase()`
2. **The second initial is right after the space** — if the space is at position `spaceIndex`, the last name starts at `spaceIndex + 1`
3. **Don't forget the dots** in initials — `"J.D."` not `"JD"`, and include the trailing dot
4. **Use `parseFloat()`** for hypotenuse() and distance() — `prompt()` returns strings, not numbers (see [Converting Strings to Numbers](#converting-strings-to-numbers) above)
5. **Subtract in the distance formula** — it's `x2 - x1`, not `x1 + x2`. Squaring makes a negative difference positive, so the order of the points doesn't matter

---

## FAQ

**Q: What is `.charAt(0)` vs bracket notation `[0]`?**
Both get the first character. `.charAt(0)` is a method that returns a string. `"Hello"[0]` also works. Either is fine.

**Q: What does `.indexOf()` return if the character isn't found?**
It returns `-1`. In this assignment every name has a space, so you won't need to check for that.

**Q: What is the difference between `.substring()` and `.slice()`?**
For positive positions they do the same thing: `"Hello".substring(1)` and `"Hello".slice(1)` are both `"ello"`. This assignment uses `.substring()`.

**Q: What is `Math.pow()`?**
`Math.pow(b, e)` raises `b` to the power `e`, so `Math.pow(dx, 2)` squares `dx`. Writing `dx ** 2` or `dx * dx` gives the same result.

**Q: My initials are missing the trailing dot.**
The format is `"J.D."` — every initial gets a dot after it, including the last one.

---

View all assignments at [csplusplus.com/github-assignments](https://csplusplus.com/github-assignments)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
