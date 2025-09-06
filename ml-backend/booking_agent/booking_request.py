import os

from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from typing import List, Dict
from datetime import datetime,timedelta
import warnings
import io
import contextlib

load_dotenv()
llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash",google_api_key=os.getenv("GEMINI_API_KEY"))

class request(BaseModel):
     name : str = Field(...,description= "name of the user")
     problem : str = Field(...,description='main problems that the user is facing')
     date_time : str = Field(...,description='what time and date is the user available')
     
request_llm = llm.with_structured_output(request)

# def create_request():
#      request = input('create a request for booking \n mention name and what problems you are facing, how are you feeling lately?')
#      res = request_llm.invoke(f'extract name and key issues that the user is facing from the following message - {request}')
     
#      return res

def create_request(user_message: str):
    res = request_llm.invoke(
        f"Extract name, key issues and preferred date and time that the user is facing from the following message - {user_message}"
    )
    return res


     

     
     