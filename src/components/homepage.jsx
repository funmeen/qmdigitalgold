import qmmobileapps from '../assets/mobileapps.png';
import goldbar from '../assets/goldbar.jpg';

//home page
export default function HomePage({ onSignUpClick, gotoGSAPage, gotoGCAPage, gotoGAEPage}) {
    return (
      <>
        <div className='mx-auto flex flex-col sm:flex-row'>
            {/* Column 1 */}
            <div className='w-full sm:w-1/2 h-auto'>
              <div className='bg-yellow-300 flex flex-col items-center justify-center'>
                <h3 className='p-6 sm:p-10 text-3xl sm:text-7xl font-semibold text-gray-800'>BELI, SIMPAN DAN GANDAKAN EMAS</h3>
                <p className='p-6 sm:p-10 text-lg sm:text-2xl text-gray-600'>Dapatkan panduan daripada pasukan kami yang berpengalaman. Tekan butang sekarang untuk menghubungi kami dan mulakan perjalanan ke arah kebebasan kewangan bersama Quantum Metal.</p>
                {/* user click signup from homepage  */}
                <button className="signUpButton" onClick={onSignUpClick}>
                  Sign Up
                </button>
              </div>
              <div className='row2'>
                <img src={goldbar} alt="" className="img-tiles-2" />
              </div>
            </div>
            {/* Column 2 */}
            <div className='w-full sm:w-1/2 bg-red-500 flex items-center justify-center'>
              <img src={qmmobileapps} alt="" className="qm-mobile" />
            </div>
          </div>
  
        <div className='bg-white py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:text-center'>
              {/* <h2 className='text-base font-semibold leading-7 text-indigo-600'>Deploy faster</h2> */}
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Produk Quantum Metal</p>
              {/* <p className='mt-6 text-lg leading-8 text-gray-600'>Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p> */}
            </div>
            
              <div className='flex flex-wrap -mx-4 mt-12'>
                  <div className='w-full md:w-1/3 px-4 mb-8'>
                      <div className='rounded-md bg-white shadow-md p-8'>
                          <div className='text-5xl font-bold text-purple-600 mb-4'>GSA</div>
                          <h3 className='text-2xl font-bold mb-4'>Gold Storage Account</h3>
                          <p className='text-black mb-8'>Selamat datang ke GSA - tempat eksklusif untuk menyimpan kekayaan emas Anda.
                                                              Seperti akaun bank menyimpan wang, GSA adalah tempat di mana setiap gram emas 
                                                              Anda dikekalkan dengan cermat.</p>
                          <button className='hover:font-bold' onClick={gotoGSAPage}>
                            More
                          </button>
                      </div>
                  </div>
                  <div className='w-full md:w-1/3 px-4 mb-8'>
                      <div className='rounded-md bg-white shadow-md p-8'>
                          <div className='text-5xl font-bold text-purple-600 mb-4'>GCA</div>
                          <h3 className='text-2xl font-bold mb-4'>Gold Convert Account</h3>
                          <p className='text-black mb-8'>Raihlah kebebasan kewangan untuk berbelanja 
                                                            sambil terus menyimpan emas! Fasilitas GCA membuka pintu kepada peluang untuk 
                                                            menukar emas menjadi wang tanpa perlu menjual emas itu sendiri.</p>
                          <button className='hover:font-bold' onClick={gotoGCAPage}>
                            More
                          </button>
                      </div>
                  </div>
  
                  <div className='w-full md:w-1/3 px-4 mb-8'>
                      <div className='rounded-md bg-white shadow-md p-8'>
                          <div className='text-5xl font-bold text-purple-600 mb-4'>GAE</div>
                          <h3 className='text-2xl font-bold mb-4'>Gold Asset Enhancement</h3>
                          <p className='text-black mb-8'>Dengan keunikan Flexi dan pembiayaan Tawarruq, 
                                                          GAE membawa anda ke dalam dunia modal yang berganda, di mana setiap gram emas anda 
                                                          berpotensi memberikan untung berganda. </p>
                          <button className='hover:font-bold' onClick={gotoGAEPage}>
                            More
                          </button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
  
        <div className='bg-yellow-300'>
          <p className='p-5 sm:p-20 text-center text-4xl sm:text-6xl font-bold tracking-tight text-gray-900'>
            Masa terbaik untuk beli emas adalah 10 tahun lepas. Masa kedua terbaik adalah pada hari ini.
          </p>
        </div>
  
      </>
    );
  }