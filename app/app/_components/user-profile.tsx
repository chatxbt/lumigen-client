"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  userInfo: {
    avatar: string
    firstname: string
  } | null;
}

export function UserProfile({ className, userInfo, ...props }: UserProfileProps) {
  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      <Avatar>
        <AvatarImage src={userInfo?.avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl font-semibold tracking-tight">
        {userInfo?.firstname}
      </h1>
    </div>
  )
}
