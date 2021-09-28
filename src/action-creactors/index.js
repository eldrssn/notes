import { types } from "../reducer/types"


export const addCard = (newCard) => {
  return (dispatch) => {
    dispatch({
      type: types.ADD_CARD,
      payload: newCard
    })
  }
}

export const deleteCard = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.DELETE_CARD,
      payload: id
    })
  }
}

export const editCard = ({id, newData}) => {
  return (dispatch) => {
    dispatch({
      type: types.EDIT_CARD,
      payload: {id, newData}
    })
  }
}

export const filterNotes = (string) => {
  return (dispatch) => {
    dispatch({
      type: types.FILTER_NOTES,
      payload: string
    })
  }
}