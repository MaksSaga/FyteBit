import React from 'react'
import { Logo } from '../../atoms/Logo/Logo.tsx'
import { HeaderLink } from '../../atoms/HeaderLink/HeaderLink.tsx'

export const Header: React.FC = () => {
  return (
    <div>
      <Logo />
      <HeaderLink url="" title="главная" />
    </div>
  )
}
