# 对项目打包操作
FROM node:12.22.0
WORKDIR /root/web/my-project-vue/
# COPY package*.json ./
# RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN yarn
# COPY . .
RUN npm run build

# production stage
# FROM nginx:stable-alpine as production-stage
# COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# 手动编译
FROM nginx
COPY dist/ /usr/share/nginx/html
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

