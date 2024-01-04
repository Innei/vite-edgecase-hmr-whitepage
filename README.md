# vite edgecase hmr whitepage

Maybe `vitejs/react-swc` hmr bug. If hmr failed, not can not full reload the page.

## Steps

1. start dev
1. Change `src/providers/router.tsx` `indexRoute` props of component.
1. Page not full page, and page is blank at this time.