import { config } from 'dotenv'
import { join } from 'path'

type envHelpersReturnType = { [key: string]: string }

const checkOrFixEnvInjection = () => {
	if (process.env.INJECTION_SUCCESSFUL) return

	config({ path: join(__dirname, '../../.env') })

	if (process.env.INJECTION_SUCCESSFUL) return

	console.error(
		'[err] environment variables were not imported successfully, you are missing the INJECTION_SUCCESSFUL variable'
	)
	process.exit(1)
}

const extractEnvVar = (varname: string, required?: boolean) => {
	const extracted = process.env[varname]

	if (!extracted) {
		if (required) {
			console.error(
				`[err] missing required environment variable: ${varname}`
			)
			process.exit(1)
		}

		console.warn(`[warn] missing optional environment variable: ${varname}`)
	}

	return extracted
}

export const envOrFail = (...vars: string[]): envHelpersReturnType => {
	checkOrFixEnvInjection()
	const output: envHelpersReturnType = {}

	vars.forEach(item => {
		output[item] = extractEnvVar(item, true)
	})

	return output
}

export const env = (...vars: string[]): envHelpersReturnType => {
	checkOrFixEnvInjection()
	const output: envHelpersReturnType = {}

	vars.forEach(item => {
		output[item] = extractEnvVar(item)
	})

	return output
}
