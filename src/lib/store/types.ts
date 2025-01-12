import type { User } from '@supabase/supabase-js'

export interface UserState {
    user: User | null
    setUser: (user: User | null) => void
}
