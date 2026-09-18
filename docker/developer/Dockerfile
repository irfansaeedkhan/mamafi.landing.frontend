# 1. Builder Stage
FROM node:18.20-bullseye AS builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy only necessary files
COPY . .

# Optional: include env vars at build time if needed (for PUBLIC_ variables)
COPY .env .env

# Build the Next.js app using standalone output
RUN yarn build

# 2. Runner Stage
FROM node:18.20-bullseye-slim AS runner

WORKDIR /app

# Create a non-root user
RUN groupadd -r nodejs && useradd -r -g nodejs nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Copy standalone server (includes server.js and node_modules)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy static files
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Optional: Add healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s CMD curl -f http://localhost:3000/ || exit 1

# Start the app
CMD ["node", "server.js"]
