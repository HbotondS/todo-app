from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient


app = Flask(__name__)
cors = CORS(app, origins=["http://frontend:4200"])
client = MongoClient("mongodb://mongodb:27017/")
db = client['todo-app']

@app.route('/', methods=['GET'])
def index():
    return 'Flask is running'

@app.route('/getTodos', methods=['GET'])
def getTodos():
    todos = db.Todos.find({})
    return jsonify([todo for todo in todos])

# @app.route('/post', methods=['POST'])
# def post(msg: str):
    # todo: fix post request

if __name__ == '__main__':
    app.run(debug=True)