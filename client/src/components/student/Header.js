import React from "react";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login/studentlogin");
  };
  return (
    <div className="flex-[0.05] flex justify-between items-center mx-5 my-2">
      <div className="flex items-center ">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="h-7"
        />
        <h1 className="font-bold text-blue-600 mx-2 text-sm">ABV-IIITM</h1>
      </div>
      <h1 className="font-semibold text-black">Welcome</h1>
      <div className="flex items-center space-x-3">
        <Avatar
          src={user.result.avatar}
          alt={user.result.name.charAt(0)}
          sx={{ width: 24, height: 24 }}
          className="border-blue-600 border-2"
        />
        <h1>{user.result.name.split(" ")[0]}</h1>
        <LogoutIcon
          onClick={logout}
          className="cursor-pointer hover:scale-125 transition-all "
        />
      </div>
    </div>
  );
};

export default Header;