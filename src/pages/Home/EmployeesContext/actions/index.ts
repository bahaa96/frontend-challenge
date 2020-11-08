import { SET_EMPLOYEES, UPDATE_EMPLOYEE } from './actions';
import { IEmployee } from './../../EmployeesContext';
import { action } from 'typesafe-actions';


export const set = (employees: IEmployee[]) => action(SET_EMPLOYEES, { data: employees });
export const updateEmployee = (employeeId: string, updates: IEmployee) => action(UPDATE_EMPLOYEE, { employeeId, updates });
