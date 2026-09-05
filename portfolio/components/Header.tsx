
export default function Header() {
  return (
    <nav className="container flex w-full py-4 items-center justify-between">

        <a href="./" className="flex items-center gap-4" aria-label="Home">
            <span className="site-logo" aria-hidden="true"></span>
        </a>

        <div className="flex justify-end-safe space-x-6">
             <a href="./" className="pagelink">Projects</a>
            <a href="./archive" className="pagelink">Archive</a>
            <a href="./about" className="pagelink">About</a>
            <a href="https://drive.google.com/file/d/1dYPKVENDlAFRUzEPWyE4Pw8uElywU83K/view?usp=sharing"
                    target="_blank" className="pagelink">Resume</a>
        </div>
</nav>
  )
}