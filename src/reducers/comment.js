const initialState = {
  chatroom_data: []
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_ALL_COMMENTS': {
			return { ...state, chatroom_data: action.payload }
		}
    case 'POST_COMMENT': {
      return { ...state }
    }
    case 'POST_COMMENT_FINISH': {
      let { status, comment } = action.payload
      return { ...state, status, comment }
    }
    case 'POST_COMMENT_FAILED': {
      let { status, comment } = action.payload
      return { ...state, status, comment }
    }
                          
	}

	return state
}
