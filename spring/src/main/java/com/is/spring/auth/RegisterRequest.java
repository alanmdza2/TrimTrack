package com.is.spring.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    String nombreapellido;
    String telefono;
    String mail;
    String contrasenia;
    String dni;
}
