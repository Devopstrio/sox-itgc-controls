from fastapi import APIRouter, Body
router = APIRouter()
@router.get('/')
def list_controls():
    return {'controls': [{'id': 'ITGC-ACC-1', 'name': 'Access Provisioning', 'status': 'EFFECTIVE'}]}
@router.post('/create')
def create_control(data: dict = Body(...)):
    return {'status': 'CREATED', 'id': 'ITGC-NEW'}
@router.post('/test')
def test_control(data: dict = Body(...)):
    return {'status': 'TESTED', 'result': 'PASS'}
