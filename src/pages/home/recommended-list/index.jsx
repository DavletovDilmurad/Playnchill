
import { FavouritesIcon } from '../../../assets/icons'
function RecommendedList() {

    const list = [
        {
            id: 1,
            title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
            image: '/recommendedList/list-img1.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 2,
            title: 'Minecraft',
            image: '/recommendedList/list-img2.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 3,
            title: 'Minecraft',
            image: '/recommendedList/list-img3.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
        {
            id: 4,
            title: 'Minecraft',
            image: '/recommendedList/list-img4.png',
            price: 16400,
            discount: '15',
            oldprice: 16400,
        },
    ]

    return (
        <section className='mt-24 mb-6'>
            <div className="container">
                <div className='recommended-list__wrapper'>
                    <div className="mb-5 flex items-center gap-2">
                        <img src="/recommendedList/toptitle.svg" alt="top title svg" />
                        <img src="/recommendedList/thunder.svg" alt="thunder svg" />
                    </div>
                    <div className="flex gap-5 max-[1060px]:gap-3 max-lg:flex-wrap max-[500px]:gap-5 max-[574px]:flex-col">
                        {
                            list.map(item => (
                                <div className='w-80 h-3/4 relative max-[1040px]:w-[235px] max-[1006px]:w-[280px] max-[955px]:w-[260px] max-[840px]:w-[240px] max-[774px]:w-[220px] max-[716px]:w-[200px] max-[653px]:w-[300px] max-[642px]:w-[280px] max-[604px]:w-[260px] max-[574px]:flex max-[574px]:w-full' key={item.id}>
                                    <div className='w-full h-full cursor-pointer'>
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
                                        <span className='absolute top-3 max-[574px]:right-0 max-[574px]:bottom-0 max-[574px]:h-8'>
                                            <img src="/recommendedList/listtoptitle.svg" alt="list top title svg" />
                                        </span>
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

export default RecommendedList