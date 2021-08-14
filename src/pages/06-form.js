import React from "react";

const Form = () => {
  return (
    <div>
      <form action='http://www.example.com/review.php' method='get'>
        <fieldset>
          <legend>Your Details:</legend>
          <label>
            Name:
            <input type='text' name='name' size='30' maxLength='100' />
          </label>
          <br />

          <label>
            Email:
            <input type='email' name='email' size='30' maxLength='100' />
          </label>
          <br />
        </fieldset>
        <br />
        <fieldset>
          <legend>Your Review:</legend>
          <p>
            <label htmlFor='hear-about'>How did you hear about us?</label>
            <select name='referrer' id='hear-about'>
              <option value='google'>Google</option>
              <option value='friend'>Friend</option>
              <option value='advert'>Advert</option>
              <option value='other'>Other</option>
            </select>
          </p>
          <p>
            Would you visit again?
            <br />
            <label>
              <input type='radio' name='rating' value='yes' />
              Yes
            </label>
            <label>
              <input type='radio' name='rating' value='yes' />
              No
            </label>
            <label>
              <input type='radio' name='rating' value='yes' />
              Maybe
            </label>
          </p>
          <p>
            <label htmlFor='comments'>Comment:</label>
            <br />
            <textarea
              id='comments'
              cols='40'
              rows='4'
              placeholder='Comment some comment'
            ></textarea>
          </p>
          <label>
            <input type='checkbox' name='subscribe' checked='checked' />
            Sign me up for email update
          </label>
          <br />
          <input type='submit' value='Submit review' />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
