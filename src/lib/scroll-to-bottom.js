import smoothScroll from "smoothscroll"

const scrollToBottom = (e) => {
  if (e) {
    e.preventDefault()
  }

  smoothScroll(
    document.body.scrollHeight || document.documentElement.scrollHeight
  )
}

export default scrollToBottom
