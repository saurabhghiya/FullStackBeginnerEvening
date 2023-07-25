export default function Banner(){
    const imageLink = 'https://images.hdqwalls.com/wallpapers/john-wick-chapter-4-imax-32.jpg';

    return <div className="banner w-full h-[80vh] bg-cover bg-no-repeat bg-top bg-origin-content flex items-end" 
    style = {{backgroundImage: `url(${imageLink})`}}>
        <div className="bannertext w-full text-neutral-100 bg-black/50 text-3xl py-[2%] text-center">
            John Wick
        </div>
    </div>;
}