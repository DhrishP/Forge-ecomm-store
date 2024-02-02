/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  reloadOnOnline:true,
  source:"/app",
  register: true,
  sw: "service-worker.js",
  disable: process.env.NODE_ENV === "development",
  workboxOptions:{
    disableDevLogs: true,
  }
});
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = withPWA(nextConfig);
