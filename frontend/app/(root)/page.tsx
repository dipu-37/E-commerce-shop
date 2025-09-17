import ProductList from '@/components/shared/product/ProductList'
import latestProducts from '@/db/sample-data'

const HomePage = () => {

  return (
    <div>
      <ProductList data={latestProducts.products} title='newest product' limit={4} ></ProductList>
    </div>
  )
}

export default HomePage
