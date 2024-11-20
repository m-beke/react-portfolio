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
        {
            quote: `"Negativity is the enemy of creativity."`,
            author: "-David Lynch"
        },

    ]
    const [randomQuote, setRandomQuote] = useState(quotes[0]);

    const handleClick = () => {
        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (quotes[randomIndex].quote === randomQuote.quote);
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