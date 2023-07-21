import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { GetDisplay, SetDislay } from '../app/reducers/Display/display.reducer';

export default function Sidebar() {
  const display = useAppSelector(GetDisplay);
  const dispatch = useAppDispatch();

  return (
    <>
      <nav
        style={{ display: `${display}` }}
        className="sidebar-open py-5 fixed w-[50vw] z-[99] right-0 h-screen bg-[rgba(0,0,0,0.8)]">
        <CloseOutlined
          onClick={() => dispatch(SetDislay('none'))}
          className="text-white text-[30px] flex justify-end px-5"
        />
      </nav>
    </>
  );
}
