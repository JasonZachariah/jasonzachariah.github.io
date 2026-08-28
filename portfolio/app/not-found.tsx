import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="h-screen flex items-center justify-center flex-col">
      <span className="site-logo" aria-label="Jason Zachariah Logo" />
      <h3>Page not found!</h3>
      <p>This project isn&apos;t open yet. Try again another time</p>
      <Link href="/">
        <h4>Go to home</h4>
      </Link>
    </main>
  );
}
