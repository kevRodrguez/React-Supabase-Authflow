import { AuthContext } from '@/context/AuthContext';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const kevinProfileImgUrl = 'https://media.licdn.com/dms/image/v2/D5603AQF1_fnIgzXWEQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727749747779?e=1760572800&v=beta&t=mnm0j-sySvQNCFtYRwRE2Ak7GLDbToetJ5NfJTqIC54';

export default function Dashboard() {


    const { logOut, session } = React.useContext(AuthContext);
    const user = session?.user;

    const handleLogOut = async () => {
        await logOut();
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            {/* Header/Navbar */}
            <nav className="bg-white dark:bg-slate-800 shadow-sm border-b sticky top-0 z-10 backdrop-blur-sm bg-opacity-80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                                React + Supabase Auth
                            </h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-slate-600 dark:text-slate-300">
                                {user?.email}
                            </span>
                            <Button
                                variant="destructive"
                                onClick={handleLogOut}
                                size="sm"
                                className="transition-all hover:scale-105"
                            >
                                Cerrar sesión
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Banner */}
                <div className="rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 p-1 mb-8">
                    <div className="rounded-md bg-white dark:bg-slate-800 p-5">
                        <div className="sm:flex sm:items-start sm:justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    ¡Bienvenido al Dashboard!
                                </h2>
                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Te has autenticado exitosamente utilizando Supabase + Zustand.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <Card className="md:col-span-1 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="h-32 w-full bg-gradient-to-r from-blue-400 to-teal-300"></div>
                        <div className="px-6 pb-6">
                            <div className="relative flex justify-center">
                                <img
                                    src={kevinProfileImgUrl}
                                    alt="Kevin Rodríguez"
                                    className="h-24 w-24 rounded-full border-4 border-white dark:border-slate-800 -mt-12 object-cover shadow-md"
                                />
                            </div>
                            <div className="text-center mt-3">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Kevin Rodríguez</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Software Engineer</p>
                            </div>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center space-x-3 text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">🎓</span>
                                    <span className="text-slate-600 dark:text-slate-300">Currently studying Software Engineering</span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">🌎</span>
                                    <span className="text-slate-600 dark:text-slate-300">From El Salvador 🇸🇻</span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">🗣️</span>
                                    <span className="text-slate-600 dark:text-slate-300">Bilingual (Spanish & English)</span>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-3 gap-2">
                                <a
                                    href="https://www.linkedin.com/in/kevin-rodr%C3%ADguez-b79b61217/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-10 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/kev_rodrguez/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-10 rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/kevRodrguez"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-10 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Card>

                    {/* Project Info */}
                    <Card className="md:col-span-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">React + Supabase + Zustand Auth Template</CardTitle>
                            <CardDescription>
                                Un punto de partida moderno para aplicaciones React con autenticación
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-medium text-slate-900 dark:text-white mb-2">Características principales</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-slate-600 dark:text-slate-300">Autenticación completa con Supabase</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-slate-600 dark:text-slate-300">Manejo de estado con Zustand</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-slate-600 dark:text-slate-300">Rutas protegidas y redirecciones inteligentes</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-slate-600 dark:text-slate-300">Componentes UI reutilizables con Shadcn</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-slate-900 dark:text-white mb-2">Flujos de autenticación</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="rounded-md bg-slate-50 dark:bg-slate-700/30 p-3">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-slate-900 dark:text-white">Login</h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">Autenticación con email/contraseña</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-md bg-slate-50 dark:bg-slate-700/30 p-3">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 rounded bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-slate-900 dark:text-white">Registro</h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">Creación de cuenta nueva</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-md bg-slate-50 dark:bg-slate-700/30 p-3">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 rounded bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-slate-900 dark:text-white">Contraseña olvidada</h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">Recuperación de acceso</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-md bg-slate-50 dark:bg-slate-700/30 p-3">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 rounded bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-slate-900 dark:text-white">Logout</h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">Cierre de sesión seguro</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                    </Card>
                </div>
            </div>
        </div>
    )
}
