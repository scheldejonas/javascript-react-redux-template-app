/**
 * Created by scheldejonas on 02/04/2017.
 */
import React, { PropTypes } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

const Post = props => (
  <Col l={4} m={6} s={12}>
    <Card
      onClick={ () => props.selectPost(props.index) }
      header={
        <CardTitle image={props.image_url} waves='light' reveal />
      }
      title={props.name}
      reveal={
        <p>{props.description}</p>
      }
    >
      <p>
        <a className="remove-post"
           onClick={ () => props.removePost(props.index) }>
          ✖
        </a>
        <a href="#">   This is a link</a>
      </p>
    </Card>
  </Col>
);

Post.propTypes = {
  name: PropTypes.string.isRequired
  ,description: PropTypes.string.isRequired
  ,image_url: PropTypes.string.isRequired
  ,index: PropTypes.number.isRequired
  ,removePost: PropTypes.func.isRequired
  ,updatePost: PropTypes.func.isRequired
  ,selectPost: PropTypes.func.isRequired
};

export default Post;
