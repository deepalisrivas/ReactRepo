import React,{Component} from 'react';

import '../FAQ/Faq.css'

class faq extends Component {
    state = {
        message1 : "",
        message2 : "",
        message3 : "",
        message4 : "",
        message5 : "",
        message6 : "",
        message7 : "",
        message8 : "",
        message9 : "",
        message10 : "",
        message11 : "",
        message12 : "",
        message13 : "",

    }

    showAnswer1 = ()=>{
        this.setState({message1:"Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19."})
    } 
    showAnswer2 = ()=>{
        this.setState({message2:"The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention."})
    }
    showAnswer3 = ()=>{
        this.setState({message3:"People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick."})
    }
    showAnswer4 = ()=>{
        this.setState({message4:"Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water."})
    }
    showAnswer5 = ()=>{
        this.setState({message5:"For most people in most locations the risk of catching COVID-19 is still low. However, there are now places around the world (cities or areas) where the disease is spreading. For people living in, or visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce your risk of catching or spreading COVID-19."})
    }
    showAnswer6 = ()=>{
        this.setState({message6:"While we are still learning about how COVID-2019 affects people, older persons and persons with pre-existing medical conditions (such as high blood pressure, heart disease, lung disease, cancer or diabetes)  appear to develop serious illness more often than others. "})
    }
    showAnswer7 = ()=>{
        this.setState({message7:"No. Antibiotics do not work against viruses, they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. They should only be used as directed by a physician to treat a bacterial infection. "})
    }
    showAnswer8 = ()=>{
        this.setState({message8:"While some western, traditional or home remedies may provide comfort and alleviate symptoms of COVID-19, there is no evidence that current medicine can prevent or cure the disease. WHO does not recommend self-medication with any medicines, including antibiotics, as a prevention or cure for COVID-19. However, there are several ongoing clinical trials that include both western and traditional medicines. WHO will continue to provide updated information as soon as clinical findings are available."})
    }
    showAnswer9 = ()=>{
        this.setState({message9:"The “incubation period” means the time between catching the virus and beginning to have symptoms of the disease. Most estimates of the incubation period for COVID-19 range from 1-14 days, most commonly around five days. These estimates will be updated as more data become available."})
    }
    showAnswer10 = ()=>{
        this.setState({message10:"Coronaviruses are a large family of viruses that are common in animals. Occasionally, people get infected with these viruses which may then spread to other people. For example, SARS-CoV was associated with civet cats and MERS-CoV is transmitted by dromedary camels. Possible animal sources of COVID-19 have not yet been confirmed.  "})
    }
    showAnswer11 = ()=>{
        this.setState({message11:"It is not certain how long the virus that causes COVID-19 survives on surfaces, but it seems to behave like other coronaviruses. Studies suggest that coronaviruses (including preliminary information on the COVID-19 virus) may persist on surfaces for a few hours or up to several days. This may vary under different conditions (e.g. type of surface, temperature or humidity of the environment)."})
    }
    showAnswer12 = ()=>{
        this.setState({message12:"The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or speaks. These droplets are too heavy to hang in the air. They quickly fall on floors or surfaces. You can be infected by breathing in the virus if you are within 1 metre of a person who has COVID-19, or by touching a contaminated surface and then touching your eyes, nose or mouth before washing your hands."})
    }
    showAnswer13 = ()=>{
        this.setState({message13:"Yes. The likelihood of an infected person contaminating commercial goods is low and the risk of catching the virus that causes COVID-19 from a package that has been moved, travelled, and exposed to different conditions and temperature is also low. "})
    }
    render(){
        return(
            <div className="wrapper-faq">
                <div>
                    <h1>Frequently Asked Questions</h1>
                    <p>Here's all you need to know about the pandemic CORONAVIRUS DISEASE.</p>
                </div>
                <div className="QA">
                    <div>What is a coronavirus?</div><div><button class="FAQBtn" onClick={this.showAnswer1}>+</button></div>
                    
                </div>
                <div>{this.state.message1} </div>

                <div className="QA">
                    <div>What are the symptoms of COVID-19?</div><button class="FAQBtn" onClick={this.showAnswer2}>+</button>
                    
                </div>
                    <div>{this.state.message2} </div>
                <div className="QA">
                    <div>How does COVID-19 spread?</div><button class="FAQBtn" onClick={this.showAnswer3}>+</button>
                   
                </div>
                     <div>{this.state.message3} </div>
                <div className="QA">
                    <div>What can I do to protect myself and prevent the spread of disease?</div><button class="FAQBtn" onClick={this.showAnswer4}>+</button>
                   
                </div>
                    <div>{this.state.message4} </div> 
                 <div className="QA">
                    <div>How likely am I to catch COVID-19?</div><button class="FAQBtn" onClick={this.showAnswer5}>+</button>
                    
                </div>
                    <div>{this.state.message5} </div>
                <div className="QA">
                    <div>Who is at risk of developing severe illness?</div><button class="FAQBtn" onClick={this.showAnswer6}>+</button>
                    
                </div>
                    <div>{this.state.message6} </div>
                <div className="QA">
                    <div>Are antibiotics effective in preventing or treating the COVID-19?</div><button class="FAQBtn" onClick={this.showAnswer7}>+</button>
                   
                </div>
                    <div>{this.state.message7} </div>

                <div className="QA">
                    <div>Is there a vaccine, drug or treatment for COVID-19?</div><button class="FAQBtn" onClick={this.showAnswer8}>+</button>
                    
                </div>
                    <div>{this.state.message8} </div>
                <div className="QA">
                    <div>How long is the incubation period for COVID-19?</div><button class="FAQBtn" onClick={this.showAnswer9}>+</button>
                    
                </div>
                     <div>{this.state.message9} </div>
                <div className="QA">
                    <div>Can humans become infected with the COVID-19 from an animal source?</div><button class="FAQBtn" onClick={this.showAnswer10}>+</button>
                   
                </div>
                      <div>{this.state.message10} </div>
                <div className="QA">
                    <div>How long does the virus survive on surfaces?</div><button class="FAQBtn" onClick={this.showAnswer11}>+</button>
                   
                </div>
                     <div>{this.state.message11} </div>
                <div className="QA">
                    <div>Is COVID-19 airborne?</div><button class="FAQBtn" onClick={this.showAnswer12}>+</button>
                   
                </div>
                    <div>{this.state.message12} </div>
                <div className="QA">
                    <div>Is it safe to receive a package from any area where COVID-19 has been reported?</div><button class="FAQBtn" onClick={this.showAnswer13}>+</button>
                   
                </div>
                    <div>{this.state.message13} </div>
            
            
            
            </div>
        )
    }
}

export default faq