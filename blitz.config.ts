import { BlitzConfig, sessionMiddleware } from "blitz"
import { withAuthentication } from "@frontegg/client"

const config: BlitzConfig = {
  middleware: [withAuthentication()],
  /* Uncomment this to customize the webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  */
}
module.exports = config
