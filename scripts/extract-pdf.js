import fs from "node:fs/promises";
import path from "node:path";
import { PDFParse } from "pdf-parse";

const inputPath = "C:\\Users\\王高\\Downloads\\Interview Report.pdf";
const outputPath = path.resolve("report.txt");

const buffer = await fs.readFile(inputPath);
const parser = new PDFParse({ data: buffer });
const data = await parser.getText();
await parser.destroy();

await fs.writeFile(outputPath, data.text, "utf8");

console.log(`Saved extracted text to ${outputPath}`);
