# NextJs Application

Install an example app with this command: 

    npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm

Additional packages:

    pnpm i use-debounce

This is the response (if successfully done).

'Success! Created nextjs-dashboard at /Users/oliverhoogvliet/IdeaProjects/socialServices/nextjs-dashboard
Inside that directory, you can run several commands:

    pnpm run dev
Starts the development server.

    pnpm run build
Builds the app for production.

    pnpm start
Runs the built app in production mode.

We suggest that you begin by typing:

    cd nextjs-dashboard
    pnpm run dev

# Next structure

    /app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
    /app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.
    /app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
    /public: Contains all the static assets for your application, such as images.
    
Config Files: You'll also notice config files such as next.config.js at the root of your application. Most of these 
files are created and pre-configured when you start a new project using create-next-app. 
You will not need to modify them in this course.

## Some specialties of nextjs

### layout.tsx
This fragment shows the layout of this page set. It's parent is layout.tsx in the root folder (nextjs-dashboard/app).

### page.tsx
That's the page in a folder that acutally shows the content of that page. 

### loading.tsx
This page contains the loading skeleton of this page. see more here: https://nextjs.org/learn/dashboard-app/streaming  

### ui/skeletons.tsx
Skeleton pages for async content loading