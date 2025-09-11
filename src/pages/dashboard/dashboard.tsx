import { AuthContext } from '@/context/AuthContext';
import React from 'react'

export default function Dashboard() {

    const { logOut } = React.useContext(AuthContext);

    const handleLogOut = async () => {
        await logOut();
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors" onClick={handleLogOut}>
                    Cerrar sesión
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-semibold mb-4">React + Supabase + Zustand Auth Template</h2>
                <p className="text-gray-700 mb-4">
                    Este es un template para flujo de autenticación usando React, Supabase y Zustand.
                    Estás viendo esta página porque te has autenticado exitosamente.
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">👨‍💻 About Me</h2>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                    <li>🎓 Currently studying Software Engineering</li>
                    <li>🌎 From El Salvador 🇸🇻</li>
                    <li>🗣️ Bilingual (Spanish & English)</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">Connect with me</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                    <a
                        href="https://www.linkedin.com/in/kevin-rodr%C3%ADguez-b79b61217/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://www.instagram.com/kev_rodrguez/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-purple-700 transition-colors"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://github.com/kevRodrguez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}
