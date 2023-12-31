function ProfileCard({title,handle,imageSrc})
{
    return(
       <div className="card">
         <div className="card-image">
            <figure className="image is-1by1">
                 <img src={imageSrc} alt="Placeholder image"/>
            </figure>
            </div>
            <div className="card-content">
               <div className="media-content">
                 <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
                </div>
             </div>
   
        </div>
    );
}
export default ProfileCard;