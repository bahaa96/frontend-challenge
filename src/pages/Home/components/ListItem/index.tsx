import React, { useContext } from 'react';
import EmployeesContext, { IEmployee } from '../../EmployeesContext';
import { List, Avatar, Skeleton, Steps } from 'antd';
import { steps } from '../../Model';


const { Step } = Steps;


interface IProps {
  item: IEmployee
}

const ListItem: React.FC<IProps> = ({ item }) => {
  const { updateEmployee } = useContext(EmployeesContext)

  const handleStatusChange = React.useCallback((statusIndex: number, employeeId: string) => {
    const updates = {
      statusIndex
    }
    updateEmployee(employeeId, updates)
  }, [])

  return (
    <div className={'home__list-item-wrapper'} key={item.login.uuid}>
      <List.Item className={'home__list-item'}>
        <Skeleton avatar title={false} loading={false} active>
          <List.Item.Meta
            avatar={
              <Avatar src={item.picture.thumbnail} size={'large'} className={'home__list-item__avatar'} />
            }
            title={<p>{ item.name.first + ' ' + item.name.last }</p>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
        </Skeleton>
      </List.Item>
      <div className={'home__list-item-steps'} >
        <Steps size={'small'} current={item.statusIndex} onChange={(selectedIndex) => { handleStatusChange(selectedIndex, item.login.uuid) }}>
          {
            steps.map((step) => {
              return (
                <Step title={step} key={step} />
              )
            })
          }
        </Steps>
      </div>
    </div>
)}

export default React.memo(ListItem, (prevProps: IProps, nextProps: IProps) => {
  console.log(prevProps, nextProps)
  if (prevProps.item.statusIndex === nextProps.item.statusIndex) {
    return true
  }

  return false;
});