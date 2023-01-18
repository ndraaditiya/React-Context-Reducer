import { DELETE_DATA, INSERT_DATA, SHOW_DATA, UPDATE_DATA } from "../constants/actionType";

export const dataReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case SHOW_DATA:
      return payload

    case INSERT_DATA:
      return [...state, payload]

    case UPDATE_DATA:
      return state.map((i) => i?._id === payload?._id ? payload : i)

    case DELETE_DATA:
      return state.filter((i) => i?._id !== payload)

    default:
      return state
  }
}