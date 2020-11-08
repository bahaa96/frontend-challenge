import React, { useEffect, useContext } from 'react';
import { List, Row, Col, message } from 'antd';
import useAxios from 'axios-hooks'
import EmployeesContext, { IEmployee } from '../../EmployeesContext';
import ListItem from '../ListItem';


// @ts-ignore
const EmployeesList: React.FC<{}> = (props) => {
  const [{ data, loading, error }] = useAxios('/employees');
  const { data: employees, setEmployees } = useContext(EmployeesContext)

  useEffect(() => {
    if (data) {
      setEmployees(data)
    }
  }, [data])


  if (error) { 
    return (
      message.error('Failed loading data ')
    )
  }
  return (
    <Row>
      <Col span={8} className={'home__list-wrapper'}>
        <h3 className={'home__list-wrapper__title'}>
          Employees
        </h3>
        {
          !error &&
          <List
            rowKey={item => item.login.uuid}
            className="home__list"
            loading={loading}
            itemLayout="horizontal"
            size="large"
            dataSource={employees}
            renderItem={(item: IEmployee) => <ListItem {...{item}} />}
          />
        }
      </Col>
    </Row>
  )
}

export default EmployeesList;