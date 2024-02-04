from flask import Flask
from pymongo import MongoClient
import os
from dotenv import load_dotenv

from astropedia import home, planets, facts

load_dotenv()

def create_app():
    """
    Creates and configures the Flask application.

    Returns:
        Flask: The configured Flask application.
    """
    app = Flask(__name__)
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
    app.config["MONGO_URI"] = os.getenv("MONGO_URI")

    # Database connection
    client = MongoClient(app.config["MONGO_URI"])
    app.db = client.astropedia

    # Registering blueprints
    app.register_blueprint(home.bp)
    app.register_blueprint(planets.bp)
    app.register_blueprint(facts.bp)

    return app