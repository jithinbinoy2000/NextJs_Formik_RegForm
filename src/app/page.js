"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      try {
        setData(JSON.parse(storedData));
      } catch (e) {
        console.error("Failed to parse JSON from localStorage", e);
        setData(null);
      }
    } else {
      setData(null);
    }
  }, []);

  return (
    <div className="w-full h-screen bg-white-900 flex justify-center items-center p-4">
      {data ? (
        <div className="w-full max-w-6xl bg-white -800 rounded-lg overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700 text-gray-300">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Category</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                {Object.entries(data.personal).map(([key, value]) => (
                  <tr key={`personal-${key}`} className="bg-gray-900 border-b border-gray-700 hover:bg-gray-800">
                    <td className="px-4 py-2 font-medium text-sm md:text-base">{key.replace(/_/g, ' ').toUpperCase()}</td>
                    <td className="px-4 py-2 text-sm md:text-base">{value}</td>
                  </tr>
                ))}
                {Object.entries(data.address).map(([key, value]) => (
                  <tr key={`address-${key}`} className="bg-gray-900 border-b border-gray-700 hover:bg-gray-800">
                    <td className="px-4 py-2 font-medium text-sm md:text-base">{key.replace(/_/g, ' ').toUpperCase()}</td>
                    <td className="px-4 py-2 text-sm md:text-base">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="border bg-black rounded-md text-white p-2">
          <Link href={"/Registration"}>
            <button className="px-4 py-2">Register</button>
          </Link>
        </div>
      )}
    </div>  
  );
}
