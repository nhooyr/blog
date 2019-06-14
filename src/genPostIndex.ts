#!/usr/bin/env ts-node --skip-project

import * as fs from "fs"
import * as path from "path"

for (let postPath of fs.readdirSync("posts")) {
  postPath = path.join("posts", postPath)
  console.log(fs.readFileSync(postPath).toString())
}
