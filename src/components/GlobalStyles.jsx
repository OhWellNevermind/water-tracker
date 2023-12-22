import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "reset-css";

export const GlobalStyles = createGlobalStyle`
body {
  font-family: "Roboto";
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button, a {
font-family: inherit;
font-size: inherit;
color: inherit;
}
a {
    text-decoration: none;
}`;
