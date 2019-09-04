## Data를 사용하기 위한 필요 요소
### 2. state

~~~javascript
class hello extends Component {
  constructor(props) {
    super(props);
    // 1. state를 초기화해준다.
    this.state = {
      count: 0
    }
  }
  // 2. 이벤트가 들어오면 count가 1 증가하는 함수
  increase() {
    this.setState({count: this.state.count+1});
  }
  render() {
    // 3. JSX에서 onclick같은 부분은 camel-case로 써야한다.
    // ps. css도 마찬가지 (backgroundImage, backgroundColor...)
    // 4. a에 click 이벤트를 연결해준다.
    return (
      <a onClick={this.increase.bind(this)}>Click me!</a>
    )
  }
}
~~~