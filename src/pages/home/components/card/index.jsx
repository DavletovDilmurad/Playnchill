import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../../style/main.css'
import { Navigation } from 'swiper/modules';

function Card() {
  const list = [
    {
      id: 1,
      title: 'Играй уже сейчас в Minecraft',
      price: 4999,
      discount: 25,
      oldprice: 6999,
      image: '/card/card-img1.png',
    },
    {
      id: 2,
      title: 'Играй уже сейчас в Minecraft dangerous',
      price: 4999,
      discount: 25,
      oldprice: 6999,
      image: '/card/card-img2.png',
    },
    {
      id: 3,
      title: 'Играй уже сейчас в Minecraft dangerous',
      price: 6999,
      discount: 15,
      oldprice: 7999,
      image: '/card/card-img3.png',
    },
    {
      id: 4,
      title: 'Играй уже сейчас в Minecraft dangerous',
      price: 4999,
      discount: 25,
      oldprice: 6999,
      image: '/card/card-img4.png',
    },
  ]

  const width = window.screen.width

  return (
    <section className='mt-14 mb-20'>
      <div className="container">
        <Swiper slidesPerView={width >= 770 ? 2 : 1} navigation={true} modules={[Navigation]} className="mySwiper ">
          <div className="flex items-center gap-5">
            {
              list.map(item => (
                <SwiperSlide className='w-1/2 h-96 rounded-xl bg-gradient-to-br from-lime-400 p-10 relative flex flex-col justify-between mr-3' key={item.id}>
                  <div>
                    <div className='relative z-10'>
                      <p className='font-extrabold text-3xl w-96 mb-5 max-[970px]:text-xl max-[830px]:ml-0 max-[830px]:text-base max-[830px]:w-auto'>{item.title}</p>
                      <div className='flex items-end gap-5'>
                        <p className='font-extrabold text-2xl text-white max-[970px]:text-base'>{item.price.toLocaleString()} Р</p>
                        <p className='font-extrabold text-lg text-yellow-300 max-[970px]:text-base'>-{item.discount}%</p>
                        <p className='font-extrabold text-lg text-neutral-600 line-through max-[970px]:text-base'>{item.oldprice.toLocaleString()} Р</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <button className='mt-5 py-3 px-10 relative z-40 bg-transparent font-extrabold text-lg text-white border-transparent border-solid border-slate-500 hover:bg-white hover:border-white hover:text-black rounded-lg ease-in duration-300 max-[970px]:px-5 max-[970px]:py-2 max-[970px]:text-base max-[388px]:p-2 max-[388px]:text-xs'>Купить</button>
                      <button className='mt-5 py-3 px-10 relative z-40 border-solid border-white bg-white font-extrabold text-lg text-black rounded-lg hover:bg-transparent hover:border-solid hover:text-white ease-in duration-300 max-[970px]:px-5 max-[970px]:py-2 max-[970px]:text-base max-[388px]:p-2 max-[388px]:text-xs'>В избранное</button>
                    </div>
                    <div className='absolute z-0 right-4 top-10 w-[250px] h-[300px]'>
                      <img src={item.image} alt="card image" className='w-full h-full object-contain' />
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Card