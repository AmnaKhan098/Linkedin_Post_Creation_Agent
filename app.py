from flask import Flask, request, render_template, jsonify
import asyncio
from src.scraper import scrape
import csv
import os
from flask import redirect, url_for, request
import pandas as pd


data = pd.read_csv(r"database\casestudyData.csv")
data = data.to_dict(orient="records")

app = Flask(__name__)

loop = asyncio.new_event_loop()

@app.route('/')
def index():
    url = request.args.get('url', '')
    title = request.args.get('title', '')
    return render_template('index.html', prefill_url=url, prefill_title=title)

@app.route('/generate', methods=['POST'])
def generate_post():
    data = request.get_json()
    url = data.get('url', '')
    prompt_type = data.get('prompt_type', 'two')  # Default to prompt_two
    
    if not url:
        return jsonify({"error": "URL is required"}), 400
    
# Generate response
    response = scrape(url=url, prompt_type=prompt_type)
        
    return jsonify({"post": response})

@app.route('/case-studies')
def case_studies():
    return render_template('case_studies.html', case_studies=data)

if __name__ == '__main__':
    app.run(debug=True)