package com.rana.service;

import com.rana.model.Coin;
import com.rana.model.User;
import com.rana.model.Watchlist;

public interface WatchlistService{

    Watchlist findUserWatchlist(Long userId) throws Exception;
    Watchlist createWatchlist(User user);
    Watchlist findById(Long Id) throws Exception;

    Coin addItemToWatchlist(Coin coin , User user) throws Exception;

}
