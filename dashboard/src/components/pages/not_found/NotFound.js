import React, { Component } from 'react';
class NotFound extends Component {
    render() {
        return (
            <div className="hk-wrapper">
                {/* Main Content */}
                <div className="hk-pg-wrapper hk-auth-wrapper" style={{ minHeight: '574px', marginLeft: '0px'  }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 pa-0">
                                <div className="auth-form-wrap pt-xl-0 pt-70">
                                    <div className="auth-form w-xl-25 w-sm-50 w-100">
                                        <a className="auth-brand text-center d-block mb-45" href="/">
                                            Baby Shop
                                            </a>
                                        <form>
                                            <h1 className="display-4 mb-10 text-center">404. Đã xảy ra lỗi.</h1>
                                            <p className="mb-30 text-center">Chúng tôi xin lỗi nhưng trang mà bạn yêu cầu không tồn tại. bạn có thể <a href="/"><u>quay về trang chủ</u></a> để tìm được đường dẫn chính xác.</p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;