import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { DotIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Store from '@/State/Store'
import { getUserWallet } from '@/State/Wallet/Action'
import { LabelableContext } from 'node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs'
import { getAssetDetails } from '@/State/Asset/Action'

const TreadingForm = () => {
    const [orderType, setOrderType] = useState("BUY")
    const [amount , setAmount] = useState(0);
    const [quantity , setQuantity] = useState(0);
    const {coin , wallet , asset} = useSelector(Store=>Store);
    const dispatch = useDispatch()


    const handleChange = (e) => {
        const amount = e.target.value;
        setAmount(amount);
        const volume = calculateBuyCost(amount , coin.coinDetails.market_data.current_price.usd);

        setQuantity(volume);
    };  

    const calculateBuyCost= (amount , price) => {
        let volume = amount / price;

        let decimalPlaces = Math.max(2, price.toString().split(".")[0].length)
        return volume.toFixed(decimalPlaces);
    }

    useEffect( () => {
        dispatch(getUserWallet(localStorage.getItem("jwt")));
        dispatch(getAssetDetails({coinId : coin.coinDetails.id , jwt : localStorage.getItem("jwt")}));
    },[]);

    const handleBuyCrypto = () => {
        dispatch( payOrder({jwt: localStorage.getItem("jwt"), amount , 
            orderData : {
                coinId: coin.coinDetails?.id,
                quantity,
                orderType
            }
        }))
    }

    return (

    <div className="space-y-10 p-5">
            <div className="">
                <div className="flex gap-5 items-center justify-between">
                    <Input className="py-7 focus-visible:ring-1" placeholder="Enter Amount..." onChange={handleChange} type="number" name="amount" />   
                    
                    <div className="">
                        <p className='border text-2xl flex justify-center items-center w-36 h-14 rounded-md'>{quantity}</p>
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
                        <p className='text-xl font-bold'>${coin.coinDetails.market_data.current_price.usd}</p>
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
                 <p>{orderType == "BUY" ?  "$" +  wallet.userWallet?.balance : (asset.assetDetails?.quantity || 0) }</p>
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