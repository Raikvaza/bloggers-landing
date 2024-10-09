build:
	docker build -t bloggers-landing .

stop:
	docker stop blog-landing
	docker rm blog-landing

docker-pull:
	docker pull cr.yandexcloud.kz/crksp0ersei7pfkuvqsc/blog-landing:latest

run:
	docker run -d --name blog-landing -p 3000:3000 cr.yandexcloud.kz/crksp0ersei7pfkuvqsc/blog-landing:latest