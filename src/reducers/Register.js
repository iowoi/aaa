
const initialState = {
	occupation: []
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_OCCUPATIONS': {
			return { ...state, occupation: action.payload }
			break
		}
	}
	
	return state
}
