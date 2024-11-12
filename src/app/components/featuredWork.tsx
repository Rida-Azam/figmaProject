import { Heebo } from "next/font/google"
import Image from "next/image"

const heebo=Heebo({subsets:['latin']})

function FeaturedWork() {
  return (
<>
<div className="max-w-5xl mx-auto py-12">
      {/* Section Title */}
      <h2 className={`${heebo.className}  text-[22px] font-medium mb-8`}>
        Featured Works
      </h2>

      {/* List of Featured Works */}
      <div className="space-y-12">
      
          <div
          
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src={"/assets/box1.png" }
                alt="image"
                width={246}
                height={180}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <h3 className={`${heebo.className} text-xl md:text-2xl font-bold`}>
              Dashboard Designing
              </h3>

              {/* Year Tag and Category */}
              <div className="flex items-center gap-4">
                <span className="bg-myPink text-white text-sm font-medium rounded-full px-4 py-1">
                  2020
                </span>
                <span className={`${heebo.className} text-lg text-gray-600`}>
                Dashboard
                </span>
              </div>

              {/* Description */}
              <p className={`${heebo.className} text-gray-700 text-[18px] leading-relaxed`}>
              {/* <p className={`${heebo.className} text-[18px] text-sm  text-black/70 `}> */}
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br/> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br/> nostrud amet.
  {/* </p> */}
              </p>
            </div>
          </div>


          <div
          
          className="flex flex-col md:flex-row gap-6 items-start"
        >
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src={"/assets/box2.png" }
              alt="image"
              width={246}
              height={180}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <h3 className={`${heebo.className} text-xl md:text-2xl font-bold`}>
            Dashboard Designing
            </h3>

            {/* Year Tag and Category */}
            <div className="flex items-center gap-4">
              <span className="bg-myPink text-white text-sm font-medium rounded-full px-4 py-1">
                2020
              </span>
              <span className={`${heebo.className} text-lg text-gray-600`}>
              Dashboard
              </span>
            </div>

            {/* Description */}
            <p className={`${heebo.className} text-gray-700 text-[18px] leading-relaxed`}>
            {/* <p className={`${heebo.className} text-[18px] text-sm  text-black/70 `}> */}
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br/> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br/> nostrud amet.
{/* </p> */}
            </p>
          </div>
        </div>


        <div
          
          className="flex flex-col md:flex-row gap-6 items-start"
        >
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src={"/assets/box3.png" }
              alt="image"
              width={246}
              height={180}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <h3 className={`${heebo.className} text-xl md:text-2xl font-bold`}>
            Dashboard Designing
            </h3>

            {/* Year Tag and Category */}
            <div className="flex items-center gap-4">
              <span className="bg-myPink text-white text-sm font-medium rounded-full px-4 py-1">
                2020
              </span>
              <span className={`${heebo.className} text-lg text-gray-600`}>
              Dashboard
              </span>
            </div>

            {/* Description */}
            <p className={`${heebo.className} text-gray-700 text-[18px] leading-relaxed`}>
            {/* <p className={`${heebo.className} text-[18px] text-sm  text-black/70 `}> */}
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br/> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br/> nostrud amet.
{/* </p> */}
            </p>
          </div>
        </div>
     
      </div>

    </div>
</>
  )
}

export default FeaturedWork



























