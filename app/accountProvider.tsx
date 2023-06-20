'use client'
import { createContext } from 'react'
interface IAccountContext  {
  loginInfos: string[];
}
const accountContextDefaultValue = {
  loginInfos: [],
}
export const AccountContext = createContext<IAccountContext>(
  accountContextDefaultValue,
);
const { Consumer: AccountConsumer, Provider: AccountProvider } = AccountContext;
export { AccountProvider, AccountConsumer };
