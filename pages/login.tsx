import Button from "../src/app/components/Button";
import InputText from "../src/app/components/InputText";
import CustomLink from "../src/app/components/CustomLink";
import AuthSeparator from "../src/auth/components/AuthSeparator";

export default function Login() {
  return (
    <div 
      className="
        max-w-xs h-screen flex flex-col items-center 
        justify-center m-auto px-4 space-y-3
      ">
      <InputText type="email" placeholder="email"/>
      <InputText type="password" placeholder="password"/>
      <CustomLink href="/recover" className="p-2">Forgot Password?</CustomLink>
      <Button>Login</Button>
      <AuthSeparator/>
      <Button 
        variant="light" 
        slot="left" 
        icon="FcGoogle"
        iconColor="transparent"
      >
        Continue with Google
      </Button>
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
      <CustomLink href="/signup" className="p-2">Create a new account</CustomLink>
    </div>
  )
}
