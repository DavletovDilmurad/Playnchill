import React from 'react'
import { CheckMarkIcon, HeartIcon } from '../../../assets/icons'

function ProductHeader() {
    return (
        <div className="product-header">
            <div className="container">
                <div className="product-wrapper">
                    <div className='flex gap-16'>
                        <div className="w-[350px] h-[478px]">
                            <img src="/product/product-img1.png" alt="product img" className='w-full h-full object-cover' />
                        </div>
                        <div className="content">
                            <div className='flex flex-col gap-5 mb-5'>
                                <h3 className='font-extrabold text-4xl text-white'>Купить Squad</h3>
                                <div className='flex items-center gap-2'>
                                    <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                                    <p className="font-normal text-sm text-white">В наличии</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 mb-5'>
                                <p className='font-bold text-3xl text-white'>4 999 Р</p>
                                <p className='font-bold text-2xl text-lime-500'>-45%</p>
                                <p className='font-bold text-3xl text-neutral-700 line-through'>6 999 Р</p>
                            </div>
                            <div className='flex items-center'>
                                <button className='rounded-2xl py-6 px-9 bg-lime-500 mr-3 border border-solid border-transparent ease-in-out duration-300 hover:bg-transparent hover:border hover:border-solid hover:border-neutral-500'>Купить</button>
                                <button className='rounded-2xl border border-solid border-neutral-500 py-6 px-9 bg-transparent mr-5 ease-in-out duration-300 hover:bg-lime-500 hover:border-transparent'>В корзину</button>
                                <button className='rounded-full border border-solid border-neutral-700 p-3'><HeartIcon /></button>
                            </div>
                            <div className='flex gap-16 my-10'>
                                <ul className='flex flex-col gap-2'>
                                    <li className='font-normal text-lg text-white'>Жанр</li>
                                    <li className='font-semibold text-xl text-white'>Гонки</li>
                                </ul>
                                <ul className='flex flex-col gap-2'>
                                    <li className='font-normal text-lg text-white'>Платформа</li>
                                    <li className='font-semibold text-xl text-white'>Steam</li>
                                </ul>
                                <ul className='flex flex-col gap-2'>
                                    <li className='font-normal text-lg text-white'>Регион активации</li>
                                    <li className='font-semibold text-xl text-white'>Страны СНГ</li>
                                </ul>
                                <ul className='flex flex-col gap-2'>
                                    <li className='font-normal text-lg text-white'>Тип товара</li>
                                    <li className='font-semibold text-xl text-white'>Учетная запись</li>
                                </ul>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span><CheckMarkIcon /></span>
                                <span className='font-semibold text-lg text-white'>Гарантия качества</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 my-20">
                        <div className='w-[297px] h-[167px]'>
                            <img src="/product/product-img2.png" alt="product img" className='w-full h-full object-contain' />
                        </div>
                        <div>
                            <img src="/product/product-img3.png" alt="product img" className='w-full h-full object-contain' />
                        </div>
                        <div>
                            <img src="/product/product-img4.png" alt="product img" className='w-full h-full object-contain' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductHeader