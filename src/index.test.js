var expect = require('chai').expect;
var intToStreak = require('./index');

describe('int-to-streak', function () {
	it('returns undefined when streak is 0', function () {
		expect(intToStreak(0)).to.be.undefined;
	});
	it('handles winning streaks properly', function () {
		expect(intToStreak(1)).to.equal('1W');
		expect(intToStreak(45)).to.equal('45W');
	});
	it('returns losing streaks properly', function () {
		expect(intToStreak(-1)).to.equal('1L');
		expect(intToStreak(-45)).to.equal('45L');
	});
});
