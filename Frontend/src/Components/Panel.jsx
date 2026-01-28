import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet, MdOutlineReceiptLong } from "react-icons/md";

const Panel = () => {
  const location = useLocation();

  const items = [
    { name: "Utilities", icon: <MdOutlineReceiptLong className="size-7" />, path: "/utilities" },
    { name: "Account", icon: <MdOutlineAccountBalanceWallet className="size-7" />, path: "/dashboard" },
    { name: "Profile", icon: <CgProfile className="size-7" />, path: "/profile" },
  ];

  return (
    <ul className="panel">
      {items.map(({ name, icon, path }) => (
        <li key={name}>
          <Link
            to={path}
            className={location.pathname === path ? "panel-active" : ""}
          >
            {icon}
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Panel;
