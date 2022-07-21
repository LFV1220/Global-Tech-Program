# Cowboy Rob's Carpet Calculator 🤠
## Contents
- Introduction
- Deliverable
- What is a Function?
- Starter Code
- Testing Your Code
- Extra Help (If Needed)
- Level Up! (Extra Credit)

## Introduction
Welcome to the *Cowboy Rob's Carpet Calculator* SkillBuilder! Let's get started 😀

If you open your `script.js` file, you'll see the section where you'll write your code. It looks like this:

```js
// 👇 Write your code here 👇

// console.log("click");
```

Any code you write here will run each time you click the `Calculate` button on the webpage.

Start by uncommenting the `console.log("click")` statement by removing the preceding `//`. Once you've done that, click the Run button. Now, each time you click the `Calculate` button on the webpage, you'll see the text "click" appear in the console.

Now you can run some bit of code each time the `Calculate` button on the webpage is clicked! 

## Deliverable
Your task will be to calculate the square footage of carpet needed to cover **2 different rooms INCLUDING 10% EXTRA!!** Once you've calculated the square footage, you'll display that value to the user. 

We've included a few functions that will help you get the job done. Read on to learn more!

**NOTE: The only file you should edit to complete this SkillBuilder is `script.js`!**

## What is a Function? 
Functions are pieces of Javascript code that are assigned easy to remember names. 

One example of a function you've seen so far is `console.log()`, which prints some text to the console. We'll be covering functions in depth later on in the course. For now, the important thing to know is **we can use functions by writing the name of a function followed by parentheses, often with some data between the parentheses.** 

For more information about functions, feel free to go back and review the Functions & Documentation lesson from earlier in this module. 


## Starter Code
In this SkillBuilder, we've provided 3 functions that will help you access the values the user enters into the page's input boxes and display your final result.

**PRO-TIP:** Try running each of the functions below from the console to fully understand them before you start coding. 
<hr>

1. **`getRoomWidth(roomNumber)`**
This function accepts a room number (either `1` or `2`) between its parentheses. The function will return the width the user typed into the width input for whichever room you specify. Type something into the width input for Room 1 on the page, then type `getRoomWidth(1)` in your console, and press enter to see how it works. 

*Hint: The statement* `let room1Width = getRoomWidth(1);` *will store the value typed into Room 1's width input box in a variable called* `room1Width`.
<hr>

2. **`getRoomLength(roomNumber)`**
This function works just like `getRoomWidth`, but for the room's length. Type something into the length input for Room 1 on the page, then type `getRoomLength(1)` in your console, and press enter to see how it works. 
<hr>

3. **`showResult(result)`**
This function accepts a number between its parentheses. You'll use this function to display the total square footage to the user. Try typing `showResult(256)`in the console to see how it works.

## Testing Your Code
Your starter code also includes a test function called **`calculateCarpetTest()`**. It doesn't accept anything between its parentheses. You can type this directly into the console yourself, or simply click the `Run` button as we've already called it at the bottom of your `script.js` file.

If your code works as we expect it to, running the test function will show a PASSED message in the console and you can be confident you've completed the SkillBuilder successfully. When we are able to detect a common issue with your code, the test may produce a HINT to help you debug.

## Extra Help (If Needed)
You have everything you need to get started and complete this SkillBuilder! The most challenging part is going to be decomposing this problem into smaller parts (what to do first, second, third). You should try this on your own but, if you get stuck, take a look at `HINTS.md` for some extra help.


## Level Up! (Extra Credit)
Feel like taking things to the next level? Choose one (or both!) of the optional level ups below to snag some extra credit:

1. Head over to `provided.js`. Select two different provided functions and read over the code for each one. Leave comments at the bottom of  `script.js` that explain how these functions work in your own words. 
2. If you're feeling creative, write some custom CSS to add your own flare to the page. Leave a comment describing what you did in `script.js` so your grader can recognize your hard work! 

Good luck and happy coding. You got this!