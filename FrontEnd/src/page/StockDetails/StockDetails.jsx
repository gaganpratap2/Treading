import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { RiBookMarkedFill } from '@remixicon/react'
import { BookMarked, BookMarkedIcon, DotIcon } from 'lucide-react'
import React from 'react'
import TreadingForm from './TreadingForm'
import StockChart from '../Home/StockChart'

const StockDetails = () => {
  return (
    <div className='p-5 mt-5'>
        <div className="flex justify-between">
            <div className="flex gap-5 items-center">
                <div className="">
                    <Avatar>
                        <AvatarImage src={""} />
                    </Avatar>
                </div>
                <div className="">
                    <div className="flex items-center">
                        <p>BTC</p>
                        <DotIcon  />
                        <p className='text-gray-400'>Bitcoin</p>
                    </div>
                    <div className="flex items-end" gap-2>
                        <p className='text-xl font-bold'>$5654</p>
                        <p>
                            <span className=''>
                                <span>
                                        ........
                                </span>
                                        ........
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
           <StockChart />
        </div>


    </div>
  )
}

export default StockDetails