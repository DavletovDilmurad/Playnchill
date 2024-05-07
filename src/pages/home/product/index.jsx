import React from 'react'
import { FavouritesIcon } from '../../../assets/icons'

function Product() {

    const list = [
        {
            id: 1,
            title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
            image: '/recommendedList/list-img5.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 2,
            title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
            image: '/recommendedList/list-img6.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 3,
            title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
            image: '/recommendedList/list-img7.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 4,
            title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
            image: '/recommendedList/list-img8.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 5,
            title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
            image: '/recommendedList/list-img1.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 6,
            title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
            image: '/recommendedList/list-img2.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 7,
            title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
            image: '/recommendedList/list-img4.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 8,
            title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
            image: '/recommendedList/list-img9.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 9,
            title: 'Minecraft',
            image: '/recommendedList/list-img10.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 10,
            title: 'Minecraft',
            image: '/recommendedList/list-img11.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 11,
            title: 'Minecraft',
            image: '/recommendedList/list-img12.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 12,
            title: 'Minecraft',
            image: '/recommendedList/list-img3.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
    ]

    return (
        <section className='product'>
            <div className="container">
                <div className="product-wrapper">
                    <div className="mb-8">
                        <h3 className='font-semibold text-3xl text-white'>Новинки</h3>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        {
                            list.map(item => (
                                <div className='w-[300px] h-3/4 relative' key={item.id}>
                                    <div className='w-full h-[450px] rounded-3xl overflow-hidden cursor-pointer'>
                                        <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='p-4'>
                                        <div className='flex items-center gap-5 mb-2'>
                                            <p className="text-white font-medium text-2xl">{item.price.toLocaleString()} P</p>
                                            <p className="font-medium text-lg text-lime-500">-{item.discount}%</p>
                                            <p className="font-normal text-lg text-neutral-700 line-through">{item.oldprice.toLocaleString()} P</p>
                                        </div>
                                        <p className="font-normal text-base text-white mb-2 h-12">{item.title}</p>
                                        <button className='hidden bg-white rounded-full p-2.5 absolute top-5 right-8 hover:block'>
                                            <FavouritesIcon />
                                        </button>
                                        <button className='absolute bottom-1/4 h-14 border-solid border-transparent bg-lime-500 w-64 rounded-xl p-3 mb-5 ease-in-out duration-300  hover:bg-transparent hover:border-solid hover:border-white font-bold text-lg'>
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product