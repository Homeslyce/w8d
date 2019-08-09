//Define diceTable object
function DiceTable () {
   this.d1 = 0;
   this.d2 = 0;
   this.d3 = 0;
   this.d4 = 0;
   this.d5 = 0;
   this.d6 = 0;
}

//Define diceTable functions
export const RndDiceRoll = (qtyDice) => {

   const diceTable = new DiceTable();

   for (let i = 0; i < qtyDice; i++) {
      const rndValue = Math.floor(Math.random() * (6)) + 1;

      switch (rndValue) {
         case 1: 
            diceTable.d1 += 1;
            break;
         case 2:
            diceTable.d2 += 1;
            break;
         case 3:
            diceTable.d3 += 1;
            break;
         case 4:
            diceTable.d4 += 1;
            break;
         case 5:
            diceTable.d5 += 1;
            break;
         case 6:
            diceTable.d6 += 1;
            break;
      }
   }

   return diceTable;
}