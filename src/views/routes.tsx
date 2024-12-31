import { lazy } from 'react'
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import RootLayout from '@app/layout.tsx'

const RootPage = lazy(async () => import('@app/page.tsx'))

const routes = createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<RootPage />} />
  </Route>,
)

const router = createMemoryRouter(routes, {
  basename: '/',
})

export default router
