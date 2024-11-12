import { Heebo } from 'next/font/google';
import Image from 'next/image'


const heebo = Heebo({ subsets: ["latin"] });

function Hero() {
  return (
    <div className='my-[66px] mx-auto w-[92%] md:h-[308px] md:w-[1030px] flex flex-col-reverse md:flex-row items-center justify-between p-6 '>
      {/* text div */}
      <div className='md:w-[521px] h-[305px]  flex flex-col md:justify-between items-start justify-evenly' >

        <h1 className={`${heebo.className} text-[48px] font-black text-myBlack`}>Hi, I am John,<br/>
        Creative Technologist</h1>
        <p className={`${heebo.className} text-[16px] font-black text-myBlack font-normal`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
<button className={`${heebo.className} h-[50px] w-[205px]  text-[18px] font-medium text-white bg-myPink rounded-sm shadow-md shadow-black/60`}>Download Resume</button>
      </div>

      {/* image div */}
      <div className='h-[299px] w-[292px] relative '>
        <Image className='z-50' src={"/assets/heroimage.png" } alt='heroimage' width={292} height={292}/>
      <div className='bg-heroElipse w-[292px] h-[299px] rounded-full -z-10 absolute top-2 right-2'/>
      </div>
    </div>
  )
}

export default Hero