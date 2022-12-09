// import React, { useEffect, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import BackButton from '../components/BackButton';
// // import { ProductsContext } from '../context/ProductContext';

// const ProductPage = () => {
//   const params = useParams();
//   const {
//     fetchProducts: fetchSingleProduct,
//     products: product,
//     loading,
//     error,
//   } = useContext(ProductsContext);

//   useEffect(() => {
//     console.log('params.id', params.id);
//     fetchSingleProduct(`/api/products/${params.id}`);
//   }, [params, fetchSingleProduct]);

//   if (loading) {
//     return <h2>Is Loading...</h2>;
//   }

//   if (error) {
//     return <h2>Oop is Error...</h2>;
//   }

//   return (
//     <div className='ProductPage'>
//       {product._id ? (
//         <>
//           <h2>Product Page</h2>

//           <p>Product: {product._id}</p>
//           <img src={product.image} width='200' alt='' />
//           <p>
//             Store:{' '}
//             <span className={product.countInStock > 0 ? 'blue' : 'red'}>
//               {product.countInStock > 0
//                 ? product.countInStock
//                 : 'Available soon!'}
//             </span>
//           </p>
//         </>
//       ) : (
//         <>
//           <h1>Product Not Found</h1>
//           <BackButton />
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductPage;
