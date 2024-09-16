from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a secure key

email_list = []  # Temporarily store emails here

@app.route('/', methods=['GET', 'POST'])
def landing():
    if request.method == 'POST':
        email = request.form.get('email')
        if email:
            email_list.append(email)  # Store the email in memory
            flash('Thanks for signing up!', 'success')
        else:
            flash('Please provide a valid email.', 'error')
        return redirect(url_for('landing'))
    
    return render_template('landing.html')

if __name__ == '__main__':
    app.run(debug=True)
