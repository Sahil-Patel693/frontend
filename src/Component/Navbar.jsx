import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <a href="index.html" class="logo">
                  <h1>Villa</h1>
                </a>

                <ul class="nav">
                  <li>
                    <a class="active">
                      {" "}
                      <Link to="/"> Home </Link>{" "}
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/property"> USER DETAIL </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/view">user Details</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/register"> Registration </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/login"> Login </Link>
                    </a>
                  </li>
                  <li></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
