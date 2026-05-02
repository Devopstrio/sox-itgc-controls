from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, controls, access, change, evidence, audit, metrics
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(controls.router, prefix="/controls", tags=["controls"])
api_router.include_router(access.router, prefix="/access", tags=["access"])
api_router.include_router(change.router, prefix="/change", tags=["change"])
api_router.include_router(evidence.router, prefix="/evidence", tags=["evidence"])
api_router.include_router(audit.router, prefix="/audit", tags=["audit"])
api_router.include_router(metrics.router, prefix="/metrics", tags=["metrics"])
