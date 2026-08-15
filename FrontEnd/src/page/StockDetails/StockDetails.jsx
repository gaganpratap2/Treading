import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { RiBookMarkedFill } from '@remixicon/react'
import { BookMarked, BookMarkedIcon, DotIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import TreadingForm from './TreadingForm'
import StockChart from '../Home/StockChart'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCoinDetails } from '@/State/Coin/Action'

const StockDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {coin} = useSelector(store => store);


    console.log("param " , params);

    useEffect( () => {

        dispatch(fetchCoinDetails({coinId : id , jwt:localStorage.getItem("jwt")}));

    },[id]);
  return (
    <div className='p-5 mt-5'>
        <div className="flex justify-between">
            <div className="flex gap-5 items-center">
                <div className="">
                    <Avatar>
                        <AvatarImage src={
                            coin.coinDetails?.image.large
                        } />
                    </Avatar>
                </div>
                <div className="">
                    <div className="flex items-center">
                        <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
                        <DotIcon  />
                        <p className='text-gray-400'>{coin.coinDetails?.name}</p>
                    </div>
                    <div className="flex items-end" gap-2>
                        <p className='text-xl font-bold'>{coin.coinDetails?.market_data.current_price.usd}</p>
                        <p>
                            <span className=''>
                                <span>
                                      -{coin.coinDetails?.market_data.market_cap_change_24h}
                                </span>
                                      ( -{coin.coinDetails?.market_data.market_cap_change_percentage_24h} % )
                                <span>

                                </span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="">
                <Button>

                    {true ?( <BookMarkedFillIcon /> ):
                    (<BookMarkedIcon className='h-6 w-6' />)}

                </Button>
                        
                      <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg">Tread</Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        How musch do u want to spend?
                      </DialogTitle>
                    </DialogHeader>

                    <TreadingForm handleSubmit={handleTwoStepVerification} />
                  </DialogContent>
                </Dialog>

            </div>
        </div>

        <div className="MT-14">
           <StockChart coinId={id}/>
        </div>


    </div>
  )
}

export default StockDetails