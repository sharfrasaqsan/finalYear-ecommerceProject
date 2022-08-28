import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import {DataContext} from '../store/GlobalState'

import { getData } from '../utils/fetchData'
import ProductItem from '../components/product/ProductItem'
import filterSearch from '../utils/filterSearch'
import {useRouter} from 'next/router'
import Filter from '../components/Filter'

const Home = (props) => {
  const [products, setProducts] = useState(props.products)

  const [isCheck, setIsCheck] = useState(false)
  const [page, setPage] = useState(1)
  const router = useRouter()

  const {state, dispatch} = useContext(DataContext)
  const {auth} = state

  useEffect(() => {
    setProducts(props.products)
  },[props.products])

  useEffect(() => {
    if(Object.keys(router.query).length === 0) setPage(1)
  },[router.query])

  const handleCheck = (id) => {
    products.forEach(product => {
      if(product._id === id) product.checked = !product.checked
    })
    setProducts([...products])
  }

  const handleCheckALL = () => {
    products.forEach(product => product.checked = !isCheck)
    setProducts([...products])
    setIsCheck(!isCheck)
  }

  const handleDeleteAll = () => {
    let deleteArr = [];
    products.forEach(product => {
      if(product.checked){
          deleteArr.push({
            data: '', 
            id: product._id, 
            title: 'Delete all selected products?', 
            type: 'DELETE_PRODUCT'
          })
      }
    })

    dispatch({type: 'ADD_MODAL', payload: deleteArr})
  }

  const handleLoadmore = () => {
    setPage(page + 1)
    filterSearch({router, page: page + 1})
  }

  return(
    <div className="home_page">
      <Head>
        <title>Home Page</title>
      </Head>

      <Filter state={state} />

      {
        auth.user && auth.user.role === 'admin' &&
        <div className="delete_all btn btn-danger mt-2" style={{marginBottom: '-10px'}}>
          <input type="checkbox" checked={isCheck} onChange={handleCheckALL}
          style={{width: '25px', height: '25px', transform: 'translateY(8px)'}} />

          <button className="btn btn-danger ml-2"
          data-toggle="modal" data-target="#exampleModal"
          onClick={handleDeleteAll}>
            DELETE ALL
          </button>
        </div>
      }

      <div className="container-md" style={{padding:"20px 150px 0 150px"}}>
        <div id="carousel-id" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner d-none d-lg-block d-xl-block" role="listbox" style={{height:"auto", borderRadius:"15px"}}>
            <div className="carousel-item active">
              <img src="ban1.jpg" alt="First slide" className="img-fluid" style={{height:"300px", width:"100%"}} />
            </div>
            <div className="carousel-item">
              <img src="ban2.jpg" alt="Second slide" className="img-fluid"  style={{height:"300px", width:"100%"}} />
            </div>
            <div className="carousel-item">
              <img src="ban4.png" alt="Third slide" className="img-fluid"  style={{height:"300px", width:"100%"}} />
            </div>
            <div className="carousel-item">
              <img src="ban3.jpg" alt="Fourth slide" className="img-fluid"  style={{height:"300px", width:"100%"}} />
            </div>
          </div>

          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
        </div>
      </div>
      
      <div className="products">
        {
          products.length === 0 
          ? <h2>No Products</h2>

          : products.map(product => (
            <ProductItem key={product._id} product={product} handleCheck={handleCheck} />
          ))
        }
      </div>
      
      {
        props.result < page * 6 ? ""
        : <button className="btn btn-info d-block mx-auto mb-4"
        onClick={handleLoadmore}>
          Load more
        </button>
      }
    
      <div className='container'>
        <div className="row">
          <marquee width="100%" direction="left" height="100px">
            <img src="hp.png" alt="p1" style={{width:"auto", height:"70px"}} />
            <img src="dell.jpg" alt="p2" style={{width:"auto", height:"70px", paddingRight:"30px"}} />
            <img src="asus.png" alt="p2" style={{width:"auto", height:"40px", paddingRight:"35px"}}/>
            <img src="ricoh.jpg" alt="p2" style={{width:"auto", height:"45px", paddingRight:"40px"}} />
            <img src="eset.jpg" alt="p2" style={{width:"auto", height:"50px", paddingRight:"40px"}} />
            <img src="ms.png" alt="p2" style={{width:"auto", height:"50px", paddingRight:"30px"}} />
            <img src="intel.png" alt="p2" style={{width:"auto", height:"80px", paddingRight:"30px"}} />
            <img src="jkoa.png" alt="p2" style={{width:"auto", height:"100px", paddingRight:"40px"}} />
            <img src="toshiba.png" alt="p2" style={{width:"auto", height:"40px", paddingRight:"40px"}} />
            <img src="epson.png" alt="p2" style={{width:"auto", height:"40px", paddingRight:"40px"}} />
            <img src="pantum.png" alt="p2" style={{width:"auto", height:"40px", paddingRight:"40px"}} />
            <img src="adata.png" alt="p2" style={{width:"auto", height:"50px", paddingRight:"40px"}} />
            <img src="seagate.png" alt="p2" style={{width:"auto", height:"50px", paddingRight:"40px"}} />
          </marquee>
        </div>
      </div>
    </div>
  )
}


export async function getServerSideProps({query}) {
  const page = query.page || 1
  const category = query.category || 'all'
  const sort = query.sort || ''
  const search = query.search || 'all'

  const res = await getData(
    `product?limit=${page * 12}&category=${category}&sort=${sort}&title=${search}`
  )
  // server side rendering
  return {
    props: {
      products: res.products,
      result: res.result
    }, // will be passed to the page component as props
  }
}

export default Home