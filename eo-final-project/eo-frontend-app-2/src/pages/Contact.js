
const Contact = () => {
    return (
        <div className="contact-container">
        <h1>Contact</h1>
        <p>We love  questions, comments, and feedback - and we're always happy to share what we know. Here's how you can contact us. </p>
        <div className="message-container">
        <div className="send-message"><b><p>Send a message</p></b></div>
        <p>I will do my best to respond within 24 hours</p>
        <b><p>Full Name:</p></b>
        <input type="text" name="full-name" id="full-name" placeholder="Enter Full Name" />
        <b><p>Email:</p></b>
        <input type="text" name="email" id="full-name" placeholder="Enter Email" />
        <b><p>Telephone:</p></b>
        <input type="telephone" name="telephone" id="telephone" placeholder="Enter Phone Number" />
        <b><p>Message:</p></b>
        <input type="message" name="message" id="message" placeholder="Enter your message here" />
        
        <button id="contact-sbutmit">Submit</button>
        
        </div>
        </div>
    )
}

export default Contact