# REDUX SAGA LÀ GÌ ?

là 1 thư viện middleware trong redux , generator function

# Effect

- Là 1 JS Object

# Effect Creator

- Là những Factory function được cung cấp bởi redux-saga , nó sẽ trả về 1 Effect

# Blocking và Non-Blocking

Blocking : là nhận 1 Effect thì sẽ dừng lại cho đến khi chạy xong
Non-blocking : Sẽ chạy ngay lập tức

# Watch và Worker

- Watcher : là một Saga sẽ theo dõi tất cả các action được gửi đến middleware và sẽ thông báo cho worker thực hiện tác vụ tương ứng
- Worker : Là 1 saga sẽ thực thi các hành động bên trong nó mỗi khi nhận được thông báo từ watcher

# Effect creator thường gặp

- takeEvery : chạy saga với mỗi lần action dispatch và trả lại mọi kết quả của actions được gọi
- takeLastest : chạy saga với lần action dispatch cuối cùng
- takeLeading : chạy saga mỗi lần action dispatch , nhưng những lần tiếp theo sẽ bị huỷ cho đến khi chạy xong
- put : dispatch 1 action từ saga
- take : nó sẽ hoạt động theo watcher và worker
- call ; gọi function trong redux saga
- fork : để gọi 1 generator function , nó chạy độc lập
- throttle : đảm bảo chỉ chạy saga trong 1 khoảng thời gian
- debounce : nó sẽ đợi trong khoảng thời gian sẽ gọi
