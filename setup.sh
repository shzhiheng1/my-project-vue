image_version=`date +%Y%m%d%H%M`;
echo $image_version;
git pull origin master;
docker stop vuecontainer;
docker rm vuecontainer;
docker build -t vueimage:$image_version .;
docker images;
docker run -p 8081:8081 -d --name vuecontainer vueimage:$image_version;
docker logs vuecontainer;
# 1、删除所有悬空镜像，不删除未使用镜像：docker rmi $(docker images -f "dangling=true" -q)
# 2.删除所有未使用镜像和悬空镜像：docker rmi $(docker images -q)
docker rmi $(docker images -f "dangling=true" -q);
