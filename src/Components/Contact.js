import './Contact.css'

function Contactform(){
    return(
        <div className='formcontainer'>
            <h1 className='heading'>Contact Form</h1>
          
            <h1>For Enquiry message us!
                <hr/>
            </h1>
            <form>
                <input placeholder='Name'/>
                <input placeholder='Email'/>
                <input placeholder='Subject'/>
                <textarea placeholder='Message' rows='4' ></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}
export default Contactform