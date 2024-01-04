import {
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from '@tanstack/react-router'

import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const rootRoute = new RootRoute({
  component: () => (
    <div>
      <Outlet />

      <TanStackRouterDevtools />
    </div>
  ),
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div>1xx1sxxxxxxxxx1</div>,
})

const routeTree = rootRoute.addChildren([indexRoute])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }

  export interface RouteMeta {
    title?: string
    group?: string
  }
}

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />
}
