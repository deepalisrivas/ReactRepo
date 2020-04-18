import React ,{Component} from 'react';
import  './Country-section.css';
import axios from 'axios';
import usa from '../../../assets/usa.svg';
import uk from '../../../assets/uk.svg';
import italy from '../../../assets/italy.svg';
import germany from '../../../assets/germany.svg';
import china from '../../../assets/china.svg';
import turkey from '../../../assets/turkey.svg';
import india from '../../../assets/india.svg';
import iran from '../../../assets/iran.svg';
import switzerland from '../../../assets/switzerland.svg';
import spain from '../../../assets/spain.svg';
import up from '../../../assets/Up.svg';


class CountrySection extends Component{
    state = {
        countries: [],
        search:null
    }
    
    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
      }

    componentDidMount(){
        axios.get('https://api.covid19api.com/summary')
        .then(response => {
            const countries = response.data.Countries
            this.setState({countries});
            
        })
        .catch(error=>{"Something went wrong!"})
    }

   
    render(){
        const countriesImage = [usa,uk,italy,china,spain,germany,iran,india,switzerland,turkey]
        const data = this.state.countries.filter((item)=>
          {
            if(this.state.search == null)
                return item
            else if(item.Country.toLowerCase().includes(this.state.search.toLowerCase()))
            {
                return item
            }
          }) .map((item,index)=>
          {
            
        return(
             <div className="country-block" key={item.Country}>
                <div className="sub-country-block">
                         <img src={countriesImage[index]} className="flags" alt={item.Country} />
                         <h5>{item.Country}</h5>
                    <div className="arrow"><img src={up} alt="danger"/></div>
                    
                </div>
                <div className="country-data" >{item.TotalConfirmed} Affected {item.TotalRecovered} Recovered</div>
             </div>
        )})
        return (
            
                <div className="content">
                
                <div className="scrollbar" id="style-3">
                
                <input type="text" placeholder="Search Location" class="searchbar" onChange={(e)=>this.searchSpace(e)} />
                     {data}
                    
                     
                     </div>
                </div>
        )
    }
}

export default CountrySection