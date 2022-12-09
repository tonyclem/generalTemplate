import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../customHooks/useFetch'
import BackButton from '../components/BackButton'
import ProductForm from '../components/ProductForm'

const EditProductPage = () => {
  const params = useParams()

  const { product, setProduct, loading, error, fetchData } = useFetch(
    `/api/products/${params.id}`,
    'PUT',
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

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await fetch(`/api/products/${id}`)
        const product = await response.json()
        setProduct({
          name: product.name,
          description: product.description,
          countInStock: product.countInStock,
          category: product.category,
          price: product.price,
          topProduct: product.topProduct,
          images: product.images,
        })

        setPathList(product.images)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData(params.id)
  }, [params.id, setProduct])

  return (
    <div className="EditProductPage">
      <BackButton />
      <h1>Edit Product Page</h1>
      <ProductForm {...allProps} />
    </div>
  )
}

export default EditProductPage
