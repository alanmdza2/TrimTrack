package com.is.spring.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.is.spring.utils.SuccessResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping(value = "login")
    public ResponseEntity<SuccessResponse<AuthResponse>> login(@RequestBody LoginRequest request) {
        AuthResponse authResponse = authService.login(request);
        SuccessResponse<AuthResponse> successResponse = new SuccessResponse<>(200, authResponse);
        return ResponseEntity.ok(successResponse);
    }

    @PostMapping(value = "register")
    public ResponseEntity<SuccessResponse<AuthResponse>> register(@RequestBody RegisterRequest request) {
        AuthResponse authResponse = authService.register(request);
        SuccessResponse<AuthResponse> successResponse = new SuccessResponse<>(200, authResponse);
        return ResponseEntity.ok(successResponse);
    }
}