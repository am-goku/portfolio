type formData = {
  name: string | null;
  email: string | null;
  phone: string | null;
  content: string | null;
};

type Flag = {
    status: Boolean;
    message: String;
}


const isValidPhoneNumber = (phoneNumber: string):Boolean => {
  const phoneRegex = /^(\+\d{1,2}\s?)?(\d{3}[-\.\s]?)?\d{3}[-\.\s]?\d{4}$/;
  return phoneRegex.test(phoneNumber);
}

const isValidEmail = (email:string):Boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


export const validate = async (data:formData) => {
    return new Promise<any>((resolve, reject) => {
        let flag: Flag = {
          status: true,
          message: "",
        };

        if (!data?.name) {
          flag.status = false;
          flag.message = "Please enter your name.";
        } else if (!data?.email || !isValidEmail(data?.email)) {
          flag.status = false;
          flag.message = "Please enter a valid email.";
        } else if (!data.content) {
          flag.status = false;
          flag.message = "Please write a content.";
        } else if (data?.phone && !isValidPhoneNumber(data?.phone)) {
          flag.status = false;
          flag.message = "Invalid Phone number.";
        }

        if(flag.status){
            resolve(flag)
        } else {
            reject(flag)
        }
    })
}
