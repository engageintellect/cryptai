## Free CoinGecko Endpoints

1. **Ping**

   - **Endpoint**: `GET /ping`
   - **Description**: Check API server status.
   - **Example**: `https://api.coingecko.com/api/v3/ping`

2. **Simple Price**

   - **Endpoint**: `GET /simple/price`
   - **Description**: Get current price of any cryptocurrency in various currencies.
   - **Example**: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`

3. **Coins List**

   - **Endpoint**: `GET /coins/list`
   - **Description**: Get a list of all supported coins.
   - **Example**: `https://api.coingecko.com/api/v3/coins/list`

   **Coins List by Rank**

   - **Example**: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`

4. **Coins Markets**

   - **Endpoint**: `GET /coins/markets`
   - **Description**: Get current data (price, market cap, volume) for a list of coins.
   - **Example**: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum`

5. **Coin Information**

   - **Endpoint**: `GET /coins/{id}`
   - **Description**: Get detailed information about a specific coin.
   - **Example**: `https://api.coingecko.com/api/v3/coins/bitcoin`

6. **Coin Market Chart**

   - **Endpoint**: `GET /coins/{id}/market_chart`
   - **Description**: Get historical market data (price, market cap, volume) for a coin.
   - **Example**: `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30`

7. **Coin Market Chart Range**

   - **Endpoint**: `GET /coins/{id}/market_chart/range`
   - **Description**: Get historical market data within a specific date range.
   - **Example**: `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1609459200&to=1612137600`

8. **Coin OHLC**

   - **Endpoint**: `GET /coins/{id}/ohlc`
   - **Description**: Get OHLC (Open, High, Low, Close) data for a coin.
   - **Example**: `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=30`

9. **Coin Tickers**

   - **Endpoint**: `GET /coins/{id}/tickers`
   - **Description**: Get tickers (trading pairs) for a specific coin.
   - **Example**: `https://api.coingecko.com/api/v3/coins/bitcoin/tickers`

10. **Coin History**

    - **Endpoint**: `GET /coins/{id}/history`
    - **Description**: Get historical data for a specific coin on a given date.
    - **Example**: `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-12-2020`

11. **Coin Market Chart by Contract**

    - **Endpoint**: `GET /coins/{id}/contract/{contract_address}/market_chart`
    - **Description**: Get historical market data for a token by contract address.
    - **Example**: `https://api.coingecko.com/api/v3/coins/ethereum/contract/0x1234567890abcdef1234567890abcdef12345678/market_chart?vs_currency=usd&days=30`

12. **Coin Market Chart Range by Contract**

    - **Endpoint**: `GET /coins/{id}/contract/{contract_address}/market_chart/range`
    - **Description**: Get historical market data within a specific date range for a token by contract address.
    - **Example**: `https://api.coingecko.com/api/v3/coins/ethereum/contract/0x1234567890abcdef1234567890abcdef12345678/market_chart/range?vs_currency=usd&from=1609459200&to=1612137600`

13. **Exchanges List**

    - **Endpoint**: `GET /exchanges`
    - **Description**: Get a list of all supported exchanges.
    - **Example**: `https://api.coingecko.com/api/v3/exchanges`

14. **Exchange Details**

    - **Endpoint**: `GET /exchanges/{id}`
    - **Description**: Get detailed information about a specific exchange.
    - **Example**: `https://api.coingecko.com/api/v3/exchanges/binance`

15. **Exchange Tickers**

    - **Endpoint**: `GET /exchanges/{id}/tickers`
    - **Description**: Get tickers for a specific exchange.
    - **Example**: `https://api.coingecko.com/api/v3/exchanges/binance/tickers`

16. **Global Data**

    - **Endpoint**: `GET /global`
    - **Description**: Get global cryptocurrency data.
    - **Example**: `https://api.coingecko.com/api/v3/global`

17. **Simple Supported vs Currencies**
    - **Endpoint**: `GET /simple/supported_vs_currencies`
    - **Description**: Get a list of all supported vs currencies.
    - **Example**: `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`
