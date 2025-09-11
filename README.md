# React + Supabase + Zustand — Auth Flow Template

Breve template para un flujo de autenticación usando React (Vite + TypeScript), Supabase y Zustand.

## Objetivo

Proveer un proyecto base que implementa el flujo de autenticación (login, registro, recuperación/actualización de contraseña, rutas protegidas) y un pequeño store centralizado con Zustand.

## Checklist de lo que incluye este README

- Requisitos previos
- Configuración de variables de entorno
- Cómo levantar el proyecto (desarrollo)
- Flujo de la aplicación (qué hace cada pieza)
- Archivos clave y su propósito
- Notas y pasos siguientes

## Requisitos previos

- Node.js (16+ recomendado) y npm o pnpm/yarn
- Cuenta y proyecto en Supabase

Nota: este repo usa Vite; las variables de entorno deben seguir la convención de Vite (prefijo VITE_)

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto duplicando el archivo `.env.example` e ingresando las variables:

```
VITE_SUPABASE_URL=https://<tu-proyecto>.supabase.co
VITE_SUPABASE_ANON_KEY=<tu-anon-key>
```

Asunción: el cliente Supabase en `src/lib/client.ts` lee `import.meta.env.VITE_SUPABASE_URL` y `import.meta.env.VITE_SUPABASE_ANON_KEY`.

## Instalar dependencias y ejecutar (macOS / zsh)

1. Instalar dependencias

```bash
npm install
# o: pnpm install
# o: yarn
```

2. Levantar servidor de desarrollo

```bash
npm run dev
# o: pnpm dev
# o: yarn dev
```

Abre <http://localhost:5173> (u otra URL que indique Vite) y prueba el flujo.

## Flujo de la aplicación (autenticación)

Resumen general:

- Al iniciar la app, `AuthProvider` (en `src/context/AuthContext.tsx`) inicializa el estado de autenticación:
 	- Llama a `supabase.auth.getSession()` para recuperar la sesión si existe.
 	- Se suscribe a `supabase.auth.onAuthStateChange` para sincronizar los cambios de sesión en tiempo real.
 	- Actualiza el store de Zustand (`src/store/useAuthStore.tsx`) con `session`, `isLoggedIn`, `isLoading`, `error`.

- Al iniciar sesión (`LoginForm`):
 	- El formulario llama `logIn` del contexto, que usa `supabase.auth.signInWithPassword`.
 	- Si el login es exitoso, la sesión se actualizará vía el listener `onAuthStateChange` y `AuthContext` navega a `/dashboard`.

- Cerrar sesión:
 	- `AuthContext.logOut` llama a `supabase.auth.signOut()`, limpia el store y redirige a `/login`.

- Rutas protegidas:
 	- `ProtectedRoute` (en `src/components/auth/ProtectedRoute.tsx`) muestra `LoadingScreen` mientras `isLoading` es true.
 	- Si no hay sesión válida redirige a `/login`.
 	- Si la sesión existe, renderiza los children protegidos (vía `<Outlet />`).

## Archivos clave y propósito

- `src/context/AuthContext.tsx` — Proveedor de autenticación. Inicializa sesión, escucha cambios, expone `logIn`, `logOut`, `clearError`, y estado.
- `src/store/useAuthStore.tsx` — Zustand store que mantiene `session`, `isLoggedIn`, `isLoading`, `error` y setters.
- `src/lib/client.ts` — Cliente Supabase (lee variables de entorno). (Comprueba este archivo para confirmar nombres de env si cambias la convención.)
- `src/components/auth/login-form.tsx` — Formulario de login que consume `AuthContext`.
- `src/components/auth/sign-up-form.tsx` — Formulario de registro (si está implementado en el repo).
- `src/components/auth/ProtectedRoute.tsx` — Componente para proteger rutas.
- `src/pages/dashboard/dashboard.tsx` — Página protegida de ejemplo.
- `src/App.tsx` — Rutas principales y envoltura del `AuthProvider`.

## Casos de uso y edge cases cubiertos

- Inicio de app con sesión válida o sin sesión.
- Manejo de estados de carga (isLoading) para evitar parpadeos o renderizar rutas protegidas antes de validar sesión.
- Errores de autenticación expuestos en el UI vía `error` en el store.

## Troubleshooting rápido

- Si al iniciar no se conecta con Supabase, revisa las variables en `.env` y que el proyecto de Supabase permita el dominio local.
- Si las rutas protegidas redirigen incorrectamente, abre la consola del navegador para ver logs del `AuthContext` (hay console.log en la inicialización y en los listeners).

## Buenas prácticas sugeridas (siguientes pasos)

- Añadir manejo de refresco de token si usas sesiones expirables y quieres UX ininterrumpida.
- Añadir tests unitarios para `AuthContext` y `ProtectedRoute`.
- Añadir documentación de endpoints o políticas de roles si el proyecto requiere autorización por rol.

## Autor

👨‍💻 **Kevin Rodríguez**

- 🎓 Estudiante de Ingeniería de Software
- 🌎 El Salvador 🇸🇻
- 🗣️ Bilingüe (Español e Inglés)

## 📫 Connecta Conmigo

<p align="center">
  <a href="https://www.linkedin.com/in/kevin-rodríguez-b79b61217/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://www.instagram.com/kev_rodrguez/" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
  </a>
</p>

## Licencia

MIT

---

Este template está disponible para uso público. Si lo encuentras útil, considera darle una estrella en GitHub o contactarme para sugerencias o mejoras.
