import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'
import getBillboard from '@/data-fetchers/get-billboard'
import getProducts from '@/data-fetchers/get-products'

import React from 'react'
import ProductList from '@/components/product-list'

const RootPage =async () => {
  const BillData = await getBillboard("clkd2o7rs0001vt28udt0gm8k")
  const ProductsData = await getProducts({Featured:true})
  return (
    <div className='pb-20'>
 <Container>
    <div className=' pb-10'>
          <Billboard data={BillData}/>
    </div>
    <div className='flex flex-col flex-wrap gap-y-8 px-4 sm:px-6 lg:px-8'>
      <ProductList title="Featured Products" items={ProductsData}/>
    </div>
    </Container>
    </div>
  )
}

export default RootPage