const mathPower = require("./pow.js");

describe("mathPower", () => {
	it(" that takes a base and exponent and raises the base to the exponent power: base exponent", () => {
		const base = 2;
		const exponent = 3;

		const answer = base * exponent;

		expect(mathPower).toEqual(expect.any(answer));
	});
});
