const ADD_TO_STORAGE = "workforall/ADD_TO_STORAGE";
const ADD_DATA = "workforall/ADD_DATA"

const INITIAL_STATE = {
  favoriteData: localStore(),
  fetchData: []
};

export const addToStorage = (event) => ({
  type: ADD_TO_STORAGE,
  payload: event
});

export const addData = (event) => ({
  type: ADD_DATA,
  payload: event
})

export default function store(state = INITIAL_STATE, action) {


  switch (action.type) {
    case ADD_TO_STORAGE:

      for (const favoriteDataElement of state.favoriteData) {
        if (favoriteDataElement.id === action.payload.id) {
          return state
        }
      }

      return {
        ...state,
        favoriteData: [...state.favoriteData, action.payload]
      };

    case ADD_DATA:
      return {
        ...state,
        fetchData: action.payload
      }

    default:
      return state;
  }

}


function localStore() {

  if (localStorage.getItem("gitUserSearch") === null || localStorage.getItem("gitUserSearch") === undefined) {
    const empty = []
    return empty
  }

  return JSON.parse(localStorage.getItem("gitUserSearch"))

}