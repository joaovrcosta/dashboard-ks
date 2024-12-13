import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card
        title="Registro"
        className="bg-[#19123c] rounded-3xl p-8 shadow-lg space-y-4 w-full max-w-[400px]"
      >
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Usúario"
              className="h-[42px] border-none bg-[#0e0826]"
            />
          </div>
          <div>
            <Input
              placeholder="E-mail"
              className="h-[42px] border-none bg-[#0e0826]"
            />
          </div>
          <div>
            <Input
              placeholder="Password"
              className="h-[42px] bg-[#0e0826] border-none"
            />
          </div>
          <div>
            <Input
              placeholder="Repetir Password"
              className="h-[42px] bg-[#0e0826] border-none"
            />
          </div>
        </div>
        <div className="w-full mt-8">
          <Button className="w-full h-[42px] bg-card-gradient rounded-xl">
            Entrar
          </Button>
        </div>
      </Card>
    </div>
  );
}
