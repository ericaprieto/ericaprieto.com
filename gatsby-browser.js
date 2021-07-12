import React from "react"
import webfontloader from "webfontloader"
import Layout from "./src/components/layout"
import CV from "./src/pages/cv"

let injectedTwitterScript = false
function injectTwitterScript() {
  const script = document.createElement("script")
  script.type = "text/javascript"
  script.innerText = `
    window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
    t._e.push(f);
    };
    return t;
    }(document, "script", "twitter-wjs"));
  `

  document.getElementsByTagName("head")[0].appendChild(script)
}

export const wrapPageElement = ({ element, props }) => {
  if (props.path === "/cv/") {
    return element
  } else {
    return <Layout {...props}>{element}</Layout>
  }
}

export const onInitialClientRender = () => {
  webfontloader.load({
    active: () => {
      document.querySelector("body").style.opacity = 1
    },
    google: {
      families: ["Poppins", "Noto Serif"],
    },
  })
}

export const onRouteUpdate = () => {
  if (document.querySelector(".twitter-tweet") !== null) {
    if (!injectedTwitterScript) {
      injectTwitterScript()
      injectedTwitterScript = true
    }

    if (
      typeof twttr !== "undefined" &&
      window.twttr.widgets &&
      typeof window.twttr.widgets.load === "function"
    ) {
      window.twttr.widgets.load()
    }
  }
}
