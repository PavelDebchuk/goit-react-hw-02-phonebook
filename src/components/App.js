import { Component } from 'react';
import './app.component.stules.css';
import Form from './Form';
// import ContactItem from './ContactsItem';

class App extends Component {
  state = {
    contacts: [],
  };

  // formSubmitHandler = data => {
  //   return (this.state.contacts = [data]);
  // };

  formSubmitHandler = data => {
    this.setState({
      contacts: (this.state.contacts = [data]),
    });
    // setValue(copy);
    // setValue(this.state.contacts),
    console.log(this.state.contacts);
    // this.setState({
    //   contacts: this.state.contacts.push(data),
    // });
  };

  render() {
    return (
      <section className="block">
        <p>Name</p>
        <Form onSubmit={this.formSubmitHandler} />
        <p>Contacts</p>
        {/* <ContactItem /> */}
        <ul className="contacts_list">
          {this.state.contacts.map(({ name, number }) => (
            <li>
              {name}...{number}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export default App;
