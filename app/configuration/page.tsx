
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import React, { useContext } from 'react';
import {AccountContext} from '../accountProvider'


async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      avatar: "terry.png",
      agentName: "Agent South Africa",
      status: "online",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      avatar: "terry.png",
      agentName: "Agent Europe 1",
      status: "online",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      avatar: "terry.png",
      agentName: "Agent Asia 1",
      status: "online",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      avatar: "terry.png",
      agentName: "Agent Europe 2",
      status: "offline",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      avatar: "terry.png",
      agentName: "Agent Asia 2",
      status: "disconnected",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()
  // const { loginInfos } = useContext(AccountContext);
  // console.log(loginInfos)
  // const result = useContext(ProviderContext);
  // const theme = useContext(LoginContext);
  return (

    <div className="config-container flex h-full">
      <div className="sideBar flex w-40 flex-col items-center">
        <div className="text-center text-2xl leading-loose">Agents</div>
        <Separator />
        <div className="text-center text-2xl leading-loose">Setting</div>
      </div>
      <Separator className="h-2000 ml-8" orientation="vertical" />
      <div className="container py-5">
        <div className="float-right mt-5 flex w-full items-center justify-between px-4">
          <div className="text-2xl font-bold">Agents Configuration</div>
          <Button className="h-2000">
            <Plus className="mr-2 h-4 w-4" /> Create Agent
          </Button>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
