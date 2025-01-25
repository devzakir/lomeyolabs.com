'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabaseClient } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

const AdminAuthContext = createContext({})

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check current auth status
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      checkAdminStatus(session?.user)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      checkAdminStatus(session?.user)
    })

    return () => subscription.unsubscribe()
  }, [])

  const checkAdminStatus = async (user) => {
    if (user) {
      const { data } = await supabaseClient
        .from('admin_users')
        .select('*')
        .eq('id', user.id)
        .single()

      if (data) {
        setAdmin({ ...user, ...data })
      } else {
        setAdmin(null)
      }
    } else {
      setAdmin(null)
    }
    setLoading(false)
  }

  const logout = async () => {
    await supabaseClient.auth.signOut()
    router.push('/admin/login')
  }

  const value = {
    admin,
    loading,
    logout,
  }

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export const useAdminAuth = () => {
  return useContext(AdminAuthContext)
} 