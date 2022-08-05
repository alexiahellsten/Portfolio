module.exports = {
    /*
     * Response returns attributes if link is active or is 
     * a parent of an active item. 
     */
    getLinkActiveState(itemUrl, pageUrl) {
      let response = '';
  
      if (itemUrl === pageUrl) {
        response = ' aria-current="page"';
      }
  
      if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
        response += ' data-state="active"';
      }
  
      return response;
    }
  }; 