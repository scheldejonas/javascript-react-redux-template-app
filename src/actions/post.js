/**
 * Created by scheldejonas on 02/04/2017.
 */
import * as PostActionTypes from '../actiontypes/post';

export const addPost = name => {
  return {
    type: PostActionTypes.ADD_POST,
    name
  };
};

export const removePost = index => {
  return {
    type: PostActionTypes.ADD_POST,
    index
  };
};

export const updatePost = (index)  => {
  return {
    type: PostActionTypes.UPDATE_POST,
    index
  };
};

export const selectPost = (index) => {
  return {
    type: PostActionTypes.SELECT_POST,
    index
  };
};
