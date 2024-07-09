import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { useNavigate } from "@remix-run/react"
import Logo from "../common/logo"
export default function TopBar() {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex items-center justify-start relative top-1">
        <div className="ml-3 relative" onClick={() => navigate("/menu1")}>
          <RxHamburgerMenu size={30} />
        </div>{" "}
        <Logo/>
        <div className="flex justify-center items-center ml-auto mr-3 bg-flag-yellow rounded-full h-11 w-11">
          <img src="/images/user-icon.png" alt="y.m" />
        </div>
      </div>
    </>
  )
}
