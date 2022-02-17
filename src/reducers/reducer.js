let initialState = {
	messages: [],
    messagesNumber: 0
};

export default function messagesReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_NEW_MESSAGE":
            let temp = [...state.messages]
            temp.push(Object.assign(action.payload, {id: state.messagesNumber}))
			return { ...state, messages: temp, messagesNumber: ++state.messagesNumber };
        case "REMOVE_NEW_MESSAGE":
            let tempRemove = [...state.messages].filter(item => item.id !== action.payload.id)
            return { ...state, messages: tempRemove };
		default:
			return state;
	}
}