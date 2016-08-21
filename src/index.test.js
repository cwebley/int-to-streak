import { expect } from 'chai';
import intToStreak from './index';

describe('int-to-streak', () => {
	it('returns undefined when streak is 0', () => {
		expect(intToStreak(0)).to.be.undefined;
	});
	it('handles winning streaks properly', () => {
		expect(intToStreak(1)).to.equal('1W');
		expect(intToStreak(45)).to.equal('45W');
	});
	it('returns losing streaks properly', () => {
		expect(intToStreak(-1)).to.equal('1L');
		expect(intToStreak(-45)).to.equal('45L');
	});
});
