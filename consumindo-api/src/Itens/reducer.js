import produce from 'immer'

const INITIAL_STATE ={
    usuarioCadastrado: {},
};

console.log(INITIAL_STATE,"valor inicial")

function usuarioCadastrado (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CUSTOMER': {
            return produce(state, (draft)=>{
                draft.usuarioCadastrado =action.usuarioCadastrado;
            })
        }

        default:
            return state;
    }

}

export default usuarioCadastrado;