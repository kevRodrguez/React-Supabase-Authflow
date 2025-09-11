export function LoadingScreen() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <h1 className="mt-4 text-xl font-semibold">Quint Accounting</h1>
                <p className="mt-2 text-sm text-muted-foreground">Cargando aplicación...</p>
            </div>
        </div>
    );
}
