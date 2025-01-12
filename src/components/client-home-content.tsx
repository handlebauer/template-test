'use client'

import type { User } from '@supabase/supabase-js'
import { useUser } from '@/hooks/hooks'

interface ClientHomeContentProps {
    initialUser: User | null
}

export function ClientHomeContent({ initialUser }: ClientHomeContentProps) {
    const { user, signOut } = useUser(initialUser)

    if (!user) {
        return null
    }

    return (
        <div className="max-w-md w-full space-y-8 bg-card rounded-lg border border-border shadow-sm p-8">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-medium text-foreground">
                    Welcome{user ? ' Back' : ''}
                </h1>
                {user ? (
                    <div className="space-y-6">
                        <p className="text-sm text-muted-foreground">
                            Signed in as{' '}
                            <span className="font-medium text-foreground">
                                {user.email}
                            </span>
                        </p>
                        <button
                            onClick={signOut}
                            className="w-full py-3 px-4 bg-destructive text-destructive-foreground text-sm font-medium rounded-md hover:bg-destructive/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <p className="text-sm text-muted-foreground">
                            Please sign in to continue
                        </p>
                        <a
                            href="/login"
                            className="block w-full py-3 px-4 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background text-center"
                        >
                            Sign In
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
