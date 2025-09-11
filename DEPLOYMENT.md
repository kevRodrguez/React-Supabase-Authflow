# Instrucciones de Despliegue

Este documento contiene instrucciones para desplegar el React + Supabase + Zustand Auth Template en diferentes plataformas.

## Despliegue en Vercel

1. Crea una cuenta en [Vercel](https://vercel.com) si aún no tienes una.
2. Conecta tu repositorio de GitHub con Vercel.
3. Configura las variables de entorno:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. En la configuración del proyecto:
   - Framework preset: Vite
   - Build command: `npm run build` (o `pnpm build` / `yarn build`)
   - Output directory: `dist`

## Despliegue en Netlify

1. Crea una cuenta en [Netlify](https://netlify.com) si aún no tienes una.
2. Conecta tu repositorio de GitHub con Netlify.
3. Configura las variables de entorno:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. En la configuración del proyecto:
   - Build command: `npm run build` (o `pnpm build` / `yarn build`)
   - Publish directory: `dist`

## Configuración de Supabase

### Permitir URLs de origen para autenticación

1. Ve a [Supabase Dashboard](https://app.supabase.io/)
2. Selecciona tu proyecto
3. Ve a Authentication > URL Configuration
4. Añade las URLs de tu sitio de producción y desarrollo (ej. `https://tu-app.vercel.app`, `http://localhost:5173`)

### Ejemplo de script para crear usuario de prueba

```js
// save as create-test-user.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY // ¡Usar la service role key, no anon key!

const supabase = createClient(supabaseUrl, supabaseKey)

async function createTestUser() {
  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email: 'test@example.com',
      password: 'password123',
      email_confirm: true // Auto-confirma el email
    })
    
    if (error) throw error
    console.log('Usuario de prueba creado:', data.user)
  } catch (err) {
    console.error('Error al crear usuario de prueba:', err.message)
  }
}

createTestUser()
```

Para ejecutar este script:

1. Guárdalo como `create-test-user.js`
2. Obtén tu `SUPABASE_SERVICE_ROLE_KEY` de la configuración de API de tu proyecto Supabase
3. Ejecuta: `VITE_SUPABASE_URL=https://tu-proyecto.supabase.co VITE_SUPABASE_SERVICE_ROLE_KEY=tu-key node -r esm create-test-user.js`

**Nota de seguridad**: Nunca expongas tu Service Role Key en el frontend. Úsala solo en scripts de administración o backend.
