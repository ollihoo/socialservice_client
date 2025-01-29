# NextJs Application

Install an example app with this command: 

    npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm

Additional packages:

    pnpm i use-debounce

This is the response (if successfully done).

Success! Created nextjs-dashboard at /Users/oliverhoogvliet/IdeaProjects/socialServices/nextjs-dashboard

## Some specialties of nextjs

### layout.tsx
This fragment shows the layout of this page set. It's parent is layout.tsx in the root folder (nextjs-dashboard/app).

### page.tsx
That's the page in a folder that actually shows the content of that page.

### loading.tsx
This page contains the loading skeleton of this page. see more here: https://nextjs.org/learn/dashboard-app/streaming

### ui/skeletons.tsx
Skeleton pages for async content loading
