This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tropical Tech website

website built with React library and Next framework, using typeScript

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## API settings

blog RESTful api

nextJS - api
mongoose - orm library
mongoDB - database
jsonwebtoken - library for managing authentication through jwt token
nextjs-cors - cors policy
nodemailer - email library
bcryptjs - hash of passwords

data format: JSON

endpoints:

-"/api/check-jwt": check validate of a jwt token
-"/api/create-comment": create comment of a post
-"/api/read-comments": get all comments of a post
-"/api/create-post": create post
-"/api/create-user": create a admin user - not route not accessible 
-"/api/delete-post": delete a post
-"/api/edit-post": edit a post
-"/api/login": admin login
-"/api/mail-service": sending emails
-"/api/read-posts": get all posts of database
-"/api/read-post": get one post of database by post id

middlewares:

handler cors policy