from flask import Blueprint, current_app, jsonify

bp = Blueprint('/facts', __name__)

@bp.route('/facts')
def home():
    """
    This function serves as the home route for the Facts API.

    Returns:
        str: A welcome message for the API.
    """

    db = current_app.db 

    result = db.facts.planets.find(filter={})

    return jsonify(list(result))