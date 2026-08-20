import Link from "next/link";

const RESUME_URL =
  "https://drive.google.com/file/d/1dYPKVENDlAFRUzEPWyE4Pw8uElywU83K/view?usp=sharing";

export default function SiteHeader() {
  return (
    <nav className="container header-border">
      <div className="flex w-full py-4 items-center justify-between">
        <Link href="/" className="flex items-center gap-4" aria-label="Jason Zachariah home">
          <span className="site-logo" aria-hidden="true" />
        </Link>

        <div className="flex justify-end-safe space-x-6">
          <h4>
            <Link href="/" className="pagelink">
              WORKS
            </Link>
          </h4>
          <h4>
            <Link href="/archive" className="pagelink">
              ARCHIVE
            </Link>
          </h4>
          <h4>
            <Link href="/about" className="pagelink">
              ABOUT
            </Link>
          </h4>
          <h4>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="pagelink">
              RESUME
            </a>
          </h4>
        </div>
      </div>
    </nav>
  );
}
