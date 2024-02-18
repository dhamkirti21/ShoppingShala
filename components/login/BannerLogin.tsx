import Image from "next/image";
import loginImage from "@/assets/login/login.jpg"
import RevenueNumber from "./RevenueNumber"

interface Statement {
    values: number;
    statement: string;
  }
  
  const statements: Statement[] = [
    { values: 100, statement: "revenue increase at every quarter" },
    { values: 100, statement: "revenue increase at every quarter" },
    { values: 100, statement: "revenue increase at every quarter" }
  ];

const BannerLogin = () => {
  return (
    <div className=" w-1/2 p-4 ml-24 mt-6">
    <Image
    src={loginImage}
    alt="login-banner"
    className="object-cover w-4/5 h-2/3 rounded-2xl"
    />
    <div className="flex flex-row gap-2 justify-between mt-4 p-6 w-4/5 rounded-2xl">
     {
       statements.map((item,index) => <RevenueNumber values={item.values} 
       statement={item.statement}
       key={index}/>)
     }
    </div>
   </div>
  )
}

export default BannerLogin;
