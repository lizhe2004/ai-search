export default (phase, { defaultConfig }) => {
  const env = process.env.NODE_ENV;
  /**
   * @type {import("next").NextConfig}
   */
  if (env === "production") {
    return {
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },

    };
  } else {
    return {
      async rewrites() {
        return [
          {
            source: "/query",
            destination: "http://localhost:8080/query",
          },
        ];
      },
    };
  }
};
