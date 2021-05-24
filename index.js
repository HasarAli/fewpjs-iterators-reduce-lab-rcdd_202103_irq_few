const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function totalBatteries() {
  return reduce( batteryBatches, (total, battery) => total + battery , 0)
}
