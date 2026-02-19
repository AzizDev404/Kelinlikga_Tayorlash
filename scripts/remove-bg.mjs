#!/usr/bin/env node
import { removeBackground } from "@imgly/background-removal-node"
import { readFile, writeFile } from "fs/promises"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const inputPath = join(root, "public", "logo.png")
const outputPath = join(root, "public", "logo.png")

async function main() {
  console.log("Orqa fon olib tashlanmoqda...")
  const buf = await readFile(inputPath)
  const blob = new Blob([buf], { type: "image/png" })
  const result = await removeBackground(blob, { model: "small" })
  const arrayBuf = await result.arrayBuffer()
  await writeFile(outputPath, Buffer.from(arrayBuf))
  console.log("Tayyor! logo.png yangilandi.")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
