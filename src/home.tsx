
import { Button } from './components/ui/button'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();
    return (
        <div>
            este es el home

            <Button onClick={() => navigate('/login')}>Sign in</Button>
        </div>
    )
}
