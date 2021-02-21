from flask import Flask, render_template, jsonify

app = Flask(__name__)
app.config['JSON_AS_ASCII']=False


@app.route('/')
def index():
  return render_template('index.html')

@app.route('/login')
def login():
  return render_template('login.html')

@app.route('/pievienot_vielu_aprikojumu')
def pievienot():
  return render_template('pievienot_vielu_aprikojumu.html')  
  
@app.route('/pub_data')
def data():
  return render_template('pub_data.html')
  
@app.route('/user_menu')
def menu():
  return render_template('user_menu.html')
  
@app.route('/vielu_aprikojuma_uzskaite')
def uzskaite():
  return render_template('vielu_aprikojuma_uzskaite.html')

if __name__ == "__main__":
   app.run("0.0.0.0", debug=True)