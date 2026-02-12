# Next.js Application

This is the site of Next.js: https://nextjs.org/

Next.js uses [react](./react.md) and [tailwind](./tailwind.md).

## Next structure

    /app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
    /app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.
    /app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
    /public: Contains all the static assets for your application, such as images.

### layout.tsx

This fragment shows the layout of this page set. It's parent is layout.tsx in the root folder (nextjs-dashboard/app).

### page.tsx

That's the page in a folder that actually shows the content of that page.

### loading.tsx

This page contains the loading skeleton of this page. see more here: https://nextjs.org/learn/dashboard-app/streaming

### ui/skeletons.tsx

Skeleton pages for async content loading

Config Files: You'll also notice config files such as next.config.js at the root of your application. Most of these
files are created and pre-configured when you start a new project using create-next-app.
