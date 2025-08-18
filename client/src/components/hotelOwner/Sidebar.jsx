// import React from 'react'
// import { assets } from '../../assets/assets'
// import { NavLink } from 'react-router-dom'

// const Sidebar = () => {

//   const sidebarLinks = [
//     { name: 'Dashboard', path: '/owner', icon: assets.dashboardIcon },
//     { name: 'Add Room', path: '/owner/add-room', icon: assets.addIcon },
//     { name: 'List Room', path: '/owner/list-room', icon: assets.listIcon },
//   ]

//   return (
//     <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4
//       flex flex-col transition-all duration-300'>
    
//       {sidebarLinks.map((item, index) => (
//         <NavLink to={item.path} key={index} end="/owner"
//         className={({ isActive }) =>
//           `flex items-center py-3 md:px-8 px-4 gap-3 rounded-lg ${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600" :"hover:bg-gray-100/90 border-white text-gray-700"}`}>
//         <img src={item.icon} alt={item.name} className='min-h-6 min-w-6' />
//         <p className='md:block hidden text-center'>{item.name}</p>
//       </NavLink>
//   ))}
// </div>
// )
        
        
          
    
// }

// export default Sidebar

import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const sidebarLinks = [
    { name: 'Dashboard', path: '/owner', icon: assets.dashboardIcon },
    { name: 'Add Room', path: '/owner/add-room', icon: assets.addIcon },
    { name: 'List Room', path: '/owner/list-room', icon: assets.listIcon },
  ]

  return (
    <div
      className="md:w-64 w-16 border-r h-full text-base border-gray-200 pt-4
      flex flex-col transition-all duration-300 bg-gradient-to-b from-pink-50 via-rose-50 to-white shadow-md"
    >
      {sidebarLinks.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          end
          className={({ isActive }) =>
            `flex items-center py-3 md:px-8 px-4 gap-3 rounded-lg mx-2 mb-2 transition-all duration-200 ${
              isActive
                ? "bg-pink-100 border-l-4 border-pink-500 text-pink-700 shadow-sm"
                : "hover:bg-pink-50 text-gray-700"
            }`
          }
        >
          <div
            className={({ isActive }) =>
              `p-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                isActive ? "bg-pink-200" : "bg-white shadow-sm"
              }`
            }
          >
            <img src={item.icon} alt={item.name} className="h-6 w-6 object-contain" />
          </div>
          <p className="md:block hidden font-medium">{item.name}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar
