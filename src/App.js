import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <section class="hero is-info">
        <div class="hero-body">
          <p class="title">Personal Digital Assistants</p>
          <p class="subtitle">Welcome!!!</p>
        </div>
      </section>

      {/* <img src={AlexaImage} />
      <img src={CortanaImage} />
      <img src={SiriImage} /> */}

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="Amazons number onshot caller" />
            </div>
            <div className='column is-4'>
              <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} description="Corana for the old Microsoft loyal bits"/>
            </div>
            <div className='column is-4'>
              <ProfileCard title="Siri" handle="@siri01" image={SiriImage} description="Siri who, Apples pave the way for others"/>
            </div>
          </div>
        </section>
      </div>




    </div>
  );
}

export default App;
