import Button from "../src/app/components/Button";
import InputText from "../src/app/components/InputText";
import Link from "../src/app/components/Link";
import AuthSeparator from "../src/auth/components/AuthSeparator";

export default function Home() {
  return (
    <div 
      className="
        max-w-xs h-screen flex flex-col items-center 
        justify-center m-auto px-4 space-y-3
      ">
      <InputText type="email" placeholder="email"/>
      <InputText type="password" placeholder="password"/>
      <Link className="p-2">Forgot Password?</Link>
      <Button>Login</Button>
      <AuthSeparator/>
      <Button 
        variant="light" 
        slot="left" 
        icon="FaFacebookF"
        iconColor="brands-facebook"
      >
        Continue with Facebook
      </Button>
      <Button 
        variant="light" 
        slot="left" 
        icon="FaTwitter"
        iconColor="brands-twitter"
      >
        Continue with Twitter
      </Button>
      <Button 
        variant="light" 
        slot="left" 
        icon="FaApple"
        iconColor="brands-apple"
      >
        Continue with Apple
      </Button>
      <Link className="p-2">Create a new account</Link>
    </div>
  )
}
