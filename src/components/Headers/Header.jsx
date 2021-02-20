import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import './Header.css';
const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header style={{ width: '100%' }}>
      <Menu theme='dark' mode='horizontal'>
        <Menu.Item key='1'>
          <NavLink to='/users'>Таблица Сотрудников</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
