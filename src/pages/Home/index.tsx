import React from 'react';
import Header from '../../components/Header';
import { Container } from './styles';
import EmployeesList from './components/EmployeesList';



const Home: React.FC<{}> = () => {

  return (
    <Container className={'home'}>
      <Header />
      <div className={'home__content'}>
        <EmployeesList /> 
      </div>
    </Container>
  )
}




export default Home;