import { Heebo } from "next/font/google"
import Link from "next/link"
import RecentPostCard from "./recentPostCard"

const heebo=Heebo({subsets:['latin']})

const RecentPost = () => {
  return (
    <div className=" bg-recentBackground my-[66px] h-[502px] flex flex-col justify-evenly">

<div className=" w-[1030px] p-6 mx-auto  flex flex-col justify-between">
<div className="flex flex-row justify-between">
<h2 className={`${heebo.className} text-[22px] font-medium`}>Recent Post</h2>
<Link className={`${heebo.className} text-[22px] font-medium text-myPink`} href={""}>View all</Link>
</div>

<div className=" mt-[16px] flex flex-row justify-between">
  <RecentPostCard/>
  <RecentPostCard/>
</div>
</div>




    </div>
  )
}

export default RecentPost