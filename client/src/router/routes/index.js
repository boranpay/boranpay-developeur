import { lazy } from 'react'

// ** Routes Imports
import DashboardRoutes from './Dashboards'
import AuthRoutes from './Auth'
// ** Document title
const TemplateTitle = `${process.env.REACT_APP_NAME}`

// ** Default Route
const DefaultRoute = '/dashboard/'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...AuthRoutes
]

export { DefaultRoute, TemplateTitle, Routes }

