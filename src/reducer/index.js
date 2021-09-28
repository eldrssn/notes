import { types } from "./types";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CARD:
      const newCard = action.payload;
      return [...state, newCard];

    case types.DELETE_CARD: 
      const cardId = action.payload;
      return state.filter(card => card.id !== cardId);

    case types.EDIT_CARD:
      const {id, newData} = action.payload;

      return state.map(card => {
        if (card.id === id) {
          card.text = newData;
        }
        return card;
      });

    default:
      return state;

  }
}

export default reducer;