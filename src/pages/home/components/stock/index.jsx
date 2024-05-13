import React from 'react'

function Stock() {

  const list = [
    {
      id: 1,
      title: 'Minecraft',
      price: 16400,
      discount: 15,
      oldprice: 18400,
      image: '/stock/stock-img1.png',
    },
    {
      id: 2,
      title: 'Minecraft',
      price: 16400,
      discount: 15,
      oldprice: 18400,
      image: '/stock/stock-img2.png',
    },
    {
      id: 3,
      title: 'Minecraft',
      price: 16400,
      discount: 15,
      oldprice: 18400,
      image: '/stock/stock-img3.png',
    },
    {
      id: 4,
      title: 'Minecraft',
      price: 16400,
      discount: 15,
      oldprice: 18400,
      image: '/stock/stock-img4.png',
    },
  ]

  return (
    <section className='stock'>
      <div className="container">
        <div className="stock-wrapper">
          <div className="mb-5">
            <h3 className="font-semibold text-3xl text-white">Акции и скидки
              <span className='text-lime-500'> %</span></h3>
          </div>
          <div className='flex flex-wrap gap-5'>
            {
              list.map(item => (
                <div className="mb-7" key={item.id}>
                  <div className='w-[620px] h-[319px]'>
                    <img src={item.image} alt={item.title} className='w-full h-full object-contain' />
                  </div>
                  <div className='p-8'>
                    <div className='flex items-center gap-5'>
                      <p className="font-medium text-2xl text-white">{item.price.toLocaleString()} P</p>
                      <p className="rounded-lg py-2 px-3 bg-lime-400 font-semibold text-lg text-white">-{item.discount}%</p>
                      <p className="line-through font-normal text-lg text-neutral-700">{item.oldprice.toLocaleString()} P</p>
                    </div>
                    <h3 className="font-normal text-lg text-white">{item.title}</h3>
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

export default Stock