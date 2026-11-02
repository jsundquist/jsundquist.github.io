# Packages the pre-built site. Run `pnpm build` first (CI passes dist/ in as an artifact).
FROM nginxinc/nginx-unprivileged:1.30-alpine-slim@sha256:5d8bb9437d74a600ec5dbf90c035451c724dc33eac8d3a71078f6f8612c345f6
# Links the GHCR package to this repo.
LABEL org.opencontainers.image.source="https://github.com/jsundquist/jsundquist.github.io"
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://127.0.0.1:80/ >/dev/null || exit 1
