import React, { useEffect, useState } from 'react'
import API from '../api/api';

const Admin = () => {

    const [trxns, setTrxns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrxn = async () => {
    try {
      const res = await API.get("/users/all"); // GET /api/transactions
      setTrxns(res.data?.transactions?.slice(0, 5) || []);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to fetch transactions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrxn();
  }, []);

  if (loading) return <p className="mt-4">Loading transactions...</p>;
  return (
<div className="mt-6 bg-white p-6 rounded-lg shadow w-full">
      <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>

      {trxns.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul className="space-y-3">
          {trxns.map((t) => (
            <li
              key={t._id}
              className="border p-3 rounded-md flex justify-between items-center"
            >
              <div className="flex flex-col">
                <span className="font-bold">{t.paymentMethod}</span>
                <small className="text-gray-500">
                  TrxnNo: {t.TrxnNo} • {t.status}
                </small>
              </div>

              <span className="font-bold">
                ₦{Number(t.amount).toLocaleString("en-NG")}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Admin
