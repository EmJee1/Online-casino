type envHelpersReturnType = { [key: string]: string }

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
	const output: envHelpersReturnType = {}

	vars.forEach(item => {
		output[item] = extractEnvVar(item, true)
	})

	return output
}

export const env = (...vars: string[]): envHelpersReturnType => {
	const output: envHelpersReturnType = {}

	vars.forEach(item => {
		output[item] = extractEnvVar(item)
	})

	return output
}
