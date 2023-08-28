 import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortonaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App()
{
    return(
        <div>            
            <section class="hero is-primary">
                 <div class="hero-body">
                    <p class="title">
                         Personal Digital Assistance
                    </p>
   
                 </div>
            </section>
            <div className='container'>
                <div className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title="Alexa" handle="@alexa99" imageSrc={AlexaImage}/>
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Cortana" handle="@cortana99" imageSrc={CortonaImage}/>
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Siri" handle="@siri99" imageSrc={SiriImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;