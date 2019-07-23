import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBjDkWq5TSbn-rU9UXPEGMrKNCIBI2ZkUI",
  authDomain: "knit-counter.firebaseapp.com",
  databaseURL: "https://knit-counter.firebaseio.com",
  projectId: "knit-counter",
  storageBucket: "knit-counter.appspot.com",
  messagingSenderId: "664947759934",
  appId: "1:664947759934:web:9970e52d75326152"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

describe("NavBar", () => {
  it("renders the NavBar with title 'Projects'", () => {
    const title = "Projects";
    const { queryByText } = render(<NavBar title={title} />);
    const header = queryByText(title);
    expect(header.innerHTML).toBe(title);
  });
});
