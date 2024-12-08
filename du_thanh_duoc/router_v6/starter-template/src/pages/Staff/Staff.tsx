import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'

export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff List</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to='/staff'
              end
              className={({ isActive }) => {
                const activeClass = isActive
                  ? 'border-blue-600 p-4 text-blue-600'
                  : 'border-transparent hover:border-gray-300 hover:text-gray-600'
                return `inline-block rounded-t-lg border-b-2 ${activeClass}`
              }}
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to='/staff/add'
              className={({ isActive }) => {
                const activeClass = isActive
                  ? 'border-blue-600 p-4 text-blue-600'
                  : 'border-transparent hover:border-gray-300 hover:text-gray-600'
                return `inline-block rounded-t-lg border-b-2 ${activeClass}`
              }}
              aria-current='page'
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path=':id' element={<StaffItem />} />
        <Route path='add' element={<AddStaff />} />
        <Route index element={<StaffList />} />
      </Routes>

      {/* <Outlet context={{ profile: { name: 'Quang' } }} /> */}

      {/* <StaffList /> */}

      {/* <Link to='/staff/add' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
        Add Staff
      </Link> */}
    </div>
  )
}
