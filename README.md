# Next.js Template with Supabase Auth

A modern Next.js 15 template with Supabase authentication, Tailwind CSS, and TypeScript.

## Features

- 🔐 Authentication with Supabase (Email/Password and OAuth)
- 🎨 Styling with Tailwind CSS
- 📝 Type-safe with TypeScript
- 🚀 Next.js 15 App Router
- 🔄 Real-time auth state sync
- 🛡️ Protected routes with middleware

## Getting Started

1. Clone the repository
2. Install dependencies:

    ```bash
    bun install
    ```

3. Set up your Supabase project:

    - Create a new project at [supabase.com](https://supabase.com)
    - Copy your project URL and anon key
    - Create a `.env.local` file with:
        ```env
        NEXT_PUBLIC_SUPABASE_URL=your-project-url
        NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
        ```

4. Configure authentication providers:

    - Go to Authentication > Providers in your Supabase dashboard
    - Enable Email/Password authentication
    - (Optional) Configure OAuth providers:
        - GitHub: Add your GitHub OAuth credentials
        - Google: Add your Google OAuth credentials
    - Set your site URL and redirect URLs in Authentication > URL Configuration:
        ```
        Site URL: http://localhost:3000
        Redirect URLs:
        - http://localhost:3000/auth/callback
        - http://localhost:3000
        ```

5. Initialize the database:

    ```bash
    bun run db:init
    ```

    This will create a demo user with the following credentials:

    ```
    Email: demo@app.com
    Password: demo1234
    ```

6. Start the development server:
    ```bash
    bun dev
    ```

## Authentication Flow

The template includes a complete authentication flow:

1. **Sign In Page** (`/login`):

    - Email/Password authentication
    - Social authentication (GitHub, Google)
    - Error handling and loading states

2. **Protected Routes**:

    - Middleware automatically redirects unauthenticated users to login
    - Real-time session management
    - Automatic token refresh

3. **Sign Out**:
    - Clean session termination
    - Redirect to login page

## Development Commands

```bash
bun dev          # Start development server
bun build        # Create production build
bun run test     # Run all tests
bun test:watch   # Run tests in watch mode
bun run db:init  # Reset DB and seed with demo data
```

## Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## License

MIT
