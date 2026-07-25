import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Bookmark } from 'lucide-react'

const Watchlist = () => {

    const handleRemoveToWatchlist = (value) => {
        console.log(value);
    }


  return (

        <div className="p-5">
            <h1 className="text-2xl font-semibold mb-5">Watchlist</h1>

            <div className="rounded-lg border overflow-hidden">
        <Table className="border-x">
  <TableHeader>
    <TableRow className="hover:bg-transparent">
      <TableHead className="py-5">Coin</TableHead>
      <TableHead>Symbol</TableHead>

      <TableHead>Volume</TableHead>
      <TableHead>Market Cap</TableHead>
      <TableHead className="text-right">24H</TableHead>
      <TableHead>Price</TableHead>

      <TableHead>Remove</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1,1,1,1,1,1,1,1,1,1].map( (item , index) =>
        <TableRow key = {index} className="hover:bg-muted/50 transition-colors">
      <TableCell className="font-medium flex items-center gap-2">
        <Avatar className = "-z-50 h-6 w-6">
          <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
        </Avatar>
        <span>Bitcoin</span>
      </TableCell>
      <TableCell>BTC</TableCell>
      <TableCell>83248932479</TableCell>
      <TableCell>23223e434e</TableCell>
      <TableCell>34324234</TableCell>

      <TableCell>329</TableCell>
      <TableCell>3423423</TableCell>

      <TableCell>
        <Button variant="ghost" size='icon' className="h-10 w-10" onClick={() => handleRemoveToWatchlist(item.id)}>
          <Bookmark className="w-6 h-6"/>
        </Button>
      </TableCell>

      <TableCell className="text-right">$32222</TableCell>
    </TableRow>
    )}

  </TableBody>
    </Table>
    </div>

    </div>

  )
}

export default Watchlist






















// import React from 'react'
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Avatar, AvatarImage } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { BookMarkedFill } from '@remixicon/react'

// const Watchlist = () => {

//     const handleRemoveToWatchlist = (value) => {
//         console.log(value);
//     }


//   return (
    
    
//         <div>
//             <h1>Watchlist</h1>
//         <Table className="border-x">
//   <TableHeader>
//     <TableRow>
//       <TableHead className="py-5">Coin</TableHead>
//       <TableHead>Symbol</TableHead>
      
//       <TableHead>Volume</TableHead>
//       <TableHead>Market Cap</TableHead>
//       <TableHead className="text-right">24H</TableHead>
//       <TableHead>Price</TableHead>

//       <TableHead>Remove</TableHead>
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

//       <TableCell>329</TableCell>
//       <TableCell>3423423</TableCell>

//       <Button variant="ghost" size='icon' className="h-10 w-10" onClick={() => handleRemoveToWatchlist(item.id)}>
//         <BookMarkedFill className="w-6 h-6"/>
//       </Button>

//       <TableCell className="text-right">$32222</TableCell>
//     </TableRow>
//     )}
    
//   </TableBody>
//     </Table>

//     </div>

//   )
// }

// export default Watchlist