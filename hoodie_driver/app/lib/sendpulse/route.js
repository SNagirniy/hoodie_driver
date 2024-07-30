'use server'

import { NextResponse } from 'next/server';

export async function POST(req) {
  const data = await req.json();



    const accessData = {
      "grant_type": "client_credentials",
      "client_id": process.env.SENDPULSE_ID,
      "client_secret": process.env.SENDPULSE_SECRET,
    };
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(accessData)
    };

    try {
      const res = await fetch('https://api.sendpulse.com/oauth/access_token', requestOptions);
      const result = await res.json();
      const adressBook = await getAdressBookID(result.access_token);
      const isEmailAdd = await addUserToSP(data.email, result.access_token, adressBook);

      return NextResponse.json({ok: isEmailAdd.result}, { status: 200 });
        
    } catch (error) {
      const message = error?.message? error.message : 'Internal Server Error';
      const status = error?.status? error.status : 500;
      return NextResponse.json({ message}, { status });
    }
  };

 


  const addUserToSP = async(email, access_token, addressBook)=>{
    const apiUrl = `https://api.sendpulse.com/addressbooks/${addressBook}/emails`;
    const emailData ={emails: [email]}

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(emailData),
      });

      const result = await res.json();

      if(!result?.result) { throw new Error({message: result?.message, status: result?.error_code})}
      return result
     
    } catch (error) {
        throw new Error(error)
    }};

 

  const getAdressBookID = async(access_token)=>{
     const url ='https://api.sendpulse.com/addressbooks'

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        }, });
        const result = await res.json();
  
        if(!result[0].id){ throw new Error({message: 'Bad Gateway', status: 502})};

        return result[0]?.id

    } catch (error) {
      throw new Error(error)
    }};