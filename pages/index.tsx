import Button from "../src/app/components/Button";
import InputText from "../src/app/components/InputText";
import Link from "../src/app/components/CustomLink";
import AuthSeparator from "../src/auth/components/AuthSeparator";
import Image from "../src/app/components/Image";
import Heading from "../src/app/components/Heading";
import Avatar from "../src/app/components/Avatar";

export default function Home() {
  return (
    <div 
      className="
        max-w-xs h-screen 
      ">
      <InputText type="email" placeholder="email"/>
      <Link className="p-2">This is a link</Link>
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
      <Image withPlay/>
      <Image rounded/>
      <Heading size="2xl">hola</Heading>
      <Avatar 
        size="xs"
        name="Billie Eilish" 
        src="https://www.nacionrex.com/__export/1617569918900/sites/debate/img/2021/04/04/billie-eilish-esta-enamorada-pareja-mensaje_1_crop1617568738414.jpg_423682103.jpg"
      />
      <Avatar name="John Smith" size="sm"/>
      <Avatar 
        name="Billie Eilish" 
        src="https://www.nacionrex.com/__export/1617569918900/sites/debate/img/2021/04/04/billie-eilish-esta-enamorada-pareja-mensaje_1_crop1617568738414.jpg_423682103.jpg"
      />
      <Avatar name="John Smith" size="lg" />
      <Avatar name="John Smith" size="xl" />
    </div>
  )
}
