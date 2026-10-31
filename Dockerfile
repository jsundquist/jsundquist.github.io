# Packages the pre-built site. Run `pnpm build` first (CI passes dist/ in as an artifact).
FROM nginxinc/nginx-unprivileged:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://127.0.0.1:80/ >/dev/null || exit 1
