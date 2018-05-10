const initialState = {
	newGroup:{},
	levels: [],
	features: []
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'CREATE_GROUP': {
			//return { ...state, data: action.payload }
			break
		}
		case 'EDIT_GROUP_DATA': {
			return { ...state, information: action.payload };
		}

		case 'GET_LEVELS': {
			return { ...state, levels: action.payload }
			break
		}

		case 'CREATE_FEATURE': {
			debugger
			console.log(action.payload)
			return { ...state, features: [...state.features, action.payload] }
			break
		}
	}

	return state
}
