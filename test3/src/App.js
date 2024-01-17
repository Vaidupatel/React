import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  render() {
    return (
      <>
        <Navbar />
        {/* <News pageSize={this.pageSize} country={"in"} category={"general"} /> */}
        <Routes>
          <Route exact
            path="/"
            element={<News key="general" pageSize={this.pageSize} country={"in"} category={"general"} />}
          />
          <Route exact
            path="/business"
            element={<News key="Business" pageSize={this.pageSize} country={"in"} category={"Business"} />}
          />
          <Route exact
            path="/entertainment"
            element={
              <News key="Entertainment" pageSize={this.pageSize} country={"in"} category={"Entertainment"} />
            }
          />
          <Route exact
            path="/health"
            element={<News key="Health" pageSize={this.pageSize} country={"in"} category={"Health"} />}
          />
          <Route exact
            path="/science"
            element={<News key="Science" pageSize={this.pageSize} country={"in"} category={"Science"} />}
          />
          <Route exact
            path="/sports"
            element={<News key="Sports" pageSize={this.pageSize} country={"in"} category={"Sports"} />}
          />
          <Route exact
            path="/technology"
            element={
              <News key="Technology" pageSize={this.pageSize} country={"in"} category={"Technology"} />
            }
          />
        </Routes>
      </>
    );
  }
}
