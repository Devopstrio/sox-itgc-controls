from fastapi import APIRouter, Body
router = APIRouter()
@router.post('/approve')
def approve_change(data: dict = Body(...)):
    return {'status': 'APPROVED', 'change_id': 'CHG-123'}
