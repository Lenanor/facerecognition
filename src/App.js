import React from "react";
import Particles from "react-particles-js";

import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Registrer from "./components/Register/Register";

import particlesParams from "./particlesConfig.json";

import "./App.css";

const initialState = {
  input: "",
  imgUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
    entries: 0,
    joined: new Date(),
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: data,
    });
  };
  // Get the Clarifai data for ONE face (todo: make it work for several faces!)
  calcFaceLocation = (data) => {
    const faceBox = data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById("faceRecognitionPhoto");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);

    return {
      leftCol: faceBox.left_col * width,
      topRow: height * faceBox.top_row,
      rightCol: width - width * faceBox.right_col,
      bottomRow: height - height * faceBox.bottom_row,
    };
  };

  displayBox = (box) => this.setState({ box });

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onPictureSubmit = (e) => {
    this.setState({ imgUrl: this.state.input });
    this.setState({ input: "" });
    this.setState({ box: {} });

    fetch("https://damp-citadel-21440.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch("https://damp-citadel-21440.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((res) => res.json())
            .then((count) =>
              this.setState({
                user: Object.assign(this.state.user, { entries: count }),
              })
            );
        }
        this.displayBox(this.calcFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }

    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route, imgUrl, box, input } = this.state;
    const { name, entries } = this.state.user;

    return (
      <div className='App'>
        <Particles className='particles' params={particlesParams} />
        <div className={route === "home" ? "home" : "signin"}>
          {route === "home" ? <Logo /> : null}
          <Navigation
            onRouteChange={this.onRouteChange}
            isSignedIn={isSignedIn}
          />
        </div>
        <div className={route !== "home" ? "logoFormWrap" : "contentWrap"}>
          {route !== "home" ? <Logo /> : null}
          {route !== "home" ? (
            route === "signin" || route === "signout" ? (
              <SignIn
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
              />
            ) : (
              <Registrer
                loadUser={this.loadUser}
                onRouteChange={this.onRouteChange}
              />
            )
          ) : (
            <React.Fragment>
              <Rank name={name} entries={entries} />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onPictureSubmit={this.onPictureSubmit}
                value={input}
              />
              <FaceRecognition imgUrl={imgUrl} box={box} />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default App;
