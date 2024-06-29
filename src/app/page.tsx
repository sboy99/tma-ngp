import { Me } from "@/components/me";
import { WalletConnectButton } from "@/components/wallet/connect-button";
import { Wallet } from "lucide-react";

export default function Home() {
  return (
    <main className="p-4">
      <Me />
      <WalletConnectButton />
    </main>
  );
}
