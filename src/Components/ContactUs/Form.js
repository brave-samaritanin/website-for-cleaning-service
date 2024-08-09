import classes from './Form.module.css';

const Form = ({FORM_ENDPOINT, handleSubmit}) => {
    return (
        <form
            className={classes.Form}
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className={classes.Container}>
                <div className={classes.Name}>
                  <label for="name">Name
                    <input type="text" placeholder="Your name" name="name" required />
                  </label>
                </div>
                <div className={classes.Email}>
                  <label for="email">Email
                    <input type="email" placeholder="Email" name="email" required />
                  </label>
                </div>
                <div className={classes.Message}>
                  <label for="message">Message
                      <textarea placeholder="Your message" name="message" required />
                  </label>
                </div>
                <div className={classes.Button}>
                    <button type="submit"> <span>Get in touch</span> </button>
                </div>
            </div>
      </form>
    );
}
 
export default Form;