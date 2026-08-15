import { Button } from '@/components/ui/button'
import React, { useRef, useEffect } from 'react'
import AssertTable from './AssetTable'
import StockChart from './StockChart'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { DotIcon, MessageCircle, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useDispatch, useSelector } from 'react-redux'
import { getCoinList, getTop50Coins } from '@/State/Coin/Action'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const Home = () => {

  

  const [category, setCategory] = React.useState('All');
  const [inputValue , setInputValue] = React.useState("");
  const [isBotRelease , setIsBotRelease] = React.useState(false);

  const {coin} = useSelector(store => store)

  const botRef = useRef(null);

  const handleBotRelease = () => setIsBotRelease(!isBotRelease); 

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleKeyPress = (e) => {
    if(e.key == "Enter"){
      console.log(inputValue);
    }
    setInputValue("");
  }

  const handleCategory = (value) => {
    setCategory(value)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (botRef.current && !botRef.current.contains(e.target)) {
        setIsBotRelease(false);
      }
    }

    useEffect( () => {
      dispatch(getTop50CoinsList())
    },[category])

    if (isBotRelease) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isBotRelease]);

  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(getCoinList(1))
  }, []);

  return (
    <div className='relative'>

       <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">

          <div className="p-3 flex items-center gap-3 overflow-x-auto">

          <Button variant={category === 'All' ? 'default' : 'outline'} onClick={() => handleCategory('All')}>
            All
          </Button>

          <Button variant={category === 'top50' ? 'default' : 'outline'} onClick={() => handleCategory('top50')}>
            Top 50
          </Button>

          <Button variant={category === 'TopGainers' ? 'default' : 'outline'} onClick={() => handleCategory('TopGainers')}>
            Top Gainers
          </Button>

          <Button variant={category === 'TopLosser' ? 'default' : 'outline'} onClick={() => handleCategory('TopLosser')}>
            Top Losser  
          </Button>

          </div>

          <AssertTable coin={category =="all" ? coin.coinList : coin.top50} category={category} />

          <div className="">
              <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
          </div>

        </div>

        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart coinId={"bitcoin"}/>

        <div className="flex gap-5 items-center mt-5 rounded-lg border p-3">
            <div className="">
              <Avatar>
                <AvatarImage src={"https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501440"}  />
              </Avatar>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <p>ETH</p>
              <DotIcon className='' />
              <p>Ethereum</p>
            </div>

            <div className="ml-auto text-right">
              <p className="font-medium">4534534</p>
              <p className="flex gap-2 text-sm">
                <span>33453452</span>
                <span className="text-emerald-500">+3.45%</span>
              </p>
            </div>

        </div>

        </div>

       </div>

       <section ref={botRef} className='absolute bottom-5 right-5 z-40 flex flex-col items-end'>

        {isBotRelease && <div className="rounded-md w-[20rem] md:w-[25rem] h-[70vh] bg-slate-900 flex flex-col mb-3 shadow-xl">
         <div className="flex justify-between items-center border-b border-slate-700 px-4 py-3">
           <p className="text-slate-100 font-medium">Chat Bot</p>
          <Button onClick={handleBotRelease} variant="ghost" size="icon">
            <X className="h-4 w-4 text-slate-100" />
          </Button>
        </div>

          <div className="h-[76%] flex flex-col overflow-y-auto gap-3 px-4 pt-3">
             
            <div className="self-start pb-5 w-auto">
               <div className="text-slate-100">
              <p>Hi , Gagan</p>
              <p>Ask Your Question? </p>
             </div>
            </div>

            {
              [1,1,1,1].map( (item , i) => <div key={i} className={`${i%2 == 0 ?"self-start" : "self-end"} pb-5 w-auto`}>

              {i%2 == 0 ?
              <div className="rounded-lg bg-slate-800 px-3 py-2 text-slate-100">
              <p>ANSWER</p> </div>:
              <div className="rounded-lg bg-emerald-600 px-3 py-2 text-white">
              <p>ANSWER</p>
            </div>
              } </div> )
            }

          </div>
            
            <div className="h-[12%] border-t border-slate-700 p-2">
              <Input className="w-full h-full order-0 outline-none" placeholder="Write promt" onChange={handleChange} 
              value = {inputValue}
              onKeyPress={handleKeyPress}
              />
            </div>


         </div> }

        <div className=""> 
          <Button className="group flex items-center gap-2 shadow-lg" onClick={handleBotRelease}>
            <MessageCircle size={20} className='fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#54235]' />
            <span className='text-base'>Chat Bot</span>
          </Button>
        </div>



       </section>

    </div>
  )
}

export default Home



























// import { Button } from '@/components/ui/button'
// import React from 'react'
// import AssertTable from './AssetTable'
// import StockChart from './StockChart'
// import { Avatar, AvatarImage } from '@/components/ui/avatar'
// import { Crosshair, DotIcon, MessageCircle } from 'lucide-react'
// import { Input } from '@/components/ui/input'

// const Home = () => {

//   const [category, setCategory] = React.useState('All');
//   const [inputValue , setInputValue] = React.useState("");
//   const [isBotRelease , setIsBotRelease] = React.useState(false);

//   const handleBotRelease = () => setIsBotRelease(!isBotRelease); 

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   }

//   const handleKeyPress = (e) => {
//     if(e.key == "Enter"){
//       console,log(inputValue);
//     }
//     setInputValue("");
//   }

//   const handleCategory = (value) => {
//     setCategory(value)
//   }

//   return (
//     <div className = 'relative'>

//        <div className="lg:flex">
//         <div className="lg:w-[50] lg:border-r">

//           <div className="p-3 flex items-center gap-4">

//           <Button varient = {category === 'All' ? 'default' : 'outline'} onClick={() => handleCategory('All')}>
//             All
//           </Button>

//           <Button varient = {category === 'All' ? 'default' : 'outline'} onClick={() => handleCategory('top50')}>
//             Top 50
//           </Button>

//           <Button varient = {category === 'All' ? 'default' : 'outline'} onClick={() => handleCategory('TopGainers')}>
//             Top Gainers
//           </Button>

//           <Button varient = {category === 'All' ? 'default' : 'outline'} onClick={() => handleCategory('TopLosser')}>
//             Top Losser  
//           </Button>

//           </div>

//           <AssertTable />

//         </div>

//         <div className="hidden lg:block lg:w-[50%] p-5">
//           <StockChart />

//         <div className="flex gap-5 items-center">
//             <div className="">
//               <Avatar>
//                 <AvatarImage src={"https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501440"}  />
//               </Avatar>
//             </div>

//             <div className="">
//               <p>ETH</p>
//               <DotIcon className='' />
//               <p>Ethereum</p>
//             </div>

//             <div className="">
//               <p>4534534</p>
//               <p>
//                 <span>33453452</span>
//                 <span>+3.45%</span>
//               </p>
//             </div>

//         </div>

//         </div>

//        </div>

//        <section className='absolute bottom-5 right-5 w-full z-40 flex flex-col'>

//         {isBotRelease && <div className="rounded-md w-[20rem] md:w-100   h-[70vh] bg-slate-900">
//          <div className="flex justify-between items-center border-b">
//            <p>Chat Bot</p>
//           <Button onClick={handleBotRelease} varient="ghost" size="icon">
//             <Cross1Icon />
//           </Button>
//         </div>

//           <div className="h-[76%] flex flex-col overflow-y-auto gap-5">
             
//             <div className="self-start pb-5 w-auto">
//                <div className="">
//               <p>Hi , Gagan</p>
//               <P>Ask Your Question? </P>
//              </div>
//             </div>

//             {
//               [1,1,1,1].map( (item , i) => <div key={i} className={`${i%2 == 0 ?"self-start" : "self-end"} " pb-5 w-auto"`}>

//               {i%2 == 0 ?
//               <div className="">
//               <p>ANSWER</p> </div>:
//               <div className="">
//               <p>ANSWER</p>
//             </div>
//               } </div> )
//             }

//           </div>
            
//             <div className="h-[12%] border-t">
//               <Input className="w-full h-full order-0 outline-none" placeholder="Write promt" onChange={handleChange} 
//               value = {inputValue}
//               onKeyPress={handleKeyPress}
//               />
//             </div>


//          </div> }

//         <div className=""> 
//           <Button className="" onClick={handleBotRelease}>
//             <MessageCircle size={30} className='fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#54235]' />
//             <span className='text-2xl'>Chat Bot</span>
//           </Button>
//         </div>



//        </section>

//     </div>
//   )
// }

// export default Home