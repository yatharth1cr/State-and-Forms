1. Convert the following functional component to class component

```js
// functionl Component
function Card() {
  return (
    <div>
      <h2>Hello React!</h2>
    </div>
  );
}

// Class Component
class Card extends React.Component {
  constructor() {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Hello React!</h2>
      </div>
    );
  }
}
```

```js
// functionl Component
function HelloMessage(props) {
  return <div>Hello {props.name}</div>;
}

// Class Component
class HelloMessage extends React.Component {
  constructor() {
    super(props);
  }
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

```js
// functionl Component
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

// Class Component
class Comment extends React.Component {
  constructor() {
    super(props);
  }
  render() {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={this.props.author.avatarUrl}
            alt={this.props.author.name}
          />
          <div className="UserInfo-name">{this.props.author.name}</div>
        </div>
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-date">{formatDate(this.props.date)}</div>
      </div>
    );
  }
}
```

```js
// functionl Component
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

// Class Component
class Avatar extends React.Component {
  constructor() {
    super(props);
  }
  render() {
    return (
      <img
        className="Avatar"
        src={this.props.user.avatarUrl}
        alt={this.props.user.name}
      />
    );
  }
}
```

```js
// functionl Component
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

// Class Component
class UserInfo extends React.Component {
  constructor() {
    super(props);
  }
  render() {
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">{this.props.user.name}</div>
      </div>
    );
  }
}
```

2. What are the advantages of using class component

```
ANSWER:

we get some extra features while using class components like states, life cycle and constructor which is not possible in functional component.
```

3. Why we use super() inside a class component constructor

```
ANSWER:

As we are using parents component React.component so we need to use super in derive class
```
