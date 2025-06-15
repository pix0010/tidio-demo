/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ игнорируем ошибки линтера при билде
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;