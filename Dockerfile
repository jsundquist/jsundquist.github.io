# Packages the pre-built site. Run `pnpm build` first (CI passes dist/ in as an artifact).
FROM nginx/nginx-unprivileged:1.30-alpine-slim@sha256:8432c57ac86f178741af2b89948bd9087cb9df1c415bc1ab4d23735c4f0e3e61
# Links the GHCR package to this repo.
LABEL org.opencontainers.image.source="https://github.com/jsundquist/jsundquist.github.io"
# Pulls in Alpine security fixes (e.g. zlib, musl) that land before the pinned base digest is rebuilt.
USER root
RUN apk upgrade --no-cache
USER 101
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK CMD wget -qO- http://127.0.0.1:8080/ >/dev/null || exit 1
