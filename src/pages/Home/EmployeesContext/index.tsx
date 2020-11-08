import React, { createContext, useReducer, useEffect } from 'react';
import * as actions from './actions';
import employeesReducer, { IState, initialState } from './reducer';
import { $fixMe } from '../../../typings/fixme';
import { message } from 'antd';
import useAxios from 'axios-hooks';


export interface IEmployee {
  login: {
    uuid: string
  }
  name: {
  first: string
  last: string
  },
  picture: {
    thumbnail: string
  },
  statusIndex: number
}

interface ContextProps extends IState {
  setEmployees: (E: IEmployee[]) => void
  updateEmployee: (id: string, updates: $fixMe) => void
} 

const EmployeesContext = createContext<ContextProps>({
  setEmployees: () => {},
  updateEmployee: () => {},
  ...initialState,
})

export const EmployeesContextProvider: React.FC<{}> = ({ children }) => {
  const [ state, dispatch ] = useReducer(employeesReducer, initialState);
  const [{ error }, executePatch] = useAxios('/employees/:employee_id', { manual: true });

  const updateEmployee = (employeeId: string, updates: IEmployee) => {
    dispatch(actions.updateEmployee(employeeId, updates))
    executePatch({
      data: {
        employeeId,
        updates,
      }
    });
  }

  const setEmployees = (employees: IEmployee[]) => {
    dispatch(actions.set(employees));
  }

  useEffect(() => {
    if (state) {
      if (state.data.length) {
        try {
          localStorage.setItem('db', JSON.stringify(state));
        }
        catch (e) {
          console.log(e);
          message.error(e.message);
        }
      }
    }
  }, [state])


  const value = {
    ...state,
    setEmployees,
    updateEmployee,
  }

  return (
    <EmployeesContext.Provider {...{value}}>
      {
        children
      }
    </EmployeesContext.Provider>
  )
}


export default EmployeesContext;