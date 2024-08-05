// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
      () => {
        container.current.innerHTML = '';
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "height": "600",
          "symbol": "NASDAQ:RELI",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "2",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  ); 

  return (
    <div className="tradingview-widget-container" style={{width:'100%'}} ref={container}>
      <div className="tradingview-widget-container__widget" style={{width:'100%'}}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
