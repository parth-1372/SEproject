


// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getNotice } from "../../redux/actions/adminActions";
// import Body from "./Body";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

// const FacultyHome = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getNotice());
//   }, [dispatch]);

//   return (
//     <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
//       <div className="flex flex-col bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-hidden">
//         <Header />
//         <div className="flex flex-1 overflow-y-auto">
//           <Sidebar />
//           <div className="flex-1 overflow-y-auto">
//             <Body />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacultyHome;


import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotice } from "../../redux/actions/adminActions";
import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";

const FacultyHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotice());
  }, [dispatch]);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="flex flex-col bg-black h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-y-auto text-white">
          <Sidebar />
          <div className="flex-1 overflow-y-auto">
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyHome;
