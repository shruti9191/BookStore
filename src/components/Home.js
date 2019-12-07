import React, { Component } from 'react';
import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {

        const listItems = forecasts.map((forecast) =>
            <tr class="image-container" key={forecast.volumeInfo.title}>
                <td class="row image-row"><img src="{forecast.volumeInfo.imageLinks.thumbnail}"></img></td>
                <td class="row">{forecast.volumeInfo.title}</td>
                <td>
                    <button onClick={this.openPopupbox(forecast)}>Click me</button>
                    <PopupboxContainer />
                </td>
            </tr>
        );

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <tbody>
                    {listItems}
                </tbody>
            </table>
        );
    }

    openPopupbox(i) {
        const content = (
            <div>
                <tr class="image-container" key={i.volumeInfo.title}>
                    <td class="row image-row"><img src="{i.volumeInfo.imageLinks.thumbnail}"></img></td>
                    <td class="row">{i.volumeInfo.title}</td>
                </tr>
            </div>
        )
        PopupboxManager.open({ content })
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderForecastsTable(this.state.forecasts.items);

        return (
            <div>
                <h1 id="tabelLabel" >Books</h1>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
