const initState = {}

export default function (state = initState, action) {
    switch (action.type) {

        case 'condition':
            return state

        default:
            return state
    }
}
