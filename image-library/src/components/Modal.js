import React from 'react';
import './Modal.css';

const Modal = (props) => {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         selected: this.card,
    //         // showInfo: this.showInfo
    //         // showModal: this.showModal
    //     }
    // }
    const { selected } = props;

    // showInfo = (selected) => {
    //     console.log('SELECTED', selected.team_name)
    //     // document.getElementById('modal').classList.toggle('show-info');
    // }

    // details = this.props.selected.filter(detailed => {return this.detailed.id === selected.id})

    return(
        
        <div 
            id='modal' 
            className='show-info'
        >
            <h4>Team Name: {selected.team_name}</h4>
            <h4>Conference: {selected.conference}</h4>
            <h4>Division: {selected.division}</h4>
        </div>
    )
}

export default Modal;
