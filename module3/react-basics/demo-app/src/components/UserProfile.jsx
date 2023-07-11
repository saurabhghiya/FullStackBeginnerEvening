export default function UserProfile(props){
    console.log(props)
    let {name,age,occupation} = props;

    return(
        <div>
            <h3>Name: {name}, Age: {age}, Occupation: {occupation}</h3>
        </div>
    );
}