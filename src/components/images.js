import React, { Component } from 'react';
import axios from 'axios';
import Image from './image';
import Active from './Active';


export class Images extends Component {
    constructor(props){
        super(props);
        this.state = {
        value: '',
        list:[],
        first:{},
        count: 30,
        start:1,
        check:false,
        show: 'none'
        
        };
 
       this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }
    
   
    handleChange(event){
        this.setState({
           value: event.target.value,
           check:false,
           show:'none'
        });
      

    }

    handleSubmit(event){
        var accesskey = '4b0eb86ed9485a0663c534df24451527401f7057f46da87129e108cfab190dbb';
        axios
        .get(`https://api.unsplash.com/search/photos/?client_id=${accesskey}&query=${this.state.value}&count=${this.state.count}&start=${this.state.start}`)
        .then(res =>{
        this.setState({list: res.data.results,check:true,show:'block'});
       
        }).catch(function(error){
            console.log(error);
        });
   
  
        this.setState({value: '',});       
        event.preventDefault();

    }



    
    render() {

       
     

        return (
            <div>

                <form onSubmit = {this.handleSubmit}>
                    <input className = "form-control align-middle my-4" arial-label = "small" type = "text" value = {this.state.value} onChange = {this.handleChange}/>
                    <input className = "btn rounded-0 btn-lg btn-block btn-outline-primary " type = "submit" value = "search"/> <br/>
               </form>
 
               <div className = "bd-example">
                <div id = "carouselCaptions" className="carousel slide" data-ride="carousel" style = {{display: this.state.show}}>
              
                    <div className = "carousel-inner ">

                        {this.state.check?<Active image ={this.state.list}/>:null}
                        {this.state.check?<Image image = {this.state.list}/>:null} 
                        
                    </div>
                    <a className = "carousel-control-prev" href = "#carouselCaptions" role = "button" data-slide = "prev">
                        <span className = "carousel-control-prev-icon" aria-hidden = "true"></span>
                        <span className = "sr-only">Previous</span>
                    </a>
                    <a className  = "carousel-control-next" href = "#carouselCaptions" role = "button" data-slide = "next">
                        <span className = "carousel-control-next-icon" aria-hidden = "true"></span>
                        <span className = "sr-only">Next</span>
                    </a>

                </div>
                
               </div>
              
             

              
            </div>
        );
    }
}

export default Images;