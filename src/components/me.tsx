"use client";

import { useAccount, useBalance } from "wagmi";
import { useTma } from "./tma/hook";

function formatBalance(balance?: bigint) {
  if (!balance) return 0;
  return (parseFloat(balance.toString()) / 10 ** 18).toFixed(4);
}

export function Me() {
  const { user } = useTma();
  const { address } = useAccount();
  const balance = useBalance({
    address,
  });

  return (
    <div className="">
      <pre>Name : {user.firstName}</pre>
      <pre>Username : @{user.username}</pre>
      <pre>Address: {address}</pre>
      <pre>
        Balance: {formatBalance(balance.data?.value)} {balance.data?.symbol}{" "}
      </pre>
    </div>
  );
}
