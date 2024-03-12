# SprintEase - Agile Work Management Tool

> **(UPDATE)** - with the latest dependencies updates, you will have to do some small config changes.

SprintEase is a powerful and flexible work management tool designed for agile development in a B2B SaaS (Business to Business Software as a Service) environment. SprintEase empowers teams with features tailored for agile methodologies, making collaboration and project management seamless. Built on a robust technology stack, including React, Typescript, Next.js 14, and integrated with Clerk, Supabase, PostgreSQL, and other cutting-edge technologies, it's a go-to solution for efficient agile project management.

## Key Features

- **Agile Work Management**: Tailored features to support agile development methodologies.
- **Collaboration**: Seamlessly collaborate with team members.
- **Project Management**: Manage projects with ease.
- **Task Management**: Manage tasks, activity, state, environments and status.
- **Manage Organizations**: Work in different organizations with different teams, different projects, and different tasks.
- **Track Activity**: Track activity and progress with ease.
- **B2B SaaS Solution**: Designed for Business to Business Software as a Service, providing a scalable and secure platform.
- **Robust Technology Stack**: Built on a robust technology stack, including React, Typescript, Next.js 14, and integrated with Clerk, Supabase, PostgreSQL, and other cutting-edge technologies.

- **Integrated Technologies**:
  - **React and Next.js**: React and Next.js for a fast and responsive user interface, getting the best of both worlds client-side and server-side rendering.
  - **Typescript**: Typescript for a robust and scalable codebase.
  - **Authentication**: Clerk for user authentication.
  - **Database**: Supabase and PostgreSQL for robust data storage and retrieval.
  - **State Management**: Zustand for efficient state management.
  - **ORM**: Prisma for database access using Typescript.
  - **Form Validation**: Zod for strict type-based form validation.
  - **UI Components**: Tailwind and Shadcn-ui for a clean and modern design.
  - **Server Actions**: Efficient handling of server-side actions.
  - **Payment Processing**: Stripe for secure and seamless transactions.
  - **Notifications**: Sonner for handling real-time notifications.

### Landing page

> <img src="/public/demo-images/landing.png"/>

##

### Platform

> <img src="/public/demo-images/boards.png"/>
>
> ##
>
> <img src="/public/demo-images/board.png"/>
>
> ##
>
> <img src="/public/demo-images/task.png"/>

##

### Prerequisites

```bash
 Node version 18.x.x
```

## Getting Started

1. Clone the repository: `git clone`
2. Install dependencies: `npm install`
3. Configure your environment variables.
4. Run the application: `npm run dev`

### Setup .env file

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

STRIPE_API_KEY=

NEXT_PUBLIC_APP_URL=

STRIPE_WEBHOOK_SECRET=
```

#### Additional Info

This application is built with `Server Actions`

#### Setup Prisma

```bash
npx prisma init
npx prisma generate
npx prisma db push

```

## Contributing

You are welcome to contribute, to enhance SprintEase's capabilities. Whether it's fixing bugs, improving existing features, or proposing new ones, your input is valuable.

## Reporting Issues

If you encounter any issues or have suggestions for improvement, please [create an issue](https://github.com/your-username/sprintease/issues) on our GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
