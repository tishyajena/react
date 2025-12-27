function Card(props){
    return(
        <div className='card'>
            <img src = {props.img} alt = ''/>
            <h1>{props.user}, {props.age}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate accusamus distinctio reprehenderit deserunt iste aliquam voluptatem omnis pariatur voluptatibus possimus optio inventore, veritatis vel esse dolorum sed voluptates odio quaerat?</p>
            <button>click me!</button>
        </div>
    )
}

export default Card