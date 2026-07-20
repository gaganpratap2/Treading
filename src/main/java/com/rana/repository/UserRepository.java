package com.rana.repository;

import com.rana.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    static User findByEmail(String email);

}
