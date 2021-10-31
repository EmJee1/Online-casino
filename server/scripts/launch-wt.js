/* eslint-disable @typescript-eslint/no-var-requires */
const { exec } = require('child_process')
const { join } = require('path')
const log = require('./helpers/log')

console.log('> Launching WT session\n')

const terminals = [
	{
		path: join(process.cwd(), '.'),
		title: 'node - start:dev',
		tabColor: '#2ecc71',
	},
	{
		path: join(process.cwd(), '../web'),
		title: 'react - start',
		tabColor: '#3498db',
	},
	{
		path: join(process.cwd(), '../validation'),
		title: 'validation - dev',
		tabColor: '#dc143c',
	},
]

const command = terminals
	.slice(1, terminals.length)
	.map(
		({ path, title, tabColor }) =>
			`new-tab -d "${path}" --title "${title}" --tabColor ${tabColor}`
	)
command.unshift(
	`wt -d "${terminals[0].path}" --title "${terminals[0].title}" --tabColor ${terminals[0].tabColor}`
)

exec(command.join('; '), log)
