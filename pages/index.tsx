import Button from "../src/app/components/Button";

export default function Home() {
  return (
    <div 
      className="
        max-w-xs h-screen flex flex-col items-center 
        justify-center m-auto px-4 space-y-3
      ">
      <Button>Login</Button>
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
    </div>
  )
}
