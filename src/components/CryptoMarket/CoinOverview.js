import React from 'react';


const CoinOverview = ({ image, name, symbol, price, volume, priceChangePercent, marketcap }) => {


        return(
            <div className='coin-container flex justify-center'>
                <div className='coin-row flex flex-row-ns justify-start items-center h3 w-80 bb'>
                    <div className='coin flex items-center w-30 pr4'>
                        <img className='h2 w2 mr2' src={image} alt='Cryptocurrency Logo' />
                        <h3 className='w5'>{ name }</h3>
                        <p className='ttu tc ml2'>{ symbol }</p>
                    </div>
                    <div className='coin-data flex tc justify-between w-70'>
                        <p className='coin-price w-10'>${price.toFixed(2)}</p>
                        <p className='coin-volume w-40'>{volume.toLocaleString()}</p>
                        <p className={priceChangePercent >= 0 ? 'green w-10' : 'red w-10' }>{priceChangePercent.toFixed(2)}%</p>
                        <p className='market-cap w-40'>${marketcap.toLocaleString()}</p>

                    </div>
                </div>
            </div>
        );
    
}


export default CoinOverview;
