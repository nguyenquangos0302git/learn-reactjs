import { useParams, useOutletContext } from 'react-router-dom'

export default function StaffItem() {
  const { id } = useParams()
  const context = useOutletContext()
  return <div>StaffItem</div>
}
