export const initialState = {
    user: null,
    playerlists:[],
    playing:false,
    item:null,
    // remove after finished developing
    token: 'BQDVDNvGrF86-I9G0aWKiiRy_2QeKdxT9KpM9jsZEC3tEN3C-NXDIPERNFiq9YFvvpblLGisTIMX97RY_9f_cke60bUR7rIeMzI40yIitnMPtVI2DSZDrAVKDj07-eFYQ944_Y_aIpf6fFuAq7LZVfjlgOuRguowGZ53ZuY8ko1nZLcTWzhP87GsywnFOeFFqB4qCwR7a_bo-H6M',
};

const reducer = (state,action) =>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            }
        default:
            return state;
    }
}

export default reducer;