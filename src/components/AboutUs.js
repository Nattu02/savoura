import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class AboutUS extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about-page">
        <h1>Welcome to ClickBite!!😋</h1>
        {/* <UserClass /> */}
        <User />
      </div>
    );
  }
}

export default AboutUS;
