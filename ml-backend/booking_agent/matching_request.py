import os

from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from typing import List, Dict
from datetime import datetime,timedelta
import warnings
import io
import contextlib
import pandas as pd
load_dotenv()
llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash",google_api_key=os.getenv("GEMINI_API_KEY"))

class match_db(BaseModel):
     Name : str = Field(...,description="name of the user")
     therapist : str = Field(...,description='name of the therapist')
     date : str = Field(...,description='date of the appointment')
     time : str = Field(...,description = "time of the appointment")
     reason : str = Field(...,description='state the reason for matching the user with the therapist')
     
matching_llm = llm.with_structured_output(match_db)

import pandas as pd

# create dummy therapist data
data = {
    "name": ["Dr. Meera Sharma", "Dr. Arjun Patel", "Dr. Kavya Rao", "Dr. Rohan Singh", "Dr. Ananya Iyer"],
    "speciality": ["Cognitive Therapy", "Child Psychology", "Addiction Counseling", "Marriage Counseling", "Depression Therapy"],
    "experience": ["10 years", "5 years", "8 years", "12 years", "7 years"]
}

therapist_df = pd.DataFrame(data)

therapist_dict = therapist_df.to_dict(orient="records")

def matching(user_info,therapist_dict = therapist_dict):
     response = matching_llm.invoke(f'''
     you are given user information - 
     {user_info}
     and the database of the therapists
     {therapist_dict}
     match the user to the suitable therapist based of the user problem and therapist's speciality
     ''')
     return response

def changing(changes,current_appointment):
     response = matching_llm.invoke(f'''
     based on the changes stated by the user,
     update the appointment accordingly.
     
     changes --- {changes}
     
     current_appointment_details --- {current_appointment}
     ''')
     return response


     
     
     


