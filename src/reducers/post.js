/**
 * Created by scheldejonas on 02/04/2017.
 */
import * as PostActionTypes from '../actiontypes/post';

const initialState = {
  posts: [
    {
      name: 'Java'
      ,description: 'The core language of the REST service'
      ,image_url: 'assets/java.jpg'
      ,created: '11/8/2016'
      ,updated: '11/9/2016'
    },
    {
      name: 'JavaScript'
      ,image_url: 'assets/javascript.jpg'
      ,description: 'The core language of the UI'
      ,created: '11/9/2016'
      ,updated: '11/10/2016'
    },
    {
      name: 'CSS'
      ,image_url: 'assets/css.jpg'
      ,description: 'The core language of styles'
      ,created: '11/11/2016'
      ,updated: '11/12/2016'
    }
  ],
  selectedPostIndex: -1
};

export default function Post(state=initialState, action) {

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getYear();

  switch(action.type) {
    case PostActionTypes.ADD_POST: {
      const addPostList = [...state.posts, {
        name: action.name,
        created: `${month}/${day}/${year}`
      }];
      return {
        ...state,
        posts: addPostList
      };
    }

    case PostActionTypes.REMOVE_POST: {
      const removePostList = [
        ...state.posts.slice(0, action.index),
        ...state.posts.slice(action.index + 1)
      ];
      return {
        ...state,
        posts: removePostList
      };
    }

    case PostActionTypes.UPDATE_POST: {
      const updatePostList = state.posts.map(
        (post, index) => {
          if (index === action.index) {
            return {
              ...post,
              updated: `${month}/${day}/${year}`
            };
          }
          return post;
        }
      );
      return {
        ...state,
        posts: updatePostList
      };
    }

    case PostActionTypes.SELECT_POST: {
      return {
        ...state,
        selectedPostIndex: action.index
      };
    }

    default: {
      return state;
    }
  }
}