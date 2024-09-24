'use server'

const APIKEY = process.env.NOVA_POST_KEY;
const URL = 'https://api.novaposhta.ua/v2.0/json/';


export const getDivisions= async(cityRef)=>{
    const requestBody = {
        "apiKey": APIKEY,
        "modelName": "Address",
        "calledMethod": "getWarehouses",
        "methodProperties": {
          "CityRef": cityRef
        }
      };
    
      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });
    
        const result = await response.json();
    
        if (result.success) {
          return result.data;
        } else {
          throw new Error(result.errors.join(', '));
        }
      } catch (error) {
        console.error('Помилка отримання даних від Nova Poshta:', error);
        return null;
      }

};


export const getCities = async(cityName)=> {
  const requestBody = {
    "apiKey": APIKEY,
    "modelName": "Address",
    "calledMethod": "getCities",
    "methodProperties": {
      "FindByString": cityName
    }
  };

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const result = await response.json();

    if (result.success && result.data.length > 0) {
      return result?.data?.map((city)=> {return {description: city.Description, ref: city.Ref}});
    } else {
      throw new Error(`Місто ${cityName} не знайдено.`);
    }
  } catch (error) {
    console.error('Помилка отримання міста:', error);
    return null;
  }

};

