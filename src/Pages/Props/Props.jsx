
import PropsComp from './PropsComp';

const Props = () => {

    const contactInfo = {
        name : 'Jishan',
        age : '23'
    }
    console.log(contactInfo);
    return (
        <div>
           <p>this is user Contract info</p>
           <PropsComp contact={contactInfo}/>
        </div>
    );
};

export default Props;