/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    console.log('Redirects configured')
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  }
}

export default nextConfig
