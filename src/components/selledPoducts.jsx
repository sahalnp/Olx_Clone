import React from "react";
import { Package } from "lucide-react";

export const SelledProducts = ({ Items = [] }) => {
    const soldItems = Items.filter(item => item.buy === true);
    const totalRevenue = soldItems.reduce((sum, item) => sum + Number(item.price), 0);

    console.log(totalRevenue,"fghjkl");
    

    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <div className="bg-green-100 p-3 rounded-full mr-4">
                            <Package className="w-8 h-8 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                My Products
                            </h2>
                            <p className="text-gray-600">
                                {Items.length} total items • {soldItems.length} sold
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-600">Total Revenue</p>
                        <p className="text-2xl font-bold text-green-600">
                            ${totalRevenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                    </div>
                </div>

                {Items.length === 0 ? (
                    <div className="text-center py-12">
                        <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg">
                            No products added yet
                        </p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                                        Item
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                                        Price
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                                        Date
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {Items.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-4 py-4 font-medium text-gray-900">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className={`font-semibold ${item.buy ? 'text-green-600' : 'text-gray-600'}`}>
                                                ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-gray-600">
                                            {item.soldDate ? (
                                                new Date(item.soldDate).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })
                                            ) : (
                                                'Date not set'
                                            )}
                                        </td>
                                        <td className="px-4 py-4">
                                            {item.buy ? (
                                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                                    Sold
                                                </span>
                                            ) : (
                                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                                                    Available
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};
