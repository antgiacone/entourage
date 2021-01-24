import { withController } from 'react-scroll-parallax';
import {Component} from 'react';

 
class QbImage extends Component {
    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    };
 
    render() {
        return <img src={this.props.src} onLoad={this.handleLoad} />;
    }
}
 
export default withController(QbImage);