import { ReactNode, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Pagination } from 'antd';

const Products = ({ children }: { children?: ReactNode | undefined }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [titlePage, setTitlePage] = useState<string>();
  setTitlePage(location.pathname);
  return (
    <>
      <ul className="flex gap-1 font-[500] border-y-[1px] border-y-gray-300 p-4">
        <li className="gap-1 flex">
          <a
            href="./"
            className=""
            title="Trang chủ">
            TRANG CHỦ
          </a>
          <span>/</span>
        </li>
        <li className="">
          <a
            href="./products"
            className="uppercase">
            Tất cả sản phẩm
          </a>
        </li>
      </ul>
      <section className="w-full object-cover mb-[5px]">
        <img
          src="//theme.hstatic.net/200000182297/1000887316/14/ms_banner_img1.jpg?v=618"
          alt="Banner "
          className="cursor-pointer"
          onClick={() => navigate('/')}></img>
      </section>
      <div className="lg:flex lg:flex-row-reverse w-full px-6 lg:px-[80px]">
        <section className="mt-10">
          <div className=" flex flex-col">
            <p className="font-[500] text-[20px] flex justify-start">Tất cả sản phẩm</p>
            <ul className="mt-[30px] gap-[5px] flex flex-wrap">
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    alt="ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 text-[#8A8A8F]">
                    ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover new-product"
                    src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    alt="ÁO PHÔNG IN HOA TS60112"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG IN HOA TS60112
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    alt="ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover new-product"
                    src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    alt="ÁO PHÔNG IN HOA TS60112"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG IN HOA TS60112
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    alt="ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover new-product"
                    src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    alt="ÁO PHÔNG IN HOA TS60112"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG IN HOA TS60112
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    alt="ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover new-product"
                    src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    alt="ÁO PHÔNG IN HOA TS60112"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG IN HOA TS60112
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    alt="ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 text-[#8A8A8F]">
                    ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover new-product"
                    src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    alt="ÁO PHÔNG IN HOA TS60112"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG IN HOA TS60112
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    alt="ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover new-product"
                    src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    alt="ÁO PHÔNG IN HOA TS60112"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG IN HOA TS60112
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    alt="ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover new-product"
                    src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    alt="ÁO PHÔNG IN HOA TS60112"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG IN HOA TS60112
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/12_6546d312a16d476fabf83d258fe46203_1024x1024.jpg"
                    alt="ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG TRẮNG IN HỌA TIẾT TS60102
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
              <li className="w-[32%] overflow-hidden">
                <div className="w-full relative product h-[207px] lg:h-[470px]">
                  <img
                    className="h-full w-full object-cover new-product"
                    src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    data-src="//product.hstatic.net/200000182297/product/2_83688f7548bd44789f5f25caa347226e_1024x1024.jpg"
                    alt="ÁO PHÔNG IN HOA TS60112"></img>
                  <div className="modal hidden absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                    <p className="text-white px-[50px] leading-8 text-[16px] uppercase font-[700] border-[1px]  border-white hover:text-black hover:bg-white">
                      Tư vấn
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center py-2 px-2">
                  <span className="cursor-pointer hover:text-black uppercase flex-wrap font-bold h-[50px] overflow-hidden text-ellipsis whitespace-pre-wrap leading-6 break-normal text-[#8A8A8F]">
                    ÁO PHÔNG IN HOA TS60112
                  </span>
                  <span className="mt-2 text-black font-bold">359.000 đ</span>
                </div>
              </li>
            </ul>
          </div>
          <Pagination
            className="mb-5 mt-10 font-bold"
            defaultCurrent={1}
            total={20}
            pageSize={12}
          />
        </section>
        <section className="mt-10 flex flex-col items-start gap-2 lg:w-full">
          <span className="font-bold">Danh mục</span>
          <span className="font-bold">Tất cả sản phẩm</span>
          <ul className="flex flex-col items-start">
            <li className="font-bold">Đầm</li>
            <li>Đầm suông</li>
            <li>Đầm dáng A</li>
            <li>Đầm ôm</li>
          </ul>
          <ul className="flex flex-col items-start">
            <li className="font-bold">Đầm</li>
            <li>Đầm suông</li>
            <li>Đầm dáng A</li>
            <li>Đầm ôm</li>
          </ul>
          <ul className="flex flex-col items-start">
            <li className="font-bold">Đầm</li>
            <li>Đầm suông</li>
            <li>Đầm dáng A</li>
            <li>Đầm ôm</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Products;
