


const GifItem = ({title, url, id}) => {

    // console.log({title, url, id});    
    // console.log("Este es el titulo: ", title);
    // console.log("Esta es la url: ", url);
    
  return (
    <div className="card">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

export default GifItem;