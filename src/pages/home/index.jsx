import React from 'react'
import { Banner, Blog, Card, Product, RecommendedList, Stock } from './components'

function HomePage() {
    return (
        <div>
            <Banner />
            <RecommendedList />
            <Card />
            <Product />
            <Stock />
            <Blog />
        </div>
    )
}

export default HomePage