import React, { useState } from 'react';

function RandomQuote() {
    const quotes = [
        {
            quote: `"Nothing is impossible, the word itself says 'I'm Possible'!"`,
            author: "-Audrey Hepburn"
        },
        {
            quote: `"Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong."`,
            author: "-Ella Fitzgerald"
        },
        {
            quote: `"The philosophers have only interpreted the world, in various ways. The point however, is to change it."`,
            author: "-Karl Marx"
        },

    ]
    const [randomQuote, setRandomQuote] = useState(quotes[0]);

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex]);
    };

    return (
        <div>
                <>
                    <div className='quote'>
                        <p onClick={handleClick}>
                         {randomQuote.quote}
                        </p>
                    </div>
                    <div className='quote-author'>
                        <p>
                            {randomQuote.author}
                        </p>
                    </div>
                </>
            
        </div>
    );
}

export default RandomQuote;