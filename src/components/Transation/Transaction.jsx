import { Tr } from "./Transaction.styled"

export function Transaction(props) {
	const { type, amount, currency ,bacColor} = props
	return (
	<Tr layer={bacColor}>
      <td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
    </Tr>
	)
}