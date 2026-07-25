package com.rana.repository;

import com.rana.model.User;
import com.rana.model.Watchlist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WatchlistRepository extends JpaRepository<Watchlist , Long> {

    Watchlist findByUserId(Long userId);
}
