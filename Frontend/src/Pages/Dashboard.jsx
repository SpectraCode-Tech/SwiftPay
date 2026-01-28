import React, { useMemo, useState } from "react";
import Panel from "../Components/Panel";
import RecentTrxn from "../Components/RecentTrxn";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");

  // Format balance nicely (₦1,200,000.00)
  const formattedBalance = useMemo(() => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(balance);
  }, [balance]);

  const handleDeposit = () => {
    const value = Number(amount);
    if (!value || value <= 0) return;

    setBalance((prev) => prev + value);
    setAmount("");
  };

  const handleWithdraw = () => {
    const value = Number(amount);
    if (!value || value <= 0) return;

    if (value > balance) {
      alert("Insufficient balance!");
      return;
    }

    setBalance((prev) => prev - value);
    setAmount("");
  };

  return (
    <main className="w-screen h-screen flex">
      {/* Sidebar */}
      <div>
        <Panel />
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="p-6 bg-dark-green w-full rounded-lg text-white">
          <h3 className="text-lg font-bold">Account Balance</h3>
          <p className="text-3xl font-bold mt-2">{formattedBalance}</p>
        </div>

                <div className="mt-6 bg-white p-6 rounded-lg shadow w-full">
                  <h4 className="text-lg font-bold mb-3">Recent Transactions</h4>
                  <ul>
                    <RecentTrxn />
                  </ul>
                  <a href="" className="text-blue">See more ...</a>
                </div>

        {/* Controls */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow w-full max-w-md">
          <h4 className="text-lg font-bold mb-3">Transaction</h4>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full border-2 border-blue rounded-md px-4 py-2"
          />

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleDeposit}
              className="flex-1 bg-dark-green text-white px-4 py-2 rounded-md font-bold"
            >
              Deposit
            </button>

            <button
              onClick={handleWithdraw}
              className="flex-1 bg-orange text-white px-4 py-2 rounded-md font-bold"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
