import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Siswa = (props) => {

  return (
    <>
      <Index props={props} />
    </>
  )
}

function Index({ props }) {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', category: 'Fruit', price: 1.5 },
    { id: 2, name: 'Broccoli', category: 'Vegetable', price: 2.0 },
    { id: 3, name: 'Cheese', category: 'Dairy', price: 3.5 },
    { id: 4, name: 'Salmon', category: 'Fish', price: 5.0 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(0);

  const categories = ['All', 'Fruit', 'Vegetable', 'Dairy', 'Fish'];
  const prices = [0, 1, 2, 3, 4, 5];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(parseFloat(event.target.value));
  };

  const filteredItems = items.filter(item => {
    if (selectedCategory === 'All' && selectedPrice === 0) {
      return true;
    } else if (selectedCategory === 'All') {
      return item.price <= selectedPrice;
    } else if (selectedPrice === 0) {
      return item.category === selectedCategory;
    } else {
      return item.category === selectedCategory && item.price <= selectedPrice;
    }
  });

  return (
    <>
      <Head title={props.title} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-xl md:text-2xl">{props.title}</h1>
        </div>
        {/* <div className="flex justify-end items-end">
          <button onClick={() => handleOpen({ status: "tambah" })} className="text-white bg-blue-500 p-2 rounded-lg flex"><PlusCircleIcon className="w-5 h-5" /> Tambah</button>
        </div> */}
      </div>

      <div>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select value={selectedPrice} onChange={handlePriceChange}>
          {prices.map(price => (
            <option key={price} value={price}>{price}</option>
          ))}
        </select>
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.name} (${item.price})</li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {/* <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th> */}
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Accesories
              </th>
              <th scope="col" className="px-6 py-3">
                Available
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Weight
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              {/* <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td> */}
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                Yes
              </td>
              <td className="px-6 py-4">
                Yes
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                3.0 lb.
              </td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

Siswa.layout = (page) => <SuperAdminTemplate children={page} />
export default Siswa;
