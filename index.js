//5rown 4x the prize
//4inarow

//Reel Distribution
//1Jack , 2Queen, 3King, 4Ace, 5Heart, 6Club, 7Diamond, 8Spade
const reelOne =   [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8, 8, 8]
const reelTwo =   [1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8, 8, 8]
const reelThree = [1, 1, 1, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 8, 8, 8]
const reelFour =  [1, 1, 1, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 8, 8, 8]
const reelFive =  [1, 1, 1, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 8, 8, 8]



//Payouts 
const jackPayout = .35
const queenPayout = .45
const kingPayout = .55
const acePayout = 1
const heartPayout = 1.25
const clubPayout = 1.50
const diamondPayout = 1.75
const spadePayout = 2

const payOutArray = [jackPayout, queenPayout, kingPayout, acePayout, heartPayout, clubPayout, diamondPayout, spadePayout]

const totalSpins = 100
const reelLength = reelOne.length

let jackWins = 0
let queenWins = 0
let kingWins = 0
let aceWins = 0
let heartWins = 0
let clubWins = 0
let diamondWins = 0
let spadeWins = 0


let losses = 0
let wins = 0

let totalBet = 0
let totalCashWon = 0
let returnToPlayer


const payOutLine = (line) => {
   for (let index = 0; index < payOutArray.length; index++) {
      const payout = payOutArray[index];
      if(line == index) {
         console.log(`Payout: ${payout}`)
         totalCashWon = totalCashWon + payout
      }
   }
}

for (let index = 0; index < totalSpins; index++) {

   totalBet++

   rngOne = Math.floor(Math.random() * (reelLength - 2))
   rngTwo = Math.floor(Math.random() * (reelLength - 2))
   rngThree = Math.floor(Math.random() * (reelLength - 2))

   let topRow1 = rngOne + 2
   let topRow2 = rngTwo + 2
   let topRow3 = rngThree + 2
   let midRow1 = rngOne + 1
   let midRow2 = rngTwo + 1
   let midRow3 = rngThree + 1
   let botRow1 = rngOne
   let botRow2 = rngTwo
   let botRow3 = rngThree

   let cellOne = reelOne[topRow1]
   let cellTwo = reelTwo[topRow2]
   let cellThree = reelThree[topRow3]
   let cellFour = reelOne[midRow1]
   let cellFive = reelTwo[midRow2]
   let cellSix = reelThree[midRow3]
   let cellSeven = reelOne[botRow1]
   let cellEight = reelTwo[botRow2]
   let cellNine = reelThree[botRow3]


   const Outcome = [cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight, cellNine]
   const lineAcrossOne = [cellOne, cellTwo, cellThree]
   const lineAcrossTwo = [cellFour, cellFive, cellSix]
   const lineAcrossThree = [cellSeven, cellEight, cellNine]
   const lineDiagnalTopDown = [cellOne, cellFive, cellNine]
   const lineDiagnalDownTop = [cellSeven, cellFive, cellThree]

   //Across Wins
   if(lineAcrossOne[0] == lineAcrossOne[1] && lineAcrossOne[1] == lineAcrossOne[2]){
      payOutLine(lineAcrossOne[0])
   }
   if(lineAcrossTwo[0] == lineAcrossTwo[1] && lineAcrossTwo[1] == lineAcrossTwo[2]){
      payOutLine(lineAcrossTwo[0])
   }
   if(lineAcrossThree[0] == lineAcrossThree[1] && lineAcrossThree[1] == lineAcrossThree[2]){
      payOutLine(lineAcrossThree[0])
   }

   //Diagnal Wins 
   if(lineDiagnalDownTop[0] == lineDiagnalTopDown[1] && lineDiagnalTopDown[1] == lineDiagnalDownTop[2]){
      payOutLine(lineDiagnalDownTop[0])
   }

   if(lineDiagnalTopDown[0] == lineDiagnalDownTop[1] && lineDiagnalDownTop[1] == lineDiagnalDownTop[2]){
      payOutLine(lineDiagnalTopDown[0])
   }
   
}

//returnToPlayer = (totalCashWon / totalBet) * 100


console.log(`Total Cash Won: ${totalCashWon}`)


// let stake = totalCashWon - totalBet
// let allWins = jackWins + queenWins + aceWins + heartWins + clubWins + diamondWins + spadeWins
// let winRatio = allWins/losses

// console.log(`Reel Length: ${reelLength}`)
// console.log(`TotalWin: ${allWins}`)
// console.log(`Total Losses: ${losses}`)
// console.log(`Win Ration: ${winRatio}`)
// console.log(`TotalBet: ${totalBet}`)
// console.log(`Stake: ${stake}`)
// console.log(`JackWins: ${jackWins}`)
// console.log(`QueenWins: ${queenWins}`)
// console.log(`KingWins: ${kingWins}`)
// console.log(`AceWins: ${aceWins}`)
// console.log(`heartWins: ${shieldWins}`)
// console.log(`clubWins: ${clubWins}`)
// console.log(`diamondWins: ${maceWins}`)
// console.log(`spadeWins: ${swordWins}`)
// console.log(`Return to Player: ${returnToPlayer}`)

