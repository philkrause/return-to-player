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


for (let index = 0; index < totalSpins; index++) {

   totalBet++

   rngOne = Math.floor(Math.random() * (reelLength - 2))
   rngTwo = Math.floor(Math.random() * (reelLength - 2))
   rngThree = Math.floor(Math.random() * (reelLength - 2))


   let cellOne = reelOne[rngOne + 2]
   let cellTwo = reelTwo[rngOne + 2]
   let cellThree = reelThr[rngOne + 2]
   let cellFour = reelOne[rngTwo + 1]
   let cellFive = reelTwo[rngTwo + 1]
   let cellSix = reelThr[rngTwo + 1]
   let cellSeven = reelOne[rngThree]
   let cellEight = reelTwo[rngThree]
   let cellNine = reelThr[rngThree]
   

   const Outcome = [cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight, cellNine]

   console.log(Outcome)

}

returnToPlayer = (totalCashWon/totalBet) * 100



let stake = totalCashWon - totalBet
let allWins = jackWins + queenWins + aceWins + shieldWins + axeWins + maceWins + swordWins
let winRatio = allWins/losses

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

