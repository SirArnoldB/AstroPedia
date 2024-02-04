from flask import Blueprint

bp = Blueprint('/', __name__)

@bp.route('/')
def home():
    return "Welcome to the AstroPedia API!"