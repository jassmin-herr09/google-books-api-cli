module.exports = (error) => {
    try {
      if (!error) {
        throw new Error(
          'Sorry, the errorHandling function needs to be passed an Error!'
        );
      } 
    } catch (error) {
      console.error(error);
      return error;
    }
  };