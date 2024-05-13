import React from 'react'
import { ProductHeader, ReleatedItems, TabMenu } from './components'

function ProductPage() {
    return (
        <div className='product-page'>
            <ProductHeader />
            <TabMenu />
            <ReleatedItems />
        </div>
    )
}

export default ProductPage