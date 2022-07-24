export const initialState = {
    user: null,
    playerlists:[],
    playing:false,
    item:null,
    // token:'BQCRFrq87zkYh_rkP2cy6ERt5fzkC1PtA7DbgDbLkgd7Exifr4BEnRR2115F9na8MKWwmYt89p4ZSmzwHulqvj43LkB0qMvVXnlQiyzDHjYrvd4ER92VvidUhMzUvTzcJE23idqu0Z_um2VlmLekJnPVgkgyLfLlyow4AqE8IT2uuZWRlAy_Owv0DUhl3n9sB5vIDNeyDivu98d_',
};
 
const reducer = (state, action) =>{
    // console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playerlists: action.playerlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}

export default reducer;