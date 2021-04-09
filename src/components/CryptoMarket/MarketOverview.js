import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './MarketOverview.css';
import CoinOverview from './CoinOverview';


const MarketOverview = () => {

        const [coins, setCoins] = useState([]);
        const [search, setSearch] = useState('');

        useEffect(() => {
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=25&page=1&sparkline=true')
                .then(response =>{
                    setCoins(response.data);
                }).catch(error => alert("Error!", error));
        }, []);

        const handlerChange = event => {
            setSearch(event.target.value);

        }

        const filteredCoins = coins.filter(coin => 
            coin.name.toLowerCase().includes(search.toLowerCase())
        )

        return(
            <div>
                <div>
                    
                    <form className='mb3' >
                        <h2>Search a currency</h2>
                        <input className='search-bar h2 w5 br3 ba b--navy bw1' type="text" placeholder="Search" onChange={handlerChange}/>

                    </form>
                </div>
                
                <div>
                <div className='coin-container flex justify-center'>
                    <div className='coin-row flex flex-row-ns justify-start items-center h3 w-80 bb'>
                    <div className='coin flex items-center w-30 pr4'>
                            <p className='h2 w2 mr2'></p>
                            <h3 className='w5'>Name</h3>
                            <p className='ttu tc ml2'>Symbol</p>
                        </div>
                        <div className='coin-data flex tc justify-between w-70 v-mid'>
                            <p className='coin-price w-10 v-mid'>Price</p>
                            <p className='coin-volume w-40 v-mid'>Volume(24h)</p>
                            <p className="w-10 v-mid">Change</p>
                            <p className='market-cap w-40 v-mid'>Market Cap</p>
                    </div>
                    </div>
                    </div>
                    {filteredCoins.map(coin => {
                        return(
                            <CoinOverview key={coin.id} name={coin.name} image={coin.image} price={coin.current_price} symbol={coin.symbol} volume={coin.total_volume} priceChangePercent={coin.price_change_percentage_24h} marketcap={coin.market_cap}/>
                        );
                    })}
                </div>

            </div>

        );
    
}


export default MarketOverview;
