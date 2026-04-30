.PHONY: help build up down test lint migrate discover-devices apply-config validate-network rollback-change

help:
	@echo "Network Automation Toolkit - Management Commands"
	@echo "------------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + Automation flows)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "discover-devices   : Manually trigger network device discovery"
	@echo "apply-config       : Apply desired state configuration to devices"
	@echo "validate-network   : Run network compliance and state validation"
	@echo "rollback-change    : Revert last successful configuration change"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api tests/automation
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

discover-devices:
	docker-compose exec api python scripts/provision/discover.py

apply-config:
	docker-compose exec api python scripts/provision/apply.py

validate-network:
	docker-compose exec api python scripts/validate/network_state.py

rollback-change:
	docker-compose exec api python scripts/rollback/orchestrate.py
