import { GET_ALL_PRODUCTS } from "../actions/productActions";

const initialState = {
    products: [],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {}
        default:
            return state;
    }
}

export default productReducer;