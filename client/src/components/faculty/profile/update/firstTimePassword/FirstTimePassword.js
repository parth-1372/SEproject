// import React from "react";
// import Body from "./Body";

// import Header from "../../../Header";

// const FirstTimePassword = () => {
//   return (
//     <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
//       <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 ">
//         <Header />
//         <div className="flex flex-[0.95] w-full">
//           <Body />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirstTimePassword;



import React from "react";
import Body from "./Body";
import Header from "../../../Header";

const FirstTimePassword = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center text-white">
      <div className="flex flex-col bg-black h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 text-white">
        <Header />
        <div className="flex flex-[0.95] w-full">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default FirstTimePassword;
