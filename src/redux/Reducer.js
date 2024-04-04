import { createSlice } from "@reduxjs/toolkit";
import { login } from "./usersAPI";


const initialState = {
    user: null,
    cart: [],
    errText: '',
    price: 0,
    deliveryFee: 15000
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setErrTxt(state, action) {
            state.errText = action.payload
        },
        addToCart(state, action) {
            var isExist = false
            state.cart.forEach((element, index) => {
                if (element.name == action.payload.name) {
                    isExist = true
                }
            })
            if (!isExist) {
                state.cart = [...state.cart, action.payload]
            } else {
                const index = state.cart.findIndex(e => e.name == action.payload.name)
                state.cart[index].amount += action.payload.amount
                if(state.cart[index].isChoose) {
                    state.price += action.payload.amount * state.cart[index].price
                }
            }
        },

        deleteCarts(state, action) {
            state.cart = state.cart.filter(e => !e.isChoose)
        },
        deleteCartByName(state, action) {
            state.cart = state.cart.filter(e => e.name != action.payload)
        },
        deleteAllCart(state, action) {
            state.cart = []
        },
        checkCart(state, action) {
            const index = state.cart.findIndex(e => e.name == action.payload)
            if (!state.cart[index].isChoose) {
                state.price += state.cart[index].amount * state.cart[index].price
            } else {
                state.price -= state.cart[index].amount * state.cart[index].price
            }
            state.cart[index].isChoose = !state.cart[index].isChoose
        },
        changeCartAmount(state, action) {
            const index = state.cart.findIndex(e => e.name == action.payload.name)
            switch (action.payload.type) {
                case 'add':
                    console.log('onAdd...')
                    state.cart[index].amount += 1
                    if (state.cart[index].isChoose) {
                        state.price += state.cart[index].price
                    }
                    break
                case 'min':
                    console.log('onMin...')
                    if (state.cart[index].amount > 1) {
                        state.cart[index].amount -= 1
                        if (state.cart[index].isChoose) {
                            state.price -= state.cart[index].price
                        }
                    }
                    break
                default:
                    console.log('...type not found...')
            }
        },
        resetUser(state, action) {
            state.user = null
        },
        updateUser(state, action) {
            console.log('update: ', action.payload)
            state.user =  action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            console.log('Pending...')
        })
        builder.addCase(login.fulfilled, (state, action) => {
            console.log('fulfilled...: ', action.payload)
            state.user = action.payload
        })
        builder.addCase(login.rejected, (state, action) => {
            console.log('Reject...')
            state.errText = action.payload
        })
    }
})

export const { setErrTxt, addToCart, deleteCartByName, deleteCarts, deleteAllCart, checkCart, changeCartAmount, resetUser, updateUser } = appSlice.actions
export default appSlice.reducer