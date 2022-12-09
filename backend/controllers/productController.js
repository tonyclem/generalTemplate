const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const fs = require('fs')

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  if (products.length > 0) {
    res.json(products)
  } else {
    res.status(404)
    throw new Error('Products not found')
  }
})

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const addProduct = asyncHandler(async (req, res) => {
  console.log(req.user)
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    user: req.user._id,
    images: req.body.images,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    topProduct: req.body.topProduct,
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    countInStock,
    category,
    price,
    images,
    topProduct,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.description = description
    product.countInStock = countInStock
    product.category = category
    product.price = price
    product.images = images
    product.topProduct = topProduct
    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  // needs to be rewritten to delete all the images from storage of the particular product
  // const unlinkFile = await product.images.slice(1)

  if (product) {
    await product.remove()

    // fs.unlink(unlinkFile, (err) => {
    //   if (err) {
    //     throw err
    //   }

    //   console.log('Delete File successfully.')
    // })

    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
}
