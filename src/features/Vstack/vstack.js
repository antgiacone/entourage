import { ParallaxProvider } from 'react-scroll-parallax';
 
class Vstack extends Component {
    render() {
        return (
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        );
    }
}