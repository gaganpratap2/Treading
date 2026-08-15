import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { CopyIcon, DollarSign, RefreshCw, RotateCw, Shuffle, ShuffleIcon, UploadIcon, WalletIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import TopUpWallet from './TopUpWallet'
import WithdrawalForm from './WithdrawalForm'
import TransferForm from './TransferForm'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useDispatch, useSelector } from 'react-redux'
import { depositeMoney, getUserWallet, getWalletTransaction } from '@/State/Wallet/Action'
import { useLocation, useNavigate } from 'react-router-dom'


function useQuery(){
    return new URLSearchParams(useLocation.search)
}


const Wallet = () => {
    const dispatch = useDispatch();
    const {wallet} = useSelector(store => store);
    const Navigate = useNavigate();

    useEffect( () => {
        handelFetchUserWallet();
        handelFetchUserWallet();
    },[]);

    useEffect( () => {
        if(orderId){
            dispatch(depositeMoney({jwt : localStorage.getItem("jwt"),
                orderId,
                paymentId: razorpayPaymentId || paymentId,
                navigate,
            }))
        }
    },[orderId , paymentId , razorpayPaymentId]);

    const query = useQuery();
    const orderId = query.get("order_id");
    const paymentId = query.get("payment_id");
    const razorpayPaymentId = query.get("razorpay_payment_id");

    const handelFetchUserWallet = () => {
        dispatch(getUserWallet(localStorage.getItem("jwt")))
    } 


    const handleFetchWalletTransaction =() => {
        dispatch(getWalletTransaction({jwt : localStorage.getItem("jwt")}))
    }
  return (
    <div className='flex flex-col items-center'>

        <div className="mt-10 w-full lg:w-[60%] px-4">
            <Card className="shadow-sm">
                <CardHeader className="pb-9">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center h-11 w-11 rounded-full bg-primary/10 text-primary">
                                <WalletIcon size={22} />
                            </div>
                            <div className="">
                                <CardTitle className="text-2xl">My Wallet</CardTitle>
                                <div className="flex items-center gap-2">
                                    <p className='text-muted-foreground text-sm'>
                                        #{wallet.userWallet?.id}
                                    </p>
                                    <CopyIcon size={13} className='cursor-pointer text-muted-foreground hover:text-foreground transition-colors' />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <RefreshCw onClick={handelFetchUserWallet} className="w-5 h-5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors" />
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="flex items-center gap-2">
                        <DollarSign className="text-muted-foreground" />
                        <span className='text-3xl font-semibold tracking-tight'>{wallet.userWallet.balance}</span>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="h-24 w-24 hover:bg-muted hover:text-primary cursor-pointer flex flex-col items-center justify-center gap-2 rounded-xl border transition-colors">
                                    <UploadIcon className="h-5 w-5" />
                                    <span className='text-xs text-center px-1'>Add Money</span>
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Top Up Your Wallet
                                    </DialogTitle>
                                </DialogHeader>
                                <TopUpWallet />
                            </DialogContent>
                        </Dialog>

                         <Dialog>
                            <DialogTrigger asChild>
                                <button className="h-24 w-24 hover:bg-muted hover:text-primary cursor-pointer flex flex-col items-center justify-center gap-2 rounded-xl border transition-colors">
                                    <UploadIcon className="h-5 w-5" />
                                    <span className='text-xs text-center px-1'>Withdrawal Money</span>
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Request Withdrawal
                                    </DialogTitle>
                                </DialogHeader>
                                <WithdrawalForm />
                            </DialogContent>
                        </Dialog>

                         <Dialog>
                            <DialogTrigger asChild>
                                <button className="h-24 w-24 hover:bg-muted hover:text-primary cursor-pointer flex flex-col items-center justify-center gap-2 rounded-xl border transition-colors">
                                    <Shuffle className="h-5 w-5" />
                                    <span className='text-xs text-center px-1'>Transfer Money</span>
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className="text-center text-xl">
                                        Transfer To Other Account
                                    </DialogTitle>
                                </DialogHeader>
                                <TransferForm />
                            </DialogContent>
                        </Dialog>

                    </div>
                </CardContent>

            </Card>

            <div className="py-5 pt-10">
                <div className="flex gap-2 items-center justify-between pb-5">
                    <h1 className='text-2xl font-semibold'>History</h1>
                    <RotateCw className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-foreground transition-colors" />
                </div>

                <div className="space-y-3">
                    {wallet.transactions.map((item , i) => (
                        <div key={i}>
                            <Card className="px-5 py-4 flex flex-row justify-between items-center shadow-sm">
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarFallback onClick={handleFetchWalletTransaction}>
                                    <ShuffleIcon className="h-4 w-4" />
                                </AvatarFallback>
                            </Avatar>

                            <div className="space-y-1">
                                <h1 className="font-medium">{item.type || item.purpose}</h1>
                                <p className='text-sm text-muted-foreground'>{item.date}</p>
                            </div>
                        </div>

                        <div className="">
                            <p className="text-green-500 font-medium">{item.amount} USD</p>
                        </div>
                    </Card>
                        </div>
                    ))}
                </div>

            </div>

        </div>

    </div>
  )
}

export default Wallet


















// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
// import { CopyIcon, DollarSign, Shuffle, UploadIcon, WalletIcon } from 'lucide-react'
// import React from 'react'
// import TopUpWallet from './TopUpWallet'
// import WithdrawalForm from './WithdrawalForm'

// const Wallet = () => {
//   return (
//     <div className='flex flex-col items-center'>

//         <div className="ot-10 w-full lg:w-[60%]">
//             <Card>
//                 <CardHeader className="pb-9">
//                     <div className="flex justify-between items-center">
//                         <div className="flex items-center gap-5">
//                             <WalletIcon size={28} />
//                             <div className="">
//                                 <CardTitle className="text-2xl">My Wallet</CardTitle>
//                                 <div className="flex items-center gap-2">
//                                     <p className='text-gray-800 text-sm'>
//                                         #A2354
//                                     </p>
//                                     <CopyIcon size={13} className='cursor-pointer hover:text-slate-300' />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="">
//                             <ReloadIcon className="w-6 h-6 cursor-pointer hover:text-gray-400" />
//                         </div>
//                     </div>
//                 </CardHeader>

//                 <CardContent>
//                     <div className="flex items-center">
//                         <DollarSign />
//                         <span className='text-2xl font-semibold'>30000</span>
//                     </div>

//                     <div className="flex gap-7 mt-5">
//                         <Dialog>
//                             <DialogTrigger>
//                                 <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadows-slate-800">
//                                     <UploadIcon />
//                                     <span className='text-sm mt-2'>Add Money</span>
//                                 </div>
//                             </DialogTrigger>
//                             <DialogContent>
//                                 <DialogHeader>
//                                     <DialogTitle>
//                                         Top Up Your Wallet
//                                     </DialogTitle>
//                                 </DialogHeader>
//                                 <TopUpWallet />
//                             </DialogContent>
//                         </Dialog>

//                          <Dialog>
//                             <DialogTrigger>
//                                 <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadows-slate-800">
//                                     <UploadIcon />
//                                     <span className='text-sm mt-2'>Withdrawal Money</span>
//                                 </div>
//                             </DialogTrigger>
//                             <DialogContent>
//                                 <DialogHeader>
//                                     <DialogTitle>
//                                         Request Withdrawal
//                                     </DialogTitle>
//                                 </DialogHeader>
//                                 <WithdrawalForm />
//                             </DialogContent>
//                         </Dialog>

//                          <Dialog>
//                             <DialogTrigger>
//                                 <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadows-slate-800">
//                                     <Shuffle />
//                                     <span className='text-sm mt-2'>Transfer Money</span>
//                                 </div>
//                             </DialogTrigger>
//                             <DialogContent>
//                                 <DialogHeader>
//                                     <DialogTitle className="text-center text-xl">
//                                         Transfer To Other Account
//                                     </DialogTitle>
//                                 </DialogHeader>
//                                 <TransferForm />
//                             </DialogContent>
//                         </Dialog>

//                     </div>
//                 </CardContent>

//             </Card>
//         </div>

//     </div>
//   )
// }

// export default Wallet