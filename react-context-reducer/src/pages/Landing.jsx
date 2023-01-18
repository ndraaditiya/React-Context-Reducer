import { useEffect, useRef } from 'react'
import { deleteData, getData, postData, updateData } from '../actions/dataAction'
import { useDataContext } from '../context/Context'
import './Landing.css'

const Landing = () => {
  const refInput = useRef()
  const { state, dispatch } = useDataContext()

  useEffect(() => {
    getData(dispatch)
  }, [])

  const handleAdd = () => {
    const data = {
      todoName: refInput.current.value,
      isComplete: false
    }
    postData({ data, dispatch })
    refInput.current.value = ''
  }

  const handleComplete = (id, valueComplete, todoName) => {
    const data = { _id: id, todoName, isComplete: !valueComplete }
    updateData({ data, dispatch })
  }

  const handleDelete = (id) => {
    deleteData({ id, dispatch })
  }

  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>TODO APP</p>
      <input ref={refInput} type='text' placeholder='Todo' />
      <button onClick={handleAdd}>Add Todo</button>
      <p></p>
      {state.map(({ todoName, isComplete, _id }, index) =>
        <div className='content-container'>
          <p key={index} className='contents'>
            <span style={{ textDecoration: isComplete ? 'line-through' : 'none' }}>{todoName}</span>
            <span>
              <input type='checkbox' checked={isComplete ? true : false} onChange={() => handleComplete(_id, isComplete, todoName)} />
              <i class="fa-solid fa-trash" onClick={() => handleDelete(_id)}></i>
            </span>
          </p>
          <hr />
        </div>
      )}
    </div>
  )
}

export default Landing
