import API from '../configs/api'
import { INSERT_DATA, SHOW_DATA, UPDATE_DATA, DELETE_DATA } from "../constants/actionType";

export const getData = (dispatch) => {
  try {
    API.get(`todos`)
      .then((res) => {
        const { code } = res.data
        if (code === 200) {
          const { data } = res.data
          dispatch({ type: SHOW_DATA, payload: data })
        } else {
          console.log(res.data?.message)
        }
      })
  } catch (error) {
    console.error(error.message)
  }
}

export const postData = ({ data, dispatch }) => {
  try {
    API.post('todos', data)
      .then((res) => {
        const { code } = res.data
        if (code === 200) {
          const { data: dataSaved } = res.data
          const newData = { ...data, _id: dataSaved?._id }
          dispatch({ type: INSERT_DATA, payload: newData })
        } else {
          console.log(res.data?.message)
        }
      })
  } catch (error) {
    console.error(error.message)
  }
}

export const updateData = ({ data, dispatch }) => {
  try {
    API.put(`todos/${data?._id}`, data)
      .then((res) => {
        const { code } = res.data
        if (code === 200) {
          dispatch({ type: UPDATE_DATA, payload: data })
        } else {
          console.log(res.data?.message)
        }
      })
  } catch (error) {
    console.error(error.message)
  }
}

export const deleteData = ({ id, dispatch }) => {
  try {
    API.delete(`todos/${id}`)
      .then((res) => {
        const { code } = res.data
        if (code === 200) {
          dispatch({ type: DELETE_DATA, payload: id })
        } else {
          console.log(res.data?.message)
        }
      })
  } catch (error) {
    console.error(error.message)
  }
}