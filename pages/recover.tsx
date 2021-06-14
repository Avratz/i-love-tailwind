import Button from "../src/app/components/Button";
import InputText from "../src/app/components/InputText";
import CustomLink from "../src/app/components/CustomLink";
import AuthSeparator from "../src/auth/components/AuthSeparator";
import Spacer from "../src/app/components/Spacer";

export default function Recover() {
  return (
    <div 
      className="
        max-w-xs h-screen flex flex-col items-center 
        justify-center m-auto px-4 space-y-3
      ">
      <InputText type="email" placeholder="email"/>
      <Spacer/>
      <Button>Recover password</Button>
      <AuthSeparator />
      <CustomLink href="/signup" className="p-2">Create new account</CustomLink>
    </div>
  )
}
