arr = [
        ["Its a beautiful day to save lives...","Derek Shepard"],
        ["If you love someone, you tell them. Even if you are scared that it is not the right thing or that it will cause problems or that it will burn your life to the ground, you say it, and you say it loud...","Mark Sloan"],
        ["We dont get unlimited chances to have the things that we want, and this I know. Nothing is worse than missing an opportunity that could have changed your life...","Addison Montgomery"],
        ["If you cant do it, if you are not willing to keep looking for light in the darkest of places without stopping even when it seems impossible, you will never succeed...","Amelia Shepard"],
        ["Its not hard. Its painful but its not hard. You know what to do already. If you didnt you would not be in this much pain...","Miranda Bailey"],
        ["It's good to be scared. It means you still have something to lose...","Richard Webber"],
        ["Have some fire.Be unstoppable. Be a force of nature. Be better than anyone there and don't give a damn what anyone thinks. You'r on your own...","Cristina Yang"],
        ["What's broken can be mended, what's hurt can be healed. No matter how dark it gets, the sun's gonna rise again...","Meredith Grey"],
        ["You never think that the last time is the last time. You think there will be more. You think you have forever, but you don't...","Meredith Grey"],
        ["It turns out sometimes you have to do the wrong thing. Sometimes you have to make a big mistake to figure out how to make things right. Mistakes are painful, but they're the only way to find out who we really are...","Denny Duquette"],
        ["Just because people do horrible things, it doesn't always mean they're horrible people...","Izzie Stevens"],
        ["Breakthroughs don't happen because of the medicine. Real breakthroughs happen because someone is scared to death to stop trying...","Derek Shepard"],
        ["The future is the home of our deepest fears and our wildest hopes...","Owen Hunt"],
        ["It always feels like there is just one person in this world to love. And then you find somebody else, and it just seems crazy that you were ever worried in the first place...","Lexie Grey"],
        ["This is your starting line. This is your arena. How well you play? That's up to you","Richard Webber"],
      ];

var num = 15;

document.getElementById("new-quote").addEventListener("click",function(){
  var i = Math.floor(Math.random()*num);
  document.querySelector("#text span").textContent = arr[i][0];
  document.querySelector("#author span").textContent = arr[i][1];
})

document.getElementById("add-new").addEventListener("click",function(){
  var newQuote = prompt("Enter your favourite quote?");
  var newAuthor = prompt("And who said this?");
  var newGroup = [];
  newGroup.push(newQuote);
  newGroup.push(newAuthor);
  arr.push(newGroup);
  num++;
})