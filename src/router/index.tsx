import { Outlet, RootRoute, Router } from '@tanstack/react-router'

import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { Sidebar } from '../layouts/root/Sidebar'
import { aboutRoute } from '../pages/about'
import { indexRoute } from '../pages/home'

export const rootRoute = new RootRoute({
  component: () => (
    <div>
      <Sidebar />

      <main className="relative ml-[250px] flex min-h-screen flex-col p-4">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  ),
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
