import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="container footer">
      <footer>
        <hr />
        <p>
          <strong>
            <i className="fa-regular fa-copyright"></i>2020-{year} Benjamin
            Obafemi. All Right Reserved.
          </strong>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
