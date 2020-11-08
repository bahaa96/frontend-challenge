import Home from './pages/Home/Container'
import { RouteProps } from 'react-router-dom'

export enum PATHS {
  HOME = '/',
  EMPLOYEE = '/employee'
}

export const ROUTES: RouteProps[]= [
  {
    path: PATHS.HOME,
    component: Home,
    exact: true,
  },
]