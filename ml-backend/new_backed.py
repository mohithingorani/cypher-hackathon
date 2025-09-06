from langchain_ollama import ChatOllama
from langchain.schema import AIMessage, HumanMessage, SystemMessage
from  vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from langchain_community.tools.tavily_search import TavilySearchResults
import os
from dotenv import load_dotenv
import matplotlib.pyplot as plt
from langchain.tools import tool
from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_google_genai import ChatGoogleGenerativeAI


load_dotenv()


tavily_api_key = os.getenv("TAVILY_API_KEY")
langsmith_tracing = os.getenv("LANGSMITH_TRACING")
langsmith_endpoint = os.getenv("LANGSMITH_ENDPOINT")
langsmith_api_key = os.getenv("LANGSMITH_API_KEY")
langsmith_project = os.getenv("LANGSMITH_PROJECT")
tavily_tool = TavilySearchResults(max_results=2)


analyzer = SentimentIntensityAnalyzer()


llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash",google_api_key=os.getenv("GEMINI_API_KEY"))

def chatbot(Usermessage,summary = "no conversation until now"):
    messages = [
        SystemMessage(content = f"You are a therapist, you have to be empathetic with the user and ask follow up questions. this is the summary of the conversation until now : {summary}"),
        HumanMessage(content = Usermessage)
    ]
    response = llm.invoke(messages)
    return response.content



def report(hist):
    res = llm.invoke(f' create a report of the chat pointing out important emotions that the user went through during the conversation : {hist}')

    return res.content

def key_memory(hist):
    res = llm.invoke(f' create a list of important points that were discovered about the user in 3-5 points \n {hist}')

    return res.content

def rel_article(summ):
    messages = [
        SystemMessage(content="You are an assistant that uses tools to find helpful articles."),
        HumanMessage(content=f"what should user search to read about his issues.write in max 3 words.no extra words just the search. summary : {summ}")
    ]
    response = llm.invoke(messages)
    return response.content

def article_tool(query):
    """Search the web for relevant articles based on a user query string and return the URLs."""

		

    response = tavily_tool.invoke(query)
    results = response.get("results", [])
    urls = [r.get("url") for r in results]
    return urls

app = Flask(__name__)

CORS(app)


hist = []
@app.route('/api/chat', methods = ["POST"])
def chat():
     global hist 

     data = request.json
     userMessage = data.get('query','')

     if userMessage in ['q','quit','bye']:
          print('Goodbye handsome')
     else:
          history_text = "\n".join([f"User: {m['User']}\nAI: {m['AI']}" for m in hist])
          response = chatbot(userMessage,history_text)
          msg = {"User" : userMessage,
          "AI" : response}
          hist.append(msg)

          return jsonify({
               "success" : True,
               "reply" : response
          })
          
          
        
@app.route('/api/end', methods = ["GET"])
def post_convo():
    global hist
    
    pos_scores = []
    neg_scores = []
    length_nums = []
    for i in range(len(hist)):
        sent = analyzer.polarity_scores(hist[i]['User'])
        pos_scores.append(sent["pos"])
        neg_scores.append(sent["neg"])
        length_nums.append(i+1)


    print(f"positive scores - {pos_scores}")
    print(f"negative scores - {neg_scores}")
    
    hist_report = report(hist)

    keywords = rel_article(hist_report)

    articles = article_tool(keywords)

    return jsonify({
        'positive scores' : pos_scores,
        'negative scores' : neg_scores,
        'length_messages' : length_nums,
        'articles' : articles,
        'report' : hist_report,
        'key_memory' : key_memory(hist)

    })
    
if __name__ == "__main__":
     app.run(debug=True,host = '0.0.0.0', port = 5000)