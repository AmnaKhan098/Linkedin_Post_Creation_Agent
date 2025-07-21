from src.aimodel import model
from utils.prompt import prompt_one, prompt_two
import requests
from bs4 import BeautifulSoup

def scrape(url: str, prompt_type: str) -> str:
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    text = soup.get_text(separator="\n")

    if prompt_type == "one":
        prompt = prompt_one(text)
    else:
        prompt = prompt_two(text)
    response = model(prompt)
    return response.text
