module.exports = function (streakInt) {
	if (streakInt < 0) {
		return -1 * streakInt + 'L'
	}
	if (streakInt === 0) {
		return;
	}
	return streakInt + 'W';
};
