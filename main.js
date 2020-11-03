let CurrentScore = 0;
let shape1;
let shape2;
const MatchBTN = document.getElementById('match');
const shape = [
    {color: '#250902', width: 250, height: 150},
    {color: '#250902', width: 270, height: 130},
    {color: '#38040E', width: 280, height: 140},
    {color: '#38040E', width: 300, height: 180},
    {color: '#800E13', width: 320, height: 220},
    {color: '#800E13', width: 340, height: 240},
    {color: '#363732', width: 230, height: 170},
    {color: '#363732', width: 270, height: 250},
]

const SelectRandomShape = () => {
    const RandomNumber = Math.floor(Math.random()*shape.length);
    const RandomShape = shape[RandomNumber];
    return RandomShape;
}
SelectRandomShape();

const RepeatRandomShape = () => {
    setInterval(() =>{
        MatchBTN.disabled = false;
        shape1 = SelectRandomShape();
        shape2 = SelectRandomShape();
        const FirstShape = `width:${shape1.width+'px'};
                            height:${shape1.height+'px'};
                            background:${shape1.color};`
        const secondShape = `width:${shape2.width+'px'};
                            height:${shape2.height+'px'};
                            background:${shape2.color};`
        
        document.getElementById('shape1').style.cssText = FirstShape;
        document.getElementById('shape2').style.cssText = secondShape;
    }, 1000)
}
// Start the game 

document.getElementById('Play').onclick = () => {
   Playing = true;
   RepeatRandomShape(); 
   document.getElementById('Play').disabled= true;
}


//Compare scores 


document.getElementById('match').onclick = () =>{
  
    if(Playing){
        MatchBTN.disabled = true;
        if(Object.is(shape1, shape2)){
            CurrentScore++;
            document.getElementById('score').innerHTML= CurrentScore;
        } 
        else{
            CurrentScore--;
            document.getElementById('score').innerHTML= CurrentScore;
        }
    }
     
}