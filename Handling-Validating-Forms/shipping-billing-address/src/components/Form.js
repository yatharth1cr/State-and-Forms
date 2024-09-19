import React from "react";

class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      shipping: {
        address: "",
        ZIP: "",
        city: "",
        country: "",
      },
      billing: {
        address: "",
        ZIP: "",
        city: "",
        country: "",
      },
      addressErr: "",
      isCopy: false,
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    this.setState({
      shipping: { ...this.state.shipping, [name]: value },
    });

    if (name === "address" && value.length < 8) {
      this.setState({
        addressErr: "You need to enter at-least 8 characters.",
      });
    } else {
      this.setState({
        addressErr: "",
      });
    }
  };

  handleChecked = ({ target }) => {
    this.setState(({ isCopy }) => ({ isCopy: !isCopy }));
  };
  render() {
    var billingData = this.state.isCopy
      ? this.state.shipping
      : this.state.billing;
    return (
      <>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h2>Shipping Address</h2>
          <label>Address</label>
          <input
            type="address"
            name="address"
            placeholder="e.g New Delhi Vasnat Vihar"
            onChange={this.handleInput}
          />
          <span>{this.state.addressErr}</span>

          <label>ZIP/Postal Code</label>
          <input
            type="text"
            name="ZIP"
            placeholder="e.g. 176057"
            onChange={this.handleInput}
          />

          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="e.g New Delhi"
            onChange={this.handleInput}
          />

          <label>Country</label>
          <input
            type="text"
            name="country"
            placeholder="e.g India"
            onChange={this.handleInput}
          />
        </form>

        <form>
          <h2>Billing Address</h2>
          <div>
            <input
              type="checkbox"
              id="checkbox"
              onChange={this.handleChecked}
            />
            <label>Same as the Shipping Address?</label>
          </div>

          <label>Address</label>
          <input
            type="text"
            placeholder="e.g New Delhi Vasnat Vihar"
            value={billingData.address}
          />

          <label>ZIP/Postal Code</label>
          <input
            type="text"
            id="ZIP"
            placeholder="e.g. 176057"
            value={billingData.ZIP}
          />

          <label>City</label>
          <input
            type="text"
            placeholder="e.g New Delhi"
            value={billingData.city}
          />

          <label>Country</label>
          <input
            type="text"
            id="country"
            placeholder="e.g India"
            value={billingData.country}
          />
        </form>
      </>
    );
  }
}

export default Form;
