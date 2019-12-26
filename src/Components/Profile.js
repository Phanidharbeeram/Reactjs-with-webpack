import React from "react";
import "./Profile.css";
export default function Profile() {
  return (
    <div id="profileborder">
      <div id="profile">
        <img src="data:image/jpeg;base64,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"></img>
        <div id="details">
          <span>
            <h2>Beeram.Naga Phanidhar</h2>

            <small>
              <span>Location:</span>
              <span>Hyderabad</span>
            </small>
          </span>
          <hr />
          <div>
            <h3>Details:</h3>
            <table>
              <tr>
                <td>Name:</td>
                <td>Beeram Naga Phanidhar</td>
              </tr>

              <tr>
                <td>Educational Qualification:</td>
                <td>B.Tech (Electronics and Communication Engineering)</td>
              </tr>
              <tr>
                <td>Date of Birth:</td>
                <td>
                  1<small>st</small>-September-1997
                </td>
              </tr>
              <tr>
                <td>Languages Known:</td>
                <td>
                  English,
                  <br />
                  Telugu,
                  <br />
                  Hindi
                </td>
              </tr>
              <tr>
                <td>Corresponding Address:</td>
                <td>Beeram Naga Phanidhar</td>
              </tr>
              <tr>
                <td>Mobile Number:</td>
                <td>
                  +91 9492979204,
                  <br />
                  +91 8179350997
                </td>
              </tr>
              <tr>
                <td>Email Id:</td>
                <td>phanidharbeeram@gmail.com</td>
              </tr>
              <tr>
                <td>Maritial Status :</td>
                <td>NOT-MARRIED</td>
              </tr>
              <tr>
                <td>Nationality:</td>
                <td>Indian</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
