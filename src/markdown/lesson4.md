---
title: 4. Implement Header with Sidebar Menu
order: 3
---

<h5>Implement Header with Sidebar Menu</h5>
<italic>Note: Import sidebar plugin at header.js. Sidebar is where you place Sidebar Menu.</italic>

References:<br />
https://www.npmjs.com/package/react-sticky-header
https://www.npmjs.com/package/react-sidebar

<code>npm install react-sticky-header --save</code><br />
<code>npm install react-sidebar --save</code><br />
<code>npm install react-bootstrap --save</code><br />

<h5>header.js</h5>

```
import React from "react";
import StickyHeader from "react-sticky-header";
import SideBar from "react-sidebar";
import { Container, Row } from "react-bootstrap";
import SideBarNav from "../sidebar/sidebar.js";
import BurgerMenu from "../../images/burgerMenu.jpg"

class Header extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        sidebarOpen: false,
        sidebarpullRight: true
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
onSetSidebarOpen(open) {
  this.setState({ sidebarOpen: open });
  }
  render(){
    return(
      <Container>
        <StickyHeader
        header={
          <Row>
            <div className="col-md-6">
              Header Menu
            </div>
            <div className="col-md-6">
              <img src={BurgerMenu} onClick={() => this.onSetSidebarOpen(true)} />
            </div>
          </Row>
        }
        />
        <SideBar
          sidebar={
            <div>
              <SideBarNav />
              //this opens sidebar menu's
              </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          pullRight={this.state.sidebarpullRight}
          styles={{
          sidebar: {
            background: "white",
            width: "265px",
            position: "fixed",
            zIndex: "100"
          }
        }} >
        </SideBar>
      </Container>
    )
  }
}

export default Header

```

<h5>sidebar.js</h5>

```
import React from "react";
import { Link } from "gatsby";

const Sidebar = () = (

  <div className="sidebarnavigationlist">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </ul>
  </div>
)

export default Sidebar


```
