import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { useNavigate } from 'react-router-dom'

const AssetTable = () => {
  const navigate = useNavigate();
  return (
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-25">COIN</TableHead>
      <TableHead>SYMBOL</TableHead>
      <TableHead>VOLUME</TableHead>
      <TableHead>MARKET CAP</TableHead>
      <TableHead>24HR</TableHead>
      <TableHead className="text-right">PRICE</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1,1,1,1,1,1,1,1,1,1].map( (item , index) => 
        <TableRow key = {index}>
      <TableCell onClick={()=> navigate(`market/bitcoin/`)} className="font-medium flex items-center gap-2">
        <Avatar className = "-z-50">
          <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
        </Avatar>
        <span>Bitcoin</span>
      </TableCell>
      <TableCell>BTC</TableCell>
      <TableCell>83248932479</TableCell>
      <TableCell>23223e434e</TableCell>
      <TableCell>34324234</TableCell>

      <TableCell className="text-right">$32222</TableCell>
    </TableRow>
    )}
    
  </TableBody>
    </Table>
  )
}

export default AssetTable