import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Grip, Search } from "lucide-react";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import Siderbar from './Siderbar';
import { useSelector } from 'react-redux';



const Navbar = () => {
  const {auth} = useSelector(store => store.getAuth)
  return (
    <div className="flex items-center justify-between border-b px-4 py-3">

        <div className="flex items-center gap-3">
            <Sheet>
  <SheetTrigger>
    <Button variant="ghost" size="icon">
      <Grip className="h-4 w-4" />
    </Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxz3nOYPGgYhIzkeZDRlT9R3-BaHtQ-rWZy3TE4Q3xlA&s" />
            <AvatarFallback>TN</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1">
            <span>Treading </span>
            <span>Now</span>
          </div>
        </div>
      </SheetTitle>
    </SheetHeader>
    <Siderbar />
  </SheetContent>
</Sheet>

<p className="text-lg font-semibold">Treading</p>

<div className="">
  <Button variant="outline" size="sm">
    <Search className="h-4 w-4" />
    <span>Search</span>
  </Button>
</div>

        </div>

        <div className="">
          <Avatar>
            <AvatarFallback>
               {auth.user.fullName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>


    </div>
  )
}

export default Navbar