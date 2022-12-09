import BackButton from '../components/BackButton'
import useFetch from '../customHooks/useFetch'
import { useState } from 'react'
import ProductForm from '../components/ProductForm'

const NewProductPage = () => {
  const { product, setProduct, loading, error, fetchData } = useFetch(
    '/api/products',
    'POST',
  )

  const [pathList, setPathList] = useState([])

  const allProps = {
    product,
    setProduct,
    loading,
    error,
    fetchData,
    pathList,
    setPathList,
  }

  return (
    <div className="NewProductPage">
      <BackButton />
      <h1>New Product Page</h1>
      <ProductForm {...allProps} />
    </div>
  )
}

export default NewProductPage
