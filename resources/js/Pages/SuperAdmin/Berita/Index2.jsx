import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@inertiajs/react';

function Index2() {
  const [search, setSearch] = useState('');
  const [kategoriBerita, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  async function fetchData() {
    const response = await axios.get('/api/berita', {
      params: { search: search, page: currentPage }
    });
    setProducts(response.data.data);
    setLastPage(response.data.last_page);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
    setCurrentPage(1);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
    setCurrentPage(1);
  }

  function handlePageChange(event) {
    setCurrentPage(Number(event.target.getAttribute('data-page')));
  }

  const pages = [];
  for (let i = 1; i <= lastPage; i++) {
    pages.push(i);
  }

  console.log(currentPage, search)

  return (
    <div>
      <h1>Product Search</h1>
      <form>
        <input type="text" value={search} onChange={handleSearchChange} placeholder="Search" />
        <select value={kategoriBerita} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
          <option value="3">Category 3</option>
        </select>
      </form>
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.judulBerita}</h2>
            <p>{product.namaPenulis}</p>
          </li>
        ))}
      </ul> */}

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Cover
              </th>
              <th scope="col" className="px-6 py-3">
                Judul
              </th>
              <th scope="col" className="px-6 py-3">
                Kategori
              </th>
              <th scope="col" className="px-6 py-3">
                Penulis
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((data, i) => {
              return (
                <>
                  <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {i + 1}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <img src={data.imgUrl} className="w-10 h-10 object-cover" />
                    </th>
                    <td className="px-6 py-4">
                      {data.judulBerita}
                    </td>
                    <td className="px-6 py-4">
                      {data.kategoriBerita}
                    </td>
                    <td className="px-6 py-4">
                      {data.namaPenulis}
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/super-admin/berita/${data.id}/edit`} className="bg-yellow-500 text-black p-2 rounded-lg mx-2">Edit</Link>
                      <Link href={`/super-admin/berita/${data.id}`} className="bg-sky-500 text-white p-2 rounded-lg mx-2">Detail</Link>
                      <button onClick={() => handleDelete({ id: data.id })} className="bg-red-500 mx-2 text-white p-2 rounded-lg">Hapus</button>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>

      <nav>
        <ul className="pagination flex">
          {pages.map((page) => (
            <li key={page} className={page === currentPage ? 'active' : ''}>
              <a href="#" data-page={page} onClick={handlePageChange}>{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Index2;
