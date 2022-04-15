import { createContext } from 'react'

const LoadingContext = createContext({
  isLoading: false,
  setLoading: () => {},
})

export default LoadingContext
