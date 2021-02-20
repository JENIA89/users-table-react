import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { getAsyncUsers } from '../../redux/thunk/userThunk';
import CreateUsers from './CreateUsers/CreateUsers';
import Spinner from '../Spinner/Spinner';

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
      sorter: (a, b) => a.name.length - b.name.length,
      ellipsis: true,
    },
    {
      title: 'Отдел',
      dataIndex: 'group',
      key: 'id',
      filters: [
        { text: 'Склад', value: 'Склад' },
        { text: 'Отдел кадров', value: 'Отдел кадров' },
        { text: 'Руководство', value: 'Руководство' },
        { text: 'Отдел продаж', value: 'Отдел продаж' },
      ],
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
        <Table columns={columns} dataSource={users.data} />
      )}
    </>
  );
};

export default Users;
