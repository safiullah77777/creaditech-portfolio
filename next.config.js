/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["localhost","creaditech.com"],
    formats: ["image/webp"],
  }
}

module.exports = nextConfig
