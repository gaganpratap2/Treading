import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { DotIcon } from 'lucide-react'
import React, { useState } from 'react'

const TreadingForm = () => {
    const [orderType, setOrderType] = useState("BUY")

    const handleChange = (e) => {
        console.log(e.target.value)
    }

  return (
    <div className="space-y-10 p-5">
            <div className="">
                <div className="flex gap-5 items-center justify-between">
                    <Input className="py-7 focus-visible:ring-1" placeholder="Enter Amount..." onChange={handleChange} type="number" name="amount" />   
                    
                    <div className="">
                        <p className='border text-2xl flex justify-center items-center w-36 h-14 rounded-md'>7658</p>
                    </div>
                </div>
                {false && <h1 className='text-red-500 text-center pt-4'>Insufficient wallet Balance to buy</h1>}
            </div>
               <div className="flex gap-5 items-center">
                <div className="">
                    <Avatar>
                        <AvatarImage src={""} />
                    </Avatar>
                </div>
                <div className="">
                    <div className="flex items-center">
                        <p>BTC</p>
                        <DotIcon />
                        <p className='text-gray-400'>Bitcoin</p>
                    </div>
                    <div className="flex items-end gap-2">
                        <p className='text-xl font-bold'>$5654</p>
                        <p className='text-sm text-green-500'>+2.45%</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p>Order Type</p>
                <p className="text-muted-foreground">Market Order</p>
            </div>
            <div className="flex items-center justify-between">
                <p>{orderType == "BUY" ? "Available Balance" : "Available Quantity"}</p>
                 <p>{orderType == "BUY" ? "8989.09.09" : "0.00"}</p>
            </div>
            <div className="space-y-3">
                <Button className={`w-full py-6 ${orderType === "SELL" ? "bg-red-600 hover:bg-red-700" : ""}`}>
                    {orderType}
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setOrderType(orderType == "BUY" ? "SELL" : "BUY")}>
                    {orderType == "BUY" ? "Or Sell" : "Or Buy"}
                </Button>
            </div>
    </div>
  )
}
export default TreadingForm