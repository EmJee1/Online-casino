import { lstatSync, readdirSync } from 'fs'
import { Express } from 'express'
import { join } from 'path'
import isAuthenticated from '../middlewares/is-authenticated'

const initializeModules = (app: Express): void => {
	const registerRouter = async (importPath: string) => {
		const router = await import(importPath)

		const handlers = []

		if (router.prefix) {
			handlers.push(router.prefix)
		}
		if (router.authenticated) {
			handlers.push(isAuthenticated)
		}
		handlers.push(router.default)

		app.use(...handlers)
	}

	const scanDirectory = (path: string) =>
		readdirSync(path).forEach(file => {
			const location = join(path, file)

			if (file.endsWith('.router.ts')) {
				registerRouter(location)
			} else if (lstatSync(location).isDirectory()) {
				scanDirectory(location)
			}
		})

	scanDirectory(__dirname)
}

export default initializeModules
