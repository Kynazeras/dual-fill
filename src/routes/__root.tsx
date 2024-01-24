import { RootRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '../_layout/Navbar';
import { ThemeProvider } from '@/components/theme-provider';

export const Route = new RootRoute({
  component: () => (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Navbar></Navbar>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </ThemeProvider>
  ),
});
