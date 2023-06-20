"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  avatar: string
  agentName: string
  status: "online" | "offline" | "disconnected" | "expired"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "agentName",
    header: () => <div className="text-left">Agent Name</div>,
    cell: ({ row }) => {
      return <div className="flex items-center text-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>Icon</AvatarFallback>
        </Avatar>
        <div className="ml-4">{row.getValue('agentName')}</div>
      </div>
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => {
      let color = "text-black"
      switch (row.getValue('status')) {
        case "online": color = "text-green-500"; break;
        case "offline": color = "text-red-500"; break;
        case "disconnected": color = "text-yellow-500"; break;
        case "expired": color = "text-gray-500"; break;
      }
      return <div className={color + " text-center font-medium"}>{row.getValue('status')}</div>
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      return  <div className="text-center font-medium"><Button variant="secondary" className="text-center font-medium"><Edit className="mr-2 h-4 w-4" /> Edit</Button></div>
    },
  },
]
