import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCard: '',
        }
    }


    render() {
        return (
            <div className="App">


                <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h5>ส่วนที่ 1</h5>
                                <p>ข้อความหรือข้อมูลสำหรับส่วนที่ 1 ของ footer ที่นี่</p>
                            </div>
                            <div className="col-md-4">
                                <h5>ส่วนที่ 2</h5>
                                <p>ข้อความหรือข้อมูลสำหรับส่วนที่ 2 ของ footer ที่นี่</p>
                            </div>
                            <div className="col-md-4">
                                <h5>ติดต่อสอบถาม</h5>
                                <p>ข้อความหรือข้อมูลสำหรับส่วนที่ 3 ของ footer ที่นี่</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
