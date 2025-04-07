import React from 'react';

function Market() {
  const coins = [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '$46,168.95', change: '-0.79%' },
    { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$3,480.04', change: '+10.55%' },
    { id: 3, name: 'Tether', symbol: 'USDT', price: '$1.00', change: '-0.01%' },
    { id: 4, name: 'BNB', symbol: 'BNB', price: '$443.56', change: '-1.24%' },
    { id: 5, name: 'Solana', symbol: 'SOL', price: '$56.23', change: '+2.45%' },
    { id: 6, name: 'XRP', symbol: 'XRP', price: '$0.89', change: '-0.12%' },
    { id: 7, name: 'Cardano', symbol: 'ADA', price: '$1.23', change: '+1.45%' },
    { id: 8, name: 'Avalanche', symbol: 'AVAX', price: '$89.45', change: '+3.12%' },
  ];

  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="container">
          <h1 className="h1">Market</h1>
        </div>
      </header>
      <main className="market-page">
        <div className="container">
          <h2 className="h2">All Coins</h2>
          <table className="market-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>24h Change</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr key={coin.id}>
                  <td>{coin.id}</td>
                  <td>{coin.name}</td>
                  <td>{coin.symbol}</td>
                  <td>{coin.price}</td>
                  <td className={coin.change.startsWith('+') ? 'green' : 'red'}>
                    {coin.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Market;