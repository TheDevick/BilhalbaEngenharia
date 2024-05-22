import path from "path";
import fs from "fs";

export default function PostImagesFinder(slug: string) {
  const postDirectory = path.join(process.cwd(), 'public', slug);
  const imagesDirectories = fs.readdirSync(postDirectory).filter((file) =>
    fs.statSync(path.join(postDirectory, file)).isDirectory()
  )

  const images = imagesDirectories.map((imageDirectory) => {
    const directory = path.join(postDirectory, imageDirectory)
    const files = fs.readdirSync(directory).map((file) => {
      const full = path.join(directory, file)
      const fullSplit = full.split('/')

      return path.join(...fullSplit.slice(Math.max(fullSplit.length - 3, 1)))
    })

    return files
  })

  return images
}
