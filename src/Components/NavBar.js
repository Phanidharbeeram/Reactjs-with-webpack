import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <div>
      <nav id="navid">
        <ul>
          <li id="logo">
            <Link to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0NVaVSgRqpTVaEXy1fGP25rRrzzL9Ij_G0CksSEE23qjrVdc&s"
                width="45px"
                height="45px"
              ></img>
            </Link>
          </li>
          <li>
            <Link to="/Schooling">Schooling</Link>
          </li>
          <li>
            <Link to="/profile">Profile </Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/Info">Info</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>{" "}
          <li>
            <Link to="/smoothscroll">SmoothScroll</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
// <React.Fragment id="nav">
//       <Navbar bg="dark" variant="dark">
//         <Navbar.Brand>
//           <Link to={"/"}>
//             <img
//               alt=""
//               src="https://rukminim1.flixcart.com/image/832/832/jcuu2kw0/poster/c/s/x/medium-pl-transformers-cool-dark-logo-wall-wall-poster-13-19-original-imaeg65kd4damuxk.jpeg?q=70"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />
//             <span> React Bootstrap</span>
//           </Link>
//         </Navbar.Brand>
//         <Link className="tg" to={"/Schooling"}>
//           Schooling
//         </Link>
//         <Link className="tg" to={"/Info"}>
//           Info
//         </Link>
//         <Link className="tg" to={"/Schooling"}>
//           Schooling
//         </Link>
//         <React.Fragment>
//           <Link
//             className="tg"
//             style={{ position: "fixed", right: 0 }}
//             to={"/profile"}
//           >
//             Profile Page
//           </Link>
//           <Link className="tg" to={"/skills"}>
//             Skills
//           </Link>
//         </React.Fragment>
//       </Navbar>
//     </React.Fragment>
