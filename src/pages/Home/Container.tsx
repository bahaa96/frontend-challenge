import React from 'react';
import { EmployeesContextProvider } from './EmployeesContext';
import Home from '.';
import { IPage } from '../../typings/routing';



const HomePageContainer: IPage<'Home'> = () => {
  return (
    <EmployeesContextProvider>
      <Home />
    </EmployeesContextProvider>
  )
}

export default HomePageContainer;