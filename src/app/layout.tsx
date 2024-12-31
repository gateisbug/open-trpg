import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
      <h1>Root Layout</h1>
      <p>this is root layout</p>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  )
}
