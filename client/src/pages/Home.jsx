import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date Created</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img src="./images/1.png" alt="User Image" />
                <span>Muchael Holz</span>
              </td>
              <td>04/10/2013</td>
              <td>Admin</td>
              <td>
                <i
                  class="fa-solid fa-circle-dot dot"
                  style={{
                    color: "green",
                    marginRight: "3px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                  }}
                ></i>{" "}
                Active
              </td>
              <td class="action-icons">
                <i class="fa-solid fa-gear" style={{ color: "blue" }}></i>
                <i
                  class="fa-solid fa-x"
                  style={{
                    backgroundColor: "red",
                    width: "21px",
                    height: "21px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></i>{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>2</td>
              <td>
                <img src="./images/2.png" alt="User Image" />
                <span>Paula Wilson</span>
              </td>
              <td>05/08/2014</td>
              <td>Publisher</td>
              <td>
                {" "}
                <i
                  class="fa-solid fa-circle-dot dot"
                  style={{
                    color: "green",
                    marginRight: "3px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                  }}
                ></i>{" "}
                Active
              </td>
              <td class="action-icons">
                <i class="fa-solid fa-gear" style={{ color: "blue" }}></i>
                <i
                  class="fa-solid fa-x"
                  style={{
                    backgroundColor: "red",
                    width: "21px",
                    height: "21px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></i>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>3</td>
              <td>
                <img src="./images/3.png" alt="User Image" />
                <span>Antonio Moreno</span>
              </td>
              <td>11/05/2015</td>
              <td>Publisher</td>
              <td>
                {" "}
                <i
                  class="fa-solid fa-circle-dot dot"
                  style={{
                    color: "red",
                    marginRight: "3px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                  }}
                ></i>
                Suspended
              </td>
              <td class="action-icons">
                <i class="fa-solid fa-gear" style={{ color: "blue" }}></i>
                <i
                  class="fa-solid fa-x"
                  style={{
                    backgroundColor: "red",
                    width: "21px",
                    height: "21px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></i>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>4</td>
              <td>
                <img src="./images/4.png" alt="User Image" />
                <span>Mary Saveley</span>
              </td>
              <td>06/09/2016</td>
              <td>Reviewer</td>
              <td>
                {" "}
                <i
                  class="fa-solid fa-circle-dot dot"
                  style={{
                    color: "green",
                    marginRight: "3px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                  }}
                ></i>
                Active
              </td>
              <td class="action-icons">
                <i class="fa-solid fa-gear" style={{ color: "blue" }}></i>
                <i
                  class="fa-solid fa-x"
                  style={{
                    backgroundColor: "red",
                    width: "21px",
                    height: "21px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></i>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>5</td>
              <td>
                <img src="./images/5.png" alt="User Image" />
                <span>Mary Saveley</span>
              </td>
              <td>12/08/2017</td>
              <td>Moderator</td>
              <td>
                {" "}
                <i
                  class="fa-solid fa-circle-dot dot"
                  style={{
                    color: "orange",
                    marginRight: "3px",
                    backgroundColor: "orange",
                    borderRadius: "50%",
                  }}
                ></i>
                Inctive
              </td>
              <td class="action-icons">
                <i class="fa-solid fa-gear" style={{ color: "blue" }}></i>
                <i
                  class="fa-solid fa-x"
                  style={{
                    backgroundColor: "red",
                    width: "21px",
                    height: "21px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
