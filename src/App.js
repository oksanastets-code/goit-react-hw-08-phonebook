// import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';

export const App = () => {
    return (
        <Container>
            <h1>Mamma Mia!!!</h1>
            {/* <AppBar />
            
                <Routes>
                    <Route path="/" element={<HomeView />}></Route>
                    <Route path="/movies/:filmId" element={<FilmDetailsView />}>
                       
                    </Route>
                    <Route path="/movies" element={<MoviesView />}></Route>
                    <Route path="*" element={<NotFoundView />}></Route>
                </Routes>
             */}
        </Container>
    );
};