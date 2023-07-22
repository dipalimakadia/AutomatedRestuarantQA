from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langchain.document_loaders import PyPDFLoader
from langchain.indexes import VectorstoreIndexCreator
from pydantic import BaseModel
import os

OPENAI_API_KEY="ENTER YOUR KEY"
os.environ["OPENAI_API_KEY"]=OPENAI_API_KEY

loader=PyPDFLoader('./Docs/restuarant_menu.pdf')
index=VectorstoreIndexCreator().from_loaders([loader])

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
class Item(BaseModel):
    query:str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post('/')
def answer_query(item:Item):
    try:
        response=index.query(item.query)
        return response
    except:
        return {"message":"error happend"}