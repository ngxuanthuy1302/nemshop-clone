import { Checkbox } from 'antd';
import { ReactNode } from 'react';

const Login = ({ children }: { children?: ReactNode | undefined }) => {
  return (
    <>
      <ul className="flex gap-1 m-5 font-[500]">
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
            href="./login"
            className="uppercase">
            Tài khoản
          </a>
        </li>
      </ul>
      <section className="flex justify-center p-10 lg:p-[70px] w-full">
        <form
          action=""
          className="w-1/2 flex flex-col gap-2 px-5 lg:px-[100px] text-left">
          <h4 className="font-bold text-[30px] ">Đăng nhập</h4>
          <span className="my-5">Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!</span>
          <label
            htmlFor="email"
            className="text-[#8f8f8f]">
            Email
          </label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="Email"
            className="w-full h-10 outline-none border-[#dadada] border-[1px] border-solid pl-5"
          />
          <label
            htmlFor="password"
            className="text-[#8f8f8f]">
            Password
          </label>
          <input
            type="password"
            name=""
            id="password"
            placeholder="Password"
            className="w-full h-10 outline-none border-[#dadada] border-[1px] border-solid pl-5"
          />
          <a
            href="./"
            className="text-blue-400 text-right">
            Quên mật khẩu
          </a>
          <input
            type="submit"
            value={'Đăng nhập'}
            className="font-bold text-white h-10 w-full bg-black  flex items-center justify-center uppercase mt-10"></input>
        </form>
        <span className="w-[1px] h-auto bg-[#cac9c9]"></span>
        <form
          action=""
          className="w-1/2 gap-2 flex flex-col items-start px-5 lg:px-[100px] text-left">
          <h4 className="font-bold text-[30px]">Đăng ký</h4>
          <span className="my-5">Hãy đăng ký ngay để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!</span>
          <label
            htmlFor="firstName"
            className="text-[#8f8f8f]">
            Họ
          </label>
          <input
            type="text"
            name=""
            id="firstName"
            placeholder="Họ"
            className="w-full h-10 outline-none border-[#dadada] border-[1px] border-solid pl-5"
          />
          <label
            htmlFor="lastName"
            className="text-[#8f8f8f]">
            Tên
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            placeholder="Tên"
            className="w-full h-10 outline-none border-[#dadada] border-[1px] border-solid pl-5"
          />
          <label
            htmlFor="email"
            className="text-[#8f8f8f]">
            Email
          </label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="Email"
            className="w-full h-10 outline-none border-[#dadada] border-[1px] border-solid pl-5"
          />
          <label
            htmlFor="phone"
            className="text-[#8f8f8f]">
            Số điện thoại
          </label>
          <input
            type="text"
            name=""
            id="phone"
            placeholder="Số điện thoại"
            className="w-full h-10 outline-none border-[#dadada] border-[1px] border-solid pl-5"
          />
          <label
            htmlFor="password"
            className="text-[#8f8f8f]">
            Password
          </label>
          <input
            type="password"
            name=""
            id="password"
            placeholder="Password"
            className="w-full h-10 outline-none border-[#dadada] border-[1px] border-solid pl-5"
          />
          <Checkbox className="mt-5">Đăng ký nhận bản tin</Checkbox>
          <Checkbox>Tôi đồng ý với các điều khoản của NEM</Checkbox>
          <input
            type="submit"
            value={'Đăng kí'}
            className="font-bold text-white h-10 w-full bg-black  flex items-center justify-center uppercase mt-10"></input>
        </form>
      </section>
    </>
  );
};
export default Login;
