function isFormEmpty(data) {
    if (data.email.trim() == "" ||  data.fullName.trim() == "" ||
        data.message.trim() == "" || data.subject.trim() == "" || data.phoneNumber.trim() == "") {
            return true;
    }
    return false;    
}
  
function resetFormValues(e) {
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.message.value = "";
    e.target.elements.phoneNumber.value = "";
    e.target.elements.subject.value = "";
}

export default function ContactCardForm() {
    return (
        <section className="section container contact-card">
            <form onSubmit={(e) => {
                e.preventDefault();
                const [name, phoneNumber, email, subject, message] = e.target.elements;
                const data = {
                    fullName: name.value,
                    email: email.value,
                    message: message.value,
                    subject: subject.value,
                    phoneNumber: phoneNumber.value
                };

                if(!isFormEmpty(data)) {
                    fetch("/api/email", {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    });
                    resetFormValues(e);
                } 
            }}>
            <div className="banner">
                <h1>CONTACT US</h1>
                <h3>Fill out the form below to learn more!</h3>
            </div>
            
            <label className="label paint-label-white">Personal Details</label>
            <div className="field is-grouped mt-5">
                <div className="control is-expanded">
                    <input id="name" className="input" type="text" placeholder="Name" required/>
                </div>
            
                <div className="control is-expanded">
                    <input id="phoneNumber" className="input" type="text" placeholder="Phone Number" required/>
                </div>
            </div>

                <div className="field is-grouped mt-5">
                    <div className="control is-expanded">
                        <input id="email" className="input" type="email" placeholder="Email" required/>
                    </div>

                    <div className="control is-expanded">
                        <input id="subject" className="input" type="text" placeholder="Subject" required/>
                    </div>         
                </div>

                <div className="field mt-5">
                    <label className="label paint-label-white mb-5">Message</label>
                    <div className="control">
                    <textarea id="message" className="textarea" placeholder="Your Message" required></textarea>
                    </div>
                </div>

                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                    <button className="button is-medium" type="submit" name="action">Submit</button>
                    </div>
                </div>
                </form>
            </section>
    );
}