from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_evidence():
    return {'status': 'ok', 'component': 'evidence'}
