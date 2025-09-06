from booking_request import  create_request
from matching_request import matching,changing
from dotenv import load_dotenv
from langgraph.checkpoint.memory import InMemorySaver

from typing import TypedDict, Annotated,List,Dict,Optional
from langgraph.graph import add_messages, StateGraph, END
from langchain_core.messages import AIMessage, HumanMessage, SystemMessage
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.types import interrupt, Command
load_dotenv()
llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash",google_api_key=os.getenv("GEMINI_API_KEY"))

langsmith_tracing = os.getenv("LANGSMITH_TRACING")
langsmith_endpoint = os.getenv("LANGSMITH_ENDPOINT")
langsmith_api_key = os.getenv("LANGSMITH_API_KEY")
langsmith_project = os.getenv("LANGSMITH_PROJECT")

class bookingState(TypedDict):
    initial_request : str
    name: str
    problem: str
    date_time: str
    therapist: str
    date: str
    time: str
    reason: str
    approval: Optional[bool]
    changes: Optional[str]
    
    
def node_booking(state : bookingState):
     response = create_request(state['initial_request'])
     state['name'] = response.name
     state['problem'] = response.problem
     state['date_time'] = response.date_time
     return state

def node_matching(state : bookingState):
     user_info = [state['name'],state['problem'],state['date_time']]
     
     response = matching(user_info)
     
     state['therapist'] = response.therapist
     state['date'] = response.date
     state['time'] = response.time
     state['reason'] = response.reason
     
     return state

def human_approval(state: bookingState):
  
    response = interrupt(
        {
            "question": "Is this appointment correct? If no, please state the changes.",
            "approval": [state['therapist'],state['date'],state['time']]
        }
    )

    if isinstance(response, str) and response.lower().strip() in ["yes", "y", "correct", "ok"]:
        return Command(goto=END, update={"approval": True, "changes": None})
    
    return Command(goto="changing", update={"approval": False, "changes": response})

def changing_node(state: bookingState):
    current_appointment = [state['therapist'],state['date'],state['time']]  
    changes = state["changes"]

    response = changing(changes, current_appointment)
    state['therapist'] = response.therapist
    state['date'] = response.date
    state['time'] = response.time
    state['reason'] = response.reason
    return state

graph = StateGraph(bookingState)

graph.add_node("booking", node_booking)
graph.add_node("matching", node_matching)
graph.add_node("human_approval", human_approval)
graph.add_node("changing", changing_node)

graph.set_entry_point("booking")

graph.add_edge("booking", "matching")
graph.add_edge("matching", "human_approval")


graph.add_edge("human_approval", "changing")

graph.add_edge("changing", END)

checkpointer = InMemorySaver()
app = graph.compile(checkpointer=checkpointer)

thread_config = {
   "configurable": {
      "thread_id": "1"
   }
}
 


events = app.stream(
    {
        "initial_request": "hi my name is rushil and i want to consult a therapist regarding anxiety and depression. i am free on monday after 3pm"
    },
    config=thread_config
)




# events = app.stream(
#     {
#         "initial_request": "hi my name is rushil and i want to consult a therapist regarding anxiety and depression. i am free on monday after 3pm"
#     },
#     config=thread_config,
# )

# for event in events:
#     if "__interrupt__" in event:
#         question = event["__interrupt__"][0].value["question"]
#         approval = event["__interrupt__"][0].value["approval"]
#         print(question, approval)

#         human_input = input("Your response: ")

#         resume_events = app.stream(
#         Command(resume=human_input),
#         config=thread_config
#         )

#         for revent in resume_events:
#           print(revent)
#     else:
#         print(event)
