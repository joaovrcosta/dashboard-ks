import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Header() {
  return (
    <div className="flex">
      <div className="w-full bg-custom-gradient flex p-6 rounded-br-[2.5rem] items-center justify-between">
        <div className="">
          <h1 className="text-xl">Dashbord</h1>
          <p className="text-sm font-light tracking-[1.2px]">Ola, Pedro</p>
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
