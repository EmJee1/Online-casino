import { lstatSync, readdirSync } from 'fs'
import { Express } from 'express'
import { join } from 'path'

const initializeModules = (app: Express): void => {
	const registerRouter = async (importPath: string) => {
		const router = await import(importPath)
		if (router.prefix) app.use(router.prefix, router.default)
		else app.use(router.default)
	}

	const scanDirectory = (path: string) =>
		readdirSync(path).forEach(file => {
			const location = join(path, file)
			if (file.endsWith('.router.ts')) registerRouter(location)
			else if (lstatSync(location).isDirectory()) scanDirectory(location)
		})

	scanDirectory(__dirname)
}

export default initializeModules
