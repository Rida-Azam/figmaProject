import { Heebo } from "next/font/google"


const heebo=Heebo({subsets:['latin']})
function RecentPostCard() {
  return (
<div className="w-[484px] h-[356px] flex items-center bg-white">
  <div className="m-auto h-[286px] w-[391px] flex flex-col items-start justify-between">
<h2 className={`${heebo.className} font-bold text-[26px]`}>Making a design system from scratch</h2>
  <div className="w-[301.28px] h-[42.12px] flex items-center justify-between">
    <p className={`${heebo.className} text-black/70 font-normal text-[18px]`}>12 Feb 2020</p>
    <p className={`${heebo.className}  text-black/70  font-normal text-[18px]`}> | </p>
    <p className={`${heebo.className}  text-black/70  font-normal text-[18px]`}>Design, Pattern</p>
  </div>

  <p>
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
  </p>
  
  </div>

</div>  )
}

export default RecentPostCard
