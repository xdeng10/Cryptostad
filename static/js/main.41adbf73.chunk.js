(this.webpackJsonpcryptoexchange=this.webpackJsonpcryptoexchange||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},79:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(36),r=c.n(i),s=(c(42),c(2)),o=c(3),h=c(5),l=c(4),u=(c(43),c(16)),d=c(7),j=(c(44),c.p+"static/media/coinLogo.0662a067.png"),p=c(0),m=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsxs)("nav",{className:"nav-container",children:[Object(p.jsx)(u.b,{className:"logo-container",to:"/home",children:Object(p.jsxs)("div",{className:"logo-table",children:[Object(p.jsx)("img",{src:j,className:"logo-image",alt:"Logo"}),Object(p.jsx)("span",{className:"company-name",children:"Crytoexchange"})]})}),Object(p.jsxs)("div",{className:"menu-container v-mid w-80 tr",children:[Object(p.jsx)(u.b,{className:"page-name",to:"/cryptomarket",title:"CryptoMarket",children:"Crypto Market"}),Object(p.jsx)(u.b,{className:"page-name",to:"/about",title:"About",children:"About us"}),Object(p.jsx)(u.b,{className:"page-name",to:"/contact",title:"Contact",children:"Contact"}),Object(p.jsx)(u.b,{className:"page-name signin-button",to:"/Signin",title:"signin",children:"Sign in"})]})]})}}]),c}(a.Component),b=(c(51),function(){return Object(p.jsx)("main",{children:Object(p.jsx)("h1",{children:"HomePage"})})}),g=(c(52),function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsx)("main",{children:Object(p.jsx)("h1",{children:"About Us"})})}}]),c}(a.Component)),v=(c(53),function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsx)("main",{children:Object(p.jsx)("h1",{children:"Contact Us"})})}}]),c}(a.Component)),O=(c(54),c(6)),x=c(14),_=c.n(x),y=(c(73),function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.id,c=e.name,a=e.image,n=e.symbol,i=e.price,r=e.volume,s=e.priceChangePercent,o=e.marketcap,h=c+" logo";return Object(p.jsxs)("div",{className:"coin-row",children:[Object(p.jsx)("div",{className:"coin-logo",children:Object(p.jsx)("img",{src:a,alt:h})}),Object(p.jsx)(u.b,{className:"coin-name",to:"/coin/".concat(t),children:Object(p.jsx)("h3",{children:c})}),Object(p.jsx)("div",{className:"coin-sym",children:Object(p.jsx)("p",{children:n})}),Object(p.jsx)("div",{className:"coin-price",children:Object(p.jsx)("p",{children:i?"".concat(Number.parseFloat(i).toFixed(2)):"NaN"})}),Object(p.jsx)("div",{className:"coin-change",children:Object(p.jsx)("p",{className:s>=0?"price-green":"price-red",children:s?"".concat(Number.parseFloat(s).toFixed(2),"%"):"-"})}),Object(p.jsx)("div",{className:"coin-volume",children:Object(p.jsx)("p",{children:r?r.toLocaleString():"-"})}),Object(p.jsx)("div",{className:"coin-market-cap",children:Object(p.jsx)("p",{children:o?"$".concat(o.toLocaleString()):"-"})})]})}}]),c}(a.Component)),k=function(){return Object(p.jsx)("div",{className:"divLoader",children:Object(p.jsx)("svg",{className:"svgLoader",viewBox:"0 0 100 100",width:"2em",height:"2em",children:Object(p.jsx)("path",{stroke:"none",d:"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",fill:"#51CACC",transform:"rotate(179.719 50 51)",children:Object(p.jsx)("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 51;360 50 51",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})})})})},f=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(s.a)(this,c),(a=t.call(this,e)).state={coins:[],pageNumber:1,morePage:!0,prevY:0,search:"",order:"market_cap_desc",loading:!1},a}return Object(o.a)(c,[{key:"setCoins",value:function(e){this.setState({coins:e})}},{key:"setPageNumber",value:function(e){this.setState({pageNumber:e})}},{key:"setMorePage",value:function(e){this.setState({morePage:e})}},{key:"setPrevY",value:function(e){this.setState({prevY:e})}},{key:"setSearch",value:function(e){this.setState({search:e})}},{key:"setOrder",value:function(e){this.setState({order:e})}},{key:"setLoading",value:function(e){this.setState({loading:e})}},{key:"fetchMarketList",value:function(){var e=this;this.setLoading(!0),_.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=".concat(this.state.order,"&per_page=25&page=").concat(this.state.pageNumber,"&sparkline=false")).then((function(t){t.data===[]&&e.setMorePage(!1),e.setCoins([].concat(Object(O.a)(e.state.coins),Object(O.a)(t.data))),e.setLoading(!1)})).catch((function(e){alert(e)}))}},{key:"getFilteredCoins",value:function(){var e=this;return this.state.coins.filter((function(t){return t.name.toLowerCase().includes(e.state.search.toLowerCase())})).map((function(e){return Object(p.jsx)(y,{id:e.id,name:e.name,image:e.image,price:e.current_price,symbol:e.symbol,volume:e.total_volume,priceChangePercent:e.price_change_percentage_24h,marketcap:e.market_cap},e.id)}))}},{key:"waitloading",value:function(){return this.state.loading?Object(p.jsxs)("div",{className:"coin-row",children:[Object(p.jsx)("div",{className:"coin-logo",children:Object(p.jsx)(k,{})}),Object(p.jsx)("div",{className:"coin-name",children:Object(p.jsx)(k,{})}),Object(p.jsx)("div",{className:"coin-sym",children:Object(p.jsx)(k,{})}),Object(p.jsx)("div",{className:"coin-price",children:Object(p.jsx)(k,{})}),Object(p.jsx)("div",{className:"coin-volume",children:Object(p.jsx)(k,{})}),Object(p.jsx)("div",{className:"coin-change",children:Object(p.jsx)(k,{})}),Object(p.jsx)("div",{className:"coin-market-cap",children:Object(p.jsx)(k,{})})]}):Object(p.jsxs)("div",{className:"coin-row",children:[Object(p.jsx)("div",{className:"coin-logo"}),Object(p.jsx)("div",{className:"coin-name"}),Object(p.jsx)("div",{className:"coin-sym"}),Object(p.jsx)("div",{className:"coin-price"}),Object(p.jsx)("div",{className:"coin-volume"}),Object(p.jsx)("div",{className:"coin-change"}),Object(p.jsx)("div",{className:"coin-market-cap"})]})}},{key:"handleOrder",value:function(e){switch(e){case"market-cap":this.setOrder("market_cap_desc"===this.state.order?"market_cap_asc":"market_cap_desc");break;case"volume":this.setOrder("volume_desc"===this.state.order?"volume_asc":"volume_desc");break;default:this.setOrder("market_cap_asc")}}},{key:"handleObserver",value:function(e,t){var c=e[0].boundingClientRect.y;this.state.prevY>c&&(this.setPageNumber(this.state.pageNumber+1),this.fetchMarketList()),this.setPrevY(c)}},{key:"componentDidMount",value:function(){if(this.fetchMarketList(),this.state.morePage){this.observer=new IntersectionObserver(this.handleObserver.bind(this),{root:null,rootMargin:"0px",threshold:1}),this.observer.observe(this.loadingRef)}}},{key:"componentDidUpdate",value:function(e,t){this.state.order!==t.order&&(this.setCoins([]),this.setPageNumber(1),this.setPrevY(0),this.fetchMarketList())}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"CryptoMarket"}),Object(p.jsx)("form",{className:"search-bar-form",children:Object(p.jsx)("input",{className:"search-bar",type:"text",placeholder:" Search a currency",onChange:function(t){return e.setSearch(t.target.value)}})})]}),Object(p.jsx)("div",{className:"market-container",children:Object(p.jsxs)("div",{className:"market-table",children:[Object(p.jsxs)("div",{className:"coin-row coin-heading",children:[Object(p.jsx)("div",{className:"coin-logo"}),Object(p.jsx)("div",{className:"coin-name",children:Object(p.jsx)("h3",{children:"Name"})}),Object(p.jsx)("div",{className:"coin-sym",children:Object(p.jsx)("p",{children:"SYM"})}),Object(p.jsx)("div",{className:"coin-price",children:Object(p.jsx)("p",{children:"Price"})}),Object(p.jsx)("div",{className:"coin-change",children:Object(p.jsx)("p",{children:"Change(24h)"})}),Object(p.jsx)("div",{className:"coin-volume cursor-pointer",onClick:function(){return e.handleOrder("volume")},children:Object(p.jsx)("p",{children:"Volume \u2195"})}),Object(p.jsx)("div",{className:"coin-market-cap cursor-pointer",onClick:function(){return e.handleOrder("market-cap")},children:Object(p.jsx)("p",{children:"Market Cap \u2195"})})]}),this.getFilteredCoins(),this.waitloading(),Object(p.jsx)("div",{ref:function(t){return e.loadingRef=t},children:Object(p.jsx)("span",{children:"\xa0"})})]})})]})}}]),c}(a.Component),C=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsx)("main",{children:Object(p.jsx)(f,{})})}}]),c}(a.Component),N=(c(74),c(75),function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"convertNumToPrice",value:function(e){return Number.parseFloat(e).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"convertNumToPerc",value:function(e){return Number.parseFloat(e).toFixed(2)}},{key:"incDecArrow",value:function(e){return e>=0?Object(p.jsx)("span",{children:"\u25b2"}):Object(p.jsx)("span",{children:"\u25bc"})}},{key:"getTimeZone",value:function(e){var t=e.last_updated&&e.last_updated.toLocaleString(),c=new Date(t);return" (GMT".concat(c.getTimezoneOffset()/-60,")")}},{key:"getCoinLastUpdate",value:function(e){var t=e.last_updated&&e.last_updated.toLocaleString(),c=new Date(t);return Object(p.jsxs)("span",{children:[c.getFullYear(),"/",c.getMonth(),"/",c.getDate()," ",Object(p.jsx)("br",{})," ",c.getHours(),":",c.getMinutes(),":",c.getSeconds()]})}},{key:"getCoinPriceChange",value:function(e){var t=e.price_change_24h_in_currency&&e.price_change_24h_in_currency.cad,c=e.price_change_percentage_24h;return t&&c?Object(p.jsxs)("span",{className:t>=0?"price-green":"price-red",children:[this.incDecArrow(t)," ",this.convertNumToPrice(t),"$",Object(p.jsx)("br",{}),this.incDecArrow(c)," ",this.convertNumToPerc(c),"%"]}):Object(p.jsxs)("span",{children:[" - ",Object(p.jsx)("br",{})," -"]})}},{key:"getCoin24LowHigh",value:function(e){var t=e.low_24h&&e.low_24h.cad,c=e.high_24h&&e.high_24h.cad;return Object(p.jsxs)("span",{children:[t?this.convertNumToPrice(t)+"$":"-"," ",Object(p.jsx)("br",{})," ",c?this.convertNumToPrice(c)+"$":"-"]})}},{key:"getCoin24mc",value:function(e){var t=e.market_cap_change_24h_in_currency&&e.market_cap_change_24h_in_currency.cad,c=e.market_cap_change_percentage_24h;return t&&c?Object(p.jsxs)("span",{className:t>=0?"price-green":"price-red",children:[this.incDecArrow(t)," ",this.convertNumToPrice(t),"$",Object(p.jsx)("br",{}),this.incDecArrow(c)," ",this.convertNumToPerc(c),"%"]}):Object(p.jsxs)("span",{children:[" - ",Object(p.jsx)("br",{})," - "]})}},{key:"getCoinATLowHigh",value:function(e){var t=e.atl&&e.atl.cad,c=e.ath&&e.ath.cad;return Object(p.jsxs)("span",{children:[t?this.convertNumToPrice(t)+"$":"-"," ",Object(p.jsx)("br",{})," ",c?this.convertNumToPrice(c)+"$":"-"]})}},{key:"getCoinMarketcap",value:function(e){var t=e.market_cap&&e.market_cap.cad;return Object(p.jsx)("span",{children:t?this.convertNumToPrice(t)+"$":"-"})}},{key:"getCoinTotalVolume",value:function(e){var t=e.total_volume&&e.total_volume.cad;return Object(p.jsx)("span",{children:t?this.convertNumToPrice(t)+"$":"-"})}},{key:"getCoinCircSupply",value:function(e){var t=e.circulating_supply&&e.circulating_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return Object(p.jsx)("span",{children:t||"-"})}},{key:"getCoinTotalSupply",value:function(e){var t=e.total_supply&&e.total_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return Object(p.jsx)("span",{children:t||"-"})}},{key:"render",value:function(){var e=this.props,t=(e.currency,e.coin_market_data);return Object(p.jsx)("table",{className:"coin-info-summary",children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"24h Price Change"}),Object(p.jsx)("td",{children:this.getCoinPriceChange(t)})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"24h Low/High"}),Object(p.jsx)("td",{children:this.getCoin24LowHigh(t)})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"24h Market Cap"}),Object(p.jsx)("td",{children:this.getCoin24mc(t)})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"All-Time Low/High"}),Object(p.jsx)("td",{children:this.getCoinATLowHigh(t)})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Market Cap"}),Object(p.jsx)("td",{children:this.getCoinMarketcap(t)})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Total Volume"}),Object(p.jsx)("td",{children:this.getCoinTotalVolume(t)})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Circulating Supply"}),Object(p.jsx)("td",{children:this.getCoinCircSupply(t)})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Total Supply"}),Object(p.jsx)("td",{children:this.getCoinTotalSupply(t)})]}),Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:["Last Updated ",this.getTimeZone(t)]}),Object(p.jsx)("td",{children:this.getCoinLastUpdate(t)})]})]})})}}]),c}(a.Component)),D=(c(76),c.p+"static/media/three-dots.b0504d96.svg"),P=c(19),w=(c(77),function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(s.a)(this,c),(a=t.call(this,e)).chartRef=n.a.createRef(),a}return Object(o.a)(c,[{key:"getTimeData",value:function(e){return e.map((function(e){return e[0]}))}},{key:"getValueData",value:function(e){return e.map((function(e){return parseFloat(e[1]).toFixed(2)}))}},{key:"getVolumeYMax",value:function(){return Math.max.apply(Math,Object(O.a)(this.props.chartPriceData.total_volumes.map((function(e){return e[1]}))))}},{key:"getPriceYMax",value:function(){return Math.max.apply(Math,Object(O.a)(this.props.chartPriceData.prices.map((function(e){return e[1]}))))}},{key:"getPriceYMin",value:function(){return Math.min.apply(Math,Object(O.a)(this.props.chartPriceData.prices.map((function(e){return e[1]}))))}},{key:"convertNumToPrice",value:function(e){return Number.parseFloat(e).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"createHistoryChart",value:function(){this.myChart=new P.a(this.chartRef.current,{data:{labels:this.getTimeData(this.props.chartPriceData.prices),datasets:[{label:"Price",data:this.getValueData(this.props.chartPriceData.prices),type:"line",backgroundColor:"".concat(this.props.fluctuationColor),borderColor:"".concat(this.props.fluctuationColor),borderWidth:1,pointRadius:0,pointHitRadius:10,pointHoverRadius:7,pointHoverBorderColor:"rgba(255, 255, 255, 0.51)",pointHoverBorderWidth:"5",pointHoverBackgroundColor:"".concat(this.props.fluctuationColor)},{label:"Volume",data:this.getValueData(this.props.chartPriceData.total_volumes),type:"bar",backgroundColor:"rgba(0, 0, 80, 0.30)",hoverBackgroundColor:"rgba(0, 0, 80, 0.90)",yAxisID:"volume-y-axis",barThickness:4,barPercentage:1}]},options:{scales:{x:{ticks:{maxTicksLimit:12},grid:{display:!1},type:"time",time:{unit:"".concat(this.props.timeUnit)}},y:{ticks:{callback:function(e,t,c){return"$".concat(Number.parseFloat(e).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}},suggestedMin:"".concat(this.getPriceYMin()-.15*(this.getPriceYMax()-this.getPriceYMin())),suggestedMax:"".concat(this.getPriceYMax()+.05*(this.getPriceYMax()-this.getPriceYMin()))},"volume-y-axis":{position:"right",grid:{display:!1},display:!1,suggestedMax:"".concat(6*this.getVolumeYMax())}},lineHeightAnnotation:{always:!0,hover:!1,lineWeight:1.5},animation:{duration:2e3},maintainAspectRatio:!1,responsive:!0,plugins:{legend:{display:!1},tooltip:{caretSize:0,callbacks:{label:function(e){var t=e.parsed.y;return"$".concat(Number.parseFloat(t).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}}}},interaction:{mode:"index",intersect:!0}}})}},{key:"componentDidMount",value:function(){P.a.register.apply(P.a,Object(O.a)(P.c)),this.createHistoryChart()}},{key:"componentDidUpdate",value:function(e,t){this.props.chartPriceData!==e.chartPriceData&&(this.myChart.destroy(),this.createHistoryChart())}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"history-chart",children:Object(p.jsx)("canvas",{id:"myChart",ref:this.chartRef,width:"100%",height:"75%"})})}}]),c}(a.Component)),S=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(s.a)(this,c),(a=t.call(this,e)).state={coinID:a.props.coinID,currency:"cad",coinChartData1d:[],coinChartData1w:[],coinChartData1m:[],coinChartData1y:[],coinChartDataMax:[],timeInterval:"1d",chartLoading:!0},a}return Object(o.a)(c,[{key:"setCoinID",value:function(e){this.setState({coinID:e})}},{key:"setCurrency",value:function(e){this.setState({currency:e})}},{key:"setCoinChartData",value:function(e,t,c,a,n){this.setState({coinChartData1d:e}),this.setState({coinChartData1w:t}),this.setState({coinChartData1m:c}),this.setState({coinChartData1y:a}),this.setState({coinChartDataMax:n})}},{key:"setTimeInterval",value:function(e){this.setState({timeInterval:e})}},{key:"setChartLoading",value:function(e){this.setState({chartLoading:e})}},{key:"fetchCoinChart",value:function(){var e=this;this.setChartLoading(!0);var t=_.a.get("https://api.coingecko.com/api/v3/coins/".concat(this.state.coinID,"/market_chart?vs_currency=").concat(this.state.currency,"&days=1")),c=_.a.get("https://api.coingecko.com/api/v3/coins/".concat(this.state.coinID,"/market_chart?vs_currency=").concat(this.state.currency,"&days=7")),a=_.a.get("https://api.coingecko.com/api/v3/coins/".concat(this.state.coinID,"/market_chart?vs_currency=").concat(this.state.currency,"&days=30")),n=_.a.get("https://api.coingecko.com/api/v3/coins/".concat(this.state.coinID,"/market_chart?vs_currency=").concat(this.state.currency,"&days=365")),i=_.a.get("https://api.coingecko.com/api/v3/coins/".concat(this.state.coinID,"/market_chart?vs_currency=").concat(this.state.currency,"&days=max"));_.a.all([t,c,a,n,i]).then((function(t){e.setCoinChartData(t[0].data,t[1].data,t[2].data,t[3].data,t[4].data),e.setChartLoading(!1)})).catch((function(e){alert(e)}))}},{key:"waitChartLoading",value:function(){return Object(p.jsx)("img",{width:"10%",src:D,alt:"Loading..."})}},{key:"convertNumToPrice",value:function(e){return Number.parseFloat(e).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"convertNumToPerc",value:function(e){return Number.parseFloat(e).toFixed(2)}},{key:"incDecArrow",value:function(e){return e>=0?Object(p.jsx)("span",{children:"\u25b2"}):Object(p.jsx)("span",{children:"\u25bc"})}},{key:"getCoinPriceChange",value:function(){var e=this.props.coin_market_data.price_change_24h_in_currency,t=this.props.coin_market_data.price_change_percentage_24h;switch(this.state.timeInterval){case"1d":e=this.props.coin_market_data.price_change_24h_in_currency,t=this.props.coin_market_data.price_change_percentage_24h;break;case"1w":e=this.props.coin_market_data.price_change_percentage_7d_in_currency,t=this.props.coin_market_data.price_change_percentage_7d;break;case"1m":e=this.props.coin_market_data.price_change_percentage_30d_in_currency,t=this.props.coin_market_data.price_change_percentage_30d;break;case"1y":e=this.props.coin_market_data.price_change_percentage_1y_in_currency,t=this.props.coin_market_data.price_change_percentage_1y;break;case"max":e=!1,t=!1;break;default:e=this.props.coin_market_data.price_change_24h_in_currency,t=this.props.coin_market_data.price_change_percentage_24h}var c=e&&e.cad,a=t;return c&&a?Object(p.jsxs)("span",{className:c>=0?"price-green":"price-red",children:[this.incDecArrow(c)," ",this.convertNumToPrice(c),"$ \xa0\xa0",this.incDecArrow(a)," ",this.convertNumToPerc(a),"%"]}):Object(p.jsx)("span",{children:" - \xa0\xa0  -"})}},{key:"getIntervalChartData",value:function(){switch(this.state.timeInterval){case"1d":return this.state.coinChartData1d;case"1w":return this.state.coinChartData1w;case"1m":return this.state.coinChartData1m;case"1y":return this.state.coinChartData1y;case"max":return this.state.coinChartDataMax;default:return this.state.coinChartData1d}}},{key:"getFluctuationColor",value:function(){var e=this.props.coin_market_data.price_change_24h_in_currency;switch(this.state.timeInterval){case"1d":e=this.props.coin_market_data.price_change_24h_in_currency;break;case"1w":e=this.props.coin_market_data.price_change_percentage_7d_in_currency;break;case"1m":e=this.props.coin_market_data.price_change_percentage_30d_in_currency;break;case"1y":e=this.props.coin_market_data.price_change_percentage_1y_in_currency;break;case"max":e=!1;break;default:e=this.props.coin_market_data.price_change_24h_in_currency}return(e&&e.cad)<0?"red":"green"}},{key:"getTimeUnit",value:function(){switch(this.state.timeInterval){case"1d":return"hour";case"1w":case"1m":return"day";case"1y":case"max":return"month";default:return"hour"}}},{key:"componentDidMount",value:function(){this.fetchCoinChart()}},{key:"render",value:function(){var e=this;return this.state.chartLoading?Object(p.jsx)("div",{className:"coin-info-graph",children:this.waitChartLoading()}):Object(p.jsxs)("div",{className:"coin-info-graph",children:[Object(p.jsxs)("div",{className:"chart-header",children:[Object(p.jsxs)("div",{className:"time-interval-selector",children:[Object(p.jsx)("button",{onClick:function(){return e.setTimeInterval("1d")},className:"1d"===this.state.timeInterval?"white":"",children:"24h"}),Object(p.jsx)("button",{onClick:function(){return e.setTimeInterval("1w")},className:"1w"===this.state.timeInterval?"white":"",children:"1w"}),Object(p.jsx)("button",{onClick:function(){return e.setTimeInterval("1m")},className:"1m"===this.state.timeInterval?"white":"",children:"1m"}),Object(p.jsx)("button",{onClick:function(){return e.setTimeInterval("1y")},className:"1y"===this.state.timeInterval?"white":"",children:"1y"}),Object(p.jsx)("button",{onClick:function(){return e.setTimeInterval("max")},className:"max"===this.state.timeInterval?"white":"",children:"max"})]}),Object(p.jsx)("div",{className:"price-fluctuation",children:this.getCoinPriceChange()})]}),Object(p.jsx)(w,{coinID:this.state.coinID,chartPriceData:this.getIntervalChartData(),fluctuationColor:this.getFluctuationColor(),timeUnit:this.getTimeUnit()})]})}}]),c}(a.Component),T=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(s.a)(this,c),(a=t.call(this,e)).state={coinID:"",currency:"cad",coin:{},coin_market_data:{},loading:!1},a}return Object(o.a)(c,[{key:"setCoinID",value:function(e){this.setState({coinID:e})}},{key:"setCurrency",value:function(e){this.setState({currency:e})}},{key:"setCoin",value:function(e){this.setState({coin:e})}},{key:"setCoin_market_data",value:function(e){this.setState({coin_market_data:e})}},{key:"setLoading",value:function(e){this.setState({loading:e})}},{key:"fetchCoinInfo",value:function(){var e=this;this.setLoading(!0),_.a.get("https://api.coingecko.com/api/v3/coins/".concat(this.state.coinID,"?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true")).then((function(t){e.setCoin(t.data),e.setCoin_market_data(e.state.coin.market_data),e.setLoading(!1)})).catch((function(e){alert(e)}))}},{key:"convertNumToPrice",value:function(e){return Number.parseFloat(e).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"convertNumToPerc",value:function(e){return Number.parseFloat(e).toFixed(2)}},{key:"incDecArrow",value:function(e){return e>=0?Object(p.jsx)("span",{children:"\u25b2"}):Object(p.jsx)("span",{children:"\u25bc"})}},{key:"getCoinLogoAlt",value:function(){return this.state.coin.name+" Logo"}},{key:"getCoinSymbol",value:function(){return this.state.coin.symbol?this.state.coin.symbol&&this.state.coin.symbol.toUpperCase():"-"}},{key:"getCoinCurrPrice",value:function(){var e=this.state.coin_market_data.current_price&&this.state.coin_market_data.current_price.cad;return e?this.convertNumToPrice(e):"NaN"}},{key:"getPriceChange24",value:function(){var e=this.state.coin_market_data.price_change_24h_in_currency&&this.state.coin_market_data.price_change_24h_in_currency.cad,t=this.state.coin_market_data.price_change_percentage_24h;return e&&t?Object(p.jsxs)("span",{className:e>=0?"coin-price-change price-green":"coin-price-change price-red",children:[this.incDecArrow(e)," ",this.convertNumToPerc(t),"%"]}):Object(p.jsx)("span",{className:"coin-price-change",children:" - "})}},{key:"componentDidMount",value:function(){this.setCoinID(this.props.match.params.cryptoid)}},{key:"componentDidUpdate",value:function(e,t){this.state.coinID!==t.coinID&&this.fetchCoinInfo()}},{key:"render",value:function(){return Object(p.jsxs)("main",{children:[Object(p.jsx)("div",{className:"coin-header-container",children:Object(p.jsxs)("div",{className:"coin-header",children:[Object(p.jsxs)("div",{className:"coin-title",children:[Object(p.jsx)("img",{className:"coin-logo",src:this.state.coin.image&&this.state.coin.image.large,alt:this.getCoinLogoAlt()}),Object(p.jsx)("span",{className:"coin-name",children:this.state.coin.name}),Object(p.jsx)("span",{className:"coin-symbol",children:this.getCoinSymbol()}),this.getPriceChange24()]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"add-watchlist",children:"\ud83d\udd14 Add to Watchlist"})})]})}),Object(p.jsx)("div",{className:"coin-subheader-container",children:Object(p.jsxs)("div",{className:"coin-subheader",children:[Object(p.jsx)("span",{className:"coin-currency",children:"CA"}),Object(p.jsxs)("span",{className:"coin-price",children:[" ",this.getCoinCurrPrice(),"$"]})]})}),Object(p.jsx)("div",{className:"coin-info-container",children:Object(p.jsxs)("div",{className:"coin-info",children:[Object(p.jsx)(N,{currency:this.state.currency,coin_market_data:this.state.coin_market_data}),Object(p.jsx)(S,{coinID:this.props.match.params.cryptoid,coin_market_data:this.state.coin_market_data})]})})]})}}]),c}(a.Component),M=Object(d.f)(T),I=(c(79),function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsx)("main",{children:Object(p.jsx)("h1",{children:"Signin"})})}}]),c}(a.Component)),L=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(m,{}),Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{path:"/",exact:!0,component:C}),Object(p.jsx)(d.a,{path:"/CryptoExchange",component:C}),Object(p.jsx)(d.a,{path:"/home",component:b}),Object(p.jsx)(d.a,{path:"/about",component:g}),Object(p.jsx)(d.a,{path:"/contact",component:v}),Object(p.jsx)(d.a,{path:"/cryptomarket",component:C}),Object(p.jsx)(d.a,{path:"/coin/:cryptoid",component:M}),Object(p.jsx)(d.a,{path:"/signin",component:I})]})]})})}}]),c}(a.Component),F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};c(80);r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),F()}},[[81,1,2]]]);
//# sourceMappingURL=main.41adbf73.chunk.js.map