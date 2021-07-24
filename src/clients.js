import './css/App.css'
import { Container, Grid} from 'semantic-ui-react';
import clientimage from './Images/client.svg';

export default function Clients (props) {
    return (
        <div className="white-bg-2 clients">
            <Container>
                <div className="text">
                    <span>OUR COLLABORATORS</span> 
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>       
                </div>
                <div className="text">
                    <span>OUR INVESTORS</span>     
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>
                    <div className="image-holder">
                        <img src={clientimage} />
                    </div>   
                </div>
            </Container>
        </div>
    )
}