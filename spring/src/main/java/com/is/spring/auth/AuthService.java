package com.is.spring.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.is.spring.jwt.JwtService;
import com.is.spring.usuarios.Rol;
import com.is.spring.usuarios.Usuario;
import com.is.spring.usuarios.UsuarioRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getDni(), request.getContrasenia()));
        UserDetails usuario=usuarioRepository.findByDni(request.getDni()).orElseThrow();
        String token=jwtService.getToken(usuario);
        return AuthResponse.builder()
            .token(token)
            .build();

    }
    public AuthResponse register(RegisterRequest request) {
        Usuario usuario = Usuario.builder()
                .nombreapellido(request.getNombreapellido())
                .telefono(request.getTelefono())
                .contrasenia(passwordEncoder.encode(request.getContrasenia()))
                .mail(request.getMail())
                .dni(request.getDni())
                .rol(Rol.Cliente)
                .build();

        usuarioRepository.save(usuario);

        return AuthResponse.builder()
                .token(jwtService.getToken(usuario))
                .build();
    }
}
