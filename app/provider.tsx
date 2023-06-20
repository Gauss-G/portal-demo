'use client'

import AuthProvider from './auth-provider'
import {AccountProvider} from './accountProvider'

export function Providers({ children }) {
  return (
    <AccountProvider value={{
      loginInfos: ["admin","guest"],
    }}>{children}</AccountProvider>
  )
}
