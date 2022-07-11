import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Swiper, SwiperSlide, Navigation, Pagination } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
export default function Home() {
  return (
    <div className='   h-screen w-full m-auto '>
      {/* pc-start */}
      <div className='w-full h-full lg:flex flex-col  md:hidden hidden    '>
        <div className=' flex flex-row  bg-white h-3/5  '>
          <div className='w-1/2  '>
            <img src="/Group 2.svg" className='absolute m-auto h-screen w-6/12   ' />
          </div>
          <div className='w-1/2   text-left '>

            <div className='h-1/5  text-6xl  my-5 text-gray-300'>
              ATHLETS
            </div>
            <div className='h-1/5  mt-14 flex flex-row '>

              <div className='flex flex-col pb-2 '>
                <div className='text-center   text-xs  '>
                  01
                </div>
                <div className='bg-blue-200'>
                  <img src="/Rectangle 4.svg" />
                </div>
              </div>
              <div className='ml-2 '>
                <img src="/Connection.svg" />
              </div>
            </div>
            <div className='h-1/5 w-2/3'>
              Connect with coaches directly, you can ping coaches to view profile.
            </div>


          </div>
        </div>
        <div className=' flex flex-row  bg-gray-200 h-3/5  '>
          <div className='w-1/2'>

          </div>
          <div className='w-1/2   text-left'>


            <div className='h-1/5  mt-14 flex flex-row '>

              <div className='flex flex-col pb-2 '>
                <div className='text-center   text-xs  mt-2 '>
                  02
                </div>
                <div className='bg-blue-200'>
                  <img src="/Rectangle 4.svg" />
                </div>
              </div>
              <div className='ml-2 text-3xl text-gray-400 mb-2 '>
                COLLABORATION
              </div>
            </div>
            <div className='h-1/5 font-bold w-2/3   '>
              <h1 className='textshadow'>
                Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
              </h1>
            </div>


          </div>
        </div>
        <div className=' flex flex-row bg-color-1 h-2/5 '>
          <div className='w-1/2'>

          </div>
          <div className='w-1/2   text-left'>

            <div className='h-1/5  mt-8 flex flex-row '>

              <div className='flex flex-col pb-2 '>
                <div className='text-center   text-xs  mt-2 '>
                  03
                </div>
                <div className='bg-blue-200'>
                  <img src="/Rectangle 5.svg" />
                </div>
              </div>
              <div className='ml-2 text-3xl text-gray-400 mb-2  '>
                GROWTH
              </div>
            </div>
            <div className='h-1/5 font-bold w-2/3  mt-4  '>
              <h1 className='  text-white drop-shadow-lg shadow-black'>
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc
              </h1>
            </div>


          </div>
        </div>
      </div >
      <div className='w-full h-full  lg:flex flex-col   md:hidden hidden   '>
        <div className=' flex flex-row  bg-white h-3/5  '>
          <div className='w-1/2  text-left  '>
            <div className='flex flex-row '>
              <div className='w-1/3'>

              </div>
              <div className='w-2/3'>
                <div className='h-1/5  flex flex-row  mt-7    text-6xl   text-gray-300'>
                  PLAYERS
                </div>
              </div>
            </div>

            <div className='flex flex-row '>
              <div className='w-1/3'>

              </div>
              <div className='w-2/3'>
                <div className='h-1/5  mt-12 flex flex-row '>
                  <div className='flex flex-col pb-2 '>
                    <div className='text-center   text-xs mt-1  '>
                      01
                    </div>
                    <div className='bg-blue-200'>
                      <img src="/Rectangle 4.svg" />
                    </div>
                  </div>
                  <div className='ml-2 text-3xl text-gray-400  mb-3  '>
                    CONNECTION
                  </div>
                </div>
                <div className='h-1/5 mt-5'>
                  Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
                </div>

              </div>
            </div>



          </div>
          <div className='w-1/2'>
            <img src="/Group 3.svg" className='absolute   w-6/12 ' />
          </div>

        </div>
        <div className=' flex flex-row  bg-gray-200 h-3/5  text-right '>

          <div className='w-1/2   '>


            <div className='flex flex-row '>
              <div className='w-1/3'>

              </div>
              <div className='w-2/3 h-full'>
                <div className='h-1/5  mt-16 flex flex-row '>
                  <div className='flex flex-col pb-2 '>
                    <div className='text-center   text-xs mt-2  '>
                      02
                    </div>
                    <div className='bg-blue-200  '>
                      <img src="/Rectangle 4.svg " />
                    </div>
                  </div>
                  <div className='ml-2  text-3xl text-gray-400  mb-3  '>
                    COLLABORATION
                  </div>
                </div>
                <div className='h-1/5  mt-5 '>
                  Work with recruiter to increase your chances of finding talented athlete.
                </div>

              </div>
            </div>
          </div>
          <div className='w-1/2'>

          </div>
        </div>
        <div className=' flex flex-row bg-color-2 h-2/5 '>


          <div className='w-1/2   '>


            <div className='flex flex-row '>
              <div className='w-1/3'>

              </div>
              <div className='w-2/3'>
                <div className='h-1/5  mt-12 flex flex-row '>
                  <div className='flex flex-col pb-2 '>
                    <div className='text-center   text-xs mt-2 text-violet-700 '>
                      03
                    </div>
                    <div className='bg-blue-200'>
                      <img src="/Rectangle 5.svg" />
                    </div>
                  </div>
                  <div className='ml-2  text-3xl text-gray-400  mb-3  '>
                    GROWTH
                  </div>
                </div>
                <div className='h-1/5  mt-5 text-white'>
                  Save your time, recruit proper athlets for your team.
                </div>

              </div>
            </div>
          </div>
          <div className='w-1/2'>

          </div>
        </div>
      </div >
      {/* pc-end */}
      {/* taplet-start */}
      <div className='w-full h-full md:flex flex-col  lg:hidden hidden   '>
        <div className=' flex flex-row  bg-white h-3/6  '>
          <div className='w-3/5  '>
            <img src="/Group 4.svg" className='absolute m-auto h-screen w-6/12   ' />
          </div>
          <div className='w-4/5   text-left mt-20 '>

            <div className='h-1/5    text-7xl  my-5 text-gray-300'>
              ATHLETS
            </div>
            <div className='h-1/5  mt-10 flex flex-row '>

              <div className='flex flex-col pb-2 mt-2 '>
                <div className='text-center   text-base  '>
                  01
                </div>
                <div className='bg-blue-200'>
                  <img src="/Rectangle 4.svg" />
                </div>
              </div>
              <div className='ml-2 text-5xl text-gray-400 mb-4   '>
                CONNECTION
              </div>
            </div>
            <div className='h-1/5 w-4/5 text-lg  '>
              Connect with coaches directly, you can ping coaches to view profile.
            </div>


          </div>
        </div>
        <div className=' flex flex-row  bg-gray-200 h-2/6   '>
          <div className='w-3/5'>

          </div>
          <div className='w-4/5  text-left '>


            <div className='h-1/5  mt-10 flex flex-row '>

              <div className='flex flex-col pb-2  mt-3 '>
                <div className='text-center   text-base   '>
                  02
                </div>
                <div className='bg-blue-200'>
                  <img src="/Rectangle 4.svg" />
                </div>
              </div>
              <div className='ml-2 text-5xl text-gray-400 mb-4   '>
                COLLABORATION
              </div>
            </div>
            <div className='h-1/5 font-bold w-4/5 mt-5 text-lg  '>
              <h1 className='textshadow'>
                Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
              </h1>
            </div>


          </div>
        </div>
        <div className=' flex flex-row bg-color-1 h-2/6 '>
          <div className='w-3/5'>

          </div>
          <div className='w-4/5   text-left'>

            <div className='h-1/5  mt-14 flex flex-row '>

              <div className='flex flex-col pb-2  mt-3'>
                <div className='text-center   text-base   '>
                  03
                </div>
                <div className='bg-blue-200'>
                  <img src="/Rectangle 5.svg" />
                </div>
              </div>
              <div className='ml-2 text-5xl text-gray-400 mb-2  '>
                GROWTH
              </div>
            </div>
            <div className='h-1/5 font-bold w-4/5  mt-4  '>
              <h1 className='  text-white drop-shadow-lg shadow-black  text-lg font-light'>
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc
              </h1>
            </div>


          </div>
        </div>
      </div>
      <div className='w-full h-full md:flex flex-col  lg:hidden hidden     '>
        <div className=' flex flex-row  bg-white h-3/6 pl-7 '>

          <div className='w-4/5    mt-20 '>

            <div className='h-1/5    text-7xl  my-5 text-gray-300'>
              PLAYERS
            </div>
            <div className='h-1/5  mt-10 flex flex-row '>

              <div className='flex flex-col pb-2 mt-2 '>
                <div className='   text-base  '>
                  01
                </div>
                <div className='bg-blue-200'>
                  <img src="/Rectangle 4.svg" />
                </div>
              </div>
              <div className='ml-2 text-5xl text-gray-400 mb-4   '>
                CONNECTION
              </div>
            </div>
            <div className='h-1/5 w-4/5 text-lg  '>
              Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
            </div>


          </div>
          <div className='w-2/5  '>
            <img src="/Group 5.svg" className='absolute  h-screen w-auto  mb-16   layout-bg-tab   max-w-md ' />
          </div>
        </div>
        <div className=' flex flex-row  bg-gray-200 h-2/6  pl-7 '>

          <div className='w-4/5   '>


            <div className='h-1/5  mt-10 flex flex-row '>

              <div className='flex flex-col pb-2  mt-3 '>
                <div className='   text-base   '>
                  02
                </div>
                <div className='bg-blue-200'>
                  <img src="/Rectangle 4.svg" />
                </div>
              </div>
              <div className='ml-2 text-5xl text-gray-400 mb-4   '>
                COLLABORATION
              </div>
            </div>
            <div className='h-1/5 font-bold w-4/5 mt-5 text-lg  '>
              <h1 className='textshadow'>
                Work with recruiter to increase your chances of findingtalented athlete.
              </h1>
            </div>


          </div>
          <div className='w-2/5'>

          </div>
        </div>
        <div className=' flex flex-row bg-color-2 h-2/6 pl-7 '>

          <div className='w-4/5   '>

            <div className='h-1/5  mt-14 flex flex-row '>

              <div className='flex flex-col pb-2  mt-3'>
                <div className='   text-base  text-violet-700  '>
                  03
                </div>
                <div className='bg-blue-200'>
                  <img src="/Rectangle 5.svg" />
                </div>
              </div>
              <div className='ml-2 text-5xl text-gray-400 mb-2  '>
                GROWTH
              </div>
            </div>
            <div className='h-1/5 font-bold w-4/5  mt-4  '>
              <h1 className='  text-white drop-shadow-lg shadow-black  text-lg font-light'>
                Save your time, recruit proper athlets for your team.
              </h1>
            </div>


          </div>
          <div className='w-3/5'>

          </div>
        </div>
      </div >
      {/* taplet-end */}
      {/* mobile-start */}
      <div className='w-full h-full flex flex-col  lg:hidden md:hidden   '>
        <div className='bg-white  w-full h-3/5  '>
          <div className='flex flex-col text-left ' >
            <div className='text-6xl text-gray-300 mt-4 ml-6'>
              PLAYERS
            </div>
            <div className=''>
              <img src="/Group 6.svg" className='absolute m-auto h-screen w-9/12 layout-bg-mo-1   ' />
            </div>
          </div>

        </div>
        <div className=" w-full h-2/5 rounded  bg-gray-200 pt-4 pr-2">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            Pagination={{
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
            className="h-full"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >

            <SwiperSlide className='mt-16 ml-5'>
              <div className='h-1/5   flex flex-row '>

                <div className='flex flex-col pb-2  mt-1 '>
                  <div className='   text-lg   '>
                    01
                  </div>
                  <div className='bg-blue-200'>
                    <img src="/Rectangle 4.svg" />
                  </div>
                </div>
                <div className='ml-2 text-4xl text-gray-400 mb-2   '>
                  CONNECTION
                </div>
              </div>
              <div className='h-1/5  w-11/12 mt-2 text-sm   '>
                <h1 className='textshadow'>
                  Connect with coaches directly, you can ping coaches to view profile.
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mt-16 ml-5'>
              <div className='h-1/5   flex flex-row '>

                <div className='flex flex-col pb-2  mt-1 '>
                  <div className='   text-lg   '>
                    02
                  </div>
                  <div className='bg-blue-200'>
                    <img src="/Rectangle 4.svg" />
                  </div>
                </div>
                <div className='ml-2 text-4xl text-gray-400 mb-2   '>
                  COLLABORATION
                </div>
              </div>
              <div className='h-1/5  w-11/12 mt-2 text-sm   '>
                <h1 className='textshadow'>
                  Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mt-16 ml-5'>
              <div className='h-1/5   flex flex-row '>

                <div className='flex flex-col pb-2  mt-1 '>
                  <div className='   text-lg   '>
                    03
                  </div>
                  <div className='bg-blue-200'>
                    <img src="/Rectangle 4.svg" />
                  </div>
                </div>
                <div className='ml-2 text-4xl text-gray-400 mb-2   '>
                  GROWTH
                </div>
              </div>
              <div className='h-1/5  w-11/12 mt-2 text-sm   '>
                <h1 className='textshadow'>
                  Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc
                </h1>
              </div>
            </SwiperSlide>


          </Swiper>
        </div>

      </div>
      <div className='w-full h-full flex flex-col  lg:hidden md:hidden   '>
        <div className='bg-white  w-full h-3/5  '>
          <div className='flex flex-col text-left ' >
            <div className='text-6xl text-gray-300 mt-4 ml-6'>
              PLAYERS
            </div>
            <div className=''>
              <img src="/Group 7.svg" className='absolute m-auto h-screen w-full layout-bg-mo-2 px-3   ' />
            </div>
          </div>

        </div>
        <div className=" w-full h-2/5 rounded  bg-gray-200 pt-4 pr-2">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            Pagination={{
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
            className="h-full"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >

            <SwiperSlide className='mt-16 ml-5'>
              <div className='h-1/5   flex flex-row '>

                <div className='flex flex-col pb-2  mt-1 '>
                  <div className='   text-lg   '>
                    01
                  </div>
                  <div className='bg-blue-200'>
                    <img src="/Rectangle 4.svg" />
                  </div>
                </div>
                <div className='ml-2 text-4xl text-gray-400 mb-2   '>
                  CONNECTION
                </div>
              </div>
              <div className='h-1/5  w-11/12 mt-2 text-sm   '>
                <h1 className='textshadow'>
                  Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mt-16 ml-5'>
              <div className='h-1/5   flex flex-row '>

                <div className='flex flex-col pb-2  mt-1 '>
                  <div className='   text-lg   '>
                    02
                  </div>
                  <div className='bg-blue-200'>
                    <img src="/Rectangle 4.svg" />
                  </div>
                </div>
                <div className='ml-2 text-4xl text-gray-400 mb-2   '>
                  COLLABORATION
                </div>
              </div>
              <div className='h-1/5  w-11/12 mt-2 text-sm   '>
                <h1 className='textshadow'>
                  Work with recruiter to increase your chances of findingtalented athlete.
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className='mt-16 ml-5'>
              <div className='h-1/5   flex flex-row '>

                <div className='flex flex-col pb-2  mt-1 '>
                  <div className='   text-lg   '>
                    03
                  </div>
                  <div className='bg-blue-200'>
                    <img src="/Rectangle 4.svg" />
                  </div>
                </div>
                <div className='ml-2 text-4xl text-gray-400 mb-2   '>
                  GROWTH
                </div>
              </div>
              <div className='h-1/5  w-11/12 mt-2 text-sm   '>
                <h1 className='textshadow'>
                  Save your time, recruit proper athlets for your team.
                </h1>
              </div>
            </SwiperSlide>



          </Swiper>
        </div>

      </div>
      {/* mobile-end */}
    </div>

  )
}
