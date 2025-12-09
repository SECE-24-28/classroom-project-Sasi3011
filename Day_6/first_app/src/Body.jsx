import React from "react";
import './Body.css';

export default function Body() {
  return (
    
    <div className="form-container">
      <form>
      <header>
      <h1>Student Application Form</h1>
    </header>

      <table className="form-table">
        <tbody>
          <tr>
            <td><label htmlFor="name">Name :</label></td>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </td>
          </tr>

          <tr>
            <td><label htmlFor="dob">Date of Birth :</label></td>
            <td>
              <input type="date" id="dob" name="dob" required />
            </td>
          </tr>

          <tr>
            <td><label htmlFor="email">Email :</label></td>
            <td>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </td>
          </tr>

          <tr>
            <td><label>Gender :</label></td>
            <td className="horizontal-group">
              <input type="radio" id="male" name="gender" value="Male" required />
              <label htmlFor="male"> Male </label>

              <input type="radio" id="female" name="gender" value="Female" />
              <label htmlFor="female"> Female </label>

              <input
                type="radio"
                id="na"
                name="gender"
                value="Prefer not to say"
              />
              <label htmlFor="na"> Prefer not to say </label>
            </td>
          </tr>

          <tr>
            <td><label>Courses :</label></td>
            <td className="horizontal-group">
              <input type="checkbox" id="c" name="courses" value="C" />
              <label htmlFor="c"> C </label>

              <input type="checkbox" id="cpp" name="courses" value="C++" />
              <label htmlFor="cpp"> C++ </label>

              <input type="checkbox" id="java" name="courses" value="Java" />
              <label htmlFor="java"> Java </label>

              <input type="checkbox" id="python" name="courses" value="Python" />
              <label htmlFor="python"> Python </label>

              <input type="checkbox" id="dsa" name="courses" value="DSA" />
              <label htmlFor="dsa"> DSA </label>
            </td>
          </tr>

          <tr>
            <td><label htmlFor="score">Academic Score :</label></td>
            <td>
              <input type="number" id="score" name="score" min="0" max="100"/>
            </td>
          </tr>

          <tr>
            <td><label htmlFor="country">Country :</label></td>
            <td>
              <select name="country" id="country">
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </td>
          </tr>

          <tr>
            <td><label htmlFor="phone">Phone no :</label></td>
            <td>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91"
                minLength={10}
                maxLength={10}
                required
              />
            </td>
          </tr>

          <tr>
            <td><label htmlFor="address">Address :</label></td>
            <td>
              <textarea
                id="address"
                name="address"
                placeholder="Enter your address"
                required
              ></textarea>
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <input type="checkbox" required /> By submitting this form, I agree
              to the <a href="terms.html">terms and conditions</a>.
            </td>
          </tr>

          <tr style={{ textAlign: "center" }}>
            <td colSpan="2">
              <button type="submit">Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
      </form>
    </div>
  );
}
