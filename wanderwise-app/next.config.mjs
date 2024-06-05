/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...Array.from({ length: 5 }, (_, i) => ({
        protocol: "https",
        hostname: `s3-media${i + 1}.fl.yelpcdn.com`,
        port: "",
        pathname: "/bphoto/**",
      })),
      {
        protocol: "https",
        hostname: "www.tripadvisor.com",
        port: "",
        pathname: "/img/cdsi/img2/ratings/traveler/**",
      },
      {
        protocol: "https",
        hostname: "www.avcodes.co.uk",
        port: "",
        pathname: "/images/logos/**",
      },
      {
        protocol: "https",
        hostname: "media-cn.tripadvisor.com",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
