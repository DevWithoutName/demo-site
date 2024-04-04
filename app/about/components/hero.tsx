import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <div className="py-40 flex items-center">
      <div className="container">
        <h1 className="font-bold text-primary/50 text-4xl mb-5 lg:text-6xl">hero</h1>
        <p className="text-muted-foreground mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam illum fuga voluptatum ut, minima eveniet, similique omnis dolor nisi alias, molestias expedita perspiciatis voluptate nemo consequatur nulla ipsam aperiam autem?
        </p>
        <Button>お問い合わせ</Button>
      </div>
    </div>
  )
}