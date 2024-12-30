'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseClient } from '@/lib/supabaseClient'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check active sessions and sets the user
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const login = async (email, password) => {
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error('Login error:', error.message)
        return { success: false, error: error.message }
      }

      if (!data?.user) {
        return { success: false, error: 'No user data received' }
      }

      // After successful login, fetch user profile
      const { data: profile, error: profileError } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single()

      if (profileError) {
        console.error('Profile fetch error:', profileError.message)
        // Don't fail the login if profile fetch fails
        setUser(data.user)
      } else {
        setUser({ ...data.user, ...profile })
      }

      return { success: true }
    } catch (error) {
      console.error('Error logging in:', error.message)
      return { success: false, error: error.message }
    }
  }

  const register = async (userData) => {
    try {
      // Register the user
      const { data, error } = await supabaseClient.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            full_name: userData.full_name,
            company_name: userData.company_name,
          },
          emailRedirectTo: `${window.location.origin}/login`,
        },
      })

      if (error) throw error

      // Create a profile record
      const { error: profileError } = await supabaseClient
        .from('profiles')
        .insert([
          {
            id: data.user.id,
            full_name: userData.full_name,
            company_name: userData.company_name,
            email: userData.email,
          },
        ])

      if (profileError) throw profileError

      return { success: true }
    } catch (error) {
      console.error('Error registering:', error.message)
      return { success: false, error: error.message }
    }
  }

  const logout = async () => {
    try {
      const { error } = await supabaseClient.auth.signOut()
      if (error) throw error
      
      setUser(null)
      router.push('/login')
    } catch (error) {
      console.error('Error logging out:', error.message)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) 