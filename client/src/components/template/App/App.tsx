import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../../../pages/Main/MainPage.tsx'
import { GlobalLayout } from '../Layouts/GlobalLoyout/GlobalLayout.tsx'

export const App = () => (
  <Routes>
    <Route path="/" element={<GlobalLayout />}>
      <Route index element={<MainPage />} />
    </Route>
  </Routes>
)
