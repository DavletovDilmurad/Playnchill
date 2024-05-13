import { CartCheckout, CartItems } from "./components"

function Cart() {
    return (
        <div className='cart'>
            <div className="container">
                <div className="cart-wrapper">
                    <div className="mb-8">
                        <h2 className='font-bold text-4xl text-white'>Корзина <span className='text-lime-500'>5</span></h2>
                    </div>
                    <div className="flex">
                        <div className="cart-main">
                            <div className="mb-7">
                                <div className="relative w-[893px]">
                                    <div className="absolute z-0 w-[893px] h-[244px] rounded-2xl">
                                        <img src="/cart/cart-img1.png" alt="cart img" className='w-full h-full object-contain' />
                                    </div>
                                    <div className='relative z-10 p-8'>
                                        <h3 className='font-extrabold text-3xl text-white'>Войдите или зарегистрируйтесь</h3>
                                        <p className='font-medium text-xl text-white w-[603px] mt-3 mb-7'>
                                            Вы сможете накапливать <span className='font-extrabold'>бонусные рубли </span>
                                            и использовать их при оплате до <span className='font-extrabold'>50% </span> стоимости товаров.
                                        </p>
                                        <button className='bg-white rounded-xl py-3 px-7 font-light text-base text-black hover:bg-transparent hover:text-white border border-solid border-transparent hover:border-white ease-in duration-200'>Войти</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-7">
                                <CartItems />
                                <CartItems />
                                <CartItems />
                            </div>
                        </div>
                        <div className="cart-checkout">
                            <CartCheckout />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart