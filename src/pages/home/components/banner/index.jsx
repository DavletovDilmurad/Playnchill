import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../../style/main.css'
import { Navigation, Pagination } from 'swiper/modules';

function Banner() {

    const list = [
        {
            id: 1,
            image: '/banner/banner-img-1.png',
            contentimg: '/banner/banner-content-img1.png',
            title: 'Need for Speed',
            subtitle: 'Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!',
            price: 4999,
            discount: 25,
            oldprice: 6999,
        },
        {
            id: 2,
            image: '/banner/banner-img-2.png',
            contentimg: '/banner/banner-content-img2.png',
            title: 'Forza Horizon 5',
            subtitle: 'Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!',
            price: 4999,
            discount: 25,
            oldprice: 6999,
        },
        {
            id: 3,
            image: '/banner/banner-img-3.png',
            contentimg: '/banner/banner-content-img3.png',
            title: 'Blur',
            subtitle: 'Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!',
            price: 4999,
            discount: 25,
            oldprice: 6999,
        },
    ]

    return (
        <div className='banner'>
            <div className="container">
                <Swiper
                    modules={[Pagination, Navigation]} navigation={true} className="mySwiper">
                    <div className='relative flex items-end'>
                        {
                            list.map(item => (
                                <SwiperSlide className='two' key={item.id}>
                                    <div className="w-full h-[700px] rounded-2xl overflow-hidden max-md:h-[400px] max-sm:h-[300px] max-[450px]:h-[250px]">
                                        <img src={item.image} alt={item.title} className="w-full h-full max-[450px]:object-cover" />
                                    </div>

                                    <div className="absolute pl-32 max-lg:pl-10 max-lg:pb-12 pb-32 max-md:pb-5 max-sm:pb-0 max-sm:pl-5 flex-col">
                                        <div className="mb-5 w-[251px] h-[100px] max-lg:mb-2 max-lg:w-40 max-md:w-24 max-sm:w-20 max-sm:h-8 ">
                                            <img src={item.contentimg} alt={item.title} className='banner-content__img' />
                                        </div>
                                        <p className="w-3/6 h-28 max-lg:h-20 max-md:h-16 font-normal text-2xl text-white max-lg:text-lg max-md:text-base max-sm:text-sm max-[543px]:w-9/12 max-[543px]:text-[12px]">
                                            {item.subtitle}
                                        </p>
                                        <div className="flex items-end gap-4 my-10 max-lg:my-6 max-md:my-9 max-sm:my-12 max-[450px]:gap-2 max-[550px]:my-8 max-[450px]:my-4">
                                            <p className="font-extrabold text-3xl text-white max-lg:text-xl max-md:text-base max-[450px]:text-[12px]">{item.price.toLocaleString()} Р</p>
                                            <p className="font-extrabold text-xl text-lime-500 max-md:text-sm max-[450px]:text-[10px]">-{item.discount}%</p>
                                            <p className="font-semibold text-xl text-gray-500 max-md:text-sm max-[450px]:text-[10px]">{item.oldprice.toLocaleString()} Р</p>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <button className="rounded-2xl border h-16 border-transparent border-solid hover:border-white hover:bg-transparent hover:text-white py-5 max-lg:py-2 max-md:hidden w-40 bg-white font-semibold text-base text-black ease-in duration-300">В корзину</button>
                                            <button className="border h-16 border-white border-solid rounded-2xl py-5 max-lg:py-2 max-md:hidden w-40 font-semibold text-base text-white hover:bg-white hover:text-black hover:border-white ease-in duration-300">В избранное</button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            ))
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default Banner