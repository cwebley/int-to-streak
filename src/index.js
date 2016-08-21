module.exports = function intToStreak (streakInt) {
	if (streakInt > 0) {
		return `${streakInt}W`;
	}
	if (streakInt < 0) {
		return `${-1 * streakInt}L`;
	}
	return undefined;
};
