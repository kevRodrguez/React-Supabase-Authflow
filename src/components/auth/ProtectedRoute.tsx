import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import { LoadingScreen } from '@/components/LoadingScreen';

export function ProtectedRoute() {
    const { session, isLoading, isLoggedIn } = useContext(AuthContext);

    // Mostrar loading mientras se verifica cualquier estado inicial
    if (isLoading) {
        return <LoadingScreen />;
    }

    // Si no hay sesión válida, redirigir al login
    if (!session || !isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    // Si está autenticado, mostrar el contenido protegido
    return <Outlet />;
}
