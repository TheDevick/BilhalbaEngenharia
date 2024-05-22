// const { withContentlayer } = require('next-contentlayer')
import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true }

export default withContentlayer(nextConfig)
