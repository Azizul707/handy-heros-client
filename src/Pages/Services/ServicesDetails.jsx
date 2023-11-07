import { useParams } from "react-router-dom";

const ServicesDetails = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
           This is service details 
        </div>
    );
};

export default ServicesDetails;