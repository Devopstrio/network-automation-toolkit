from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_configs():
    return {'status': 'ok', 'network_component': 'configs'}
