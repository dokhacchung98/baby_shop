package com.khacchung.babyshop.common.jwt;

import com.khacchung.babyshop.model.auth.CustomUserDetail;
import io.jsonwebtoken.*;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenProvider {
    private static Logger logger = Logger.getLogger(JwtTokenProvider.class);
    // Đoạn secret bí mật chỉ có server biết
    private final String JWT_SECRET = "Kje8HSldiS88aSoejkAwe";
    // Thời gian hiệu lực
    private final long JWT_EXPIRATION = 604800000l;

    // Tạo jwt từ thông tin user
    public String generateToken(CustomUserDetail customUserDetail) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION);
        // Tạo chuỗi json web token từ id của user
        return Jwts.builder()
                .setSubject(Integer.toString(customUserDetail.getUser().getId()))
                .setIssuedAt(expiryDate)
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET)
                .compact();
    }

    // Lấy thông tin user từ jwt
    public Integer getUserIdFromJWT(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(JWT_SECRET)
                .parseClaimsJws(token)
                .getBody();
        return Integer.parseInt(claims.getSubject());
    }

    public boolean validateToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(authToken);
            return true;
        } catch (MalformedJwtException ex) {
            logger.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            logger.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            logger.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            logger.error("JWT claims string is empty.");
        }
        return false;
    }
}
