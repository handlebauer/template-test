import { useEffect } from 'react'
import type { User } from '@supabase/supabase-js'
import { createClient } from '../lib/supabase/client'
import { useUserStore } from '../lib/store/user-store'
import { useRouter } from 'next/navigation'

export function useUser(initialUser: User | null) {
    const user = useUserStore(state => state.user)
    const setUser = useUserStore(state => state.setUser)
    const router = useRouter()
    const supabase = createClient()

    // Set initial user from server
    useEffect(() => {
        setUser(initialUser)
    }, [initialUser, setUser])

    // Subscribe to auth changes
    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [supabase.auth, setUser])

    const signOut = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    return {
        user,
        signOut,
    }
}
