const http = require("http")
const puppeteer = require("puppeteer")
const serveHandler = require("serve-handler")

const server = http.createServer(function (req, res) {
  serveHandler(req, res, { public: "./public" })
})

async function generatePDF() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto("http://localhost:9615/cv")
  await new Promise((r) => setTimeout(r, 2000))

  await page.pdf({
    path: "./public/cv.pdf",
    printBackground: true,
    width: "900px",
    height: "1100px",
    pageRanges: "1-1",
    margin: {
      top: 30,
      right: 50,
      bottom: 30,
      left: 50,
    },
  })

  await browser.close()
  server.close()
}

server.listen(9615, generatePDF)
