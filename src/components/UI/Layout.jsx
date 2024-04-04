import React from "react";
import Sidebar from "./Sidebar"; // Import your Sidebar component
import "../../styles/layout.css"; // Create a CSS file for your layout styles

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  );
}

export default Layout;
