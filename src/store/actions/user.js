
export function login(dispatch, name){
    dispatch({ type: 'login', name: name })
}