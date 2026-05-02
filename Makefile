.PHONY: help build up down test lint migrate test-controls audit-logs validate-sod

help:
	@echo "SOX ITGC Controls Platform - Management Commands"
	@echo "------------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + Integration)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "test-controls      : Run automated control effectiveness tests"
	@echo "audit-logs         : View compliance audit trails"
	@echo "validate-sod       : Run Segregation of Duties checks"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/unit tests/integration
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker core
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

test-controls:
	docker-compose exec api python scripts/test/run.py

audit-logs:
	docker-compose exec api python scripts/audit/view.py

validate-sod:
	docker-compose exec api python scripts/validate/sod.py
