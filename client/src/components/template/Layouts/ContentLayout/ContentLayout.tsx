import React, { ReactNode } from 'react'
import style from './global-layout.module.sass'

interface IContentLayout {
  children: ReactNode
}

export const GlobalLayout: React.FC<IContentLayout> = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>
}
