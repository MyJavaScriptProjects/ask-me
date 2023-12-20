/*
1-developer name: Fateme Satouri
2-Project name: Ask me
3-Project description:
When you open the project on your browser, you will see a funny ghost on an orange page and it will show you an alert and ask: How many stars do you want?
By typing your desired number, it will print a star for you.
You can see your stars by going to the inspect section and tab of the console.
And your request will be displayed on the page.
4-email:navayearamm@gmail.com 
5-The languages ​​used in this project are: JavaScript, CSS, HTML

💫❤️Have a good time❤️💫
*/

//start

let p = document.getElementById("demo"); //Getting p from html page

let numberOfStars = prompt("How many star?"); //Defining promt and putting it into an array| Because then we need the value entered by the user

for (let i = 0; i <= numberOfStars; i++) {
  //Here it is said to go forward from 0 to the value written by the user in the dialog and print a star each time.
  let stars = "";
  for (let j = 1; j <= i; j++) {
    //It takes the value of i to know how many stars to print
    stars += "🌟";
  }
  console.log(stars); //Finally, display the star in the output
  if (numberOfStars > 0) {
    //If the number entered by the user is greater than 1, tell the user in the output that you have printed this amount of stars, otherwise, ask her, does she really want to print any stars for her?
    p.innerHTML = `HI dear . you have ${numberOfStars} stars 🫡 `; //Using $ we can access the value of a variable. And here we can see the value in the output.
  } else {
    p.innerHTML = `Do you really want no stars? `;
  }
}
