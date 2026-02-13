import NavBar from './components/NavBar';
import Hero from './components/Hero';
const App = () => {
    return (
        <main className="bg-black">
            <NavBar />
            <Hero />
            {/* Other sections like Highlights will go here */}
        </main>
    )
}
export default App