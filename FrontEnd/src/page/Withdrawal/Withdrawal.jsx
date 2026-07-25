import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Bookmark } from 'lucide-react'

const withdrawals = [
  { id: 1, time: '10:24 AM', date: 'Jul 20, 2026', coin: 'Bitcoin', icon: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400', amount: '0.0123 BTC', status: 'Completed' },
  { id: 2, time: '09:12 AM', date: 'Jul 19, 2026', coin: 'Bitcoin', icon: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400', amount: '0.0500 BTC', status: 'Pending' },
]

const Withdrawal = () => {
  const handleRemoveToWatchlist = (id) => {
    // your removal logic here
    console.log('remove', id)
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">Withdrawal</h1>

      <div className="rounded-lg border overflow-hidden">
        <Table className="border-x">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="py-5">Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {withdrawals.map((item) => (
              <TableRow key={item.id} className="hover:bg-muted/50 transition-colors">
                <TableCell>
                  <p>{item.time}</p>
                  <p className="text-gray-500">{item.date}</p>
                </TableCell>

                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={item.icon} />
                  </Avatar>
                  <span>{item.coin}</span>
                </TableCell>

                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.status}</TableCell>

                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => handleRemoveToWatchlist(item.id)}
                  >
                    <Bookmark className="w-6 h-6" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Withdrawal 