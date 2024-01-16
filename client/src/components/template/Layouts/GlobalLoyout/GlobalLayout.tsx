import React, { ReactNode } from 'react'
import style from './global-layout.module.sass'

interface IGlobalLayout {
  children: ReactNode
}

export const GlobalLayout: React.FC<IGlobalLayout> = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>
}
