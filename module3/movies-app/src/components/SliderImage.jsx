
export default function SliderImage({imageUrl,className}){
    // console.log(imageUrl,className);
    
    return <div className={className} style = {{backgroundImage: imageUrl}}>
    </div>

}