import React from "react";
import { Component } from "react";
import "./App.css";

class AddUserForm extends Component {
  render() {
    return (
      <div className="addUsersFormC">
        <form className="userAdd">
          <sapn
            className="closeAddFormUser"
            onClick={this.props.closeAddFormUser}
          >
            X
          </sapn>
          <input
            name="name"
            placeholder="Вкажіть ім'я"
            class="textbox"
            required
          />
          <input
            name="emailaddress"
            placeholder="Вкажіть номер телефону!"
            class="textbox"
            type="number"
            required
          />
          <textarea
            rows="4"
            cols="50"
            name="subject"
            placeholder="Введіть ваше повідомлення"
            class="message"
            required
          ></textarea>
          <input
            name="submit"
            class="button"
            type="submit"
            value="СТВОРИТИ ЧАТ"
          />
        </form>
      </div>
    );
  }
}

export default AddUserForm;
