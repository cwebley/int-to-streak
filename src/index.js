module.exports = function intToStreak (streakInt) {
	if (streakInt === 0) {
		return undefined;
	}
	if (streakInt < 0) {
		return `${-1 * streakInt}L`;
	}
	return `${streakInt}W`;
};
