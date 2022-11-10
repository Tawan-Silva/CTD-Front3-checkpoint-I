import './card.scss';

export function Card (props) {
  const color = props.corData.corHexadecimal;
  return (
    <div className="card-container" style={{
      backgroundColor: `${color}`,
      color: "white",
      padding: '10px',
      borderRadius: '5px'
    }}>
            <div className="card-body">
                <h1>Cor: {props.corData.nomeCor}</h1>
                <span>Código da cor: {props.corData.corHexadecimal}</span>
            </div>
      </div>
  )
}