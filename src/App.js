import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'> Personal Digital Assistant</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>

                        <div className='column is-3'>
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                Image={AlexaImage}
                                description="Alexa is a virtual personal assistant developed by Amazon. It can be activated by voice command and used to control smart home devices, play music, make phone calls, and provide information such as weather forecasts and news updates. Alexa is available on Amazon Echo devices and can also be integrated with third-party devices."

                            />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                Image={CortanaImage}
                                description="Cortana is a virtual personal assistant developed by Microsoft. It can be activated by voice command and can be used to perform a variety of tasks such as setting reminders, scheduling appointments, and answering questions. Cortana is available on Windows 10 devices and can also be integrated with Microsoft's Xbox gaming console."
                            />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                Image={SiriImage}
                                description="Siri is a virtual personal assistant developed by Apple. It can be activated by voice command and can be used to perform a variety of tasks such as sending text messages, making phone calls, setting reminders, and answering questions. Siri is available on all Apple devices such as iPhone, iPad, Mac, HomePod, and Apple Watch."
                            />
                        </div>
                    </div>
                </section>
            </div>



        </div>
    )
}

export default App;