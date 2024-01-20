import React from 'react'
import style from './global-layout.module.sass'
import { Outlet } from 'react-router-dom'
import { Header } from '../../../organisms/Header/Header.tsx'

export const GlobalLayout: React.FC = ({}) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Outlet />
    </div>
  )
}
