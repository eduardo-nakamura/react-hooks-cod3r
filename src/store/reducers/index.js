export default function reducer(currentState, action) {
    switch (action.type) {
        case 'add2ToNum':
            return { ...currentState, number: currentState.number + 2 }
        case 'multiply7':
            return { ...currentState, number: currentState.number * 7 }
        case 'divide25':
            return { ...currentState, number: Math.floor(currentState.number / 25) }
        case 'addNToNum':
            var numToAdd = Number(action.number); //
            if (isNaN(numToAdd)) { 
                return currentState; // Retorna o estado atual sem alterações
            } else {
                return { ...currentState, number: currentState.number + numToAdd };
            }
        case 'login':
            return { ...currentState, user: { name: action.name } }
        default:
            return currentState;
    }
}