const baseUrl = {
	dev: {
		'index': 'http://localhost:3001/',
		'default': 'http://localhost:3001/'
	},
	test: {
		'index': 'http://test.com:3001/',
		'default': 'http://test.com:3001/'
	}
}
const getSubPath = (env, serviceName, urlParams) => {
	const subPath = {
		dev: {
			'index': () => 'index'
		},
		test: {
			'index': ({id}) => `v1/s1/a1/${id}`
		}
	}
	return subPath[env][serviceName](urlParams)
}

export const getBaseUrl = (serviceName, env => process.env.MODE_ENV) =>baseUrl[env][serviceName]

export const getUrl = (serviceName, urlParams) => {
	const env = process.env.MODE_ENV
	const serviceBaseUrl = baseUrl[env][serviceName] || baseUrl[env]['default']
	const subPath = getSubPath(env, serviceName, urlParams)
	return `${serviceBaseUrl}${subPath}`
}