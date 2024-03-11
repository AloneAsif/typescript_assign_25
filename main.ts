// Question no 26   Alien Colors #2

let aline_color: string[] = ['green','yellow','red'];
let score: number;
let userInput: string = 'red';
if(userInput == aline_color[0]){
    score =+ 5;
    console.log(`you got ${score} points.`)
}
else{
    score =+ 10;
    console.log(`you got ${score} points`)
}
