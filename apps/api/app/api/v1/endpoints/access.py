from fastapi import APIRouter
router = APIRouter()
@router.get('/reviews')
def get_access_reviews():
    return {'reviews': [{'id': 'REV-1', 'user': 'admin', 'status': 'PENDING'}]}
