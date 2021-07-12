export default function performantEventListener(node, event, fn) {
  let eve
  let tracking = false

  function captureEvent(e) {
    eve = e
    track()
  }

  function track() {
    if (tracking) {
      return
    }

    window.requestAnimationFrame(update)
    tracking = true
  }

  function update() {
    fn.call(node, eve)
    tracking = false
  }

  node.addEventListener(event, captureEvent, false)

  return () => node.removeEventListener(event, captureEvent)
}
