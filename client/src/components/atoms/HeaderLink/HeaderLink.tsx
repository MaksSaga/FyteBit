import React from 'react'
import style from './header-link.module.sass'

interface IHeaderLink {
  url: string
  title: string
}

export const HeaderLink: React.FC<IHeaderLink> = ({ url, title }) => {
  return (
    <a className={style.link} href={url}>
      {title}
    </a>
  )
}
