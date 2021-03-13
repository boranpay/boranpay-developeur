import { lazy } from 'react'

const TransactionRoutes = [
  // Dashboards
  {
    path: '/dashboard/',
    component: lazy(() => import('../../views/Home')),
    exact: true
  },
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/pages/SecondPage'))
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/pages/misc/Error')),
    layout: 'BlankLayout'
  }
]

export default TransactionRoutes
