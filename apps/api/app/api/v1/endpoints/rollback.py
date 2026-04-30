from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_rollback():
    return {'status': 'ok', 'network_component': 'rollback'}
