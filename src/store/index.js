import reducer from './reducers';


const initialState = {
    cart: [],
    products: [],
    user: null,
    other: 'other',
    number: 0
}

export { reducer, initialState }