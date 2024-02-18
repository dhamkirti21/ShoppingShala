import LoginSide from "@/components/login/LoginSide";
import BannerLogin from "@/components/login/bannerLogin";


const SignIn = () => {
  return (
    <>
        <div className="flex flex-row h-2/3">
            <div className="w-1/2 ">
             <LoginSide/>
            </div>
            <BannerLogin/>
        </div>
    </>
  )
};

export default SignIn;
