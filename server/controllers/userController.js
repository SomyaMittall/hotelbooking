// import User from "../models/User.js";
// // get /api/user
// export const getUserData=async(req, res)=>{
//     try {
//         const role=req.user.role;
//         const recentSearchedCities= req.user.recentSearchedCities
//         res.json({success:true, role, recentSearchedCities})
//     } catch (error) {
//         res.json({success: false, message:error.message})
//     }
// }



// // store users recent searched cities
// export const storeRecentSearchedCities = async (req, res) => {
//     try {
//         const { recentSearchedCity } = req.body;
//         const user = await req.user;
//         if (user.recentSearchedCities.length < 3) {
//             user.recentSearchedCities.shift()
//             user.recentSearchedCities.push(recentSearchedCity)
//         } else {
//             user.recentSearchedCities.push(recentSearchedCity)
//         }
//         await user.save();
//         res.json({ success: true, message: "City added" })
//     } catch (error) {
//         res.json({ success: false, message: error.message })
// }
// }
import User from "../models/User.js";  // 👈 make sure this is added

export const getUserData = async (req, res) => {
    try {
        const role = req.user.role;
        const recentSearchedCities = req.user.recentSearchedCities;
        res.json({ success: true, role, recentSearchedCities });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const storeRecentSearchedCities = async (req, res) => {
    try {
        const { recentSearchedCity } = req.body;
        const user = await User.findById(req.user._id); // 👈 use User model
        if (!user) return res.json({ success: false, message: "User not found" });

        if (user.recentSearchedCities.length >= 3) {
            user.recentSearchedCities.shift(); // remove oldest
        }
        user.recentSearchedCities.push(recentSearchedCity);

        await user.save();
        res.json({ success: true, message: "City added" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
