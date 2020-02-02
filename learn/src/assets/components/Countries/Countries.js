import React from 'react'
import './Countries.scss'

import {_initCountries, loadMoreCountries} from './CountriesUtils'
import countryCard from '../../views/countryCard/countryCard'

class Countries extends React.Component {

    loadMoreCountries = () => {loadMoreCountries(this)}

    constructor() {
        super();

        this.state = {
            "allCountries": [],
            "visibleCountries": [],
            "countriesVisibleOnLoad": 6,
            "countryListError": false
        }

        _initCountries(this)
    }

    render() {
        return(
            <section className="countries">
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
                    (<button className="button button--primary button--load" onClick={this.loadMoreCountries}>Load All!</button>)
                    }
                </div>
            </section>
        )
    }

}

export default Countries