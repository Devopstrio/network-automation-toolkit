from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, devices, configs, compliance, rollback, dashboard, metrics
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(devices.router, prefix="/devices", tags=["devices"])
api_router.include_router(configs.router, prefix="/configs", tags=["configs"])
api_router.include_router(compliance.router, prefix="/compliance", tags=["compliance"])
api_router.include_router(rollback.router, prefix="/rollback", tags=["rollback"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
api_router.include_router(metrics.router, prefix="/metrics", tags=["metrics"])
