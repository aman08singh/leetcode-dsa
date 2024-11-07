/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (ops) {
    const result = [];
    if (ops.length < 1) {
        return null;
    } else if (ops.length < 2) {
        return ops[0];
    } else {
        ops.forEach((element, index) => {
            if (element === "C") {
                result.pop();
            } else if (element === "D") {
                result.push(Number(result[result.length - 1]) * 2);
            } else if (element === "+") {
                result.push(
                    Number(result[result.length - 1]) + Number(result[result.length - 2])
                );
            } else {
                result.push(Number(element));
            }
        });
    }
    return result.length > 0 ? result.reduce((acc, curr) => acc + curr) : 0;
};
