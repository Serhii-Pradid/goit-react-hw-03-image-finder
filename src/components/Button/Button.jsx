import './Button.css';

export const Button = ({onLoadMore}) => (
    <div className="BtnContainer">
    <button className="Button" onClick={onLoadMore}>Load more</button>
    
    </div>
)
