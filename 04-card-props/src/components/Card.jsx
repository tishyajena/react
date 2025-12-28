import {ArrowRight} from 'lucide-react';

const Card = (props) => {
  return (
    <div className='parent'>
          <div className='main' style = {{backgroundColor: props.bg}}>
            <h1>{props.title}</h1>
            <p id = "des">{props.des}</p>
            <div className='extras'>
              <div className='extra'style = {{backgroundColor: props.tc}} ><p>{props.tag[0]}</p></div>
              <div className='extra' style = {{backgroundColor: props.tc}}><p>{props.tag[1]}</p></div>
              <div className='extra'style = {{backgroundColor: props.tc}}><p>{props.tag[2]}</p></div>
            </div>
          </div>
        
        <div className='bottom'>
            <h3>Explore</h3>
            <button style = {{backgroundColor: props.bg}}><ArrowRight /></button>
        </div>
    </div>
  )
}

export default Card