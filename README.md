# Multi-tenant application with nextjs and supabase

This is my template for a multi-tenant application that I want to build.

This is using the following tech stack: 
- [NextJS](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Talwindcss](https://tailwindcss.com/)


## Structure

I am still using Pages Router on this application so my application structure is as follows: 

```
pages/
├── _sites/
│   └── [site]/
│       ├── index.js
│       └── tools/
│           └── index.js
├── app/
│   ├── login/
│   │   └── index.js
│   └── index.js
└── home/
    ├── broker/
    │   └── index.js
    └── index.js
```

### _site

Will generate sites for the different users with a select subdomain for each of them.
Here, depending on how I would define the folder structure we can have a different structure per user app, e.g. the user could have a `homepage` as well as a page with `tools` that he can provide to clients.


### app 

This will be the app that the user will have access to and where he could personalize the services he wants to have to the clients.

### home

Is the client-facing app that I will manage and that will be public. 

### middleware

For this to work properly, we will need to set up the `middleware.ts`. 
You can see the middleware file at the root of this repo.

## Supabase

I am using supabase as my backend so that users can have an authenticated and authorized application to create their personal apps in order to go to market in a digital way.

