# Enigma: Lenguaje de Dominio Específico para Control de Accesos

Este proyecto es una página web descriptiva y un portafolio para el **Compilador Enigma**, desarrollado como parte del curso de Compiladores en la Universidad Rafael Landívar.

## ¿Qué es Enigma?

Enigma es un Lenguaje de Dominio Específico (DSL) diseñado para la gestión segura y eficiente de políticas de control de accesos empresariales, soportando modelos como RBAC (Control de Acceso Basado en Roles) y ABAC (Control de Acceso Basado en Atributos). Su sintaxis clara en español permite que administradores y auditores definan reglas de seguridad complejas sin necesidad de ser programadores expertos.

## Pipeline del Compilador

El compilador de Enigma consta de 5 fases principales:

1.  **Analizador Léxico (Scanner):** Convierte el código fuente en tokens, eliminando espacios y comentarios.
2.  **Analizador Sintáctico (Parser):** Verifica la gramática del código y construye el Árbol de Sintaxis Abstracta (AST).
3.  **Analizador Semántico:** Valida la coherencia de las reglas y aplica validaciones estrictas de tipos y existencia de entidades.
4.  **Tabla de Símbolos:** Estructura de datos central que mantiene el contexto de todas las declaraciones.
5.  **Generación de Código:** Exporta las políticas validadas a un formato JSON estándar.

## Características de la Web

Esta página web, construida con **React**, **Vite** y **Tailwind CSS**, presenta de forma estética y moderna las funcionalidades del compilador, incluyendo:

-   Estética Cyberpunk/Neon.
-   Animaciones con Framer Motion.
-   Descripción detallada de cada fase del compilador con snippets de código.
-   Sección de demostración del IDE desarrollado en PyQt6.

## Equipo de Desarrollo

-   Jordin García
-   Victor Chan
-   German Archila

## Tecnologías Utilizadas

-   **Frontend (Página Web):** React, Vite, Tailwind CSS, Lucide React, Framer Motion.
-   **Backend (Compilador):** Python, PyQt6 (para la GUI del IDE).

---

© 2026 Universidad Rafael Landívar - Facultad de Ingeniería.
