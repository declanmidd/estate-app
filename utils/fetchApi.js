import axios from 'axios';

export const parseUrl = 'https://bayut.p.rapidapi.com';

export async function fetchApiList(url){
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'd627f9b6f7msh8fd0e5db815adbdp198f55jsn40ed9b578ffb',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}