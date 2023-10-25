// code your solution here
// Will loop through Super Bowl Results array
// Find the first object whose condition returns true based
// on a callback (cb) function (tester or finder)

function superbowlWin(record) {
    let win = record.find(object => object.result === 'W');
    if (win) {
        return win.year
    }
    else {
        return undefined;
    }
}
