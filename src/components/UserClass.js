import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      count: 0,
    };

    console.log("constructor");
  }

  async componentDidMount() {
    const user = await fetch("https://api.github.com/users/Nattu02");
    const json = await user.json();
    // console.log(json);
    this.setState({
      userData: json,
    });

    console.log("componentmount");
    // setInterval(()=>{
    //   console.log("Interval")
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("componentdidupdate");
    
  }

  componentWillUnmount() {
    console.log("gone... ");
  }

  render() {
    const { name, location } = this.state.userData;

    console.log("render");
    // console.log(name);
    return (
      <div>
        <h2
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count: {this.state.count}
        </h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: nattudurai_02</h3>
      </div>
    );
  }
}

export default UserClass;
