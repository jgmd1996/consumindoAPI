import produce from 'immer'

const INITIAL_STATE ={
    itens: {},
};

console.log(INITIAL_STATE)

function shop (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CUSTOMER': {
            return produce(state, (draft)=>{
                draft.itens =action.itens;
            })
        }

        default:
            return state;
    }

}

export default shop;