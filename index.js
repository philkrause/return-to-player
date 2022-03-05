//5rown 4x the prize
//4inarow

//Reel Distribution
//1Jack , 2Queen, 3King, 4Ace, 5Shield, 6Axe, 7Mace, 8Sword
const reelOne = [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
const reelTwo = [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
const reelThr = [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]

//Payouts 
const jackPayout = .35
const queenPayout = .45
const kingPayout = .55
const acePayout = 1
const shieldPayout = 1.25
const axePayout = 1.50
const macePayout = 1.75
const swordPayout = 2

const payOutArray = [jackPayout, queenPayout, kingPayout, acePayout, shieldPayout, axePayout, macePayout, swordPayout]

const totalSpins = 100
const reelLength = reelOne.length

let jackWins = 0
let queenWins = 0
let kingWins = 0
let aceWins = 0
let shieldWins = 0
let axeWins = 0
let maceWins = 0
let swordWins = 0


let losses = 0
let wins = 0

let totalBet = 0
let totalCashWon = 0
let returnToPlayer


const payOutLine = (line) => {
   for (let index = 0; index < payOutArray.length; index++) {
      const payout = payOutArray[index];
      if(line[0] == index) {
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
   let cellThree = reelThr[topRow3]
   let cellFour = reelOne[midRow1]
   let cellFive = reelTwo[midRow2]
   let cellSix = reelThr[midRow3]
   let cellSeven = reelOne[botRow1]
   let cellEight = reelTwo[botRow2]
   let cellNine = reelThr[botRow3]


   const Outcome = [cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight, cellNine]
   const lineOne = [cellOne, cellTwo, cellThree]
   const lineTwo = [cellFour, cellFive, cellSix]
   const lineThree = [cellSeven, cellEight, cellNine]
   const lineFour = [cellOne, cellFive, cellNine]
   const lineFive = [cellSeven, cellFive, cellThree]
   
   // console.log(`LineOne: ${lineOne}`)
   // console.log(`LineTwo: ${lineTwo}`)
   // console.log(`LineThree: ${lineThree}`)


   if(lineOne[0] == lineOne[1] && lineOne[1] == lineOne[2]){
      payOutLine(lineOne)
   }
   if(lineTwo[0] == lineTwo[1] && lineTwo[1] == lineTwo[2]){
      payOutLine(lineTwo)
   }
   if(lineThree[0] == lineThree[1] && lineThree[1] == lineThree[2]){
      payOutLine(lineThree)
   }
}

//returnToPlayer = (totalCashWon / totalBet) * 100


console.log(`Total Cash Won: ${totalCashWon}`)


// let stake = totalCashWon - totalBet
// let allWins = jackWins + queenWins + aceWins + shieldWins + axeWins + maceWins + swordWins
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
// console.log(`ShieldWins: ${shieldWins}`)
// console.log(`AxeWins: ${axeWins}`)
// console.log(`MaceWins: ${maceWins}`)
// console.log(`SwordWins: ${swordWins}`)
// console.log(`Return to Player: ${returnToPlayer}`)

