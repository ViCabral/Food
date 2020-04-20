import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer D-vn06bUbefKoAwyw786H532acBg5G_yYeqZChTrLJe7lIgJZNDjMjoXPSKjYiQ3ffMV1FviCCh-lsw4-FJJIqEZV8KCC4JXUYovZx5ytHDowN-LDLacNpDKFwyWXnYx'
    }
});