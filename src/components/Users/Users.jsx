import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { getAsyncUsers } from '../../redux/thunk/userThunk';
import CreateUsers from './CreateUsers/CreateUsers';
import Spinner from '../Spinner/Spinner';
import { usersGroup } from './usersGroup';

const Users = () => {
  const users = useSelector(({ users }) => users.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Отдел',
      dataIndex: 'group',
      key: 'id',
      filters: usersGroup,
      onFilter: (value, { group }) => group === value,
      sorter: (a, b) => a.group.length - b.group.length,
      ellipsis: true,
    },
  ];

  return (
    <>
      <CreateUsers />
      {users.length === 0 ? (
        <Spinner />
      ) : (
        <Table
          columns={columns}
          dataSource={users.data}
          style={{ margin: '0 30px 0 30px' }}
        />
      )}
    </>
  );
};

export default Users;
