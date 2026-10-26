import React, { useState } from 'react'
import productData from "../products.json";
import { Link } from 'react-router-dom';

const title = (
    <h1>Search your own from thausand of products</h1>
) 

const desc = "we have the largest collection of products"
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More than 345 products",
  },
  {
    iconName: "icofont-globe",
    text: "buy anything online",
  },
];


function Banner() {
    const [searchInput, setSearchInput] = useState("");
     const [filteredProduct, setFilteredProduct] = useState(productData);
    // search functionality
     const handleChange = (e) =>{
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

     // fi;tering product based on product
     const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
     
     setFilteredProduct(filtered);
     }
     
    return (
        <div className='banner-section style-4'>
          <div className='container'>
            <div className='banner-content'>
                {title}
                <form>
                    <input type="text" name='search' id='search' placeholder='search your product' value={searchInput} onChange={handleChange}/>
                    <button type='submit'>
                      <i className="icofont-search-2"></i>
                    </button>
                </form>
                <p>{desc}</p>
                <div className='lab-ul'>
                    {
                        searchInput && filteredProduct.map((product, i) => <li key={i}>
                          <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        </li> )
                    }
                </div>
            </div>
          </div>
        </div>
    )
}

export default Banner;
