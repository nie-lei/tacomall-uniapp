export default {
    tokenKey: 'x-access-token',
    apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/' : ''
}
