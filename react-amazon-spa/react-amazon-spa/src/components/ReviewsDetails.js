import React, { Component } from 'react';
import StarRating from './StarRating';

export default class ReviewDetails extends Component {
    render() {
        const rvw = this.props.review;
        return <div className='card mt-3'>
            <div className='card-body'>
                <StarRating max={5} rating={rvw.rating} />
                <div>{rvw.body}</div>
                <div className='text-info'>By {rvw.full_name} at {rvw.created_at}</div>
            </div>
        </div>;
    }
}