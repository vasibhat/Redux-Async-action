const redux=require('redux')
const createStore=redux.createStore
const applyMiddleware =redux.applyMiddleware 
const thunkMiddleware =require('redux-thunk').default

const initialState ={
    loading:false,
    users:[],
    error:''
}

const FETCH_USERS_REQUEST ='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS ='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE ='FETCH_USERS_FAILURE'


const fetchUsersRequest = ()=>{
    return{
        type:FETCH_USERS_REQUEST
    }

}


const fetchUsersSuccess = users=>{
    return{
        type:FETCH_USERS_REQUEST,
        payload:users
    }

}

const fetchUsersFailure = error =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }

}


const reducer= (state =initialState,action) => {
    switch(action.type)
{
    case FETCH_USER_REQUEST:
        return{
            ...state,
            loading:true
        }
        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
            case FETCH_USER_FAILURE:
            return{
                loading:false,
                users:[],
                error:'action.payload'
            }
}}

const fetchUsers =() =>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get("")
        .then(response =>{
            const users =response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error =>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store =createStore(reducer,applyMIddleware(thunkMiddleware))
store.subscribe(()=>{
    console.log(sstore.getState())
})
store.dispatch(fetchUser())