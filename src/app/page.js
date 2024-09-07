import Input from "@/components/Input";

export default function Home() {
  return (
    <div className=" max-w-xl">
      <div className="py-2 px-3 sticky top-0 z-50 border-b border-gray-700">
        <h2 className="lg:text-lg font-bold ">Home</h2>
      </div>
      <Input />
    </div>
  );
}
