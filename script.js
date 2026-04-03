// ============================================
//  Unit 8.2 – Methods & Returns
// ============================================
//  Complete each function below by following
//  the STEP comments. Do NOT rename the functions.
// ============================================


// --- WARM-UP: titleCase() ---
// This function takes a word and capitalizes only
// the first letter, making the rest lowercase.

function titleCase() {
  // STEP 1: Use prompt() to ask "Enter a word"
  //         Store the result in a variable using let.

  // STEP 2: Get the first character and make it uppercase.
  //         Use .charAt(0) to get the first letter.
  //         Use .toUpperCase() to capitalize it.

  // STEP 3: Get the rest of the string and make it lowercase.
  //         Use .slice(1) to get everything after the first letter.
  //         Use .toLowerCase() to make it lowercase.

  // STEP 4: Concatenate the uppercase first letter + lowercase rest.
  //         Store the result in a new variable using let.

  // STEP 5: Use alert() to display the result.
  //         Example: "hELLO" → alert shows "Hello"

}


// --- getInitials() ---
// This function extracts initials from a full name.
// "John Doe" → "J.D."
// "Mary Jane Watson" → "M.J.W."

function getInitials() {
  // STEP 1: Use prompt() to ask "Enter your full name"
  //         Store the result in a variable using let.

  // STEP 2: Get the first initial.
  //         Use .charAt(0) to get the first character.
  //         Use .toUpperCase() to make it uppercase.

  // STEP 3: Find the first space using .indexOf(" ")
  //         This tells you where the first name ends.

  // STEP 4: Get the second initial.
  //         The letter after the first space is at position (spaceIndex + 1).
  //         Use .charAt(spaceIndex + 1) and .toUpperCase()

  // STEP 5: Check if there is a second space (for 3-word names).
  //         Use .indexOf(" ", firstSpace + 1) — the second argument
  //         tells indexOf where to START searching.
  //         If it returns -1, there is no second space.

  // STEP 6: If there IS a second space, get the third initial
  //         using .charAt(secondSpace + 1) and .toUpperCase()

  // STEP 7: Build the initials string with dots between them.
  //         2-word name: "J.D."
  //         3-word name: "M.J.W."

  // STEP 8: Use alert() to display the initials.

}


// --- hypotenuse() ---
// This function calculates the hypotenuse of a right triangle
// given the two shorter sides (a and b).
// Formula: c = sqrt(a² + b²)

function hypotenuse() {
  // STEP 1: Use prompt() to ask "Enter side a"
  //         Store the result in a variable using let.

  // STEP 2: Use prompt() to ask "Enter side b"
  //         Store the result in a variable using let.

  // STEP 3: Convert both values to numbers using parseFloat().

  // STEP 4: Calculate the hypotenuse using Math.sqrt().
  //         c = Math.sqrt(a * a + b * b)
  //         You can also use a ** 2 instead of a * a.

  // STEP 5: Use alert() to display the result.
  //         The alert must say exactly:
  //         "Hypotenuse: " followed by the number
  //         rounded to 2 decimal places using .toFixed(2)
  //         Example: sides 3 and 4 → "Hypotenuse: 5.00"

}
