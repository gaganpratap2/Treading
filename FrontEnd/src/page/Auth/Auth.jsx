import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Auth = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-10">
      <div className="w-full max-w-md space-y-6">

        <div className="flex flex-col items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxz3nOYPGgYhIzkeZDRlT9R3-BaHtQ-rWZy3TE4Q3xlA&s" />
            <AvatarFallback>TN</AvatarFallback>
          </Avatar>
          <p className="text-lg font-semibold">
            Trading <span className="text-primary">Now</span>
          </p>
        </div>

        <div className="rounded-xl border bg-background shadow-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-semibold">{title}</h1>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>

          {children}
        </div>

      </div>
    </div>
  )
}

export default Auth