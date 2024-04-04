import Link from "next/link";
import Section from "./section";

export default function Features() {
  return (
    <Section title="サービスの特長" subTitle="素敵な機能が盛りだくさんです">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="border relative rounded-md p-6 shadow space-y-3">
          <div className="aspect-video bg-muted"></div>
          <h2 className="font-bold text-2xl">
            Article Aitle <Link href="/" className="absolute inset-0"></Link>
          </h2>
          <p className="text-muted-foreground">Lorem ipsum dolor sit amet.</p>
          <button>button</button>
        </div>
        <div className="border rounded-md p-6 shadow">111</div>
        <div className="border rounded-md p-6 shadow">111</div>
      </div>
    </Section>
  )
}