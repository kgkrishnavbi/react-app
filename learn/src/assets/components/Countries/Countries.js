import React from 'react'
import './Countries.scss'

import CData from './Countries.json'
import {_initCountries, loadMoreCountries, sortAlphabetically, sortNumerically} from './CountriesUtils'
import countryCard from '../../views/countryCard/countryCard'
import countryHeader from '../../views/countryHeader/countryHeader'

class Countries extends React.Component {

    loadMoreCountries = () => {loadMoreCountries(this)}

    constructor() {
        super();

        this.state = {
            "allCountries": [],
            "visibleCountries": [],
            "countriesVisibleOnLoad": 6,

            "countryListError": false,
            "countriesSortedAlph": true,
            "countriesNum": false,

            "buttons": [
                { "text": "Sort A-Z", "callback": () => sortAlphabetically(this) },
                { "text": "Sort by Population", "callback": () => sortNumerically(this) }
            ]
        }

        _initCountries(this)
    }

    render() {
        return(
            <section className="countries">
                <h1>{CData.title}</h1>
                {countryHeader({ 
                    "buttons": this.state.buttons 
                })}
                <div className="countries__country-list">
                    {this.state.visibleCountries.map( (country, index) => {
                        return <React.Fragment key={index}>
                            {countryCard({
                                imgSrc: country.flag,
                                name: country.name,
                                population: country.population,
                                buttonText: "View",
                                callback: null
                            })}
                        </React.Fragment>
                    })}
                    {this.state.allCountries.length > this.state.visibleCountries.length &&
                    (<button className="button button--primary button--load" onClick={this.loadMoreCountries}>{CData.load_button}</button>)
                    }
                </div>
            </section>
        )
    }

}

export default Countries