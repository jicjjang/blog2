## 이쯤에서 다시보는 Redux

~~~javascript
...
// action을 props로 넣어주는 예제
const mapDispatchToProps = (dispatch) => bindActionCreators({
  name: function(state, action) {
    const {type, changeFunc} = action;

    switch (type) {
      case 'CHANGE_FUNCTION':
        return changeFunc;
      default:
        return state;
    }
  }
}, dispatch);

// state와 action을 props로 넣어줍니다.
export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
~~~