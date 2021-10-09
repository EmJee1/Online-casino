declare namespace Express {
	export interface Response {
		success: (
			status: import('../../utils/status-codes').SuccessfulHttpStatus,
			data?: any[] | { [key: string]: any }
		) => import('express').Response<any, Record<string, any>>
		clientError: (
			status: import('../../utils/status-codes').ClientErrorHttpStatus,
			...errors: (string | Error)[]
		) => import('express').Response<any, Record<string, any>>
		serverError: (
			status: import('../../utils/status-codes').ServerErrorHttpStatus,
			...errors: (string | Error)[]
		) => import('express').Response<any, Record<string, any>>
	}
}
