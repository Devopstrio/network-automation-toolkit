from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_devices():
    return {'devices': [{'id': '1', 'name': 'core-switch-01', 'ip': '10.0.0.1', 'vendor': 'CISCO', 'status': 'ONLINE'}]}
@router.post('/discover')
def discover_devices():
    return {'status': 'Discovery job started', 'job_id': 'DISC-998'}
