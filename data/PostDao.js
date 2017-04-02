/**
 * Created by scheldejonas on 02/04/2017.
 */
import axios from 'axios';

class PostDao {
  performSearch = (query = 'cat') => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState(
          {
            gifs: response.data.data,
            loading: false
          }
        );
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data', error);
      });
  };
}