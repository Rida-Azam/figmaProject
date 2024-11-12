import { Inter } from "next/font/google";
import Link from "next/link";

//google next font

const inter = Inter({ subsets: ["latin"] });

function Navbar() {
    // nav itemss
  let navitems = [
   
    {
      name: "Work",
      link: "#",
    },
    { 
        name: "Blog", 
        link: "#" 
    },
    {
      name: "Contact",
      link: "#featured-work",
    },
  ];

  return (
    <div>
      <ul
        className={`${inter.className} m-[66px] flex items-center justify-end h-[24px] font-medium text-[20px] space-x-6`}>
            {navitems.map((item,i)=>(
         <li key={i}><Link href={item.link} scroll={false} cursor-pointer >{item.name}</Link></li>
            ))}
     
        
      </ul>
    </div>
  );
}

export default Navbar;
