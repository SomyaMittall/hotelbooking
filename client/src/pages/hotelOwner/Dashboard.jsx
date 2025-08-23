import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
// import { assets, dashboardDummyData } from '../../assets/assets'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { currency, user, getToken, toast, axios } = useAppContext();
  // const [dashboardData] = useState(dashboardDummyData);
  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0,
  });

  const fetchDashboardData = async()=>{
    try {
      const {data}= await axios.get("/api/bookings/hotel", {headers: {Authorization: `Bearer ${await getToken()}`}}) 
      if(data.success){
        setDashboardData(data.dashboardData)
      } else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(user){
      fetchDashboardData();
    }
  }, [user])

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings, and analyze revenue — all in one place. Stay updated with real-time insights to ensure smooth operations."
      />

      {/* Stats Row */}
      <div className="flex gap-6 my-8 flex-wrap">
        {/* Total Bookings */}
        <div className="flex items-center p-5 rounded-xl shadow-md text-gray-800 bg-gradient-to-r  from-purple-100 to-pink-100 w-full sm:w-auto min-w-[250px] border border-purple-200 transform hover:scale-[1.02] transition">
          <div className="bg-white p-3 rounded-full shadow">
            <img src={assets.totalBookingIcon} alt="" className="h-10 w-10 object-contain" />
          </div>
          <div className="flex flex-col ml-4 font-medium">
            <p className="text-sm text-pink-600">Total Bookings</p>
            <p className="text-2xl font-bold">{dashboardData.totalBookings}</p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="flex items-center p-5 rounded-xl shadow-md text-gray-800 bg-gradient-to-r from-purple-100 to-pink-100 w-full sm:w-auto min-w-[250px] border border-purple-200 transform hover:scale-[1.02] transition">
          <div className="bg-white p-3 rounded-full shadow">
            <img src={assets.totalRevenueIcon} alt="" className="h-10 w-10 object-contain" />
          </div>
          <div className="flex flex-col ml-4 font-medium">
            <p className="text-sm text-pink-600">Total Revenue</p>
            <p className="text-2xl font-bold">{currency} {dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className="text-2xl font-semibold text-pink-800 mb-5 border-b pb-2">
        Recent Bookings
      </h2>
      <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-pink-50 to-rose-50">
            <tr>
              <th className="py-3 px-4 text-pink-900 font-semibold text-left">User Name</th>
              <th className="py-3 px-4 text-pink-900 font-semibold text-left max-sm:hidden">Room Name</th>
              <th className="py-3 px-4 text-pink-900 font-semibold text-center">Total Amount</th>
              <th className="py-3 px-4 text-pink-900 font-semibold text-center">Payment Status</th>
            </tr>
          </thead>

          <tbody>
            {dashboardData.bookings.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-pink-50 transition"
              >
                <td className="py-3 px-4 text-gray-800">{item.user.username}</td>
                <td className="py-3 px-4 text-gray-800 max-sm:hidden">{item.room.roomType}</td>
                <td className="py-3 px-4 text-gray-800 text-center">{currency} {item.totalPrice}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`py-1 px-4 text-xs font-bold rounded-full shadow-sm ${item.isPaid
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : "bg-yellow-100 text-yellow-800 border border-yellow-300"
                      }`}
                  >
                    {item.isPaid ? "✔ Completed" : "⏳ Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
