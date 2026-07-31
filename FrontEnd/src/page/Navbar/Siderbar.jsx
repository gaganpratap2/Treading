import React from "react";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import {
  Home,
  LayoutDashboard,
  Bookmark,
  Activity,
  Wallet,
  Landmark,
  CreditCard,
  User,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/State/Auth/Action"; // <-- Import logout

const menu = [
  { name: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    icon: <Bookmark className="h-4 w-4" />,
  },
  {
    name: "Activity",
    path: "/activity",
    icon: <Activity className="h-4 w-4" />,
  },
  {
    name: "Wallet",
    path: "/wallet",
    icon: <Wallet className="h-4 w-4" />,
  },
  {
    name: "Payment",
    path: "/payment",
    icon: <Landmark className="h-4 w-4" />,
  },
  {
    name: "Withdrawal",
    path: "/withdrawal",
    icon: <CreditCard className="h-4 w-4" />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <LogOut className="h-4 w-4" />,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col gap-1 px-2 py-3 h-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {menu.map((item) => (
        <div key={item.name}>
          <SheetClose className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 hover:bg-muted"
              onClick={() => {
                if (item.name === "Logout") {
                  handleLogout();
                }
                navigate(item.path);
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </Button>
          </SheetClose>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;f

















// import { Button } from '@/components/ui/button'
// import { SheetClose } from '@/components/ui/sheet'
// import { CreditCard, Home, Landmark } from 'lucide-react'
// import React from 'react'
// import { Activity, Bookmark, LayoutDashboard, LogOut, User, Wallet } from 'lucide-react'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'


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
//         name : "Payment",
//         path : "/payment" ,
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

//     const dispatch = useDispatch();
//     const handleLogout = () => {
//         dispatch(logout());
//     }

//     const navigate = useNavigate();

//     // const handleNavigate

//   return (
//     <div className="flex flex-col gap-1 px-2 py-3 h-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">

//         {menu.map( (item) =>{
//             return (
//             <div key={item.name}>
//                 <SheetClose className="w-full">
//                     <Button 
//                      onClick={() => {
//                 if (item.name === "Logout") {
//                   handleLogout();
//                 }
//                 navigate(item.path);
//               }}
//             >
//               {item.icon}
//               <span>{item.name}</span>
//             </Button>
//           </SheetClose>
//         </div>
//       ))}
//     </div>
//   );
// };


// export default Siderbar



















// // import { Button } from '@/components/ui/button'
// // import { SheetClose } from '@/components/ui/sheet'
// // import { CreditCard, Home, Landmark } from 'lucide-react'
// // import React from 'react'
// // import { Activity, Bookmark, LayoutDashboard, LogOut, User, Wallet } from 'lucide-react'
// // import { useNavigate } from 'react-router-dom'


// // const menu = [
// //     {name : "Home", path : "/" , icon : <Home className="h-4 w-4" />}, 
// //     {
// //         name : "Portfolio",
// //         path : "/portfolio" ,
// //         icon : <LayoutDashboard className="h-4 w-4" />
// //     },

// //      {
// //         name : "Watchlist",
// //         path : "/watchlist" ,
// //         icon : <Bookmark className="h-4 w-4" />
// //     },

// //      {
// //         name : "Activity",
// //         path : "/activity" ,
// //         icon : <Activity className="h-4 w-4" />
// //     },

// //      {
// //         name : "Wallet",
// //         path : "/wallet" ,
// //         icon : <Wallet className="h-4 w-4" />
// //     },

// //     {
// //         name : "PaymentDetails",
// //         path : "/payment-details" ,
// //         icon : <Landmark className="h-4 w-4" />
// //     },

// //     {
// //         name : "Withdrawal",
// //         path : "/withdrawal" ,
// //         icon : <CreditCard className="h-4 w-4" />
// //     },

// //     {
// //         name : "Profile",
// //         path : "/profile" ,
// //         icon : <User className="h-4 w-4" />
// //     },
     
// //     {
// //         name : "Logout",
// //         path : "/" ,
// //         icon : <LogOut className="h-4 w-4" />
// //     },
    
// // ]

// // const Siderbar = () => {

// //     const navigate = useNavigate();

// //     // const handleNavigate

// //   return (
// //     <div className="flex flex-col gap-1 px-2 py-2">

// //         {menu.map( (item) =>{
// //             return (
// //             <div key={item.name}>
// //                 <SheetClose className="w-full">
// //                     <Button onClick={() => navigate(item.path)} variant="ghost" className="w-full justify-start gap-3">
// //                         <span>{item.icon}</span>
// //                         <p>{item.name}</p>
// //                     </Button>
// //                 </SheetClose>
// //                 </div>
// //             )
// //         })}



// //     </div>
// //   )
// // }

// // export default Siderbar