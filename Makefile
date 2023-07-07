build:
	docker-compose build

up:
	docker-compose up -d

stop:
	docker-compose stop

down:
	docker-compose down

ps:
	docker-compose ps

app:
	docker exec -it next-tutorial /bin/sh
