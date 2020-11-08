import { IEmployee } from './../../EmployeesContext';
import * as actions from '../actions';
import * as actionTypes from '../actions/actions' 
import { ActionType } from "typesafe-actions";


export interface IState {
  data: IEmployee[]
}

export const initialState: IState = {
  data: []
}

export type RootAction = ActionType<typeof actions>;



const employeesReducer = (state = initialState, action: RootAction) => {
  switch(action.type) {
    case actionTypes.SET_EMPLOYEES:
      return action.payload
    case actionTypes.UPDATE_EMPLOYEE: 
      const newState = state.data.map((employee) => {
        if (employee.login.uuid === action.payload.employeeId) {
          employee = {
            ...employee,
            ...action.payload.updates
          }
        }
        return employee
      }) 
      
      return {
        data: newState
      }
    default: 
      return state
  }
}

export default employeesReducer