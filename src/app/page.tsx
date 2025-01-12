import { createClient } from '@/lib/supabase/server'
import { ClientHomeContent } from '../components/client-home-content'

export default async function Home() {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-8">
            <ClientHomeContent initialUser={user} />
        </div>
    )
}
