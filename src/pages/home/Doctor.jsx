import service1 from "../../assets/images/service1.webp"
import service2 from "../../assets/images/service2.webp"
import service3 from "../../assets/images/service3.webp"

const doctors = [
    {
        image: service1,
        name: "Glaucoma",
        department: "descripción"
    },
    {
        image: service2,
        name: "Síndrome del ojo seco",
        department: "Descripción"
    },
    {
        image: service3,
        name: "Catarata",
        department: "Descripción"
    },
]

const Doctor = () => {
    return (
        <>
            {doctors.map((doctor, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-3 cursor-pointer transition-transform duration-300 ease-out hover:scale-110"
                >
                    <div className="w-[310px] h-[348px] overflow-hidden rounded-lg">
                        <img
                            src={doctor.image}
                            alt="doctor-image"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="text-start">
                        <h6 className="text-lg font-medium">{doctor.name}</h6>
                        <p className="text-sm text-gray-500">{doctor.department}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Doctor;
