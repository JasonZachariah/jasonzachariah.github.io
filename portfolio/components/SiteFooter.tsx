export default function SiteFooter() {
  return (
    <footer className="container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <p>Design + Coded by Jason Zachariah</p>

        <div className="flex flex-row gap-2 items-center">
          <h4>Contact Me: </h4>
          <ul className="footer-social-list flex flex-row gap-6 list-none m-0 p-0">
            <li>
              <h4>
                <a
                  href="https://www.linkedin.com/in/jasontzachariah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  LinkedIn
                </a>
              </h4>
            </li>
            <li>
              <h4>
                <a
                  href="https://www.instagram.com/jasonz.design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  Instagram
                </a>
              </h4>
            </li>
            <li>
              <h4>
                <a
                  href="mailto:jasontzachariah@gmail.com?subject=Project Request"
                  className="footer-social-link"
                >
                  Email
                </a>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
