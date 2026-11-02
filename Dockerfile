# Packages the pre-built site. Run `pnpm build` first (CI passes dist/ in as an artifact).
FROM nginxinc/nginx-unprivileged:1.29-alpine@sha256:0c79d56aee561a1d81c63f00eee5fb5fe29279560cdc55e91425133104c7fbe6
# Links the GHCR package to this repo.
LABEL org.opencontainers.image.source="https://github.com/jsundquist/jsundquist.github.io"
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://127.0.0.1:80/ >/dev/null || exit 1
