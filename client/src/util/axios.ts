import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

axios.interceptors.request.use((config: AxiosRequestConfig) => {
	if (localStorage.getItem('token'))
		config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')

	config.baseURL = process.env.REACT_APP_API_BASEURL
	return config
})

axios.interceptors.response.use((response: AxiosResponse<any>) => {
	if (response.data?.token)
		localStorage.setItem('token', response.data?.token)

	return response
})
