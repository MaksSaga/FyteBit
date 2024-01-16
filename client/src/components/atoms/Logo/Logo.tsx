import style from './logo.module.sass'

export const Logo = () => {
  return (
    <a href="/" className={style.wrapper}>
      <img src="../../../../src/assets/images/svg/logo.svg" alt="logo" />
      <p className={style.logo}>fytebit</p>
    </a>
  )
}
