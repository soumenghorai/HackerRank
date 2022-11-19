function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let highScore = 0;
    let lowScore = 0;
  
    for(let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            highScore++;
            
        }
        if (scores[i] < min) {
            min = scores[i]
            lowScore++;
            
        }
    }
    // return [best, worst];
    console.log(highScore , lowScore);
}
let scores = [12,24,15,24,35,30];
// console.log(breakingRecords(scores));
breakingRecords(scores);