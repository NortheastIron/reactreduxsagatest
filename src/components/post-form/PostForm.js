import React from 'react';
import {connect} from 'react-redux';

import './styles.scss';
import {createPost, showAlert} from "../../redux/actions";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '111'
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {title} = this.state;

        if (!title.trim()) {
            return this.props.showAlert('SPAM!');
        }

        this.setState({title: ''});

        const newPost = {
            title, id: Date.now().toString()
        };

        console.log(newPost);
        this.props.createPost(newPost);
    };

    changeInputHandler = (event) => {
        this.setState(prev => {
            console.log('prev: ', prev);
            const ararat = JSON.parse(JSON.stringify(prev));
            ararat[event.target.name] = event.target.value;
            // Object.assign(prev, ...{
            //     [event.target.name]: event.target.value
            // });
            return ararat;
        });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert &&
                <div>
                    <span>
                        {this.props.alert}
                    </span>
                </div>}
                <div className='post-form'>
                    <label htmlFor="title">Заголовок поста</label>
                    <input type="text" value={this.state.title} name='title' onChange={this.changeInputHandler} className='' id='title'/>
                </div>
                <button type='submit'>Создать</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    createPost, showAlert
};

const mapStateToProps = state => ({
    alert: state.app.alert
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
