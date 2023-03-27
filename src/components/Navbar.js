import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" onClick={() => router.push("/")}>
          <img
            src="/assets/logo.svg"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top mx-2"
          />
          Quantec
        </a>
        <ul class="nav navbar-nav nav-pills justify-content-end">
          <li class="nav-item">
            <button class="nav-link" onClick={() => router.push("/chatGPT")}>
              chatGPT
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" onClick={() => router.push("/pension")}>
              Pension
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
