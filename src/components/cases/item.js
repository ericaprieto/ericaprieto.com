/*
 * I'm really sorry about this code. It's really messy.
 * I brought this over from a portfolio that I made a long time ago,
 * I really like these animations. I promise I'll refactor this someday
 * but I don't wanna spend more time on this, I wan't to put this site
 * up as soon as possible
 */

import React, { Component } from "react"
import flatten from "lodash/flatten"

const MIN_CASES = 5
const CASE_SCREENSHOT_INTERVAL = 4200
const CASE_SCREENSHOT_PADDING_TOP = 24

function onWindowResize() {
  var nodes =
    document.querySelectorAll(".component--case-screenshot-list") || []

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i]
    var ratio = Number(node.getAttribute("data-ratio"))
    var width = node.offsetWidth
    var height = width / ratio + CASE_SCREENSHOT_PADDING_TOP

    node.style.height = height + "px"
  }
}

function ScreenshotList(node) {
  var currentIndex
  var screenshots = [].slice.call(node.children)
  var total = screenshots.length

  setIndex(0)

  function calcIndex(index) {
    return (total + index) % total
  }

  function setIndex(index) {
    currentIndex = index

    screenshots.forEach(function (screenshot) {
      screenshot.removeAttribute("data-cycle")
    })

    if (screenshots[calcIndex(index - 1)])
      screenshots[calcIndex(index - 1)].setAttribute("data-cycle", 0)

    if (screenshots[calcIndex(index)])
      screenshots[calcIndex(index)].setAttribute("data-cycle", 1)

    if (screenshots[calcIndex(index + 1)])
      screenshots[calcIndex(index + 1)].setAttribute("data-cycle", 2)

    if (screenshots[calcIndex(index + 2)])
      screenshots[calcIndex(index + 2)].setAttribute("data-cycle", 3)

    if (screenshots[calcIndex(index + 3)])
      screenshots[calcIndex(index + 3)].setAttribute("data-cycle", 4)
  }

  function next() {
    var nextIndex = currentIndex + 1
    if (nextIndex === screenshots.length) nextIndex = 0

    setIndex(nextIndex)
  }

  const interval = setInterval(next, CASE_SCREENSHOT_INTERVAL)

  onWindowResize()

  return {
    destroy: () => clearInterval(interval),
  }
}

const onWindowResizeAttached = false

export default class Case extends Component {
  lists = []

  componentDidMount() {
    if (!onWindowResizeAttached) {
      window.addEventListener("resize", onWindowResize)
    }
  }

  onScreenshotListNode = (ref) => {
    if (ref) {
      this.lists.push(new ScreenshotList(ref))
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", onWindowResize)
    this.lists.forEach((list) => list.destroy())
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { name, description, screenshot, ratio } = this.props
    let screenshots = flatten([screenshot])
    let counter = 0

    while (screenshots.length > 1 && screenshots.length < MIN_CASES) {
      screenshots.push(screenshots[counter])
      counter++
    }

    return (
      <div className="component--case row">
        <div className="col-sm-6">
          <div>
            <div className="component--case-title">{name}</div>
            <div
              ref={this.onScreenshotListNode}
              className="component--case-screenshot-list-small-display component--case-screenshot-list"
              data-ratio={ratio}
            >
              {screenshots.map((img, index) => (
                <div key={index} className="component--case-screenshot">
                  {img.substr(-3) === "mp4" ? (
                    <video autoPlay={true} loop={true} src={img} />
                  ) : (
                    <img src={img} alt="" />
                  )}
                </div>
              ))}
            </div>
            <div
              className="component--case-description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div
            ref={this.onScreenshotListNode}
            className="component--case-screenshot-list-large-display component--case-screenshot-list"
            data-ratio={ratio}
          >
            {screenshots.map((img, index) => (
              <div key={index} className="component--case-screenshot">
                {img.substr(-3) === "mp4" ? (
                  <video autoPlay={true} loop={true} src={img} />
                ) : (
                  <img src={img} alt="" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
