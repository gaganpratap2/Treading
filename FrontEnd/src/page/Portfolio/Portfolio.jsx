import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { useDispatch, useSelector } from 'react-redux';
import { getUserAsset } from '@/State/Asset/Action';

const Portfolio = () => {
  const dispatch = useDispatch();
  const {asset} = useSelector(store=>store.assets)

  useEffect( () => {
    dispatch(getUserAsset(localStorage.getItem("jwt")))
  },[])
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">PORTFOLIO</h1>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="">Asset</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Change</TableHead>
              <TableHead className="text-right">Change %</TableHead>
              <TableHead>VOLUME</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {asset.userAssets.map((item, index) =>
              <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="-z-50 h-6 w-6">
                    <AvatarImage src={item.coin.image} />
                  </Avatar>
                  <span>{item.coin.name}</span>
                </TableCell>
                <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.coin.price_change_24h}</TableCell>
                <TableCell>{item.coin.price_change_percentage_24h}</TableCell>
                <TableCell className="text-right">${item.coin.total_volume}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Portfolio



























// import React from 'react'
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Avatar, AvatarImage } from '@/components/ui/avatar'

// const Portfolio = () => {
//   return (
//     <div>
//             <h1>PORTFOLIO</h1>
//         <Table>
//   <TableHeader>
//     <TableRow>
//       <TableHead className="">Asset</TableHead>
//       <TableHead>Price</TableHead>
      
//       <TableHead>Unit</TableHead>
//       <TableHead>Change</TableHead>
//       <TableHead className="text-right">Change %</TableHead>
//       <TableHead>VOLUME</TableHead>
//     </TableRow>
//   </TableHeader>
//   <TableBody>
//     {[1,1,1,1,1,1,1,1,1,1].map( (item , index) => 
//         <TableRow key = {index}>
//       <TableCell className="font-medium flex items-center gap-2">
//         <Avatar className = "-z-50">
//           <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
//         </Avatar>
//         <span>Bitcoin</span>
//       </TableCell>
//       <TableCell>BTC</TableCell>
//       <TableCell>83248932479</TableCell>
//       <TableCell>23223e434e</TableCell>
//       <TableCell>34324234</TableCell>

//       <TableCell className="text-right">$32222</TableCell>
//     </TableRow>
//     )}
    
//   </TableBody>
//     </Table>

//     </div>
//   )
// }

// export default Portfolio