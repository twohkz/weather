import React from 'react' ;

const Weather = (props) => {
    
        return (
            <div className="info">
                
                {
                    props.tempreature && <p className="InfoKey">temperature : <span className="infoValue">{props.tempreature}</span></p>
                }
                {
                    props.city &&  <p className="InfoKey">city : <span className="infoValue">{props.city}</span></p>
                }
                {
                    props.country && <p className="InfoKey">Country : <span className="infoValue">{props.country}</span></p>
                }
               {
                   props.humidity && <p className="InfoKey">Humidity : <span className="infoValue">{props.humidity}</span></p>
               }
                {
                    props.pressure && <p className="InfoKey">Pressure : <span className="infoValue">{props.pressure}</span></p>
                }
                {
                    props.description && <p className="InfoKey">description : <span className="infoValue">{props.description}</span></p>
                }
                {
                     props.error && <p className="InfoKey"> <span className="infoValue"></span>{props.error}</p>
                }
                
                
            </div>
        )
    
}

export default Weather;