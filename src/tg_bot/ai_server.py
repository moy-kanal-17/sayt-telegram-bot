from flask import Flask, request, jsonify
from g4f.client import Client
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

client = Client()

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    prompt = data.get('prompt', '')
    try:
        response = client.chat.completions.create(
            model='gpt-3.5-turbo',
            messages=[{"role": "user", "content": prompt}],
        )
        return jsonify({'reply': response.choices[0].message.content})
    except Exception as e:
        print('GPT ERROR:', e)  # MUHIM: hatoni konsolga chiqaramiz
        return jsonify({'reply': f'Ошибка AI: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(port=8000)
