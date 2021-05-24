const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function totalBatteries() {
  const res =  batteryBatches.reduce( (total, battery) => total + battery )
  return parseInt(res)
}

console.log(totalBatteries())