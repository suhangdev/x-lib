export default function ({app: { $axios }}: any)  {

    if (process.server) {
        // $axios.defaults.baseURL = `//${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
    }
	
	// request拦截器
	$axios.onRequest(() => {
	})
	$axios.onError(() => {
	})
	// response拦截器
    $axios.interceptors.response.use((response: any) => {
		return response
	})
}
