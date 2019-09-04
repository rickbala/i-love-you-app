const chalk = require('chalk')
var color = 1
setInterval( () => {
	if (color == 1) {
		console.log(chalk.blue('I love you!'))
		color = 2
	}
	else {
		console.log(chalk.red('I love you!'))
		color = 1
	}
}, 800)