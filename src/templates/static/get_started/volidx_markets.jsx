import React from 'react';

const VolidxMarkets = () => (
    <React.Fragment>
        <div className='section-content section-6'>
            <h1>{it.L('Volatility Index Markets')}</h1>

            <div className='subsection'>
                <h2>{it.L('How to trade the Volatility Indices markets?')}</h2>
                <p>{it.L('[_1] has created Volatility Indices that you can trade 24/7. You can trade these on all types of contract:', it.website_name)}</p>
            </div>

            <div className='gr-row'>
                <div className='gr-8 gr-12-m'>
                    <ul className='checked'>
                        <li>{it.L('Rise/Fall')}</li>
                        <li>{it.L('Higher/Lower')}</li>
                        <li>{it.L('Touch/No Touch')}</li>
                        <li>{it.L('In/Out (ends between/outside and stays between/goes outside)')}</li>
                        <li>{it.L('Asians')}</li>
                        <li>{it.L('Digits')}</li>
                    </ul>
                </div>

                <div className='gr-4 gr-12-m'>
                    <img className='responsive' src={it.url_for('images/pages/get-started/volidx-markets.svg')} />
                </div>
            </div>

            <p>{it.L('Volatility Indices are further categorized into two types:')}</p>
            <ul className='checked'>
                <li>{it.L('Continuous Indices')}</li>
                <li>{it.L('Daily Reset Indices')}</li>
            </ul>

            <br />

            <div className='subsection'>
                <h2>{it.L('Continuous Indices')}</h2>
                <p>{it.L('[_1]\'s Continuous Indices are the Volatility 10 Index, Volatility 25 Index, Volatility 50 Index, Volatility 75 Index and Volatility 100 Index. These indices correspond to simulated markets with constant volatilities of 10%, 25%, 50%, 75% and 100%.', it.website_name)}</p>
            </div>

            <div id='volidx-indices-container'>
                <div className='gr-row'>
                    <div className='gr-8 gr-12-m'>
                        <p>{it.L('The Volatility 100 Index is twice as volatile as the Volatility 50 Index, and four times as volatile as the Volatility 25 Index.')}</p>
                    </div>
                    <div className='gr-4 gr-12-m'>
                        <img className='responsive' src={it.url_for('images/pages/get-started/get-started-volidx-indices.svg')} />
                    </div>
                </div>
            </div>

            <div className='subsection'>
                <h2>{it.L('Daily Reset Indices')}</h2>
                <p>{it.L('Daily Reset Indices replicate markets with a bullish and bearish trend, with a constant volatility.')}</p>
                <p>{it.L('Bull Market and Bear Market Indices start at 00:00 GMT each day, replicating a bullish and bearish market respectively.')}</p>
                <p>{it.L('[_1]\'s Volatility Indices are based on a cryptographically secure random number generator audited for fairness by an independent third party.', it.website_name)}</p>
            </div>
        </div>
    </React.Fragment>
);

export default VolidxMarkets;
