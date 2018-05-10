const initialState = {
    all_host_data: [],
    activity_data: {},
    userInfo: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_HOST_ACTIVITY_DATA": {
            return { ...state, all_host_data: action.payload.data };
            break;
        }
        case "GET_MY_INFO_ACTIVITY_DATA": {
            let data = action.payload;
            return { ...state, activity_data: data };
            break;
        }
        case "GET_USER_INFO": {
            let data = action.payload;
            return { ...state, userInfo: data };
            break;
        }
        case "PUT_USER_INFO": {
            let data = action.payload;
            return { ...state, userInfo: data };
            break;
        }
        case "GET_HOBBY_LIST": {
            let data = action.payload;
            return { ...state, hobby: data };
            break;
        }
    }

    return state;
}
