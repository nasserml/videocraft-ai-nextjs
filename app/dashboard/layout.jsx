import React from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="md:flex md:w-64 hidden">
        <SideBar />
      </div>

      <div className="md:ml-64">
        <div className="">
          <Header />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
