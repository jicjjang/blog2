## Data를 사용하기 위한 필요 요소
### 1. props

~~~javascript
class hello extends Component {
  // 3. 생성자에서 this.props를 사용하기 위해서는
  // super에 props를 넣어주어야 합니다.
  constructor(props) {
    super(props);
  }

  render() {
    // 4. return 은 단일 태그로만 가능.
    return (
      // 5. 부모 컴포넌트에서 전달해 준 name을 넣어준다.
      // => Hello junseok!
      <p>Hello {this.props.name}!</p>
    )
  }
}

ReactDOM.render(
  <hello name="junseok" />,	// 1. 컴포넌트를 호출하면서 name props를 넘겨준다.
  document.getElementsById("root")	// 2. 호출한 컴포넌트를 해당 DOM에 넣어준다.
);
~~~