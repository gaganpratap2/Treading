import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { CreditCard, Home, Landmark } from 'lucide-react'
import React from 'react'
import { Activity, Bookmark, LayoutDashboard, LogOut, User, Wallet } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const menu = [
    {name : "Home", path : "/" , icon : <Home className="h-4 w-4" />}, 
    {
        name : "Portfolio",
        path : "/portfolio" ,
        icon : <LayoutDashboard className="h-4 w-4" />
    },

     {
        name : "Watchlist",
        path : "/watchlist" ,
        icon : <Bookmark className="h-4 w-4" />
    },

     {
        name : "Activity",
        path : "/activity" ,
        icon : <Activity className="h-4 w-4" />
    },

     {
        name : "Wallet",
        path : "/wallet" ,
        icon : <Wallet className="h-4 w-4" />
    },

    {
        name : "Payment",
        path : "/payment" ,
        icon : <Landmark className="h-4 w-4" />
    },

    {
        name : "Withdrawal",
        path : "/withdrawal" ,
        icon : <CreditCard className="h-4 w-4" />
    },

    {
        name : "Profile",
        path : "/profile" ,
        icon : <User className="h-4 w-4" />
    },
     
    {
        name : "Logout",
        path : "/" ,
        icon : <LogOut className="h-4 w-4" />
    },
    
]

const Siderbar = () => {

    const navigate = useNavigate();

    // const handleNavigate

  return (
    <div className="flex flex-col gap-1 px-2 py-3 h-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">

        {menu.map( (item) =>{
            return (
            <div key={item.name}>
                <SheetClose className="w-full">
                    <Button onClick={() => navigate(item.path)} variant="ghost" className="w-full justify-start gap-3 hover:bg-muted">
                        <span>{item.icon}</span>
                        <p>{item.name}</p>
                    </Button>
                </SheetClose>
                </div>
            )
        })}



    </div>
  )
}

export default Siderbar



















// import { Button } from '@/components/ui/button'
// import { SheetClose } from '@/components/ui/sheet'
// import { CreditCard, Home, Landmark } from 'lucide-react'
// import React from 'react'
// import { Activity, Bookmark, LayoutDashboard, LogOut, User, Wallet } from 'lucide-react'
// import { useNavigate } from 'react-router-dom'


// const menu = [
//     {name : "Home", path : "/" , icon : <Home className="h-4 w-4" />}, 
//     {
//         name : "Portfolio",
//         path : "/portfolio" ,
//         icon : <LayoutDashboard className="h-4 w-4" />
//     },

//      {
//         name : "Watchlist",
//         path : "/watchlist" ,
//         icon : <Bookmark className="h-4 w-4" />
//     },

//      {
//         name : "Activity",
//         path : "/activity" ,
//         icon : <Activity className="h-4 w-4" />
//     },

//      {
//         name : "Wallet",
//         path : "/wallet" ,
//         icon : <Wallet className="h-4 w-4" />
//     },

//     {
//         name : "PaymentDetails",
//         path : "/payment-details" ,
//         icon : <Landmark className="h-4 w-4" />
//     },

//     {
//         name : "Withdrawal",
//         path : "/withdrawal" ,
//         icon : <CreditCard className="h-4 w-4" />
//     },

//     {
//         name : "Profile",
//         path : "/profile" ,
//         icon : <User className="h-4 w-4" />
//     },
     
//     {
//         name : "Logout",
//         path : "/" ,
//         icon : <LogOut className="h-4 w-4" />
//     },
    
// ]

// const Siderbar = () => {

//     const navigate = useNavigate();

//     // const handleNavigate

//   return (
//     <div className="flex flex-col gap-1 px-2 py-2">

//         {menu.map( (item) =>{
//             return (
//             <div key={item.name}>
//                 <SheetClose className="w-full">
//                     <Button onClick={() => navigate(item.path)} variant="ghost" className="w-full justify-start gap-3">
//                         <span>{item.icon}</span>
//                         <p>{item.name}</p>
//                     </Button>
//                 </SheetClose>
//                 </div>
//             )
//         })}



//     </div>
//   )
// }

// export default Siderbar