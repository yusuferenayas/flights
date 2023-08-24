import { createContext, Dispatch } from 'react'
import { appContextInitialStates, IAppContextState } from './reducer'
import { IAppContextActionTypes } from './actions'

export interface IAppContext {
  contextState: IAppContextState
  contextDispatch: Dispatch<IAppContextActionTypes>
}

export const appContext = createContext<IAppContext>({
  contextState: appContextInitialStates,
  contextDispatch: () => {},
})

const AppContextProvider = appContext.Provider

export default AppContextProvider
