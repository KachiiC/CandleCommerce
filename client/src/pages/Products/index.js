import { useState } from 'react'
import Product from './Product'
import './Products.css'

const Products = (props) => {

  const { products } = props

  const [searchWord, setSearchWord] = useState('')

  // eslint-disable-next-line
  const productFilter = products.filter((val) => {
    if (searchWord === '') return val;

    else if (searchWord(val.title, searchWord)) {
      return val;
    }
  })
    .map(product => <Product key={product._id} product={product} />)

  return (
    <>
      <div className='searchContainer'>
        <input className='searchBar' type="text" placeholder='Search' onChange={e => setSearchWord(e.target.value)} />
      </div>
      <div className='products'>
        {productFilter}
      </div>
    </>
  )
}

export default Products