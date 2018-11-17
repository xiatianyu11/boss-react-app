import { compose } from 'redux'
export const get = k => m => m && m[k]
export const getIn = (...ks) => m => compose(...(ks.map(get).reverse()))(m)