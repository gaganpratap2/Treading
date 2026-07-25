package com.rana.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import javax.crypto.SecretKey;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class JwtProvider {

    private static jwtConstant JwtConstant;
    private static SecretKey key =
            Keys.hmacShaKeyFor(jwtConstant.SECRETE_KEY.getBytes());

    public static String generateToken(Authentication auth) {

        Collection<? extends GrantedAuthority> authorities =
                auth.getAuthorities();

        String roles = populateAuthorities(authorities);

        return Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime()+86400000))
        .claim("email" , auth.getName())
                .claim("authorities" , roles)
                .compact();
    }

    private static String populateAuthorities(
            Collection<? extends GrantedAuthority> authorities) {

        Set<String> auth = new HashSet<>();

        for (GrantedAuthority ga : authorities) {
            auth.add(ga.getAuthority());
        }

        return String.join(",", auth);
    }
}


