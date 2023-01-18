import { useContext, createContext, useReducer } from "react"
import { dataReducer } from "../reducers/dataReducer"

export const dataContext = createContext()

export function useDataContext() {
  return useContext(dataContext)
}

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(dataReducer, [])

  return (
    <dataContext.Provider value={{ dispatch, state }}>
      {children}
    </dataContext.Provider>
  )
}

export default Context