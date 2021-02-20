import React, { Component } from 'react'

export default class Glasses extends Component {

    state = {
        model: {
            id: 1,
            price: 30,
            name: 'GUCCI G8850U',
            url: './img/glassesImage/v1.png',
            desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        }
    };

    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];

    renderGlassesModel = (setModel) => {

        this.setState({
            model:setModel,
        })

    }

    renderGlasses = () => {

        let style_renderGlasses = {
            cursor: 'pointer',
            width: '195px',
            height: '70px',
            border: '2px',
            margin: '10px'
        }

        return this.arrProduct.map((product, index) => {

            return <div key={index} style={{ display: 'inline' }}>
                <img onClick={() => this.renderGlassesModel(product)}
                    src={product.url} alt="" 
                    style={style_renderGlasses} />;
            </div>

        })

    }

    render() {


        let style_arrayGlasses = {

            backgroundColor: 'black',
            width: '1200px',
            height: '180px',
            marginTop: '20px',
        }

        let style_model = {
            backgroundColor:'orange',
            opacity:'0.4',
            width:'300px',
            position: 'absolute',
            top: '240px',
            left: '524px',
            height: '101px',
        }
        let style_glasses = {
            position: 'absolute',
            top: "-149px",
            left: "77px",
            width: '149px',
            height: '50px',
        }
         
        return (
            <div>
                <div style={{position:'relative'}}>
                        <img src='./img/glassesImage/model.jpg' width='300px' height='342px' alt="hinhanh"/>
                        <div style={style_model}>
                            <img src={this.state.model.url} style={style_glasses} alt="hinhanh"/>
                            <p style={{color:'blue',fontWeight:'bolder',marginLeft:'10px',textAlign:'left'}}>{this.state.model.name}</p>
                            <p style={{color:'white',fontSize:'13px',textAlign:'left',marginLeft:'10px'}} >{this.state.model.desc}</p>
                        </div>
                </div>

                <div className='container' style={style_arrayGlasses}>
                    {this.renderGlasses()}
                </div>
            </div>
        )
    }
}
