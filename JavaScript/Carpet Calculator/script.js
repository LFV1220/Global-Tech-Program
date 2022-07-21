 /* 
    SCRIPT.JS

    This is where you'll complete the SkillBuilder. Look at the Markdown tab (in the same pane as the console) for detailed README instuctions!
*/

function calculateCarpet() {
  // 👇 Write your code here 👇
  
  let room1SqFt = getRoomWidth(1) * getRoomLength(1);
  let room2SqFt = getRoomWidth(2) * getRoomLength(2);
  
  let sqFt = (room1SqFt + room2SqFt) + ((room1SqFt + room2SqFt) * 0.1);
  
  showResult(sqFt);
  
  console.log("click");

}

calculateCarpetTest();


/* LEVEL UP! (optional) 
	1. Function explanations: 


	2. Custom styles added: 


*/