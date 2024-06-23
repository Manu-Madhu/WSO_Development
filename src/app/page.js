import LoginModal from "@/components/Admin/LoginModal";
import Home from "@/components/User/Home";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Home />
      </div>
    </main>
  );
}
