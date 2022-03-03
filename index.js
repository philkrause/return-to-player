
//Reel Distribution
const reelOne = [1,1,1,2]
const reelTwo = [1,1,1,2]

//Payouts 
const jackPayout = 1.5
const queenPayout = 3

const totalSpins = 500
const reelLength = reelOne.length
let jackWins = 0
let queenWins = 0
let losses = 0

let totalBet = 0
let totalWin = 0
let returnToPlayer

for (let index = 0; index < totalSpins; index++) {

   
   totalBet++

   rngOne = Math.floor(Math.random() * (reelLength))
   rngTwo = Math.floor(Math.random() * (reelLength))
   
   reelOneOutcome = reelOne[rngOne]
   reelTwoOutcome = reelTwo[rngTwo]

   if(reelOneOutcome === 1 && reelTwoOutcome === 1){
      totalWin+=jackPayout
      jackWins++
      console.log(`!! Win 1.5$ !!`)
   }
   if(reelOneOutcome === 2 && reelTwoOutcome === 2){
      totalWin+=queenPayout
      queenWins++
      console.log(`!! Win 3$ !!`)
   }
   else {
      losses++
      console.log("LOSE")
   }
}

returnToPlayer = 100 * (totalBet/totalWin)


console.log(`Return to Player: ${returnToPlayer}`)
console.log(`JackWins: ${jackWins}`)
console.log(`QueenWins: ${queenWins}`)
console.log(`Total Losses: ${losses}`)