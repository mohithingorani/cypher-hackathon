from graph import app, thread_config

from flask import Flask, request, jsonify

from langgraph.types import Command
from flask_cors import CORS

app_flask = Flask(__name__)

CORS(app_flask)


# ✅ Start a new conversation
@app_flask.route("/start", methods=["POST"])
def start_booking():
    data = request.json
    user_request = data.get("initial_request")
    events = app.stream({"initial_request": user_request}, config=thread_config)

    output = []
    for event in events:
        if "__interrupt__" in event:
            return jsonify({"status": "interrupt", "data": event["__interrupt__"]})
        output.append(event)
    
    return jsonify({"status": "done", "events": output})


# ✅ Resume after an interrupt
@app_flask.route("/resume", methods=["POST"])
def resume_booking():
    human_input = request.json.get("response")
    events = app.stream(Command(resume=human_input), config=thread_config)

    output = []
    for event in events:
        if "__interrupt__" in event:
            return jsonify({"status": "interrupt", "data": event["__interrupt__"].value})
        output.append(event)

    return jsonify({"status": "done", "events": output})


if __name__ == "__main__":
    app_flask.run(debug=True, port=5000)
