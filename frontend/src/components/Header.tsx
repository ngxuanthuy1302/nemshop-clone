import { BarsOutlined, DownOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Menu, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { SetDislay } from '../app/reducers/Display/display.reducer';

export default function Header() {
  const location = useLocation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [pathName, setPathName] = useState<string>('/');
  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname]);

  const menuItems = [
    {
      key: '/products/all-products',
      icon: <DownOutlined />,
      label: 'Sản phẩm',
    },
    {
      key: '/products/new-products',
      label: 'sản phẩm mới',
    },
    {
      key: '/products/collections',
      icon: <DownOutlined />,
      label: 'Bộ sưu tập',
    },

    {
      key: '/products/nem-online',
      label: 'nemonline',
    },

    {
      key: '/products/sale',
      icon: <DownOutlined />,
      label: 'sale',
    },
  ];

  return (
    <>
      <header className="h-[92px] w-full bg-white flex items-center justify-center fixed z-50 shadow-md xl:px-[70px]">
        <div className="w-full max-w-[1536px]">
          <div className="px-[30px] w-full flex justify-between items-center">
            <img
              src="//theme.hstatic.net/200000182297/1000887316/14/logo.png?v=618"
              alt="THỜI TRANG CÔNG SỞ"
              className="h-[26px] w-[109px] object-cover cursor-pointer"
              onClick={() => {
                navigate('/');
              }}></img>
            <Menu
              defaultSelectedKeys={[pathName]}
              selectedKeys={[pathName]}
              items={menuItems}
              className="hidden xl:flex gap-4 text-[15px] uppercase text-[rgba(7,7,7,0.5)] font-bold hover:bg-none"
              onClick={(info) => navigate(info.key)}
            />
            {/* <ul className="hidden xl:flex gap-4 text-[15px] uppercase text-[rgba(7,7,7,0.5)] font-bold">
              <li>
                <a
                  href="./products"
                  className=" hover:text-black font-medium">
                  Sản phẩm <DownOutlined />
                </a>
              </li>
              <li>
                <a
                  href="./products"
                  className=" hover:text-black font-medium">
                  Sản phẩm mới
                </a>
              </li>
              <li>
                <a
                  href="./products"
                  className=" hover:text-black font-medium">
                  Bộ sưu tập <DownOutlined />
                </a>
              </li>
              <li>
                <a
                  href="./products"
                  className=" hover:text-black font-medium">
                  Nem online
                </a>
              </li>
              <li>
                <a
                  href="./products"
                  className=" hover:text-black font-medium">
                  Sale <DownOutlined />
                </a>
              </li>
            </ul> */}
            <div className="flex gap-[3px] text-[30px] items-center xl:text-[24px]">
              <span className="cursor-pointer xl:px-4 py-4 flex items-center relative search">
                <SearchOutlined />
                <Form className=" absolute top-[60px] right-[-20px] xl:left-0 w-[250px] hidden search_form">
                  <Row className="flex h-10">
                    <Input
                      placeholder="Tìm kiếm"
                      className="h-full w-[200px]"
                    />
                    <span className="flex items-center justify-center bg-black h-full w-[50px] rounded-[0_6px_6px_0]">
                      <SearchOutlined className="text-white text-[20px]" />
                    </span>
                  </Row>
                </Form>
              </span>
              <span className="line hidden xl:block"></span>
              <span className="xl:flex items-center cursor-pointer hidden relative account xl:px-4 py-4">
                <UserOutlined />
                <span className="text-[15px] ml-2 ">
                  <a href="./login">Tài khoản</a>
                </span>
                <ul className="text-[16px] hidden flex-col bg-white items-start absolute w-[200px] top-[60px] shadow-[0px_0px_16px_rgba(17,17,26,0.1)] left-[-5px]">
                  <li className="py-3 px-5 w-full hover:bg-zinc-100 text-start">
                    <a href="./login">Đăng nhập</a>
                  </li>
                  <li className="py-3 px-5 w-full hover:bg-zinc-100 text-start">
                    <a href="./login">Đăng kí</a>
                  </li>
                </ul>
              </span>
              <span className="line hidden xl:block"></span>
              <span className="items-center cursor-pointer xl:px-4 py-4 xl:flex">
                <ShoppingCartOutlined className="cursor-pointer" />
                <span className="text-[15px] ml-2 hidden xl:flex">Giỏ hàng</span>
              </span>
              <BarsOutlined
                className="cursor-pointer xl:hidden xl:px-4 py-4"
                onClick={() => dispatch(SetDislay('block'))}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
