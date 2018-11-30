const apiKey = "_kTEm4IqP-62h8q1pMbBGmaJhACHZqcyurqFAqrDYzV6oYaYlPWdEKb2OtPXeXAp9dDTnGh79fE1LwU5sQB62wTCnJ3WJwZudF76mbmAHqwEHBTgtTkPMDWDdpoBXHYx";
export let Yelp = {
  search: function(term, location, sortby) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortby}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then((response) => {
      return response.json().then((jsonResponse) => {
        if(jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            const res = {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories.alias,
              rating: business.rating,
              reviewCount: business.review_count
            }
            return res;
          });
        }
      });
    });
  }
};
