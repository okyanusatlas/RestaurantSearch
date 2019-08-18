import axios from 'axios';


export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer CM_apzpwoQduMvM6pJ5T21SynhJb3XDl5RItKc_MwX29q99Fia4V3bMrUMg-00PEe_O3EAj54sCQK0cJqvpAqYr-17F6Et8914OPSUHFhKc7VGNtMss65HoKkBxVXXYx'
    }
});
