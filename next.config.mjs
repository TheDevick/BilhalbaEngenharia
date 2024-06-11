import { withContentlayer } from 'next-contentlayer2'
import path from 'path'
import { fileURLToPath } from 'url'

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(path.dirname(fileURLToPath(import.meta.url)), 'styles'),
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
}

export default withContentlayer(nextConfig)
