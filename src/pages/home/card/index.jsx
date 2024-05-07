import React from 'react'

function Card() {
  return (
    <section className='mt-14 mb-20'>
      <div className="container">
        <div className="flex items-center gap-5">
          <div className='w-1/2 h-96 rounded-xl bg-gradient-to-br from-lime-400 p-10 relative flex flex-col justify-between'>
            <div className='relative z-10'>
              <p className='font-extrabold text-3xl w-96 mb-5'>Играй уже сейчас в Minecraft</p>
              <div className='flex items-end gap-5'>
                <p className='font-extrabold text-2xl text-white'>4 999 Р</p>
                <p className='font-extrabold text-lg text-yellow-300'>-25%</p>
                <p className='font-extrabold text-lg text-neutral-600 line-through'>6 999 Р</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <button className='mt-5 py-3 px-10 relative z-40 bg-transparent font-extrabold text-lg text-white border-transparent border-solid border-slate-500 hover:bg-white hover:border-white hover:text-black rounded-lg ease-in duration-300'>Купить</button>
              <button className='mt-5 py-3 px-10 relative z-40 border-solid border-white bg-white font-extrabold text-lg text-black rounded-lg hover:bg-transparent hover:border-solid hover:text-white ease-in duration-300'>В избранное</button>
            </div>
            <div className='absolute z-0 right-4' style={{ top: '-54px' }}>
              <img src="/card/card-img1.png" alt="card image" />
            </div>
          </div>
          <div className='w-1/2 h-96 rounded-xl bg-gradient-to-b from-yellow-400 p-10 relative flex flex-col justify-between'>
            <div className='relative z-10'>
              <p className='font-extrabold text-3xl w-96 mb-5'>Играй уже сейчас в Minecraft dangerous</p>
              <div className='flex items-end gap-5'>
                <p className='font-extrabold text-2xl text-white'>4 999 Р</p>
                <p className='font-extrabold text-lg text-yellow-300'>-25%</p>
                <p className='font-extrabold text-lg text-neutral-600 line-through'>6 999 Р</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <button className='mt-5 py-3 px-10 relative z-40 bg-transparent font-extrabold text-lg text-white border-transparent border-solid border-slate-500 hover:bg-white hover:border-white hover:text-black rounded-lg ease-in duration-300'>Купить</button>
              <button className='mt-5 py-3 px-10 relative z-40 border-solid border-white bg-white font-extrabold text-lg text-black rounded-lg hover:bg-transparent hover:border-solid hover:text-white ease-in duration-300'>В избранное</button>
            </div>
            <div className='absolute z-0' style={{ top: '-100px', right: '-100px'}}>
              <img src="/card/card-img2.png" alt="card image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card