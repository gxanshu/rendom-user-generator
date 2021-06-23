import React from 'react';
import faker from 'faker';
import { PhoneRounded, HomeRounded, EmailRounded, LocationCityRounded, AccountBalanceRounded } from '@material-ui/icons';

var userDetail = {
    name: "",
    avator: "",
    phone: "",
    address: "",
    email: "",
    work: "",
    country: ""
}

const App = () => {
    const [textToDisplay, setTextToDisplay] = React.useState('Hello');

    const generateUser = () => {
        userDetail.name = faker.name.firstName();
        userDetail.avator = faker.image.avatar();
        userDetail.phone = faker.phone.phoneNumber()
        userDetail.address = faker.address.streetAddress();
        userDetail.email = faker.internet.email();
        userDetail.work = faker.address.streetAddress();
        userDetail.country = faker.address.country();
    }

    const fetchdata = async () => {
        await generateUser();
        setTextToDisplay(userDetail.name)
    }

    React.useEffect(() => {
        fetchdata();
    }, [])

    return (
        <>
            <div class="flex h-screen">
                <div className="m-auto bg-black rounded h-13 w-11/12 sm:h-3/5 sm:w-2/4 px-4 py-4">
                    <img src={userDetail.avator} alt="" className="mx-auto w-32 h-32 rounded-full" />
                    <h3 className="text-white text-center text-lg my-5">{textToDisplay}</h3>

                    <div className="my-10 mx-5 flex-row justify-between flex">
                        <div onClick={()=> setTextToDisplay(userDetail.phone)} className="cursor-pointer">
                            <PhoneRounded style={{ color: "white" }} />
                        </div>
                        <div onClick={()=> setTextToDisplay(userDetail.address)} className="cursor-pointer">
                            <HomeRounded style={{ color: "white" }} />
                        </div>
                        <div onClick={()=> setTextToDisplay(userDetail.email)} className="cursor-pointer">
                            <EmailRounded style={{ color: "white" }} />
                        </div>
                        <div onClick={()=> setTextToDisplay(userDetail.work)} className="cursor-pointer">
                            <LocationCityRounded style={{ color: "white" }} />
                        </div>
                        <div onClick={()=> setTextToDisplay(userDetail.country)} className="cursor-pointer">
                            <AccountBalanceRounded style={{ color: "white" }} />
                        </div>
                    </div>
                    <button className="text-white bg-blue-500 px-28 py-3 rounded sm:px-72" onClick={()=>{
                        fetchdata();
                    }}>regenrate</button>
                </div>
            </div>
        </>
    )
}

export default App;