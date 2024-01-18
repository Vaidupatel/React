import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 12;
  state = {
    progress: 0,
  };
  setProgress(progress) {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <>
        <Navbar />
        <LoadingBar color="#f11946" progress={this.state.progress} />
        {/* <News setProgress = {this.setProgress} pageSize={this.pageSize} country={"in"} category={"general"} /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="Business"
                pageSize={this.pageSize}
                country={"in"}
                category={"Business"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="Entertainment"
                pageSize={this.pageSize}
                country={"in"}
                category={"Entertainment"}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="Health"
                pageSize={this.pageSize}
                country={"in"}
                category={"Health"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="Science"
                pageSize={this.pageSize}
                country={"in"}
                category={"Science"}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="Sports"
                pageSize={this.pageSize}
                country={"in"}
                category={"Sports"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="Technology"
                pageSize={this.pageSize}
                country={"in"}
                category={"Technology"}
              />
            }
          />
        </Routes>
      </>
    );
  }
}
