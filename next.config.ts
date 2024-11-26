import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    
};
module.exports = {
  images: {
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}
export default nextConfig;
