import { useEffect } from 'react';

function isFormEmpty(data) {
    if (data.email.trim() == "" ||  data.fullName.trim() == "" ||
        data.message.trim() == "") {
            return true;
    }
    return false;    
}

function resetFormValues(e) {
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.message.value = "";
}

function showSuccess() {
    const notificationSuccess = document.getElementsByClassName("notification")[0];
    notificationSuccess.style.display = "block";
    setTimeout(function() { 
        notificationSuccess.style.display = "none" }
    , 3000);
}

function listenForKeyUp() {
    var inputs = document.getElementsByClassName("contact-form-input");
    for(let i =0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", function(e) {
            if(inputs[i].value != "") {
                inputs[i].classList.add("not-empty");
            } else {
                inputs[i].classList.remove("not-empty");
            };
        });
    }
}

export default function ContactForm() {
    useEffect(() => {
        listenForKeyUp();
    }, [])
    
    return (
        <section className="section" id="contact">
            <h1 className="title">Get in touch</h1>
            <form className="row" onSubmit={(e) => {
                e.preventDefault();
                const [name, email, message] = e.target.elements;
                const data = {
                    fullName: name.value,
                    email: email.value,
                    message: message.value
                };

                if(!isFormEmpty(data)) {
                    fetch("/api/email", {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    });
                    resetFormValues(e);
                    showSuccess();
                } 
            }}>
                <div className="notification is-success is-light">
                    Your message is sent! We will be contacting <strong>you</strong> shortly in the mean time!
                </div>

                <div className="form-field col x-50">
                    <input id="name" className="input-text contact-form-input" required />
                    <label className="label" htmlFor="name">Name</label>
                </div>
                <div className="form-field col x-50">
                    <input id="email" className="input-text contact-form-input" type="email" required />
                    <label className="label" htmlFor="email">E-mail</label>
                </div>
                <div className="form-field col x-100">
                    <input id="message" className="input-text contact-form-input" type="text" required />
                    <label className="label" htmlFor="message">Message</label>
                </div>
                <div className="form-field col x-100 has-text-centered">
                    <button className="submit-button" type="submit" name="action">SUBMIT</button>
                </div>
            </form>
        </section>
    );
}