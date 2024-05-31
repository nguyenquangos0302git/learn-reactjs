import React, { useState } from 'react'
import styles from './manager.module.scss'
import Confirm from '../Confirm'

const intialStudents = [
  {
    id: 1,
    name: 'Ducky'
  },
  {
    id: 2,
    name: 'Alex'
  }
]

export default function Manager() {
  const [students, setStudents] = useState<typeof intialStudents>(intialStudents)
  const [idDelete, setIdDelete] = useState<null | number>(null)
  const visibleConfirm = idDelete !== null

  const showConfirm = (id: number) => () => {
    setIdDelete(id)
  }

  const handleOk = () => {
    const cloneStudents = [...students]
    setStudents(cloneStudents.filter((student) => student.id !== idDelete))
    setIdDelete(null)
  }

  const handleCancel = () => {
    setIdDelete(null)
  }

  return (
    <div className='manager'>
      <h1>Manager Student</h1>
      <div className='student-list'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>
                  <button onClick={showConfirm(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Confirm visible={visibleConfirm} ok={handleOk} cancel={handleCancel} />
    </div>
  )
}
