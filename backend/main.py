from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import logging

PREFIX = "/api/flask"

app = Flask(__name__)
app.logger.setLevel(logging.DEBUG)

cors = CORS(app, origins=["http://localhost:4200"])

client = MongoClient("mongodb://mongodb:27017/")
db = client['todo-app']

@app.route(PREFIX + '/', methods=['GET'])
def index():
    return 'Flask is running'

@app.route(PREFIX + '/getTodos', methods=['GET'])
def getTodos():
    todos = db.Todos.find({})
    return jsonify([todo for todo in todos])

# @app.route('/post', methods=['POST'])
# def post(msg: str):
    # todo: fix post request

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)