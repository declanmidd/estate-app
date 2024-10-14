import axios from 'axios';

export const parseUrl = 'https://bayut.p.rapidapi.com';

export async function fetchApiList(url){
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'api-key',
            'X-RapidAPI-Host': 'api-host'
          }
    });
    return data;
}
