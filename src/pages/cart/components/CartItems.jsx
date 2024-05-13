import { BlackHeartIcon, CloseIcon, MinusIcon, PlusIcon } from "../../../assets/icons"

function CartItems() {
    return (
        <div className="pt-7 w-[893px] flex">
            <div className="w-[200px] h-[240px] rounded-md overflow-hidden">
                <img src="/recommendedList/list-img3.png" alt="cart img" className='w-full h-full object-cover' />
            </div>
            <div className="flex flex-grow justify-between pl-8">
                <div className='titles'>
                    <h3 className='font-medium text-2xl text-white mb-3'>Minecraft</h3>
                    <div className='flex items-center gap-5 mb-10'>
                        <p className='font-bold text-3xl text-white'>349 Р</p>
                        <p className='font-bold text-2xl text-lime-500'>-25%</p>
                        <p className='font-bold text-2xl text-neutral-500 opacity-35 line-through'>599 Р</p>
                    </div>
                    <p className='font-normal text-lg text-neutral-500 mb-3'>Регион активации  <span className='text-white'>Россия и страны СНГ</span></p>
                    <p className='font-normal text-lg text-neutral-500'>Сервис активации  <span className='text-white'>Steam</span></p>
                </div>
                <div className='flex flex-col items-end justify-between'>
                    <button className='p-3'>
                        <CloseIcon />
                    </button>
                    <div className='flex items-center gap-3'>
                        <button className='p-3'><MinusIcon /></button>
                        <span className='font-medium text-2xl text-white'>1</span>
                        <button className='p-3'><PlusIcon /></button>
                    </div>
                    <div>
                        <button className='p-3'><BlackHeartIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems