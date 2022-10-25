# 对项目打包操作

FROM node:12.22.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN npm run build

# production stage
FROM nginx as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx/default.conf /etc/nginx/conf.d/default.conf
# EXPOSE 8001
# CMD ["nginx", "-g", "daemon off;"]

# 手动编译
# FROM nginx
# COPY dist/ /usr/share/nginx/html/
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf
