'use client'

import { createContext } from 'react'

export const AuthContext = createContext(false)

export default function AuthProvider({ children }) {
  return <AuthContext.Provider value={false}>{children}</AuthContext.Provider>
}
