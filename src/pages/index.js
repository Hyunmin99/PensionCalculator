import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <ul>
      <button onClick={() => router.push("/")}>Home</button>
      <button onClick={() => router.push("/chatGPT")}>chatGPT</button>
      <button onClick={() => router.push("/pension")}>Pension</button>
    </ul>
  );
}