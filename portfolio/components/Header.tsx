
export default function Header() {
  return (
    <nav className="container flex w-full py-4 items-center justify-between">

        <a href="./" className="flex items-center gap-4" aria-label="Jason Zachariah home">
            <span className="site-logo" aria-hidden="true"></span>
        </a>

        <div className="flex justify-end-safe space-x-6">
             <a href="./" className="pagelink">WORKS</a>
            <a href="./archive" className="pagelink">ARCHIVE</a>
            <a href="./about" className="pagelink">ABOUT</a>
            <a href="https://drive.google.com/file/d/1dYPKVENDlAFRUzEPWyE4Pw8uElywU83K/view?usp=sharing"
                    target="_blank" className="pagelink">RESUME</a>
        </div>
</nav>
  )
}