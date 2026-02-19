const path = require("path")
const fs = require("fs").promises

async function main() {
  const { removeBackground } = require("@imgly/background-removal-node")
  const root = path.join(__dirname, "..")
  const inputPath = path.join(root, "public", "logo.png")

  console.log("Orqa fon olib tashlanmoqda... (birinchi marta modellarni yuklash 1–2 daqiqa vaqt oladi)")
  const buf = await fs.readFile(inputPath)
  const blob = new Blob([buf], { type: "image/png" })
  const result = await removeBackground(blob, { model: "small" })
  const arrayBuf = await result.arrayBuffer()
  await fs.writeFile(inputPath, Buffer.from(arrayBuf))
  console.log("Tayyor! logo.png yangilandi — orqa fon olib tashlandi.")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
