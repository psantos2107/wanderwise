/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: Array.from({ length: 5 }, (_, i) => ({
      protocol: "https",
      hostname: `s3-media${i + 1}.fl.yelpcdn.com`,
      port: "",
      pathname: "/bphoto/**",
    })),
  },
};

export default nextConfig;
