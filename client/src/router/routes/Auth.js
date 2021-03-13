import { lazy } from 'react'

const AuthRoutes = [
    {
        path: '/login/',
        component: lazy(() => import('../../views/auth/LoginUser')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    }
]

export default AuthRoutes
