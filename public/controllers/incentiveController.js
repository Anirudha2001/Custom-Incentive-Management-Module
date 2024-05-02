
function calculateIncentive(salesCount) {
    let incentive = 0;
    let bonus = 0;
    let holidayPackage = null;

    if (salesCount >= 10000) {
        incentive = 0.015 * salesCount; // 1.5% of salesCount
    }
    if (salesCount >= 20000) {
        incentive = 0.03 * salesCount; // 3% of salesCount
    }
    if (salesCount >= 30000) {
        incentive = 0.035 * salesCount; // 3.5% of salesCount
        bonus = 1000; // $1000 bonus
    }
    if (salesCount >= 50000) {
        incentive = 0.05 * salesCount; // 5% of salesCount
        holidayPackage = "Holiday Package"; // Eligible for holiday package
    }

    return {
        incentive: incentive.toFixed(2), // Format incentive to 2 decimal places
        bonus: bonus,
        holidayPackage: holidayPackage
    };
}
