from flask import Blueprint

bp = Blueprint('planets', __name__)

@bp.route('/planets')
def home():
    """
    This function serves as the home route for the Planets API.

    Returns:
        str: A welcome message for the API.
    """
    return "Welcome to the Planets API!"