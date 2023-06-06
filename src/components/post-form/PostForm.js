import React from 'react';

import './styles.scss';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    submitHandler(event) {
        event.preventDefault();
    }

    changeInputHandler() {

    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className='post-form'>
                    <label htmlFor="title">Заголовок поста</label>
                    <input type="text" value={this.state.title} onChange={this.changeInputHandler} className='' id='title'/>
                </div>
                <button type='submit'>Создать</button>
            </form>
        );
    }
}
