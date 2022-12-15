import { Transaction } from "components/Transation/Transaction"
import { TrasactionTable } from "./TransactionHistory.styled"
export function TransactionHistory({ items }) {

	
	
	return (
		<TrasactionTable>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
					<th>Currency</th>
    </tr>
  </thead>

			<tbody>
				{items.map((item, index) => (

					<Transaction bacColor={ index % 2 ? '#dae8f2' : 'white'}  key={item.id}
						type={item.type}
						amount={item.amount}
						currency={item.currency}
					/>
					
				))}
				
			
  </tbody>
	</TrasactionTable>
	)
}