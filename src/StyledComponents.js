
import angryJournal from './Assets/AngryJournal.jpg'
import fineJournal from './Assets/FineJournal.jpg'
import anxiousJournal from './Assets/AnxiousJournal.jpg'
import sadJournal from './Assets/SadJournal.jpg'
import styled from "styled-components";

export const MoodButton = styled.button`
  border-radius: 100px;
  margin:1vh;
  width: 15vh;
  height: 15vh;
  font-size: 1.5rem;
  color: #121316;
  border: .5px solid #121316;
  background-color: ${props => {
    if (props.mood === 'fine') {
      return `rgb(157, 211, 156, .25);`
    } else if (props.mood === 'anxious') {
      return `rgb(180, 154, 49, .25);`
    } else if (props.mood === 'sad') {
      return `rgb(132, 173, 189, .25);`
    } else {
      return `rgb(100, 27, 65, .25);`
    }
  } };
  &:focus {
    background-color: ${props => {
      if (props.mood === 'fine') {
        return `rgb(157, 211, 156);`
      } else if (props.mood === 'anxious') {
        return `rgb(180, 154, 49);`
      } else if (props.mood === 'sad') {
        return `rgb(132, 173, 189);`
      } else {
        return `rgb(100, 27, 65);
                color: #f3f5f6;`
      }
    } }
  }
`;

export const MusicButton = styled.button`
  border-radius: 100px;
  margin:1vh;
  width: 5vh;
  height: 5vh;
  border: .5px solid #121316;
  background-color: hsla(200, 14%, 96%, .7);
  &:focus {
    background-color: hsla(190, 14%, 74% ,.7);
  }
`;

export const FormWrap = styled.section`
  height: 65vh;
  width: 100vw;
  background: fixed;
  background-size: cover;
  background-position: center;
  padding-top: 5%;
  overflow: scroll;
  background-image: ${props => {
    if(props.mood === 'Sad') {
      return `url(${sadJournal})`
    } else if(props.mood === 'Angry') {
      return `url(${angryJournal})`
    } else if(props.mood === 'Anxious') {
      return `url(${anxiousJournal})`
    } else {
      return `url(${fineJournal})`
    }
  } };
  .formLabel {
    font-size: 1.75rem;
    color: ${props => {
      if(props.mood === 'Angry') {
        return `#f3f5f6;`
      } else {
        return `#121316;`
      }
    }};
    background-color: ${props => {
      if (props.mood === 'Angry') {
        return `#121316;`
      } else {
        return `#f3f5f6`
      }
    }}
  }
`;

export const RefCard = styled.section`
  height: 27vh;
  width: 27.95vw;
  margin: 1.5vw;
  overflow: scroll;
  border: dotted 2px #121316;
  padding: 1%;
  background: ${props => {
    if (props.mood === 'Angry') {
      return `rgb(100, 27, 65, .25);`
    } else if (props.mood === 'Anxious') {
      return `rgb(180, 154, 49, .25);`
    } else if (props.mood === 'Sad') {
      return `rgb(132, 173, 189, .25);`
    } else {
      return `rgb(157, 211, 156, .25);`
    }
  }}
`;

export const RefPrompt = styled.h2`
  font-size: 2.5rem;
  -webkit-text-stroke: #121316 1.25px;
  margin: 0px 0px 0px 7px;
  color: ${props => {
    if(props.mood === 'Angry') {
      return `#641841;`
    } else if(props.mood === 'Anxious') {
      return `#B49A31;`
    } else if(props.mood === 'Sad') {
      return `#84ADBD;`
    } else {
      return `#9DD39C;`
    }
  }}
`;
