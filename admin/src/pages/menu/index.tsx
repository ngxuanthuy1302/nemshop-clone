import { useEffect, useState } from 'react';
import { MenuAPI } from '../../apis/Menu.api';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm, Row, Table, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { IMenu } from '../../interface/Menu.interface';
import { GetMenu, SetMenu, DeleteMenu, UpdateMenu } from '../../app/reducers/Menu/Menu.reducer';

export default function Menu() {
  const dataMenu = useAppSelector(GetMenu);
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState<boolean>(false);

  useEffect(() => {
    search();
    // eslint-disable-next-line
  }, [dispatch]);

  const search = async () => {
    await MenuAPI.fetchAll().then((res) => {
      dispatch(SetMenu(res.data));
    });
  };

  const columns = [
    {
      title: 'STT',
      render: (_: null, __: IMenu, index: number) => {
        return <Typography.Title level={5}>{index + 1}</Typography.Title>;
      },
    },
    {
      title: 'Tiêu đề Menu',
      dataIndex: 'title',
      width: '40%',
    },
  ];
  return (
    <>
      <Row className="mb-4">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="mr-4"></Button>
      </Row>

      <Table
        columns={columns}
        dataSource={dataMenu}
        bordered
        rowKey="id"
        pagination={false}
      />
    </>
  );
}
