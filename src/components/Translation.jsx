import React from 'react'
import { LANGUAGES } from '../utils/presets'
import { ANTHROPIC_API_KEY } from '../config/config';
import { pipeline } from '@xenova/transformers';

export default async function Translation(props) {
    const { textElement, toLanguage, translating, setToLanguage,} = props
    
    const generateTranslation = async () => {
        const url = 'https://api.anthropic.com/v1/translate';
        const headers = {
          'Authorization': `Bearer ${ANTHROPIC_API_KEY}`,
          'Content-Type': 'application/json',
        };
      
        const response = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            // Your API request payload here
          }),
        });
      
        const data = await response.json();
        // Handle the response data
      };

      // Create a translation pipeline

    
    return (
        <>
            {(textElement && !translating) && (
                <p>{textElement}</p>
            )}
            {!translating && (<div className='flex flex-col gap-1 mb-4'>
                <p className='text-xs sm:text-sm font-medium text-slate-500 mr-auto'>To language</p>
                <div className='flex items-stretch gap-2 sm:gap-4' >
                    <select value={toLanguage} className='flex-1 outline-none w-full focus:outline-none bg-white duration-200 p-2  rounded' onChange={(e) => setToLanguage(e.target.value)}>
                        <option value={'Select language'}>Select language</option>
                        {Object.entries(LANGUAGES).map(([key, value]) => {
                            return (
                                <option key={key} value={value}>{key}</option>
                            )
                        })}

                    </select>
                    <button onClick={generateTranslation} className='specialBtn px-3 py-2 rounded-lg text-amber-600 hover:text-amber-600 duration-200'>Translate</button>
                </div>
            </div>)}
        </>
    )
}
