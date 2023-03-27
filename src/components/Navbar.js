import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => router.push("/")}>
          <img
            src="/assets/logo.svg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top mx-2"
          />
          Quantec
        </a>
        <ul className="nav navbar-nav nav-pills justify-content-end">
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => router.push("/chatGPT")}
            >
              chatGPT
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => router.push("/pension")}
            >
              Pension
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
